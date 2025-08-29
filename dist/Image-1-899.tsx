import { useEffect, useRef, useState } from "react";
import { defineProperties } from "figma:react";

// Type definition for Vimeo Player SDK
interface VimeoPlayer {
  play: () => Promise<void>;
  pause: () => Promise<void>;
  setVolume: (volume: number) => Promise<void>;
  setLoop: (loop: boolean) => Promise<void>;
  ready: () => Promise<void>;
}

interface VimeoPlayerSDK {
  Player: new (element: HTMLIFrameElement, options: any) => VimeoPlayer;
}

declare global {
  interface Window {
    Vimeo?: VimeoPlayerSDK;
  }
}

export default function VimeoPlayer({ videoId = "1099194420" }) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerInstanceRef = useRef<VimeoPlayer | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  // Load Vimeo Player SDK
  useEffect(() => {
    const loadVimeoSDK = () => {
      return new Promise<void>((resolve) => {
        if (window.Vimeo) {
          setSdkLoaded(true);
          return resolve();
        }

        const script = document.createElement("script");
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        script.onload = () => {
          setSdkLoaded(true);
          resolve();
        };
        document.body.appendChild(script);
      });
    };

    loadVimeoSDK();

    return () => {
      // Clean up player instance if component unmounts
      if (playerInstanceRef.current) {
        playerInstanceRef.current = null;
      }
    };
  }, []);

  // Initialize Vimeo player instance
  useEffect(() => {
    if (!sdkLoaded || !iframeRef.current || !window.Vimeo) return;

    const initPlayer = async () => {
      // Create player instance
      const player = new window.Vimeo.Player(iframeRef.current, {
        id: videoId,
        background: true,
        muted: true,
        loop: true,
        controls: false,
        portrait: false,
        title: false,
        byline: false,
        autoplay: false, // We'll handle playback based on visibility
      });

      // Store player instance in ref
      playerInstanceRef.current = player;

      // Initialize player
      await player.ready();
      await player.setVolume(0); // Ensure it's muted
      await player.setLoop(true); // Ensure it loops

      // If already in view when initialized, start playing
      if (isInView) {
        player.play().catch((err) => console.error("Error playing video:", err));
      }
    };

    initPlayer().catch((err) => console.error("Error initializing Vimeo player:", err));

    return () => {
      // No need to clean up the player here as we want it to persist
    };
  }, [sdkLoaded, videoId]);

  // Set up intersection observer to detect when video is in view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Control video playback based on visibility
  useEffect(() => {
    if (!playerInstanceRef.current) return;

    if (isInView) {
      playerInstanceRef.current.play().catch((err) => {
        console.error("Error playing video:", err);
      });
    } else {
      playerInstanceRef.current.pause().catch((err) => {
        console.error("Error pausing video:", err);
      });
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-full bg-black"
      data-name="Vimeo Player"
      style={{ backgroundColor: "#000" }} // Ensure black background even before CSS loads
    >
      <div 
        className="w-full h-full relative overflow-hidden"
        style={{ backgroundColor: "#000" }} // Additional backup for black background
      >
        {/* Black overlay that's shown until the iframe loads */}
        <div 
          className="absolute inset-0 bg-black z-0"
          aria-hidden="true"
        />
        
        {/* Iframe with proper styling to prevent white flash */}
        <iframe
          ref={iframeRef}
          title="vimeo-player"
          src={`https://player.vimeo.com/video/${videoId}?h=8466fecebe&background=1&loop=1&autopause=0&transparent=0&dnt=1`}
          className="absolute inset-0 w-full h-full object-cover z-10"
          style={{ 
            backgroundColor: "#000",
            border: "none"
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="eager" // Changed from lazy to eager for faster loading
        />
      </div>
    </div>
  );
}

defineProperties(VimeoPlayer, {
  videoId: {
    label: "Video ID",
    type: "string",
    defaultValue: "1099194420"
  }
});