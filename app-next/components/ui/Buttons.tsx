import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
};

type ActionButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ActionLinkProps = ButtonBaseProps & {
  href: string;
};

export const buttonBaseClass =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900";

export const primaryButtonClass = "bg-brand-accent text-brand-white shadow-soft hover:bg-[#1d4ed8]";

export const secondaryButtonClass =
  "border border-slate-300 bg-brand-white text-brand-primary hover:border-brand-accent/30 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-accent/40 dark:hover:bg-slate-800";

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

export function PrimaryLink({ href, children, className }: ActionLinkProps) {
  return (
    <Link href={href} className={cn(buttonBaseClass, primaryButtonClass, className)}>
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

export function SecondaryLink({ href, children, className }: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonBaseClass,
        secondaryButtonClass,
        className,
      )}
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
