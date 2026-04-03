import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
};

type ActionButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ActionLinkProps = ButtonBaseProps & ComponentProps<typeof Link>;

export const buttonBaseClass =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium tracking-[-0.01em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-surface-base";

export const primaryButtonClass = "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_24px_rgba(37,99,235,0.45)]";

export const secondaryButtonClass =
  "border border-white/20 text-white/80 hover:bg-white/5";

export function PrimaryButton({ children, className, ...props }: ActionButtonProps) {
  return (
    <button
      className={cn(buttonBaseClass, primaryButtonClass, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function PrimaryLink({ href, children, className, ...props }: ActionLinkProps) {
  return (
    <Link href={href} className={cn(buttonBaseClass, primaryButtonClass, className)} {...props}>
      {children}
    </Link>
  );
}

export function SecondaryButton({ children, className, ...props }: ActionButtonProps) {
  return (
    <button
      className={cn(
        buttonBaseClass,
        secondaryButtonClass,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryLink({ href, children, className, ...props }: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonBaseClass,
        secondaryButtonClass,
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export function GhostButton({ children, className, ...props }: ActionButtonProps) {
  return (
    <button className={cn(buttonBaseClass, "px-3 py-2 text-brand-accent hover:bg-blue-50 dark:hover:bg-slate-800", className)} {...props}>
      {children}
    </button>
  );
}
