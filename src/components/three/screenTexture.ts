import * as THREE from "three";
import type { Project } from "@/data/projects";

function hexA(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${a})`;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrap(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxW: number, lh: number) {
  const words = text.split(" ");
  let line = "";
  let yy = y;
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, yy);
      line = w;
      yy += lh;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, yy);
  return yy;
}

/** Draws a procedural "app screen" mock for a project. Swap with a real
 *  screenshot later by loading /shots/<id>.png into a texture instead. */
export function makeScreenTexture(project: Project): THREE.CanvasTexture {
  const mobile = project.device === "mobile";
  const w = mobile ? 560 : 1000;
  const h = mobile ? 1180 : 640;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const x = c.getContext("2d")!;
  const accent = project.accent === "accent2" ? "#7fae9b" : "#3ad18a";
  const accent2 = project.accent === "accent2" ? "#3ad18a" : "#7fae9b";
  const pad = mobile ? 40 : 56;

  // base
  const g = x.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, "#0e1512");
  g.addColorStop(1, "#050a07");
  x.fillStyle = g;
  x.fillRect(0, 0, w, h);

  // accent glow
  const rg = x.createRadialGradient(w * 0.82, h * 0.12, 0, w * 0.82, h * 0.12, w * 0.9);
  rg.addColorStop(0, hexA(accent, 0.4));
  rg.addColorStop(1, "transparent");
  x.fillStyle = rg;
  x.fillRect(0, 0, w, h);

  // status / top bar
  x.fillStyle = "rgba(255,255,255,0.55)";
  x.font = "500 20px monospace";
  if (mobile) {
    x.fillText("9:41", pad, pad + 10);
    x.textAlign = "right";
    x.fillText("● ● ●", w - pad, pad + 10);
    x.textAlign = "left";
  } else {
    // browser dots
    for (let i = 0; i < 3; i++) {
      x.beginPath();
      x.arc(pad + 12 + i * 26, pad + 6, 6, 0, Math.PI * 2);
      x.fillStyle = ["#ff5f57", "#febc2e", "#28c840"][i];
      x.fill();
    }
    x.fillStyle = "rgba(255,255,255,0.08)";
    roundRect(x, pad + 110, pad - 10, w - pad * 2 - 110, 32, 16);
    x.fill();
    x.fillStyle = "rgba(255,255,255,0.4)";
    x.font = "400 16px monospace";
    x.fillText(`${project.id}.app`, pad + 128, pad + 12);
  }

  // app label chip
  const topY = mobile ? pad + 70 : pad + 70;
  x.fillStyle = hexA(accent, 0.16);
  roundRect(x, pad, topY, mobile ? 150 : 170, 40, 20);
  x.fill();
  x.fillStyle = accent;
  x.font = "600 18px monospace";
  x.fillText(project.type.toUpperCase(), pad + 20, topY + 26);

  // title
  x.fillStyle = "#f2f2f7";
  const titleSize = mobile ? 52 : 60;
  x.font = `700 ${titleSize}px sans-serif`;
  const afterTitle = wrap(x, project.title, pad, topY + 100, w - pad * 2, titleSize + 8);

  // tagline
  x.fillStyle = "rgba(255,255,255,0.55)";
  x.font = "400 24px sans-serif";
  const afterTag = wrap(x, project.tagline, pad, afterTitle + 50, w - pad * 2, 32);

  // UI cards
  let cy = afterTag + 60;
  const cardH = mobile ? 92 : 80;
  const cols = mobile ? 1 : 2;
  const gap = 20;
  const cardW = (w - pad * 2 - (cols - 1) * gap) / cols;
  project.stack.slice(0, mobile ? 4 : 6).forEach((s, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = pad + col * (cardW + gap);
    const yy = cy + row * (cardH + gap);
    x.fillStyle = "rgba(255,255,255,0.045)";
    roundRect(x, cx, yy, cardW, cardH, 16);
    x.fill();
    x.fillStyle = i % 2 === 0 ? accent : accent2;
    roundRect(x, cx + 20, yy + cardH / 2 - 14, 28, 28, 8);
    x.fill();
    x.fillStyle = "rgba(255,255,255,0.8)";
    x.font = "500 22px sans-serif";
    x.fillText(s, cx + 64, yy + cardH / 2 + 8);
  });
  cy += Math.ceil(Math.min(project.stack.length, mobile ? 4 : 6) / cols) * (cardH + gap);

  // bottom accent bar (like a CTA)
  const barY = h - pad - 70;
  const bg2 = x.createLinearGradient(pad, 0, w - pad, 0);
  bg2.addColorStop(0, accent);
  bg2.addColorStop(1, accent2);
  x.fillStyle = bg2;
  roundRect(x, pad, barY, w - pad * 2, 64, 18);
  x.fill();
  x.fillStyle = "#04140c";
  x.font = "600 24px sans-serif";
  x.textAlign = "center";
  x.fillText(mobile ? "Open app" : "View live", w / 2, barY + 40);
  x.textAlign = "left";

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}
