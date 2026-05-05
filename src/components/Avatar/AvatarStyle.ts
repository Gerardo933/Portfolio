"use client";

import styled from "@emotion/styled";

export const AvatarContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  padding: 4px;

  background: linear-gradient(
    135deg,
    rgba(0, 255, 200, 0.8),
    rgba(0, 140, 255, 0.8)
  );

  box-shadow:
    0 0 20px rgba(0, 255, 200, 0.4),
    inset 0 0 10px rgba(0, 255, 200, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;

  border: 2px solid rgba(10, 15, 20, 0.9);
`;
export const ButtonContact = styled.a`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  position: relative;

  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 200, 255, 0.2);

  cursor: pointer;

  transition: all 0.25s ease;

  /* Glow base */
  box-shadow: 0 0 6px rgba(0, 200, 255, 0.1);

  &:hover {
    border: 1px solid rgba(0, 200, 255, 0.7);

    box-shadow:
      0 0 12px rgba(0, 200, 255, 0.4),
      inset 0 0 8px rgba(0, 200, 255, 0.2);

    transform: translateY(-2px) scale(1.05);
  }

  /* Esquinas estilo HUD */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid rgba(0, 200, 255, 0.7);
  }

  &::before {
    top: -2px;
    left: -2px;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    bottom: -2px;
    right: -2px;
    border-left: none;
    border-top: none;
  }

  img {
    filter: brightness(0) invert(1);
    opacity: 0.85;
    transition: opacity 0.25s ease;
  }

  &:hover img {
    opacity: 1;
  }
`;
export const Card = styled.div`
  width: 280px;
  height: 420px;
  position: relative;

  border-radius: 16px;
  overflow: hidden;

  background: radial-gradient(circle at center, #0a1a24, #050b10);

  box-shadow:
    0 0 25px rgba(0, 200, 255, 0.2),
    inset 0 0 20px rgba(0, 200, 255, 0.1);

  /* Bordes estilo HUD */
  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  );
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;

  background:
    radial-gradient(circle, rgba(0, 200, 255, 0.15) 1px, transparent 1px),
    radial-gradient(circle at center, rgba(0, 200, 255, 0.2), transparent 70%);

  background-size: 40px 40px;

  opacity: 0.4;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 75%;
`;

export const SideGlow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;

  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 200, 255, 0.8),
    transparent
  );

  box-shadow: 0 0 15px rgba(0, 200, 255, 0.6);
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  padding: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-top: 1px solid rgba(0, 200, 255, 0.3);

  background: rgba(0, 10, 15, 0.8);
`;

export const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  background: #00ff88;

  box-shadow: 0 0 8px #00ff88;
`;
