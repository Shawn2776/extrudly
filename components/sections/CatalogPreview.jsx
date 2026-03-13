"use client"

import Link from "next/link"

const products = [
  {
    id: 1,
    title: "MagSafe desk stand",
    category: "Desk & workspace",
    price: "From $12.00",
    material: "PLA+",
    bg: "bg-[#F1EFE8]",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="18" y="60" width="36" height="6" rx="3" fill="#2C2C2A" />
        <rect x="33" y="28" width="6" height="34" rx="3" fill="#3d3d3a" />
        <circle cx="36" cy="24" r="16" fill="#3d3d3a" />
        <circle cx="36" cy="24" r="12" fill="#2C2C2A" />
        <circle cx="36" cy="24" r="9" fill="none" stroke="#EF9F27" strokeWidth="2" />
        <circle cx="36" cy="24" r="3" fill="#EF9F27" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Commander deck box",
    category: "Tabletop gaming",
    price: "From $28.00",
    material: "PETG",
    bg: "bg-[#FAEEDA]",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="8" y="28" width="56" height="34" rx="5" fill="#BA7517" />
        <rect x="8" y="20" width="56" height="12" rx="5" fill="#854F0B" />
        <rect x="16" y="36" width="8" height="20" rx="2" fill="#EF9F27" opacity="0.75" />
        <rect x="27" y="36" width="8" height="20" rx="2" fill="#EF9F27" opacity="0.75" />
        <rect x="38" y="36" width="8" height="20" rx="2" fill="#EF9F27" opacity="0.75" />
        <rect x="49" y="36" width="8" height="20" rx="2" fill="#EF9F27" opacity="0.75" />
        <rect x="30" y="17" width="12" height="5" rx="2" fill="#FAC775" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Cable clip organizer",
    category: "Home organization",
    price: "From $6.00",
    material: "PLA",
    bg: "bg-[#F1EFE8]",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="10" y="28" width="14" height="16" rx="4" fill="#3d3d3a" />
        <rect x="29" y="28" width="14" height="16" rx="4" fill="#3d3d3a" />
        <rect x="48" y="28" width="14" height="16" rx="4" fill="#3d3d3a" />
        <rect x="15" y="24" width="4" height="8" rx="2" fill="#F1EFE8" />
        <rect x="34" y="24" width="4" height="8" rx="2" fill="#F1EFE8" />
        <rect x="53" y="24" width="4" height="8" rx="2" fill="#F1EFE8" />
        <path d="M6 36 Q17 36 17 36 Q25 36 29 36 Q36 36 36 36 Q43 36 48 36 Q55 36 66 36" stroke="#EF9F27" strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="6" y="44" width="60" height="6" rx="3" fill="#444441" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Wall mount hook set",
    category: "Home organization",
    price: "From $8.00",
    material: "PLA+",
    bg: "bg-[#F1EFE8]",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="8" y="14" width="56" height="10" rx="3" fill="#3d3d3a" />
        <circle cx="18" cy="19" r="3" fill="#2C2C2A" />
        <circle cx="54" cy="19" r="3" fill="#2C2C2A" />
        <path d="M20 24 L20 46 Q20 56 28 56" stroke="#444441" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 24 L36 46 Q36 56 44 56" stroke="#444441" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 24 L52 46 Q52 56 60 56" stroke="#444441" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="56" r="4" fill="#EF9F27" />
        <circle cx="44" cy="56" r="4" fill="#EF9F27" />
        <circle cx="60" cy="56" r="4" fill="#EF9F27" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Dice tray insert",
    category: "Tabletop gaming",
    price: "From $16.00",
    material: "PETG",
    bg: "bg-[#FAEEDA]",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="8" y="24" width="56" height="36" rx="6" fill="#BA7517" />
        <rect x="14" y="30" width="44" height="24" rx="3" fill="#854F0B" />
        <rect x="18" y="34" width="14" height="14" rx="3" fill="#EF9F27" />
        <circle cx="25" cy="41" r="2" fill="#854F0B" />
        <rect x="36" y="34" width="14" height="14" rx="3" fill="#EF9F27" />
        <circle cx="40" cy="38" r="1.5" fill="#854F0B" />
        <circle cx="46" cy="44" r="1.5" fill="#854F0B" />
        <circle cx="43" cy="41" r="1.5" fill="#854F0B" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Phone stand",
    category: "Desk & workspace",
    price: "From $9.00",
    material: "PLA+",
    bg: "bg-[#F1EFE8]",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="14" y="58" width="44" height="6" rx="3" fill="#2C2C2A" />
        <line x1="22" y1="58" x2="36" y2="20" stroke="#444441" strokeWidth="5" strokeLinecap="round" />
        <rect x="30" y="14" width="24" height="40" rx="4" fill="#3d3d3a" />
        <rect x="33" y="18" width="18" height="28" rx="2" fill="#2C2C2A" />
        <circle cx="42" cy="50" r="2.5" fill="#EF9F27" />
        <rect x="38" y="15" width="8" height="3" rx="1.5" fill="#2C2C2A" />
      </svg>
    ),
  },
]

const MaterialBadge = ({ material }) => (
  <span className="text-[11px] font-bold tracking-widest uppercase text-[#633806] bg-[#FAEEDA] px-2.5 py-0.5 rounded-full">
    {material}
  </span>
)

export default function CatalogPreview() {
  return (
    <section className="bg-[#F1EFE8] py-24 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="flex flex-col gap-2 max-w-lg">
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#EF9F27]">
              Featured prints
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#2C2C2A]">
              Ready to order
            </h2>
            <p className="text-[15px] text-[#888780] leading-relaxed">
              Professionally printed, quality checked, and shipped fast. Browse the full catalog for 50+ designs.
            </p>
          </div>
          <Link
            href="/catalog"
            className="text-sm font-bold text-[#2C2C2A] border border-[#2C2C2A] px-5 py-2.5 rounded-xl hover:bg-[#2C2C2A] hover:text-white transition-colors duration-150 shrink-0"
          >
            Browse all prints →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/catalog/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e0ddd6] flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-150"
            >
              {/* Image area */}
              <div className={`${product.bg} h-44 flex items-center justify-center`}>
                {product.icon}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-[#888780]">{product.category}</span>
                  <MaterialBadge material={product.material} />
                </div>
                <h3 className="text-[15px] font-bold text-[#2C2C2A] tracking-tight">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mt-auto pt-2.5 border-t border-[#F1EFE8]">
                  <span className="text-[15px] font-bold text-[#EF9F27]">{product.price}</span>
                  <span className="text-[#D3D1C7] group-hover:text-[#2C2C2A] group-hover:translate-x-0.5 transition-all duration-150">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
