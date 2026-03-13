"use client";

import Link from "next/link";

const PrintProgress = () => (
  <svg viewBox="0 0 260 320" fill="none" className="w-full max-w-[240px] mx-auto">
    {/* Heat block */}
    <rect x="80" y="20" width="100" height="36" rx="5" fill="#3d3d3a" />
    <line x1="80" y1="32" x2="180" y2="32" stroke="#EF9F27" strokeWidth="0.8" opacity="0.4" />
    <line x1="80" y1="44" x2="180" y2="44" stroke="#EF9F27" strokeWidth="0.8" opacity="0.4" />
    <rect x="80" y="20" width="14" height="36" rx="5" fill="#1a1a18" opacity="0.5" />
    <rect x="166" y="20" width="14" height="36" rx="5" fill="#666663" opacity="0.3" />
    {/* Hex nut */}
    <polygon points="86,56 174,56 190,80 174,104 86,104 70,80" fill="#2C2C2A" />
    <polygon points="86,56 70,80 86,104" fill="#1a1a18" opacity="0.6" />
    <polygon points="174,56 190,80 174,104" fill="#666663" opacity="0.3" />
    <polygon
      points="86,56 174,56 190,80 174,104 86,104 70,80"
      fill="none"
      stroke="#EF9F27"
      strokeWidth="1"
      opacity="0.4"
    />
    <circle cx="130" cy="80" r="10" fill="#1a1a18" />
    <circle cx="130" cy="80" r="6" fill="#2C2C2A" />
    {/* Barrel */}
    <rect x="110" y="104" width="40" height="20" rx="2" fill="#2C2C2A" />
    <rect x="110" y="104" width="8" height="20" fill="#1a1a18" opacity="0.5" />
    {/* Taper */}
    <polygon points="110,124 150,124 143,150 117,150" fill="#2C2C2A" />
    <polygon points="110,124 117,124 117,150 110,124" fill="#1a1a18" opacity="0.4" />
    {/* Tip */}
    <rect x="121" y="150" width="18" height="8" rx="2" fill="#1a1a18" />
    <ellipse cx="130" cy="160" rx="4" ry="2.5" fill="#111110" />
    {/* Drop */}
    <path d="M121,162 Q118,188 130,198 Q142,188 139,162 Z" fill="#EF9F27" />
    <ellipse cx="125" cy="176" rx="3" ry="7" fill="#FAC775" opacity="0.45" />
    {/* Print bed */}
    <rect x="30" y="220" width="200" height="6" rx="3" fill="#3d3d3a" />
    {/* Printed object */}
    <rect x="70" y="204" width="120" height="16" rx="2" fill="#444441" />
    <rect x="74" y="193" width="112" height="12" rx="2" fill="#3d3d3a" />
    <rect x="78" y="183" width="104" height="11" rx="2" fill="#444441" />
    <rect x="82" y="174" width="96" height="10" rx="2" fill="#EF9F27" opacity="0.9" />
    {/* Progress bar */}
    <rect x="30" y="244" width="200" height="6" rx="3" fill="#e0ddd6" />
    <rect x="30" y="244" width="140" height="6" rx="3" fill="#EF9F27" />
    <circle cx="170" cy="247" r="5" fill="#EF9F27" />
    {/* Labels */}
    <text x="130" y="268" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fill="#888780">
      Layer 47 of 60
    </text>
    <text x="130" y="286" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#5F5E5A">
      PLA+ Charcoal — 0.2mm
    </text>
    <text x="130" y="304" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#EF9F27">
      Est. 14 min remaining
    </text>
  </svg>
);

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#FAEEDA] text-[#633806] text-[11px] font-bold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full w-fit">
            <span className="w-1.5 h-1.5 bg-[#EF9F27] rounded-full" />
            3D print on demand
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(38px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] text-[#2C2C2A]">
            Your idea,
            <br />
            <span className="text-[#EF9F27]">printed</span> &amp;
            <br />
            shipped.
          </h1>

          {/* Sub */}
          <p className="text-[17px] text-[#5F5E5A] leading-relaxed max-w-[420px]">
            Browse our catalog or upload your own design. We print in high-quality filament and ship straight to your
            door — usually within 48 hours.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/catalog"
              className="bg-[#2C2C2A] text-white text-[15px] font-bold px-7 py-3.5 rounded-xl hover:bg-[#1a1a18] active:scale-[0.98] transition-all duration-150"
            >
              Browse catalog
            </Link>
            <Link
              href="/custom"
              className="border border-[#2C2C2A] text-[#2C2C2A] text-[15px] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#F1EFE8] active:scale-[0.98] transition-all duration-150"
            >
              Upload a design
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex gap-5 flex-wrap">
            {["PLA, PETG, CF & more", "Ships in 48hrs", "Custom uploads welcome"].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-[13px] text-[#5F5E5A]">
                <span className="text-[#EF9F27] font-bold">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right — print card */}
        <div className="relative flex items-center justify-center order-1 md:order-2">
          {/* Blob */}
          <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-[#F1EFE8] rounded-[60%_40%_55%_45%/50%_60%_40%_50%] z-0" />

          {/* Card */}
          <div className="relative z-10 bg-white border border-[#e0ddd6] rounded-2xl p-5 w-[260px] md:w-[300px] shadow-sm">
            {/* Live label */}
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[1px] uppercase text-[#5F5E5A] mb-3">
              <span className="w-2 h-2 bg-[#EF9F27] rounded-full animate-pulse" />
              Printing now
            </div>
            <PrintProgress />
          </div>
        </div>
      </div>
    </section>
  );
}
