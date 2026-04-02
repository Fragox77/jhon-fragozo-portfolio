import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-md border border-slate-300 bg-brand-white px-4 py-3 text-sm text-brand-primary placeholder:text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400",
        "focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20",
        className,
      )}
      {...props}
    />
  );
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "w-full rounded-md border border-slate-300 bg-brand-white px-4 py-3 text-sm text-brand-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
        "focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20",
        className,
      )}
      {...props}
    />
  );
}
