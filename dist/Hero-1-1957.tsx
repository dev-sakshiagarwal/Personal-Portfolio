import { useActiveBreakpoint } from "figma:react";
import { useEffect, useRef, useState } from "react";
import { defineProperties } from "figma:react";

// Global state to track if the Vimeo SDK script has been loaded
let isVimeoScriptLoaded = false;
let vimeoScriptPromise: Promise<boolean> | null = null;

function loadVimeoScript(): Promise<boolean> {
  // Return existing promise if script is already being loaded
  if (vimeoScriptPromise) return vimeoScriptPromise;

  // Return true immediately if script is already loaded
  if (isVimeoScriptLoaded) return Promise.resolve(true);

  // Create a new promise to load the script
  vimeoScriptPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    script.onload = () => {
      isVimeoScriptLoaded = true;
      resolve(true);
    };
    document.body.appendChild(script);
  });

  return vimeoScriptPromise;
}

function VimeoVideoPlayer({ autoplay = true, loop = true }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  // Additional parameters to hide controls and enable autoplay
  const videoParams = new URLSearchParams({
    badge: "0",
    autopause: "0",
    player_id: "0",
    app_id: "58479",
    autoplay: "0", // Start with autoplay off, we'll control it via the API
    loop: loop ? "1" : "0",
    background: "1", // Hides player controls
    title: "0",
    byline: "0",
    portrait: "0",
    controls: "0",
    dnt: "1",
    muted: "1" // Initially muted to help with autoplay policies
  }).toString();
  
  const videoUrl = `https://player.vimeo.com/video/1099191151?${videoParams}`;

  // Create the iframe only once
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create iframe if it doesn't exist
    if (!iframeRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = videoUrl;
      // Center the iframe and ensure it always covers its parent while keeping its aspect ratio
      iframe.setAttribute('class', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto');
      iframe.style.border = 'none';
      iframe.style.backgroundColor = '#000000';
      iframe.style.border = 'none';
      iframe.style.backgroundColor = '#000000';
      iframe.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share';
      iframe.title = 'Style Horizontal_2';
      
      // Append iframe to container
      containerRef.current.appendChild(iframe);
      iframeRef.current = iframe;
    }

    // Initialize Vimeo player
    loadVimeoScript().then(() => {
      if (iframeRef.current && window.Vimeo) {
        if (!playerRef.current) {
          playerRef.current = new window.Vimeo.Player(iframeRef.current);
          
          playerRef.current.ready().then(() => {
            setIsPlayerReady(true);
          }).catch((error: any) => {
            console.error("Vimeo player ready error:", error);
          });
        }
      }
    });
    
    return () => {
      // Clean up player on unmount
      if (playerRef.current) {
        playerRef.current.destroy().catch(() => {
          // Ignore errors during cleanup
        });
        playerRef.current = null;
      }
    };
  }, [videoUrl]);

  // Handle intersection observer
  useEffect(() => {
    if (!containerRef.current || !isPlayerReady) return;

    // Cleanup previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (playerRef.current && autoplay) {
              playerRef.current.play().catch((error: any) => {
                console.warn("Vimeo autoplay failed:", error);
                // Try playing muted if autoplay fails
                playerRef.current.setVolume(0).then(() => {
                  return playerRef.current.play();
                }).catch(() => {
                  // If all else fails, just show the first frame
                });
              });
            }
          } else {
            if (playerRef.current) {
              playerRef.current.pause().catch(() => {
                // Ignore pause errors
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [autoplay, isPlayerReady]);

  // Effect to handle loop behavior
  useEffect(() => {
    if (!playerRef.current || !isPlayerReady) return;
    
    playerRef.current.setLoop(loop).catch(() => {
      // Ignore errors
    });
  }, [loop, isPlayerReady]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full bg-black overflow-hidden relative"
      style={{ 
        backgroundColor: "#000000" // Ensure black background even before iframe loads
      }}
    />
  );
}

function HeroDesktop({ autoplay, loop }) {
  return (
    <div
      aria-label="Video background"
      className="relative w-full h-full overflow-hidden bg-black"
      data-name="Hero"
    >
      <VimeoVideoPlayer autoplay={autoplay} loop={loop} />
    </div>
  );
}

function HeroTablet({ autoplay, loop }) {
  return (
    <div
      aria-label="Video background"
      className="relative w-full h-full overflow-hidden bg-black"
      data-name="Hero"
    >
      <VimeoVideoPlayer autoplay={autoplay} loop={loop} />
    </div>
  );
}

function HeroMobile({ autoplay, loop }) {
  return (
    <div
      aria-label="Video background"
      className="relative w-full h-full overflow-hidden bg-black"
      data-name="Hero"
    >
      <VimeoVideoPlayer autoplay={autoplay} loop={loop} />
    </div>
  );
}

function Hero({ autoplay = true, loop = true }) {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <HeroMobile autoplay={autoplay} loop={loop} />;
  }
  if (width < 1280) {
    return <HeroTablet autoplay={autoplay} loop={loop} />;
  }
  return <HeroDesktop autoplay={autoplay} loop={loop} />;
}

defineProperties(Hero, {
  autoplay: {
    label: "Autoplay",
    type: "boolean",
    defaultValue: true
  },
  loop: {
    label: "Loop",
    type: "boolean",
    defaultValue: true
  }
});

export default Hero;

// Add TypeScript type definition for Vimeo
declare global {
  interface Window {
    Vimeo?: {
      Player: new (element: HTMLIFrameElement | string, options?: any) => any;
    };
  }
}