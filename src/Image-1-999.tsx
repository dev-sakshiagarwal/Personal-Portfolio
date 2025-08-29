import { useEffect, useRef, useState } from "react";
import imgImage from "figma:asset/9e1b9d3f3d24cf5b4f8b40e553757004678c241f.png";

export default function Image() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-full"
      data-name="VideoContainer"
    >
      {/* Placeholder poster until video starts */}
      {!isInView && (
        <div
          className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0 w-full h-full"
          style={{ backgroundImage: `url('${imgImage}')` }}
          aria-label="Video placeholder image"
        />
      )}

      {isInView && (
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1099195684?h=3075367315&amp;background=1&amp;autoplay=1&amp;loop=1&amp;muted=1"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}