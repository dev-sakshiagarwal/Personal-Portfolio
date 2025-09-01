import { useEffect, useRef } from "react"

/**
 * Renders a responsive Vimeo background video without any player UI.
 * The video autoplays, loops, is muted, and fills the white canvas area
 * surrounded by a black frame—mimicking the imported Figma mock-up.
 */
export default function Frame2147237550() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  // Whenever the component mounts, make absolutely sure the video loops.
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    // Post-message API fallback: ensure loop true (especially for mobile Safari)
    const loopMessage = {
      method: "setLoop",
      value: true,
    }
    iframe.contentWindow?.postMessage(JSON.stringify(loopMessage), "*")
  }, [])

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <iframe
        ref={iframeRef}
        src="https://player.vimeo.com/video/1099192024?h=912808d257&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0" // background=1 hides all UI
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        title="Embedded Vimeo background video"
      />
    </div>
  )
}