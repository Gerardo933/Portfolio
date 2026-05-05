'use client';

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

  svg {
    color: #0a0f14;
    background: #ffffff;
    border-radius: 6px;
    padding: 4px;
  }
`;