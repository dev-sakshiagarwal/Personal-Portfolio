import { useEffect, useRef, useState } from "react";
import { useActiveBreakpoint } from "figma:react";
import { defineProperties } from "figma:react";

function VideoPlayer({ videoId = "1099195711" }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Set up Intersection Observer to detect when video is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the video is visible
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

  // Control playback using Vimeo Player SDK to avoid iframe reload white flash
  useEffect(() => {
    if (!iframeRef.current) return;

    // Dynamically import to avoid SSR issues if any
    import("@vimeo/player").then(({ default: Player }) => {
      const player = new Player(iframeRef.current as HTMLIFrameElement);

      if (isInView) {
        player.play().catch(() => {});
      } else {
        player.pause().catch(() => {});
      }
    });
  }, [isInView]);

  // Vimeo parameters:
  // background=1: Hides all player UI elements and chrome
  // loop=1: Enables looping
  // muted=1: Mutes the video (required for autoplay in most browsers)
  // controls=0: Hides player controls
  // autopause=0: Prevents pausing when another video plays
  // playsinline=1: Prevents full-screen on mobile
  // h=c2bcc922b6: Preserves the hash from the original URL
  const vimeoSrc = `https://player.vimeo.com/video/${videoId}?background=1&loop=1&muted=1&controls=0&autopause=0&playsinline=1&h=c2bcc922b6`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-black" /* ensure no white flash */
    >
      <iframe
        ref={iframeRef}
        src={vimeoSrc}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Vimeo Video Player"
      />
    </div>
  );
}

function VideoDesktop() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative size-full"
      data-name="Video"
    >
      <div
        className="h-[714px] shrink-0 w-full"
        data-name="Video"
      >
        <VideoPlayer />
      </div>
    </div>
  );
}

function VideoTablet() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[6.216px] items-start justify-start p-0 relative size-full"
      data-name="Video"
    >
      <div
        className="h-[624px] shrink-0 w-full"
        data-name="Video"
      >
        <VideoPlayer />
      </div>
    </div>
  );
}

function VideoMobile() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative size-full"
      data-name="Video"
    >
      <div
        className="h-[714px] shrink-0 w-full"
        data-name="Video"
      >
        <VideoPlayer />
      </div>
    </div>
  );
}

function Video({ videoId = "1099195711" }) {
  const { width } = useActiveBreakpoint();
  
  if (width < 800) {
    return <VideoMobile />;
  }
  if (width < 1280) {
    return <VideoTablet />;
  }
  return <VideoDesktop />;
}

export default Video;

defineProperties(Video, {
  videoId: {
    label: "Vimeo Video ID",
    type: "string",
    defaultValue: "1099195711"
  }
});