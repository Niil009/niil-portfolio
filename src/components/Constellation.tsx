"use client";

import { useMemo, useState } from "react";
import { skillDomains } from "@/data/skills";
import { profile } from "@/data/profile";

const CX = 500;
const CY = 500;
const R = 275; // primary node ring radius
const LV = 98; // vector fan radius around a node

type Node = ReturnType<typeof buildNodes>[number];

function buildNodes() {
  return skillDomains.map((d, i) => {
    const deg = -90 + i * 45;
    const a = (deg * Math.PI) / 180;
    const x = CX + R * Math.cos(a);
    const y = CY + R * Math.sin(a);
    const outward = deg; // direction pointing away from center
    const n = d.vectors.length;
    const spread = Math.min(150, n * 28);
    const vectors = d.vectors.map((label, j) => {
      const va = ((outward + (j - (n - 1) / 2) * (spread / Math.max(1, n - 1))) * Math.PI) / 180;
      return {
        label,
        x: x + LV * Math.cos(va),
        y: y + LV * Math.sin(va),
      };
    });
    return { ...d, i, deg, x, y, vectors };
  });
}

export function Constellation() {
  const nodes = useMemo(buildNodes, []);
  const [active, setActive] = useState<number | null>(null);
  const activeNode: Node | null = active === null ? null : nodes[active];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(auto,42rem)]">
      {/* Left: heading + live readout */}
      <div className="max-w-lg">
        <h2 className="display text-[clamp(2.2rem,5vw,4rem)] text-ink">
          Every layer of the stack.
        </h2>
        <p className="mt-6 max-w-md text-muted">
          Eight domains, one engineer. Hover a node to light up the tools I ship with —
          or tap, on mobile.
        </p>

        <div className="mt-8 h-[4.5rem]">
          {activeNode ? (
            <div key={activeNode.key} className="animate-[fadeUp_0.4s_ease]">
              <div className="flex items-center gap-3">
                <span className="dot h-2 w-2 rounded-full bg-accent text-accent" />
                <span className="label !text-accent">
                  {activeNode.label} · {activeNode.vectors.length} VECTORS
                </span>
              </div>
              <p className="mt-2 text-sm text-ink/80">{activeNode.blurb}</p>
            </div>
          ) : (
            <p className="label">▸ VECTOR GRAPH · {skillDomains.length} DOMAINS</p>
          )}
        </div>
      </div>

      {/* Right: the graph */}
      <div className="relative mx-auto aspect-square w-full max-w-[42rem]">
        <svg
          viewBox="0 0 1000 1000"
          className="h-full w-full overflow-visible"
          onMouseLeave={() => setActive(null)}
        >
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(127,174,155,0.55)" />
              <stop offset="45%" stopColor="rgba(58,209,138,0.14)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="soft" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          {/* concentric rings */}
          {[120, 200, R].map((r) => (
            <circle key={r} cx={CX} cy={CY} r={r} className="fill-none stroke-line" strokeWidth={1} />
          ))}

          {/* rotating dashed ring */}
          <g className="spin-slow" style={{ transformOrigin: "500px 500px" }}>
            <circle
              cx={CX}
              cy={CY}
              r={238}
              className="fill-none stroke-line"
              strokeWidth={1}
              strokeDasharray="2 14"
            />
          </g>

          {/* center glow + monogram */}
          <circle cx={CX} cy={CY} r={150} fill="url(#coreGlow)" className="pulse-glow" />
          <text
            x={CX}
            y={CY}
            textAnchor="middle"
            dominantBaseline="central"
            className="display"
            fill="#ededf2"
            fontSize={64}
          >
            {profile.monogram}
          </text>

          {/* spokes */}
          {nodes.map((node) => {
            const on = active === node.i;
            return (
              <line
                key={`spoke-${node.key}`}
                x1={CX}
                y1={CY}
                x2={node.x}
                y2={node.y}
                stroke={on ? "var(--color-accent)" : "var(--color-line)"}
                strokeWidth={on ? 1.5 : 1}
                style={{ transition: "stroke 0.3s" }}
              />
            );
          })}

          {/* active domain's vectors */}
          {activeNode && (
            <g className="animate-[fadeUp_0.35s_ease]">
              {activeNode.vectors.map((v, j) => {
                const left = v.x < CX;
                return (
                  <g key={`${activeNode.key}-v-${j}`}>
                    <line
                      x1={activeNode.x}
                      y1={activeNode.y}
                      x2={v.x}
                      y2={v.y}
                      stroke="rgba(58,209,138,0.4)"
                      strokeWidth={1}
                    />
                    <circle cx={v.x} cy={v.y} r={3} fill="var(--color-accent)" />
                    <text
                      x={v.x + (left ? -10 : 10)}
                      y={v.y}
                      textAnchor={left ? "end" : "start"}
                      dominantBaseline="central"
                      fontFamily="var(--font-mono)"
                      fontSize={15}
                      letterSpacing="1"
                      fill="#cfcfe0"
                    >
                      {v.label}
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {/* primary nodes */}
          {nodes.map((node) => {
            const on = active === node.i;
            const dim = active !== null && !on;
            const left = node.x < CX - 5;
            const labelX = node.x + (left ? -16 : node.x > CX + 5 ? 16 : 0);
            const anchor = left ? "end" : node.x > CX + 5 ? "start" : "middle";
            return (
              <g
                key={node.key}
                style={{ opacity: dim ? 0.3 : 1, transition: "opacity 0.3s", cursor: "pointer" }}
                onMouseEnter={() => setActive(node.i)}
                onClick={() => setActive((p) => (p === node.i ? null : node.i))}
              >
                {/* hit area */}
                <circle cx={node.x} cy={node.y} r={54} fill="transparent" />
                {on && <circle cx={node.x} cy={node.y} r={20} fill="var(--color-accent)" filter="url(#soft)" opacity={0.5} />}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={on ? 7 : 5}
                  fill={on ? "var(--color-accent)" : "#d7d7e2"}
                  style={{ transition: "r 0.25s" }}
                />
                {!on && (
                  <text
                    x={labelX}
                    y={node.y + (node.deg === 90 ? 30 : node.deg === -90 ? -22 : 0)}
                    textAnchor={anchor}
                    dominantBaseline="central"
                    fontFamily="var(--font-mono)"
                    fontSize={17}
                    letterSpacing="2"
                    fill="#8a8a97"
                  >
                    {node.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
