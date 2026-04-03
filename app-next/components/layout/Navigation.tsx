import Link from "next/link";
import { mainNavigation } from "@/lib/constants/navigation";

export function Navigation() {
  return (
    <nav aria-label="Navegacion principal" className="hidden items-center gap-7 md:flex">
      {mainNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-small font-medium text-slate-600 transition-colors duration-200 hover:text-brand-accent dark:text-white/65 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
