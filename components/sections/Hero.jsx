"use client"

import Link from "next/link"

const PrintProgress = () => (
  <div className="print-visual">
    <svg width="260" height="340" viewBox="0 0 260 340" fill="none">
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
      <polygon points="86,56 174,56 190,80 174,104 86,104 70,80" fill="none" stroke="#EF9F27" strokeWidth="1" opacity="0.4" />
      <circle cx="130" cy="80" r="10" fill="#1a1a18" />
      <circle cx="130" cy="80" r="6" fill="#2C2C2A" />

      {/* Barrel */}
      <rect x="110" y="104" width="40" height="20" rx="2" fill="#2C2C2A" />
      <rect x="110" y="104" width="8" height="20" fill="#1a1a18" opacity="0.5" />
      <rect x="142" y="104" width="8" height="20" fill="#666663" opacity="0.2" />

      {/* Taper */}
      <polygon points="110,124 150,124 143,150 117,150" fill="#2C2C2A" />
      <polygon points="110,124 117,124 117,150 110,124" fill="#1a1a18" opacity="0.4" />
      <polygon points="143,124 150,124 143,150" fill="#666663" opacity="0.2" />

      {/* Tip */}
      <rect x="121" y="150" width="18" height="8" rx="2" fill="#1a1a18" />
      <ellipse cx="130" cy="160" rx="4" ry="2.5" fill="#111110" />

      {/* Drop */}
      <path d="M121,162 Q118,188 130,198 Q142,188 139,162 Z" fill="#EF9F27" />
      <ellipse cx="125" cy="176" rx="3" ry="7" fill="#FAC775" opacity="0.45" />

      {/* Print bed */}
      <rect x="30" y="230" width="200" height="6" rx="3" fill="#3d3d3a" />

      {/* Printed object layers on bed */}
      <rect x="70" y="214" width="120" height="16" rx="2" fill="#444441" />
      <rect x="74" y="202" width="112" height="13" rx="2" fill="#3d3d3a" />
      <rect x="78" y="191" width="104" height="12" rx="2" fill="#444441" />
      <rect x="82" y="181" width="96" height="11" rx="2" fill="#3d3d3a" />
      <rect x="86" y="172" width="88" height="10" rx="2" fill="#EF9F27" opacity="0.9" />

      {/* Progress bar */}
      <rect x="30" y="258" width="200" height="6" rx="3" fill="#e0ddd6" />
      <rect x="30" y="258" width="140" height="6" rx="3" fill="#EF9F27" />
      <circle cx="170" cy="261" r="5" fill="#EF9F27" />

      {/* Labels */}
      <text x="130" y="282" textAnchor="middle" fontFamily="'DM Sans', Arial, sans-serif" fontSize="12" fill="#888780">Layer 47 of 60</text>
      <text x="130" y="300" textAnchor="middle" fontFamily="'DM Sans', Arial, sans-serif" fontSize="11" fill="#5F5E5A">PLA+ Charcoal — 0.2mm</text>
      <text x="130" y="318" textAnchor="middle" fontFamily="'DM Sans', Arial, sans-serif" fontSize="11" fill="#EF9F27">Est. 14 min remaining</text>
    </svg>

    <style jsx>{`
      .print-visual {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="tag-dot" />
            3D print on demand
          </div>

          <h1 className="hero-heading">
            Your idea,<br />
            <span className="hero-accent">printed</span> &amp;<br />
            shipped.
          </h1>

          <p className="hero-sub">
            Browse our catalog or upload your own design. We print in
            high-quality filament and ship straight to your door — usually
            within 48 hours.
          </p>

          <div className="hero-actions">
            <Link href="/catalog" className="btn-primary">
              Browse catalog
            </Link>
            <Link href="/custom" className="btn-secondary">
              Upload a design
            </Link>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-check">✓</span>
              <span>PLA, PETG, CF &amp; more</span>
            </div>
            <div className="trust-item">
              <span className="trust-check">✓</span>
              <span>Ships in 48hrs</span>
            </div>
            <div className="trust-item">
              <span className="trust-check">✓</span>
              <span>Custom uploads welcome</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-label">
              <span className="live-dot" />
              Printing now
            </div>
            <PrintProgress />
          </div>
          <div className="hero-blob" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: #fff;
          overflow: hidden;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 32px 96px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FAEEDA;
          color: #633806;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 20px;
          width: fit-content;
        }

        .tag-dot {
          width: 6px;
          height: 6px;
          background: #EF9F27;
          border-radius: 50%;
          display: inline-block;
        }

        .hero-heading {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -2px;
          color: #2C2C2A;
        }

        .hero-accent {
          color: #EF9F27;
        }

        .hero-sub {
          font-size: 18px;
          color: #5F5E5A;
          line-height: 1.65;
          max-width: 420px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #2C2C2A;
          color: #fff;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          transition: background 0.15s, transform 0.1s;
          letter-spacing: -0.2px;
        }

        .btn-primary:hover {
          background: #1a1a18;
        }

        .btn-primary:active {
          transform: scale(0.98);
        }

        .btn-secondary {
          background: transparent;
          color: #2C2C2A;
          text-decoration: none;
          padding: 13px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          border: 1.5px solid #2C2C2A;
          transition: background 0.15s, border-color 0.15s, transform 0.1s;
        }

        .btn-secondary:hover {
          background: #F1EFE8;
        }

        .btn-secondary:active {
          transform: scale(0.98);
        }

        .hero-trust {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #5F5E5A;
        }

        .trust-check {
          color: #EF9F27;
          font-weight: 700;
          font-size: 14px;
        }

        .hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-blob {
          position: absolute;
          width: 380px;
          height: 380px;
          background: #F1EFE8;
          border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
          z-index: 0;
        }

        .hero-card {
          position: relative;
          z-index: 1;
          background: #fff;
          border: 0.5px solid #e0ddd6;
          border-radius: 20px;
          padding: 24px;
          width: 310px;
        }

        .hero-card-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #5F5E5A;
          margin-bottom: 8px;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #EF9F27;
          border-radius: 50%;
          animation: pulse 1.8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding: 48px 24px 64px;
            gap: 48px;
          }

          .hero-right {
            order: -1;
          }

          .hero-blob {
            width: 280px;
            height: 280px;
          }

          .hero-card {
            width: 260px;
          }
        }
      `}</style>
    </section>
  )
}
