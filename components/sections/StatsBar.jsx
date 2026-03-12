"use client";

const stats = [
  { number: "2K+", label: "Prints shipped" },
  { number: "48hr", label: "Average turnaround" },
  { number: "15+", label: "Materials available" },
  { number: "100%", label: "Quality guaranteed" },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-inner">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .stats-bar {
          background: #2c2c2a;
          border-top: 0.5px solid #3d3d3a;
          border-bottom: 0.5px solid #3d3d3a;
        }

        .stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 32px 24px;
          border-right: 0.5px solid #3d3d3a;
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -1.5px;
          color: #ef9f27;
          line-height: 1;
        }

        .stat-label {
          font-size: 13px;
          color: #888780;
          letter-spacing: 0.2px;
        }

        @media (max-width: 768px) {
          .stats-inner {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 24px;
          }

          .stat-item:nth-child(2) {
            border-right: none;
          }

          .stat-item:nth-child(1),
          .stat-item:nth-child(2) {
            border-bottom: 0.5px solid #3d3d3a;
          }

          .stat-item {
            padding: 24px 16px;
          }
        }
      `}</style>
    </section>
  );
}
