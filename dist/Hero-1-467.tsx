import { useActiveBreakpoint, defineProperties } from "figma:react";
import { useEffect, useRef, useState } from "react";

// Type definition for Vimeo Player SDK
declare global {
  interface Window {
    Vimeo?: {
      Player: any;
    };
  }
}

function VimeoPlayer({ videoId = "1099194396", isVisible = false }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  
  // Constant URL that doesn't change with visibility
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?h=aee5fd8faa&background=1&loop=1&muted=1&transparent=0&playsinline=1&controls=0&title=0&byline=0&portrait=0`;
  
  // Load Vimeo Player SDK
  useEffect(() => {
    if (!window.Vimeo && !sdkLoaded) {
      setSdkLoaded(true);
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      script.onload = () => {
        setSdkLoaded(true);
      };
      document.body.appendChild(script);
    } else if (window.Vimeo) {
      setSdkLoaded(true);
    }
  }, []);
  
  // Initialize Vimeo player when SDK is loaded and iframe is available
  useEffect(() => {
    if (sdkLoaded && window.Vimeo && iframeRef.current && !playerRef.current) {
      const player = new window.Vimeo.Player(iframeRef.current);
      
      player.ready().then(() => {
        setPlayerReady(true);
        
        // Configure player for background video
        player.setVolume(0);
        player.setLoop(true);
        
        // Preload the video
        player.setAutopause(false);
        
        // Handle visibility changes
        if (isVisible) {
          player.play().catch(() => {
            // Handle autoplay restrictions gracefully
            console.log("Autoplay prevented by browser");
          });
        }
      });
      
      playerRef.current = player;
    }
  }, [sdkLoaded, videoId]);
  
  // Control video playback based on visibility
  useEffect(() => {
    const player = playerRef.current;
    if (player && playerReady) {
      if (isVisible) {
        player.play().catch(error => {
          console.log("Play error:", error);
        });
      } else {
        player.pause().catch(error => {
          console.log("Pause error:", error);
        });
      }
    }
  }, [isVisible, playerReady]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full overflow-hidden bg-black"
    >
      <iframe 
        ref={iframeRef}
        title="vimeo-player" 
        src={vimeoUrl}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        style={{ backgroundColor: 'black', transform: 'scale(1.25)', transformOrigin: 'center center' }}
      />
    </div>
  );
}

function HeroContent() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    if (!videoContainer) return;
    
    // Set up intersection observer to detect when video is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
          } else {
            setIsVideoVisible(false);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );
    
    observer.observe(videoContainer);
    
    return () => {
      if (videoContainer) {
        observer.unobserve(videoContainer);
      }
    };
  }, []);
  
  return (
    <div
      ref={videoContainerRef}
      className="relative w-full h-full bg-black"
    >
      <VimeoPlayer isVisible={isVideoVisible} />
    </div>
  );
}

function HeroDesktop() {
  return (
    <div
      aria-label="Video Section"
      className="size-full flex items-center justify-center bg-black"
      data-name="Hero"
    >
      <HeroContent />
    </div>
  );
}

function HeroTablet() {
  return (
    <div
      aria-label="Video Section"
      className="size-full flex items-center justify-center bg-black"
      data-name="Hero"
    >
      <HeroContent />
    </div>
  );
}

function HeroMobile() {
  return (
    <div
      aria-label="Video Section"
      className="size-full flex items-center justify-center bg-black"
      data-name="Hero"
    >
      <HeroContent />
    </div>
  );
}

function Hero({ videoId = "1099194396" }) {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <HeroMobile />;
  }
  if (width < 1280) {
    return <HeroTablet />;
  }
  return <HeroDesktop />;
}

defineProperties(Hero, {
  videoId: {
    label: "Vimeo Video ID",
    type: "string",
    defaultValue: "1099194396"
  }
});

export default Hero;