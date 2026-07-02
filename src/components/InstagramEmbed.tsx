import React from "react"

// Normalize any Instagram URL (post, reel, tv) to its canonical /embed form.
// locale=cs makes Instagram render its UI ("Zobrazit na Instagramu", …) in Czech.
const toEmbedUrl = (url: string): string => {
  try {
    const match = url.match(
      /instagram\.com\/(p|reel|reels|tv)\/([A-Za-z0-9_-]+)/
    )
    if (!match) return url
    const type = match[1] === "reels" ? "reel" : match[1]
    return `https://www.instagram.com/${type}/${match[2]}/embed/?cr=1&locale=cs`
  } catch {
    return url
  }
}

export const isInstagramUrl = (url: string): boolean =>
  /instagram\.com\/(p|reel|reels|tv)\//.test(url || "")

interface InstagramEmbedProps {
  url: string
}

const InstagramEmbed = ({ url }: InstagramEmbedProps): JSX.Element => {
  const ref = React.useRef<HTMLIFrameElement>(null)
  // Fallback height until Instagram reports the real one.
  const [height, setHeight] = React.useState<number>(720)

  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!/instagram\.com$/.test(new URL(event.origin).hostname)) return
      try {
        const data =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data
        // Instagram posts { type: "MEASURE", details: { height } } for its embeds.
        const reported = data?.details?.height
        if (
          data?.type === "MEASURE" &&
          reported &&
          // Only react to our own iframe's message.
          (!ref.current ||
            !event.source ||
            event.source === ref.current.contentWindow)
        ) {
          setHeight(reported)
        }
      } catch {
        // ignore non-JSON messages
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <iframe
      ref={ref}
      title={url}
      src={toEmbedUrl(url)}
      width="100%"
      height={height}
      frameBorder={0}
      scrolling="no"
      allowTransparency
      allow="encrypted-media"
      style={{ border: "none", overflow: "hidden", display: "block" }}
    />
  )
}

export default InstagramEmbed
