"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";
import { MenuIcon, CloseIcon } from "./Icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border-soft bg-background/90 backdrop-blur"
          : "border-transparent bg-background/40 backdrop-blur"
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between py-3">
        <Link href="/" aria-label="BIOS home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-gold" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/join"
            className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-light"
          >
            Join the Community
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-border-soft p-2 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border-soft bg-background px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? "bg-surface-raised text-gold" : "text-foreground/85"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/join"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-black"
            >
              Join the Community
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
