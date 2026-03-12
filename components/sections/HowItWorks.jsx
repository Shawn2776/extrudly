"use client"

const steps = [
  {
    number: "01",
    title: "Choose or upload",
    description:
      "Browse our catalog of ready-to-print designs, or upload your own STL or 3MF file for a custom quote.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="3" width="20" height="22" rx="4" stroke="#EF9F27" strokeWidth="1.5" />
        <line x1="9" y1="9" x2="19" y2="9" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="14" x2="19" y2="14" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="19" x2="14" y2="19" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We print it",
    description:
      "Your order goes straight to our print farm. We use industrial FDM printers with premium filament for every job.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polygon points="14,3 24,9 24,19 14,25 4,19 4,9" stroke="#EF9F27" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="#EF9F27" strokeWidth="1.5" />
        <line x1="14" y1="3" x2="14" y2="10" stroke="#EF9F27" strokeWidth="1.5" />
        <line x1="14" y1="18" x2="14" y2="25" stroke="#EF9F27" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ships to you",
    description:
      "Packaged carefully and shipped within 48 hours. Track your order every step of the way to your door.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="10" width="24" height="15" rx="3" stroke="#EF9F27" strokeWidth="1.5" />
        <path d="M8 10V8a6 6 0 0 1 12 0v2" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="21" r="2" fill="#EF9F27" />
        <circle cx="19" cy="21" r="2" fill="#EF9F27" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="hiw">
      <div className="hiw-inner">
        <div className="hiw-header">
          <span className="section-tag">How it works</span>
          <h2 className="section-heading">Three steps to your print</h2>
          <p className="section-sub">
            From idea to doorstep — no experience needed, no minimum orders.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, i) => (
            <div key={i} className="step">
              <div className="step-top">
                <span className="step-number">{step.number}</span>
                <div className="step-icon">{step.icon}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
              {i < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hiw {
          background: #fff;
          padding: 96px 32px;
        }

        .hiw-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        .hiw-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 520px;
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
          font-size: 16px;
          color: #888780;
          line-height: 1.6;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: #e0ddd6;
          border-radius: 16px;
          overflow: hidden;
        }

        .step {
          background: #fff;
          padding: 40px 36px 48px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .step-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .step-number {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #EF9F27;
        }

        .step-icon {
          width: 52px;
          height: 52px;
          background: #FAEEDA;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-title {
          font-size: 22px;
          font-weight: 700;
          color: #2C2C2A;
          letter-spacing: -0.3px;
        }

        .step-desc {
          font-size: 15px;
          color: #5F5E5A;
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .hiw {
            padding: 64px 24px;
          }

          .steps {
            grid-template-columns: 1fr;
            border-radius: 12px;
          }

          .step {
            padding: 32px 28px;
          }
        }
      `}</style>
    </section>
  )
}
