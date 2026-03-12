"use client"

import Link from "next/link"

const products = [
  {
    id: 1,
    title: "MagSafe desk stand",
    category: "Desk & workspace",
    price: "From $12.00",
    material: "PLA+",
    color: "#F1EFE8",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="16" y="28" width="40" height="26" rx="5" fill="#3d3d3a" />
        <rect x="24" y="18" width="24" height="12" rx="3" fill="#2C2C2A" />
        <rect x="28" y="54" width="6" height="10" rx="2" fill="#2C2C2A" />
        <rect x="38" y="54" width="6" height="10" rx="2" fill="#2C2C2A" />
        <rect x="20" y="64" width="32" height="4" rx="2" fill="#1a1a18" />
        <circle cx="30" cy="41" r="5" fill="none" stroke="#EF9F27" strokeWidth="1.5" />
        <circle cx="30" cy="41" r="2" fill="#EF9F27" />
        <rect x="38" y="37" width="12" height="8" rx="2" fill="#444441" />
        <line x1="40" y1="40" x2="48" y2="40" stroke="#EF9F27" strokeWidth="1" opacity="0.6" />
        <line x1="40" y1="43" x2="46" y2="43" stroke="#EF9F27" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Commander deck box",
    category: "Tabletop gaming",
    price: "From $28.00",
    material: "PETG",
    color: "#FAEEDA",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="10" y="22" width="52" height="34" rx="6" fill="#BA7517" />
        <rect x="10" y="22" width="52" height="8" rx="6" fill="#854F0B" />
        <rect x="14" y="34" width="10" height="14" rx="2" fill="#EF9F27" opacity="0.8" />
        <rect x="27" y="34" width="10" height="14" rx="2" fill="#EF9F27" opacity="0.8" />
        <rect x="40" y="34" width="10" height="14" rx="2" fill="#EF9F27" opacity="0.8" />
        <rect x="53" y="34" width="4" height="14" rx="2" fill="#EF9F27" opacity="0.5" />
        <rect x="14" y="50" width="49" height="3" rx="1" fill="#FAC775" opacity="0.4" />
        <polygon points="32,56 40,56 38,64 34,64" fill="#BA7517" />
        <rect x="28" y="64" width="16" height="4" rx="2" fill="#854F0B" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Cable clip organizer",
    category: "Home organization",
    price: "From $6.00",
    material: "PLA",
    color: "#F1EFE8",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="26" y="12" width="20" height="48" rx="6" fill="#3d3d3a" />
        <rect x="30" y="18" width="12" height="28" rx="2" fill="#2C2C2A" />
        <circle cx="36" cy="54" r="4" fill="#EF9F27" />
        <rect x="18" y="60" width="36" height="6" rx="3" fill="#444441" />
        <path d="M20 30 Q14 30 14 36 Q14 42 20 42" stroke="#EF9F27" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M52 30 Q58 30 58 36 Q58 42 52 42" stroke="#EF9F27" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Wall mount hook set",
    category: "Home organization",
    price: "From $8.00",
    material: "PLA+",
    color: "#F1EFE8",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="20" y="14" width="32" height="8" rx="3" fill="#3d3d3a" />
        <rect x="24" y="10" width="6" height="6" rx="2" fill="#2C2C2A" />
        <rect x="42" y="10" width="6" height="6" rx="2" fill="#2C2C2A" />
        <path d="M28 22 L28 44 Q28 54 38 54 Q48 54 48 44 L48 38" stroke="#444441" strokeWidth="6" fill="none" strokeLinecap="round" />
        <circle cx="48" cy="34" r="5" fill="none" stroke="#EF9F27" strokeWidth="2" />
        <line x1="34" y1="22" x2="34" y2="38" stroke="#2C2C2A" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Dice tray insert",
    category: "Tabletop gaming",
    price: "From $16.00",
    material: "PETG",
    color: "#FAEEDA",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="10" y="18" width="52" height="40" rx="6" fill="#BA7517" />
        <rect x="14" y="22" width="44" height="32" rx="4" fill="#854F0B" />
        <rect x="18" y="26" width="16" height="12" rx="3" fill="#EF9F27" opacity="0.7" />
        <rect x="38" y="26" width="16" height="12" rx="3" fill="#EF9F27" opacity="0.7" />
        <rect x="18" y="42" width="36" height="8" rx="3" fill="#EF9F27" opacity="0.5" />
        <circle cx="22" cy="30" r="2" fill="#854F0B" />
        <circle cx="30" cy="30" r="2" fill="#854F0B" />
        <circle cx="26" cy="34" r="2" fill="#854F0B" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Phone stand",
    category: "Desk & workspace",
    price: "From $9.00",
    material: "PLA+",
    color: "#F1EFE8",
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none">
        <rect x="24" y="10" width="24" height="40" rx="5" fill="#3d3d3a" />
        <rect x="28" y="15" width="16" height="26" rx="2" fill="#2C2C2A" />
        <circle cx="36" cy="46" r="3" fill="#EF9F27" />
        <path d="M18 50 L24 50 L24 58 L48 58 L48 50 L54 50" stroke="#444441" strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="20" y="58" width="32" height="5" rx="2" fill="#2C2C2A" />
      </svg>
    ),
  },
]

