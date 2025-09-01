import { useEffect, useRef, useState } from "react";
import { useActiveBreakpoint, defineProperties } from "figma:react";

// Dynamic script loader for Vimeo SDK
const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = (error) => reject(error);
    document.body.appendChild(script);
  });
};

function VideoPlayer({ vimeoId = "1099195684", playerColor = "000000" }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  
  // Create iframe once and keep it persistent
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create iframe if it doesn't exist yet
    if (!iframeRef.current) {
      const iframe = document.createElement("iframe");
      iframe.src = `https://player.vimeo.com/video/${vimeoId}?background=1&autopause=0&loop=1&color=${playerColor}&h=3075367315&dnt=1&quality=auto`;
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.frameBorder = "0";
      iframe.allow = "autoplay; fullscreen";
      iframe.style.position = "absolute";
      iframe.style.top = "0";
      iframe.style.left = "0";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      
      // Store iframe reference
      iframeRef.current = iframe;
      
      // Append iframe to container
      containerRef.current.appendChild(iframe);
    }
    
    return () => {
      // Don't remove the iframe on cleanup to keep it persistent
    };
  }, [vimeoId, playerColor]);
  
  // Setup intersection observer
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create Intersection Observer to detect when video is in viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the video is visible
        rootMargin: "100px", // Start loading a bit before it comes into view
      }
    );
    
    observerRef.current.observe(containerRef.current);
    
    // Cleanup observer
    return () => {
      if (observerRef.current && containerRef.current) {
        observerRef.current.unobserve(containerRef.current);
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  // Load Vimeo SDK and initialize player
  useEffect(() => {
    const initPlayer = async () => {
      if (!iframeRef.current) return;
      
      try {
        // Load Vimeo SDK
        await loadScript("https://player.vimeo.com/api/player.js");
        
        if (window.Vimeo && iframeRef.current && !playerRef.current) {
          playerRef.current = new window.Vimeo.Player(iframeRef.current);
          
          // Set up player event listeners
          playerRef.current.ready().then(() => {
            setIsPlayerReady(true);
            
            // Configure player
            playerRef.current.setVolume(0); // Mute by default
            
            // Play if already visible
            if (isVisible) {
              playerRef.current.play().catch(err => console.error("Failed to play:", err));
            }
          });
        }
      } catch (error) {
        console.error("Failed to initialize Vimeo player:", error);
      }
    };
    
    initPlayer();
    
    return () => {
      if (playerRef.current) {
        // Just disconnect events, don't destroy the player to keep it persistent
        playerRef.current.off('play');
        playerRef.current.off('pause');
        playerRef.current.off('loaded');
        playerRef.current.off('ended');
      }
    };
  }, []);
  
  // Control video playback based on visibility
  useEffect(() => {
    if (!isPlayerReady || !playerRef.current) return;
    
    if (isVisible) {
      playerRef.current.play().catch(err => console.error("Failed to play:", err));
    } else {
      playerRef.current.pause().catch(err => console.error("Failed to pause:", err));
    }
  }, [isVisible, isPlayerReady]);
  
  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative bg-black"
      style={{ paddingTop: "56.25%" }} // 16:9 aspect ratio
      data-testid="vimeo-player-container"
    />
  );
}

function VideoPlayerDesktop() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative size-full"
      data-name="Video"
    >
      <div
        className="relative h-[761px] shrink-0 w-full overflow-hidden bg-black"
        data-name="VideoContainer"
      >
        <VideoPlayer />
      </div>
    </div>
  );
}

function VideoPlayerTablet() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[6.216px] items-start justify-start p-0 relative size-full"
      data-name="Video"
    >
      <div
        className="relative h-[547px] shrink-0 w-full overflow-hidden bg-black"
        data-name="VideoContainer"
      >
        <VideoPlayer />
      </div>
    </div>
  );
}

function VideoPlayerMobile() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative size-full"
      data-name="Video"
    >
      <div
        className="relative h-[761px] shrink-0 w-full overflow-hidden bg-black"
        data-name="VideoContainer"
      >
        <VideoPlayer />
      </div>
    </div>
  );
}

function VimeoPlayer({ vimeoId = "1099195684", playerColor = "000000" }) {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <VideoPlayerMobile vimeoId={vimeoId} playerColor={playerColor} />;
  }
  if (width < 1280) {
    return <VideoPlayerTablet vimeoId={vimeoId} playerColor={playerColor} />;
  }
  return <VideoPlayerDesktop vimeoId={vimeoId} playerColor={playerColor} />;
}

export default VimeoPlayer;

// Define properties for customization
defineProperties(VimeoPlayer, {
  vimeoId: {
    label: "Vimeo ID",
    type: "string",
    defaultValue: "1099195684"
  },
  playerColor: {
    label: "Player Color (hex without #)",
    type: "string",
    defaultValue: "000000"
  }
});