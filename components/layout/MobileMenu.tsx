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
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-0">
              <span className="text-2xl font-bold text-[#1a1a2e]">HYPE</span>
              <span className="text-2xl font-bold">
                <span className="text-[#8b1538]">C</span>
                <span className="text-[#1a1a2e]">UT</span>
              </span>
            </div>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive(link.href)
                  ? "bg-[#8b1538] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Button
            asChild
            className="bg-[#8b1538] hover:bg-[#6d0f2a] text-white rounded-full px-6 py-3 h-auto font-medium mt-4"
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
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
