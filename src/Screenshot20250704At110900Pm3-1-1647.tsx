import { useEffect, useRef, useState } from "react";
import { useActiveBreakpoint, defineProperties } from "figma:react";

function VideoPlayer({ autoplay = true, loop = true, showControls = false, muteAudio = true }) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  
  // Construct URL with parameters to control player behavior
  const videoId = "1099186956";
  const videoSrc = `https://player.vimeo.com/video/${videoId}?h=215033d96b&autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&controls=${showControls ? 1 : 0}&background=${showControls ? 0 : 1}&muted=${muteAudio ? 1 : 0}`;
  
  // Add event listener to handle iframe load
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const handleLoad = () => setLoaded(true);
      iframe.addEventListener('load', handleLoad);
      return () => iframe.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="w-10 h-10 border-4 border-gray-400 border-t-gray-800 rounded-full animate-spin"></div>
        </div>
      )}
      <iframe 
        ref={iframeRef}
        src={videoSrc}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture" 
        allowFullScreen
        title="Vimeo video player"
        frameBorder="0"
      />
    </div>
  );
}

function Screenshot20250704At110900Pm3Desktop({ autoplay, loop, showControls, muteAudio }) {
  return (
    <div
      className="size-full"
      data-name="Screenshot 2025-07-04 at 11.09.00 PM 3"
    >
      <VideoPlayer 
        autoplay={autoplay} 
        loop={loop} 
        showControls={showControls} 
        muteAudio={muteAudio}
      />
    </div>
  );
}

function Screenshot20250704At110900Pm3Tablet({ autoplay, loop, showControls, muteAudio }) {
  return (
    <div
      className="size-full"
      data-name="Screenshot 2025-07-04 at 11.09.00 PM 3"
    >
      <VideoPlayer 
        autoplay={autoplay} 
        loop={loop} 
        showControls={showControls} 
        muteAudio={muteAudio}
      />
    </div>
  );
}

function Screenshot20250704At110900Pm3Mobile({ autoplay, loop, showControls, muteAudio }) {
  return (
    <div
      className="size-full"
      data-name="Screenshot 2025-07-04 at 11.09.00 PM 3"
    >
      <VideoPlayer 
        autoplay={autoplay} 
        loop={loop} 
        showControls={showControls} 
        muteAudio={muteAudio}
      />
    </div>
  );
}

function Screenshot20250704At110900Pm3({
  autoplay = true,
  loop = true,
  showControls = false,
  muteAudio = true
}) {
  const { width } = useActiveBreakpoint();
  
  if (width < 800) {
    return (
      <Screenshot20250704At110900Pm3Mobile 
        autoplay={autoplay}
        loop={loop}
        showControls={showControls}
        muteAudio={muteAudio}
      />
    );
  }
  
  if (width < 1280) {
    return (
      <Screenshot20250704At110900Pm3Tablet 
        autoplay={autoplay}
        loop={loop}
        showControls={showControls}
        muteAudio={muteAudio}
      />
    );
  }
  
  return (
    <Screenshot20250704At110900Pm3Desktop 
      autoplay={autoplay}
      loop={loop}
      showControls={showControls}
      muteAudio={muteAudio}
    />
  );
}

export default Screenshot20250704At110900Pm3;

defineProperties(Screenshot20250704At110900Pm3, {
  autoplay: {
    label: "Autoplay",
    type: "boolean",
    defaultValue: true
  },
  loop: {
    label: "Loop video",
    type: "boolean",
    defaultValue: true
  },
  showControls: {
    label: "Show player controls",
    type: "boolean",
    defaultValue: false
  },
  muteAudio: {
    label: "Mute audio",
    type: "boolean",
    defaultValue: true
  }
});