import { useEffect, useRef, useState } from "react";
import { defineProperties } from "figma:react";

export default function VimeoPlayer({ aspectRatio = "16:9", threshold = 0.3 }) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const sdkLoadedRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Calculate padding based on aspect ratio
  const getPaddingValue = () => {
    if (aspectRatio === "16:9") return "56.25%"; // 9/16 * 100%
    if (aspectRatio === "4:3") return "75%"; // 3/4 * 100%
    if (aspectRatio === "1:1") return "100%";
    return "56.25%"; // Default to 16:9
  };

  // Load Vimeo Player SDK once
  useEffect(() => {
    if (window.Vimeo) {
      sdkLoadedRef.current = true;
      initializePlayer();
      return;
    }

    if (!sdkLoadedRef.current) {
      sdkLoadedRef.current = true;
      
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      script.onload = () => {
        initializePlayer();
      };
      document.body.appendChild(script);
    }
  }, []);

  // Initialize player when iframe and SDK are ready
  const initializePlayer = () => {
    if (!iframeRef.current || !window.Vimeo) return;
    
    const vimeoPlayer = new window.Vimeo.Player(iframeRef.current);
    setPlayer(vimeoPlayer);

    // Configure player
    vimeoPlayer.setVolume(0);
    vimeoPlayer.setLoop(true);
    
    // Preload the video
    vimeoPlayer.ready().then(() => {
      // Initial play/pause based on visibility
      if (isVisible) {
        vimeoPlayer.play().catch(error => {
          console.error("Error playing the video:", error);
        });
      }
    });
    
    // Ensure video loops
    vimeoPlayer.on('ended', function() {
      vimeoPlayer.play();
    });
  };

  // Set up Intersection Observer
  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer with updated threshold
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: Number(threshold) }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold]);

  // Control video playback based on visibility
  useEffect(() => {
    if (!player) return;
    
    if (isVisible) {
      player.play().catch(error => {
        console.error("Error playing the video:", error);
      });
    } else {
      player.pause().catch(error => {
        console.error("Error pausing the video:", error);
      });
    }
  }, [isVisible, player]);

  return (
    <div className="w-full bg-black relative">
      {/* Observed container keeps the required aspect-ratio and holds the iframe */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video bg-black"
      >
        {/* Persistent iframe fills the container perfectly */}
        <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full"
          src="https://player.vimeo.com/video/1099189803?badge=0&autopause=0&player_id=0&app_id=58479&background=1&controls=0&title=0&byline=0&portrait=0&sidedock=0&dnt=1&muted=1"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          style={{ border: "none", backgroundColor: "#000000" }}
          frameBorder="0"
          title="Gold App"
          loading="eager"
        />
      </div>
      {/* Black background fallback to prevent any potential white flash */}
      <div className="absolute inset-0 bg-black -z-10" />
    </div>
  );
}

// Define component properties
defineProperties(VimeoPlayer, {
  aspectRatio: {
    type: "string",
    control: "select",
    options: [
      { value: "16:9", label: "16:9 (Widescreen)" },
      { value: "4:3", label: "4:3 (Standard)" },
      { value: "1:1", label: "1:1 (Square)" }
    ],
    label: "Aspect Ratio",
    defaultValue: "16:9"
  },
  threshold: {
    label: "Visibility threshold",
    type: "number",
    control: "slider",
    min: 0.1,
    max: 1.0,
    step: 0.1,
    defaultValue: 0.3
  }
});