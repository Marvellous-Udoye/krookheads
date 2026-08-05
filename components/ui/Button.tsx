import Link from "next/link";
import { cn } from "@/lib/utils";
import { GlitchText } from "./GlitchText";
import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  href: string;
  external?: boolean;
  variant?: ButtonVariant;
  className?: string;
}

const base =
  "group relative inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest2 font-body transition-colors duration-300 ease-archive w-full sm:w-auto";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-olive text-beige-bright border border-olive hover:bg-olive-dim hover:border-olive-bright hover:text-beige-bright",
  secondary:
    "bg-transparent text-beige border border-beige/40 hover:border-crimson hover:text-beige-bright",
};

/**
 * The single button primitive used for every CTA site-wide.
 *
 * Config-driven by design: `href` + `external` decide whether this
 * renders as an internal Next.js <Link> or an external new-tab <a>.
 * When mint goes live, only config/links.ts changes — this component
 * does not need to be touched.
 */
export function Button({
  label,
  href,
  external = false,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={`${label} (opens in a new tab)`}
        {...props}
      >
        <GlitchText text={label} />
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      <GlitchText text={label} />
    </Link>
  );
}
