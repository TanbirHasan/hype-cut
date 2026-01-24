"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Header = () => {
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
    <header>
      <div className="px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/common/website-logo.png"
              alt="Website Logo"
              width={200}
              height={40}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-2 bg-slate-50 p-2 rounded-full shadow">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1 text-base font-medium transition-colors duration-200 rounded-full ${
                  isActive(link.href)
                    ? "bg-[#EA1C31] text-white"
                    : "text-[#000000] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Book a Call Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4 ">
            <Button
              asChild
              className="bg-[#EA1C31] text-white rounded-full px-4 py-3.5 h-auto font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-base font-semibold">Book a Call</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
