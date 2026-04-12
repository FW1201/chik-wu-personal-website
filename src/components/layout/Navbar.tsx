"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於吳奇" },
  { href: "/speaking", label: "演講培訓" },
  { href: "/publications", label: "著作研究" },
  { href: "/projects", label: "氛圍開發專案" },
  { href: "/resources", label: "資源中心" },
  { href: "/contact", label: "邀請演講" },
  { href: "https://www.tibame.com/teacher/20d3094c", label: "合作課程", external: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border-dark">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl font-medium tracking-tight">
          Chi. K. Wu
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(1).map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-opacity hover:opacity-100 ${
                  pathname === link.href ? "opacity-100" : "opacity-60"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border-dark bg-bg-primary">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-opacity hover:opacity-100 ${
                    pathname === link.href ? "opacity-100" : "opacity-60"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
