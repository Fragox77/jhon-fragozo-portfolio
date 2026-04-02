import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PrimaryLink } from "@/components/ui/Buttons";
import Logo from "@/components/layout/Logo";
import { Navigation } from "@/components/layout/Navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { routes } from "@/lib/constants/routes";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <Container className="flex items-center gap-4 py-3 md:py-4">
        <Link href={routes.home} aria-label="Ir al inicio" className="shrink-0">
          <Logo className="h-10 w-auto" variant="light" />
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <Navigation />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <PrimaryLink href={routes.quote} className="hidden h-10 px-4 py-2 md:inline-flex">
            Cotizar
          </PrimaryLink>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
