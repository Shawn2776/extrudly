"use client"

import { useState } from "react"
import Link from "next/link"

const FileIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="2" width="18" height="24" rx="3" fill="#3d3d3a" />
    <polygon points="18,2 26,10 18,10" fill="#2C2C2A" />
    <rect x="18" y="2" width="8" height="8" rx="1" fill="#444441" />
    <line x1="8" y1="14" x2="18" y2="14" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="18" x2="16" y2="18" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="22" x2="14" y2="22" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const UploadIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="19" stroke="#3d3d3a" strokeWidth="1" />
    <path d="M20 26V14M20 14l-5 5M20 14l5 5" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const steps = [
  { label: "Upload your STL or 3MF file" },
  { label: "We review & send you a quote" },
  { label: "Approve — we print & ship" },
]

export default function UploadTeaser() {
  const [dragging, setDragging] = useState(false)

  return (
    <section className="upload">
      <div className="upload-inner">

        <div className="upload-left">
          <span className="section-tag">Custom prints</span>
          <h2 className="upload-heading">
            Have your own<br />
            design?<br />
            <span className="heading-accent">We'll print it.</span>
          </h2>
          <p className="upload-sub">
            Upload any STL or 3MF file and we'll review your design, send
            a quote within a few hours, and get it on the printer within
            24 hours of approval.
          </p>

          <ul className="upload-steps">
            {steps.map((step, i) => (
              <li key={i} className="upload-step">
                <span className="step-dot" />
                <span>{step.label}</span>
              </li>
            ))}
          </ul>

          <div className="upload-actions">
            <Link href="/custom" className="btn-primary">
              Upload your design
            </Link>
            <Link href="/pricing" className="btn-ghost">
              See pricing →
            </Link>
          </div>
        </div>

        <div className="upload-right">
          <div
            className={`drop-zone ${dragging ? "dragging" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false) }}
          >
            <div className="drop-icon">
              <UploadIcon />
            </div>
            <p className="drop-title">Drop your file here</p>
            <p className="drop-sub">or <Link href="/custom" className="drop-link">click to browse</Link></p>
            <div className="drop-formats">
              <span className="format-pill">STL</span>
              <span className="format-pill">3MF</span>
              <span className="format-pill">OBJ</span>
            </div>
          </div>

          <div className="file-examples">
            <p className="file-examples-label">Recent custom orders</p>
            {["bracket_v3.stl", "custom_mount.3mf", "dice_tower.stl"].map((name, i) => (
              <div key={i} className="file-row">
                <FileIcon />
                <div className="file-info">
                  <span className="file-name">{name}</span>
                  <span className="file-status">
                    {i === 0 ? "Printing" : i === 1 ? "Shipped" : "Quoted"}
                  </span>
                </div>
                <span className={`file-badge ${i === 0 ? "badge-printing" : i === 1 ? "badge-shipped" : "badge-quoted"}`}>
                  {i === 0 ? "In progress" : i === 1 ? "Delivered" : "Awaiting approval"}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .upload {
          background: #fff;
          padding: 96px 32px;
          border-top: 0.5px solid #e0ddd6;
        }

        .upload-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .upload-left {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .section-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #EF9F27;
        }

        .upload-heading {
          font-size: clamp(32px, 3.5vw, 52px);
          font-weight: 700;
          letter-spacing: -1.5px;
          color: #2C2C2A;
          line-height: 1.05;
        }

        .heading-accent {
          color: #EF9F27;
        }

        .upload-sub {
          font-size: 16px;
          color: #5F5E5A;
          line-height: 1.65;
          max-width: 400px;
        }

        .upload-steps {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .upload-step {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #2C2C2A;
        }

        .step-dot {
          width: 8px;
          height: 8px;
          background: #EF9F27;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .upload-actions {
          display: flex;
          align-items: center;
          gap: 20px;
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
        }

        .btn-primary:hover {
          background: #1a1a18;
        }

        .btn-primary:active {
          transform: scale(0.98);
        }

        .btn-ghost {
          font-size: 15px;
          font-weight: 600;
          color: #888780;
          text-decoration: none;
          transition: color 0.15s;
        }

        .btn-ghost:hover {
          color: #2C2C2A;
        }

        .upload-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .drop-zone {
          border: 1.5px dashed #D3D1C7;
          border-radius: 16px;
          padding: 48px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          transition: border-color 0.15s, background 0.15s;
          cursor: pointer;
          background: #F1EFE8;
        }

        .drop-zone.dragging {
          border-color: #EF9F27;
          background: #FAEEDA;
        }

        .drop-zone:hover {
          border-color: #EF9F27;
          background: #FAEEDA;
        }

        .drop-icon {
          margin-bottom: 4px;
        }

        .drop-title {
          font-size: 16px;
          font-weight: 700;
          color: #2C2C2A;
        }

        .drop-sub {
          font-size: 14px;
          color: #888780;
        }

        .drop-link {
          color: #EF9F27;
          text-decoration: none;
          font-weight: 600;
        }

        .drop-link:hover {
          text-decoration: underline;
        }

        .drop-formats {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }

        .format-pill {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #633806;
          background: #FAEEDA;
          padding: 4px 12px;
          border-radius: 20px;
        }

        .file-examples {
          background: #F1EFE8;
          border-radius: 14px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border: 0.5px solid #e0ddd6;
        }

        .file-examples-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #888780;
          margin-bottom: 4px;
        }

        .file-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          background: #fff;
          border-radius: 10px;
          border: 0.5px solid #e0ddd6;
        }

        .file-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
          min-width: 0;
        }

        .file-name {
          font-size: 13px;
          font-weight: 600;
          color: #2C2C2A;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .file-status {
          font-size: 12px;
          color: #888780;
        }

        .file-badge {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 20px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .badge-printing {
          background: #FAEEDA;
          color: #633806;
        }

        .badge-shipped {
          background: #E1F5EE;
          color: #085041;
        }

        .badge-quoted {
          background: #E6F1FB;
          color: #0C447C;
        }

        @media (max-width: 900px) {
          .upload-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .upload {
            padding: 64px 24px;
          }
        }
      `}</style>
    </section>
  )
}
