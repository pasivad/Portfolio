import { useCallback, useEffect, useRef, useState } from 'react';

import { GameState, Obstacle, ObstacleKind } from '../types';
import { LANES, PLAYER_WIDTH, PLAYER_HEIGHT, INITIAL_SPEED, SPEED_INCREMENT, OBSTACLE_INTERVAL } from '../constants';

const OBSTACLE_KINDS: ObstacleKind[] = ['car_red', 'car_yellow', 'car_blue', 'pit', 'fence'];
const OBSTACLE_WEIGHTS = [0.3, 0.25, 0.25, 0.1, 0.1];

function weightedRandom(weights: number[]) {
  const r = Math.random();
  let acc = 0;
  for (let i = 0; i < weights.length; i++) {
    acc += weights[i];
    if (r < acc) return i;
  }
  return weights.length - 1;
}

function spawnObstacle(canvasWidth: number, id: number, existing: Obstacle[]): Obstacle | null {
  const laneW = canvasWidth / LANES;
  const kindIdx = weightedRandom(OBSTACLE_WEIGHTS);
  const kind = OBSTACLE_KINDS[kindIdx];
  const isFence = kind === 'fence';

  const sizes: Record<ObstacleKind, { w: number; h: number }> = {
    car_red: { w: 26, h: 46 },
    car_yellow: { w: 24, h: 42 },
    car_blue: { w: 28, h: 48 },
    pit: { w: 32, h: 26 },
    fence: { w: laneW * 2, h: 18 },
  };
  const { w, h } = sizes[kind];

  const fenceStartLane = Math.floor(Math.random() * (LANES - 1));
  const lane = isFence ? fenceStartLane : Math.floor(Math.random() * LANES);

  const pixelX = isFence ? (fenceStartLane + 1) * laneW : lane * laneW + laneW / 2;

  const halfW = w / 2;
  for (const obs of existing) {
    if (obs.y < 140 && Math.abs(obs.pixelX - pixelX) < halfW + obs.width / 2 - 6) {
      return null;
    }
  }

  return { id, kind, lane, pixelX, y: -h - 4, width: w, height: h };
}

function initialState(canvasWidth: number): GameState {
  const laneW = canvasWidth / LANES;
  const startLane = 2;
  const startX = startLane * laneW + laneW / 2;
  return {
    phase: 'idle',
    countdown: 3,
    score: 0,
    speed: INITIAL_SPEED,
    playerLane: startLane,
    playerX: startX,
    playerTargetX: startX,
    obstacles: [],
    roadOffset: 0,
    frameCount: 0,
    lastObstacleFrame: 0,
  };
}

