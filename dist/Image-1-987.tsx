import { useEffect, useRef, useState } from "react";
// We will lazily load the Vimeo Player SDK only once and reuse it

export default function Video() {
  const videoRef = useRef<HTMLIFrameElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null); // Vimeo Player instance
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // When 30% of the video is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Load Vimeo SDK and initialise player only once
  useEffect(() => {
    if (!videoRef.current) return;
    if (playerRef.current) return; // already initialised

    const initPlayer = () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Player = (window as any).Vimeo?.Player as any;
      if (Player && videoRef.current) {
        playerRef.current = new Player(videoRef.current, {
          autopause: false,
          muted: true,
          loop: true,
        });
      }
    };

    // If SDK already on window, init immediately
    if ((window as any).Vimeo?.Player) {
      initPlayer();
    } else {
      const scriptTagId = "vimeo-player-api";
      if (!document.getElementById(scriptTagId)) {
        const tag = document.createElement("script");
        tag.id = scriptTagId;
        tag.src = "https://player.vimeo.com/api/player.js";
        tag.onload = initPlayer;
        document.body.appendChild(tag);
      } else {
        // If script exists but not loaded yet, attach onload
        document.getElementById(scriptTagId)!.addEventListener("load", initPlayer);
      }
    }
  }, []);

  // Play/pause based on visibility using the player API
  useEffect(() => {
    if (!playerRef.current) return;

    if (isVisible) {
      playerRef.current.play()?.catch(() => {});
    } else {
      playerRef.current.pause()?.catch(() => {});
    }
  }, [isVisible]);

  // Construct video URL with parameters to hide controls and enable loop. We skip autoplay because we'll control it programmatically.
  const videoUrl = "https://player.vimeo.com/video/1099194420?h=8466fecebe&background=1&autoplay=0&loop=1&muted=1&controls=0&sidedock=0&title=0&byline=0&portrait=0";

  return (
    <div
      ref={containerRef}
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative w-full h-full bg-black"
      data-name="Video"
    >
      {/* Make the video fully cover the frame without letter-boxing */}
      <div className="relative w-full h-full overflow-hidden">
        <iframe
          ref={videoRef}
          title="vimeo-player"
          src={videoUrl}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-[1.15] bg-black"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}