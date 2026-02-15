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
    { name: "Works", href: "/works" },
    { name: "Pricing", href: "/pricing" },
    { name: "About us", href: "/about-us" },
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
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center px-4 py-1.5 rounded-full">
            <Image
              src="/images/common/website-logo.png"
              alt="Website Logo"
              width={120}
              height={36}
              className="h-7 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-2 bg-slate-50 px-2 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive(link.href)
                    ? "bg-[#EA1C31] text-white"
                    : "text-[#000000] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-[#EA1C31] hover:bg-[#b21726] text-white rounded-full px-5 py-2 h-auto font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold">Book a Call</span>
              </Link>
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