export function useGameLoop(canvasWidth: number, canvasHeight: number, onGameOver: (score: number) => void) {
  const [state, setState] = useState<GameState>(() => initialState(canvasWidth));
  const stateRef = useRef<GameState>(state);
  const tickRef = useRef<FrameRequestCallback>(() => {});
  const rafRef = useRef<number | null>(null);
  const countdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const obsIdRef = useRef(0);
  const canvasWidthRef = useRef(canvasWidth);
  const canvasHeightRef = useRef(canvasHeight);
  const onGameOverRef = useRef(onGameOver);
  useEffect(() => {
    canvasWidthRef.current = canvasWidth;
  }, [canvasWidth]);
  useEffect(() => {
    canvasHeightRef.current = canvasHeight;
  }, [canvasHeight]);
  useEffect(() => {
    onGameOverRef.current = onGameOver;
  }, [onGameOver]);

  const movePlayer = useCallback((dir: -1 | 1) => {
    const s = stateRef.current;
    if (s.phase !== 'playing') return;
    const laneW = canvasWidthRef.current / LANES;
    const newLane = Math.max(0, Math.min(LANES - 1, s.playerLane + dir));
    const next = { ...s, playerLane: newLane, playerTargetX: newLane * laneW + laneW / 2 };
    stateRef.current = next;
    setState(next);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') movePlayer(-1);
      if (e.key === 'ArrowRight') movePlayer(1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [movePlayer]);

  const touchStartX = useRef<number | null>(null);
  useEffect(() => {
    const ts = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const te = (e: TouchEvent) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 20) movePlayer(dx > 0 ? 1 : -1);
      touchStartX.current = null;
    };
    window.addEventListener('touchstart', ts, { passive: true });
    window.addEventListener('touchend', te, { passive: true });
    return () => {
      window.removeEventListener('touchstart', ts);
      window.removeEventListener('touchend', te);
    };
  }, [movePlayer]);

  // ── tick — assigned to ref each render so it always sees fresh state ─────
  // We do NOT use useCallback here intentionally; the ref pattern avoids the
  // "tick accessed before declaration" ESLint error and stale-closure bugs.
  useEffect(() => {
    tickRef.current = () => {
      const s = stateRef.current;
      if (s.phase !== 'playing') return;

      const W = canvasWidthRef.current;
      const H = canvasHeightRef.current;
      const playerY = H - PLAYER_HEIGHT - 20;

      const newPlayerX = s.playerX + (s.playerTargetX - s.playerX) * 0.18;

      const newRoadOffset = (s.roadOffset + s.speed) % 42;

      let dodged = 0;
      const newObstacles: Obstacle[] = [];
      for (const o of s.obstacles) {
        const moved = { ...o, y: o.y + s.speed };
        if (moved.y - o.height / 2 > H) {
          dodged++;
        } else {
          newObstacles.push(moved);
        }
      }

      const newScore = s.score + dodged;

      const newSpeed = INITIAL_SPEED + Math.floor(newScore / 5) * SPEED_INCREMENT;

      const spawnInterval = Math.max(28, OBSTACLE_INTERVAL - Math.floor(newScore / 3));
      const newFrame = s.frameCount + 1;
      let newLastObstacleFrame = s.lastObstacleFrame;
      if (newFrame - s.lastObstacleFrame >= spawnInterval) {
        newLastObstacleFrame = newFrame;
        const obs = spawnObstacle(W, obsIdRef.current++, newObstacles);
        if (obs) {
          newObstacles.push(obs);
          if (Math.random() < 0.3) {
            const extra = spawnObstacle(W, obsIdRef.current++, newObstacles);
            if (extra) newObstacles.push(extra);
          }
        }
      }

      const pw2 = PLAYER_WIDTH / 2 - 3;
      const ph2 = PLAYER_HEIGHT / 2 - 5;
      for (const obs of newObstacles) {
        const ow2 = obs.width / 2 - 2;
        const oh2 = obs.height / 2 - 2;
        if (Math.abs(newPlayerX - obs.pixelX) < pw2 + ow2 && Math.abs(playerY - obs.y) < ph2 + oh2) {
          const final: GameState = {
            ...s,
            phase: 'gameover',
            score: newScore,
            obstacles: newObstacles,
            playerX: newPlayerX,
          };
          stateRef.current = final;
          setState(final);
          onGameOverRef.current(newScore);
          return;
        }
      }

      const next: GameState = {
        ...s,
        playerX: newPlayerX,
        roadOffset: newRoadOffset,
        obstacles: newObstacles,
        score: newScore,
        speed: newSpeed,
        frameCount: newFrame,
        lastObstacleFrame: newLastObstacleFrame,
      };
      stateRef.current = next;
      setState(next);

      rafRef.current = requestAnimationFrame(tickRef.current);
    };
  }); // intentionally runs every render to keep tickRef fresh

  const stopLoop = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const startLoop = useCallback(() => {
    stopLoop();
    rafRef.current = requestAnimationFrame(tickRef.current);
  }, [stopLoop]);

  const startGame = useCallback(() => {
    stopLoop();
    if (countdownTimerRef.current) clearTimeout(countdownTimerRef.current);
    obsIdRef.current = 0;
    const fresh: GameState = { ...initialState(canvasWidthRef.current), phase: 'countdown', countdown: 3 };
    stateRef.current = fresh;
    setState(fresh);

    let count = 3;
    const countTick = () => {
      count--;
      if (count <= 0) {
        const playing: GameState = { ...stateRef.current, phase: 'playing', countdown: 0 };
        stateRef.current = playing;
        setState(playing);
        startLoop();
      } else {
        const next: GameState = { ...stateRef.current, countdown: count };
        stateRef.current = next;
        setState(next);
        countdownTimerRef.current = setTimeout(countTick, 1000);
      }
    };
    countdownTimerRef.current = setTimeout(countTick, 1000);
  }, [startLoop, stopLoop]);

  const resetToIdle = useCallback(() => {
    stopLoop();
    if (countdownTimerRef.current) clearTimeout(countdownTimerRef.current);
    const idle = initialState(canvasWidthRef.current);
    stateRef.current = idle;
    setState(idle);
  }, [stopLoop]);

  useEffect(
    () => () => {
      stopLoop();
      if (countdownTimerRef.current) clearTimeout(countdownTimerRef.current);
    },
    [stopLoop],
  );

  return { state, startGame, resetToIdle, movePlayer };
}
