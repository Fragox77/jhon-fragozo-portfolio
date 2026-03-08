"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNavigation } from "@/lib/constants/navigation";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll del fondo cuando el menú está abierto
  if (typeof window !== "undefined") {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        aria-label="Abrir menú"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white shadow transition hover:bg-slate-50 md:hidden"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Abrir menú</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>

      {/* Drawer menú */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Fondo oscuro */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-fade-in"
            onClick={() => setOpen(false)}
          />
          {/* Panel menú */}
          <nav className="relative ml-auto flex h-full w-4/5 max-w-xs flex-col gap-2 bg-white px-6 py-8 shadow-xl animate-slide-in-right">
            <button
              aria-label="Cerrar menú"
              className="absolute right-4 top-4 rounded-full p-2 text-brand-neutral hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
            <ul className="mt-10 flex flex-col gap-5">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-lg font-semibold text-brand-primary transition hover:text-brand-accent"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={routes.quote}
              className="mt-8 block rounded-md bg-brand-accent px-5 py-3 text-center text-base font-bold text-white shadow hover:bg-brand-primary"
              onClick={() => setOpen(false)}
            >
              Cotizar
            </Link>
          </nav>
        </div>
      )}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.25s ease;
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.32s cubic-bezier(.22,1,.36,1);
        }
      `}</style>
    </>
  );
}
