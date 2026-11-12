"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, PHONE } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-cream border-b border-border/80">
      <div className="container flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo-192.png"
            alt="Chance to Change"
            width={36}
            height={36}
            className="h-9 w-9 rounded-sm object-contain"
          />
          <div>
            <span className="font-display font-bold text-lg text-charcoal leading-tight block">
              Chance to Change
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase leading-tight block">
              Supportive Services, LLC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const children = "children" in link ? link.children : undefined;
            const active = pathname === link.href || children?.some((c) => pathname.startsWith(c.href));
            return (
              <div key={link.href} className={children ? "relative group" : undefined}>
                <Link href={link.href}>
                  <span
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-sage-light/50 hover:text-sage-dark ${
                      active ? "bg-sage-light/70 text-sage-dark font-semibold" : "text-charcoal/80"
                    }`}
                  >
                    {link.label}
                    {children && <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />}
                  </span>
                </Link>
                {children && (
                  // Kept in the DOM and revealed on hover or keyboard focus, so it is
                  // reachable by tabbing rather than mouse only.
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
                    <div className="min-w-44 rounded-xl border border-border bg-card p-1.5 shadow-lg">
                      {children.map((child) => (
                        <Link key={child.href} href={child.href}>
                          <span
                            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                              pathname.startsWith(child.href)
                                ? "bg-sage-light/70 text-sage-dark font-semibold"
                                : "text-charcoal/80 hover:bg-sage-light/40 hover:text-sage-dark"
                            }`}
                          >
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:text-terracotta/80 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
          <Link href="/intake">
            <Button className="bg-sage hover:bg-sage-dark text-white font-semibold text-sm rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-sage-light/50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-warm-cream w-[85%] sm:max-w-sm"
          >
            <SheetHeader>
              <SheetTitle className="font-display text-lg text-charcoal">
                Chance to Change
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.flatMap((link) => [link, ...(("children" in link ? link.children : undefined) ?? []).map((c) => ({ ...c, nested: true }))]).map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link href={link.href}>
                    <span
                      className={`flex items-center gap-2.5 py-3 rounded-lg font-medium transition-colors ${
                        "nested" in link && link.nested
                          ? "ml-4 pl-3 pr-4 text-sm border-l-2 border-border"
                          : "px-4 text-base"
                      } ${
                        pathname === link.href || pathname.startsWith(link.href + "/")
                          ? "bg-sage-light/70 text-sage-dark font-semibold border-sage/50"
                          : "text-charcoal/80 hover:bg-sage-light/30"
                      }`}
                    >
                      {"nested" in link && link.nested && (
                        <BookOpen className="h-4 w-4 shrink-0 opacity-70" />
                      )}
                      {link.label}
                    </span>
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <SheetFooter className="border-t border-border/80 pt-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-terracotta text-white font-semibold"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE}
              </a>
              <SheetClose asChild>
                <Link href="/intake">
                  <span className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-sage text-white font-semibold">
                    Get Started
                  </span>
                </Link>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
