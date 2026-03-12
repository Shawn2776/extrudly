"use client";

import Link from "next/link";

const NozzleMark = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#EF9F27" />
    <polygon points="8,6 24,6 27,12 24,18 8,18 5,12" fill="#2C2C2A" />
    <polygon points="8,6 5,12 8,18" fill="#1a1a18" opacity="0.6" />
    <polygon points="24,6 27,12 24,18" fill="#444441" opacity="0.5" />
    <circle cx="16" cy="12" r="2.5" fill="#1a1a18" />
    <rect x="13" y="18" width="6" height="4" rx="1" fill="#2C2C2A" />
    <polygon points="13,22 19,22 18,26 14,26" fill="#2C2C2A" />
    <path d="M13,27 Q13,31 16,32 Q19,31 19,27 Z" fill="#fff" opacity="0.9" />
  </svg>
);

const footerLinks = {
  Product: [
    { label: "Catalog", href: "/catalog" },
    { label: "Custom prints", href: "/custom" },
    { label: "Materials", href: "/materials" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping info", href: "/shipping" },
    { label: "File guidelines", href: "/file-guidelines" },
    { label: "Track order", href: "/track" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a18] border-t border-[#2C2C2A]">
      {/* Main grid */}
      <div className="max-w-[1200px] mx-auto px-8 pt-16 pb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <NozzleMark size={36} />
            <span className="text-xl font-bold tracking-tight text-white">extrudly</span>
          </Link>

          <p className="text-sm leading-relaxed text-[#9a9894] max-w-[260px]">
            Professional 3D printing on demand. Your designs, our printers, delivered fast.
          </p>

          <span className="text-[10px] font-bold tracking-[3px] text-[#EF9F27]">UPLOAD. PRINT. SHIP.</span>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="flex flex-col gap-4">
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#666460]">{group}</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888580] hover:text-[#D3D1C7] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2C2C2A]">
        <div className="max-w-[1200px] mx-auto px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs text-[#555350]">© 2026 Extrudly. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-[#555350] hover:text-[#888580] transition-colors duration-150"
            >
              Privacy
            </Link>
            <span className="text-[#333331]">·</span>
            <Link href="/terms" className="text-xs text-[#555350] hover:text-[#888580] transition-colors duration-150">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
