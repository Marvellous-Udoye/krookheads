import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "header" | "footer";
}

/**
 * Enforces the site-wide max-width (1440px) and responsive gutters.
 * Every section should compose its outer <section> padding separately
 * and use Container only for horizontal width/centering — keeps
 * vertical rhythm and horizontal containment as two independent concerns.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-container px-6 md:px-12", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
