import type { SVGProps } from "react";

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.7l-5.2-6.8L5.6 22H2.4l8.1-9.3L1.6 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
    </svg>
  );
}

export function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.3 4.9A19.8 19.8 0 0 0 15.6 3.4c-.2.4-.5 1-.6 1.4a18.3 18.3 0 0 0-5.9 0c-.2-.4-.4-1-.6-1.4A19.7 19.7 0 0 0 3.7 4.9C1.3 8.5.6 12 1 15.5a19.9 19.9 0 0 0 6 3c.5-.6.9-1.3 1.3-2a13 13 0 0 1-2-1c.2-.1.3-.3.5-.4a14.2 14.2 0 0 0 12.4 0l.5.4a13 13 0 0 1-2 1c.4.7.8 1.4 1.3 2a19.8 19.8 0 0 0 6-3c.5-4-.5-7.5-2.7-10.6ZM8.7 13.7c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8c.9 0 1.6.8 1.6 1.8s-.7 1.8-1.6 1.8Zm6.6 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8c.9 0 1.6.8 1.6 1.8s-.7 1.8-1.6 1.8Z" />
    </svg>
  );
}

// OpenSea's mark is not reproduced here — see public/icons/README.md.
// Footer renders the real official SVG (once dropped in) via <img>
// rather than a freehand redrawing of their trademark.
