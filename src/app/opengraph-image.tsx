import { ImageResponse } from "next/og";

export const alt = "Audacious Dreams Foundation - Youth Development & Global Institutional Engagement";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B1220",
          color: "#F6F3EE",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Hairline grid border effect */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: "1px solid rgba(246, 243, 238, 0.15)",
            pointerEvents: "none",
          }}
        />

        {/* Top bar: Monogram badge + institutional tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                border: "1px solid rgba(246, 243, 238, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 700,
                color: "#F2A900",
                letterSpacing: 2,
              }}
            >
              ADF
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "#F6F3EE",
                }}
              >
                Audacious Dreams
              </span>
              <span
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  color: "rgba(246, 243, 238, 0.6)",
                }}
              >
                Foundation
              </span>
            </div>
          </div>
          <div
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#F2A900",
              border: "1px solid rgba(242, 169, 0, 0.4)",
              padding: "6px 14px",
            }}
          >
            Since 2007 · Vellore, India
          </div>
        </div>

        {/* Center: Major headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 960,
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#F6F3EE",
            }}
          >
            Empowering Youth. Enabling Opportunities. Building a Sustainable Future.
          </div>
          <div
            style={{
              fontSize: 20,
              lineHeight: 1.5,
              color: "rgba(246, 243, 238, 0.75)",
              marginTop: 10,
            }}
          >
            A youth development organisation equipping young people with knowledge, skills,
            and international engagement for sustainable impact.
          </div>
        </div>

        {/* Bottom stats row */}
        <div
          style={{
            display: "flex",
            borderTop: "1px solid rgba(246, 243, 238, 0.2)",
            paddingTop: 24,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: "#F2A900" }}>200+</span>
            <span style={{ fontSize: 13, color: "rgba(246, 243, 238, 0.7)", letterSpacing: 1 }}>
              Institutions Engaged
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: "#F2A900" }}>80+</span>
            <span style={{ fontSize: 13, color: "rgba(246, 243, 238, 0.7)", letterSpacing: 1 }}>
              Signed MOUs
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: "#F2A900" }}>3,000+</span>
            <span style={{ fontSize: 13, color: "rgba(246, 243, 238, 0.7)", letterSpacing: 1 }}>
              International Delegates
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: "#F2A900" }}>5+</span>
            <span style={{ fontSize: 13, color: "rgba(246, 243, 238, 0.7)", letterSpacing: 1 }}>
              Global Countries
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
