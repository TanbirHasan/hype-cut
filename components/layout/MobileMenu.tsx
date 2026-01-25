"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "About us", href: "/about-us" },
    { name: "Works", href: "/works" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden rounded-full border border-slate-200/70 bg-white/70 backdrop-blur-md shadow-sm hover:bg-white"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-slate-800" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[320px] sm:w-95 border-l border-slate-200/70 bg-white/90 backdrop-blur-2xl shadow-2xl px-6 py-6 flex flex-col"
      >
        <SheetHeader className="items-start">
          <SheetTitle>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-extrabold tracking-tight text-[#1a1a2e]">
                  HYPE
                </span>
                <span className="text-2xl font-extrabold tracking-tight">
                  <span className="text-[#8b1538]">C</span>
                  <span className="text-[#1a1a2e]">UT</span>
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Video Editing Studio
              </span>
            </div>
          </SheetTitle>
        </SheetHeader>

        {/* Divider */}
        <div className="mt-5 mb-4 h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent" />

        <nav className="flex flex-col gap-2 flex-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={[
                  "group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-all",
                  active
                    ? "bg-[#8b1538] text-white shadow-md shadow-[#8b1538]/30"
                    : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900",
                ].join(" ")}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={[
                      "h-2 w-2 rounded-full transition-all",
                      active
                        ? "bg-white"
                        : "bg-slate-300 group-hover:bg-[#8b1538]",
                    ].join(" ")}
                  />
                  <span>{link.name}</span>
                </span>

                {active && (
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/80">
                    Active
                  </span>
                )}
              </Link>
            );
          })}

          {/* CTA */}
          <div className="mt-6 border-t border-slate-200/80 pt-5">
            <Button
              asChild
              className="w-full bg-[#8b1538] hover:bg-[#6d0f2a] text-white rounded-full px-6 py-3 h-auto font-medium text-sm shadow-md shadow-[#8b1538]/30"
            >
              <Link
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Call</span>
              </Link>
            </Button>

            <p className="mt-3 text-[11px] text-slate-500 text-center">
              Done-for-you video editing to keep your brand always on.
            </p>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
