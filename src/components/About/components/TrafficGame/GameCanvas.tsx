import { useEffect, useRef } from 'react';

import { GameState, ObstacleKind } from './types';
import { LANES, PLAYER_WIDTH, PLAYER_HEIGHT } from './constants';

interface Props {
  gameState: GameState;
  width: number;
  height: number;
}

const C = {
  road: '#0e0e12',
  roadEdge: '#1a1a24',
  laneMark: '#2a2a3a',
  laneCenter: '#1e2235',
  playerBody: '#00d4ff',
  playerGlass: '#003340',
  playerLight: '#ffffff',
  carRed: '#ff3a5c',
  carYellow: '#f5c542',
  carBlue: '#4f8ef7',
  pit: '#0a0a0f',
  pitRim: '#ff2020',
  fence: '#c8a04a',
  fencePost: '#8a6820',
  shadow: 'rgba(0,0,0,0.5)',
  scoreText: '#00d4ff',
  speedText: '#f5c542',
};

function roundRectPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawPlayerCar(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, tilt: number) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(tilt * 0.07);

  ctx.fillStyle = C.shadow;
  ctx.beginPath();
  ctx.ellipse(0, h * 0.45, w * 0.45, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = C.playerBody;
  ctx.beginPath();
  roundRectPath(ctx, -w / 2, -h / 2, w, h, 5);
  ctx.fill();

  ctx.fillStyle = C.playerGlass;
  ctx.beginPath();
  roundRectPath(ctx, -w / 2 + 4, -h / 2 + 8, w - 8, h * 0.38, 4);
  ctx.fill();

  ctx.fillStyle = C.playerLight;
  ctx.fillRect(-w / 2 + 3, -h / 2 + 3, 6, 4);
  ctx.fillRect(w / 2 - 9, -h / 2 + 3, 6, 4);

  ctx.fillStyle = '#ff4444';
  ctx.fillRect(-w / 2 + 3, h / 2 - 7, 5, 4);
  ctx.fillRect(w / 2 - 8, h / 2 - 7, 5, 4);

  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, -h / 2 + 4);
  ctx.lineTo(0, h / 2 - 4);
  ctx.stroke();

  ctx.restore();
}

function drawObstacleCar(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number, color: string) {
  ctx.save();
  ctx.translate(cx, cy);

  ctx.fillStyle = C.shadow;
  ctx.beginPath();
  ctx.ellipse(0, h * 0.45, w * 0.42, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = color;
  ctx.beginPath();
  roundRectPath(ctx, -w / 2, -h / 2, w, h, 5);
  ctx.fill();

  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  ctx.beginPath();
  roundRectPath(ctx, -w / 2 + 4, -h / 2 + 10, w - 8, h * 0.35, 3);
  ctx.fill();

  ctx.fillStyle = '#ffee88';
  ctx.fillRect(-w / 2 + 3, h / 2 - 7, 5, 4);
  ctx.fillRect(w / 2 - 8, h / 2 - 7, 5, 4);

  ctx.restore();
}

function drawPit(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number) {
  ctx.save();
  ctx.translate(cx, cy);

  const rx = w * 0.5;
  const ry = h * 0.5;

  const grad = ctx.createRadialGradient(0, 0, 2, 0, 0, rx);
  grad.addColorStop(0, '#200000');
  grad.addColorStop(0.55, C.pit);
  grad.addColorStop(1, 'transparent');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = C.pitRim;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(0, 0, rx * 0.85, ry * 0.85, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#040406';
  ctx.beginPath();
  ctx.ellipse(0, 0, rx * 0.65, ry * 0.65, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255,32,32,0.55)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI) / 2 + Math.PI / 4);
    ctx.beginPath();
    ctx.moveTo(rx * 0.3, 0);
    ctx.lineTo(rx * 0.78, 0);
    ctx.stroke();
    ctx.restore();
  }

  ctx.restore();
}

function drawFence(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number) {
  const x = cx - w / 2;
  const y = cy - h / 2;

  ctx.save();
  ctx.translate(x, y);

  ctx.strokeStyle = C.fence;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(0, h * 0.2);
  ctx.lineTo(w, h * 0.2);
  ctx.moveTo(0, h * 0.8);
  ctx.lineTo(w, h * 0.8);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(200,160,74,0.35)';
  ctx.lineWidth = 1;
  const segments = 6;
  const segW = w / segments;
  for (let i = 0; i < segments; i++) {
    ctx.beginPath();
    ctx.moveTo(i * segW, h * 0.2);
    ctx.lineTo((i + 1) * segW, h * 0.8);
    ctx.stroke();
  }

  const posts = 2;
  for (let i = 0; i <= posts; i++) {
    const px = (i / posts) * w - 2.5;
    ctx.fillStyle = C.fencePost;
    ctx.fillRect(px, 0, 5, h);
    ctx.fillStyle = '#f5c542';
    ctx.fillRect(px, h * 0.15, 5, h * 0.2);
  }

  ctx.restore();
}

const OBSTACLE_COLOR: Partial<Record<ObstacleKind, string>> = {
  car_red: C.carRed,
  car_yellow: C.carYellow,
  car_blue: C.carBlue,
};

export default function GameCanvas({ gameState, width, height }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const laneW = width / LANES;
    const playerY = height - PLAYER_HEIGHT - 20;

    ctx.fillStyle = C.road;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = C.roadEdge;
    ctx.fillRect(0, 0, 6, height);
    ctx.fillRect(width - 6, 0, 6, height);

    ctx.strokeStyle = C.laneMark;
    ctx.lineWidth = 1;
    ctx.setLineDash([24, 18]);
    for (let l = 1; l < LANES; l++) {
      ctx.lineDashOffset = -gameState.roadOffset;
      ctx.beginPath();
      ctx.moveTo(l * laneW, 0);
      ctx.lineTo(l * laneW, height);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    ctx.strokeStyle = C.laneCenter;
    ctx.lineWidth = 0.5;
    for (let l = 0; l < LANES; l++) {
      const cx2 = l * laneW + laneW / 2;
      ctx.beginPath();
      ctx.moveTo(cx2, 0);
      ctx.lineTo(cx2, height);
      ctx.stroke();
    }

    for (const obs of gameState.obstacles) {
      const { pixelX: ox, y: oy, width: ow, height: oh, kind } = obs;
      if (kind === 'pit') {
        drawPit(ctx, ox, oy, ow, oh);
      } else if (kind === 'fence') {
        drawFence(ctx, ox, oy, ow, oh);
      } else {
        drawObstacleCar(ctx, ox, oy, ow, oh, OBSTACLE_COLOR[kind] ?? C.carRed);
      }
    }

    const tilt =
      gameState.playerX < gameState.playerTargetX - 1 ? 1 : gameState.playerX > gameState.playerTargetX + 1 ? -1 : 0;
    drawPlayerCar(ctx, gameState.playerX, playerY, PLAYER_WIDTH, PLAYER_HEIGHT, tilt);

    if (gameState.phase === 'playing') {
      ctx.font = 'bold 11px "Courier New", monospace';
      ctx.fillStyle = C.scoreText;
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE  ${gameState.score}`, 12, 18);
      ctx.fillStyle = C.speedText;
      ctx.textAlign = 'right';
      ctx.fillText(`SPD  ${gameState.speed.toFixed(1)}`, width - 12, 18);
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ display: 'block', width, height }}
    />
  );
}