const MaterialBadge = ({ material }) => (
  <span className="material-badge">
    {material}
    <style jsx>{`
      .material-badge {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #633806;
        background: #FAEEDA;
        padding: 3px 10px;
        border-radius: 20px;
      }
    `}</style>
  </span>
)

export default function CatalogPreview() {
  return (
    <section className="catalog">
      <div className="catalog-inner">
        <div className="catalog-header">
          <div className="catalog-header-left">
            <span className="section-tag">Featured prints</span>
            <h2 className="section-heading">Ready to order</h2>
            <p className="section-sub">
              Professionally printed, quality checked, and shipped fast.
              Browse the full catalog for 50+ designs.
            </p>
          </div>
          <Link href="/catalog" className="catalog-browse-btn">
            Browse all prints →
          </Link>
        </div>

        <div className="catalog-grid">
          {products.map((product) => (
            <Link href={`/catalog/${product.id}`} key={product.id} className="product-card">
              <div className="product-img" style={{ background: product.color }}>
                {product.icon}
              </div>
              <div className="product-body">
                <div className="product-meta">
                  <span className="product-category">{product.category}</span>
                  <MaterialBadge material={product.material} />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <span className="product-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .catalog {
          background: #F1EFE8;
          padding: 96px 32px;
        }

        .catalog-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .catalog-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .catalog-header-left {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 480px;
        }

        .section-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #EF9F27;
        }

        .section-heading {
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 700;
          letter-spacing: -1px;
          color: #2C2C2A;
          line-height: 1.1;
        }

        .section-sub {
          font-size: 15px;
          color: #888780;
          line-height: 1.6;
        }

        .catalog-browse-btn {
          font-size: 14px;
          font-weight: 700;
          color: #2C2C2A;
          text-decoration: none;
          padding: 12px 24px;
          border: 1.5px solid #2C2C2A;
          border-radius: 10px;
          white-space: nowrap;
          transition: background 0.15s, color 0.15s;
          flex-shrink: 0;
        }

        .catalog-browse-btn:hover {
          background: #2C2C2A;
          color: #fff;
        }

        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .product-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 0.5px solid #e0ddd6;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: transform 0.15s, box-shadow 0.15s;
        }

        .product-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(44, 44, 42, 0.08);
        }

        .product-img {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 0.5px solid #e0ddd6;
        }

        .product-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .product-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .product-category {
          font-size: 12px;
          color: #888780;
          letter-spacing: 0.3px;
        }

        .product-title {
          font-size: 16px;
          font-weight: 700;
          color: #2C2C2A;
          letter-spacing: -0.2px;
          line-height: 1.3;
        }

        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 8px;
          border-top: 0.5px solid #F1EFE8;
        }

        .product-price {
          font-size: 15px;
          font-weight: 700;
          color: #EF9F27;
        }

        .product-arrow {
          font-size: 16px;
          color: #D3D1C7;
          transition: color 0.15s, transform 0.15s;
        }

        .product-card:hover .product-arrow {
          color: #2C2C2A;
          transform: translateX(3px);
        }

        @media (max-width: 900px) {
          .catalog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .catalog {
            padding: 64px 24px;
          }

          .catalog-grid {
            grid-template-columns: 1fr;
          }

          .catalog-browse-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
