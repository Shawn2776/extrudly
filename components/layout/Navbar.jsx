"use client"

import { useState } from "react"
import Link from "next/link"
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs"

const NozzleMark = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#2C2C2A" />
    <polygon points="8,6 24,6 27,12 24,18 8,18 5,12" fill="#3d3d3a" />
    <polygon points="8,6 5,12 8,18" fill="#1a1a18" opacity="0.6" />
    <polygon points="24,6 27,12 24,18" fill="#666663" opacity="0.35" />
    <polygon points="8,6 24,6 27,12 24,18 8,18 5,12" fill="none" stroke="#EF9F27" strokeWidth="0.8" opacity="0.5" />
    <circle cx="16" cy="12" r="2.5" fill="#1a1a18" />
    <circle cx="16" cy="12" r="1.5" fill="#2C2C2A" />
    <rect x="13" y="18" width="6" height="4" rx="1" fill="#3d3d3a" />
    <polygon points="13,22 19,22 18,26 14,26" fill="#3d3d3a" />
    <path d="M13,27 Q13,31 16,32 Q19,31 19,27 Z" fill="#EF9F27" />
  </svg>
)

const navLinks = [
  { label: "Catalog", href: "/catalog" },
  { label: "Custom prints", href: "/custom" },
  { label: "Materials", href: "/materials" },
  { label: "Pricing", href: "/pricing" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isSignedIn } = useAuth()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b border-[#e0ddd6]">

      {/* Main bar */}
      <div className="max-w-[1200px] mx-auto px-8 h-14 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <NozzleMark />
          <span className="text-[15px] font-bold tracking-tight text-[#2C2C2A]">extrudly</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#5F5E5A] hover:text-[#2C2C2A] transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {!isSignedIn ? (
            <>
              <SignInButton >
                <button className="text-sm text-[#5F5E5A] hover:text-[#2C2C2A] hover:bg-[#F1EFE8] px-4 py-2 rounded-lg transition-colors duration-150">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton >
                <button className="text-sm font-bold bg-[#EF9F27] text-[#2C2C2A] hover:bg-[#d98e1e] hover:text-white px-4 py-2 rounded-lg transition-colors duration-150">
                  Start printing
                </button>
              </SignUpButton>
            </>
          ) : (
            <>
              <Link
                href="/orders"
                className="text-sm text-[#5F5E5A] hover:text-[#2C2C2A] hover:bg-[#F1EFE8] px-4 py-2 rounded-lg transition-colors duration-150"
              >
                My orders
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-[22px] h-[2px] bg-[#2C2C2A] rounded-full" />
          <span className="block w-[22px] h-[2px] bg-[#2C2C2A] rounded-full" />
          <span className="block w-[22px] h-[2px] bg-[#2C2C2A] rounded-full" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#e0ddd6] bg-white px-8 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base text-[#2C2C2A] py-3 border-b border-[#F1EFE8]"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 mt-4">
            {!isSignedIn ? (
              <>
                <SignInButton >
                  <button className="text-sm text-[#5F5E5A]">Sign in</button>
                </SignInButton>
                <SignUpButton >
                  <button className="text-sm font-bold bg-[#EF9F27] text-[#2C2C2A] px-4 py-2 rounded-lg">
                    Start printing
                  </button>
                </SignUpButton>
              </>
            ) : (
              <>
                <Link href="/orders" className="text-sm text-[#5F5E5A]">My orders</Link>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
