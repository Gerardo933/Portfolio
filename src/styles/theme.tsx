"use client";
import { Global, css } from "@emotion/react";
export const theme = {
  colors: {
    bg: "#0a0f14",
    panel: "#131c26",
    panel_w: "white",
    panelSoft: "#0f1620",
    accent: "#00e5ff",
    accentSoft: "#00bcd4",
    accentGlow: "rgba(0,229,255,0.35)",
    important_title: "#DA2528",
    text: "#e6f1ff",
    textDim: "#8aa0b3",
    textMuted: "#5f7385",
    sub_frame: "#FF94AD",
    success: "#00ff9c",
    warning: "#ffcc00",
    error: "#ff4d6d",
  },
  fonts: {
    body: "'Inter', sans-serif",
    title: "'Orbitron', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  backGrounds: {
    blueHard: 'linear-gradient(0deg, rgba(0, 255, 200, 0.8), rgba(0, 140, 255, 0.8))',
    yellow: "linear-gradient(0deg,rgba(42, 123, 155, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(221, 244, 156, 0.69) 100%)",
    cyan: "linear-gradient(0deg,rgba(42, 123, 155, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(148, 251, 255, 0.69) 100%)",
    green:
      "linear-gradient(0deg,rgba(42, 123, 155, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(219, 255, 148, 0.69) 100%)",
  },
};

// src/app/globalStyles.tsx

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      body {
        background: #0a0f14;
      }
    `}
  />
);
