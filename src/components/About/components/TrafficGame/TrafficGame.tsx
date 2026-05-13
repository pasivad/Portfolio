'use client';

import { useCallback, useEffect, useState } from 'react';

import GameCanvas from './GameCanvas';
import { useGameLoop } from './hooks/useGameLoop';
import { useBestScore } from './hooks/useBestScore';

interface TrafficGameProps {
  width: number;
  height: number;
  onRequestExpand: () => void;
  isExpanded: boolean;
}

const TrafficGame = ({ width, height, onRequestExpand, isExpanded }: TrafficGameProps) => {
  const { bestScore, updateBestScore, clearBestScore } = useBestScore();
  const [lastScore, setLastScore] = useState(0);

  const handleGameOver = useCallback(
    (score: number) => {
      setLastScore(score);
      updateBestScore(score);
    },
    [updateBestScore],
  );

  const { state, startGame, resetToIdle, movePlayer } = useGameLoop(width, height, handleGameOver);

  useEffect(() => {
    if (!isExpanded && state.phase !== 'idle') {
      resetToIdle();
    }
  }, [isExpanded, state.phase, resetToIdle]);

  const handleStart = () => {
    if (!isExpanded) {
      onRequestExpand();
      setTimeout(() => startGame(), 560);
    } else {
      startGame();
    }
  };

  const isPlaying = state.phase === 'playing';
  const isCountdown = state.phase === 'countdown';
  const isGameover = state.phase === 'gameover';
  const isIdle = state.phase === 'idle';

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ width, height }}
    >
      <GameCanvas
        gameState={state}
        width={width}
        height={height}
      />

      {isIdle && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/70 backdrop-blur-[2px]">
          <div className="flex flex-col items-center gap-1">
            <div
              className="text-center text-xl font-bold uppercase tracking-widest"
              style={{ color: '#00d4ff', fontFamily: '"Courier New", monospace' }}
            >
              Traffic Rush
            </div>
          </div>

          <div className="text-[10px] uppercase text-text-secondary font-mono text-center leading-5 px-4">
            Dodge obstacles · Arrow keys or swipe
            <br />5 lanes · Speed increases with score
          </div>

          {bestScore > 0 && (
            <div className="flex items-center gap-2">
              <div className="text-[9px] leading-2.25 uppercase text-text-secondary font-mono">Best:</div>
              <div
                className="text-[13px] font-bold font-mono"
                style={{ color: '#f5c542' }}
              >
                {bestScore}
              </div>
            </div>
          )}

          <button
            onClick={handleStart}
            className="px-6 py-2 text-[11px] uppercase font-mono tracking-widest border border-solid border-brand-primary text-brand-primary hover:bg-active-accent transition-colors duration-200"
          >
            {isExpanded ? 'Start Game' : 'Start Game ↗'}
          </button>

          {bestScore > 0 && (
            <button
              onClick={clearBestScore}
              className="text-[9px] uppercase font-mono text-text-secondary hover:text-red-400 transition-colors duration-200 underline underline-offset-4"
            >
              Clear best score
            </button>
          )}
        </div>
      )}

      {isCountdown && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[1px]">
          <div
            key={state.countdown}
            className="text-7xl font-bold font-mono animate-ping-once"
            style={{
              color: '#00d4ff',
              fontFamily: '"Courier New", monospace',
              animation: 'countPop 0.85s ease-out forwards',
            }}
          >
            {state.countdown}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-text-secondary font-mono mt-4">Get Ready</div>
          <style>{`
            @keyframes countPop {
              0%   { transform: scale(1.8); opacity: 1; }
              100% { transform: scale(1);   opacity: 0.3; }
            }
          `}</style>
        </div>
      )}

      {isGameover && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/80 backdrop-blur-[2px]">
          <div className="text-[9px] uppercase tracking-widest text-red-400 font-mono">▓▓ Game Over ▓▓</div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-[10px] uppercase text-text-secondary font-mono">Score</div>
            <div
              className="text-4xl font-bold font-mono"
              style={{ color: '#00d4ff', fontFamily: '"Courier New", monospace' }}
            >
              {lastScore}
            </div>
          </div>
          {bestScore > 0 && (
            <div className="flex items-center gap-2 border border-solid border-border-primary px-4 py-1">
              <div className="text-[9px] uppercase text-text-secondary font-mono">Best</div>
              <div
                className="text-[13px] font-bold font-mono"
                style={{ color: '#f5c542' }}
              >
                {bestScore}
              </div>
              {lastScore >= bestScore && lastScore > 0 && (
                <div
                  className="text-[9px] font-mono"
                  style={{ color: '#f5c542' }}
                >
                  ★ NEW
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col items-center gap-2 mt-1">
            <button
              onClick={startGame}
              className="px-6 py-2 text-[11px] uppercase font-mono tracking-widest border border-solid border-brand-primary text-brand-primary hover:bg-active-accent transition-colors duration-200"
            >
              Try Again
            </button>
            <button
              onClick={resetToIdle}
              className="text-[10px] uppercase font-mono text-text-secondary hover:text-brand-primary transition-colors duration-200"
            >
              Menu
            </button>
          </div>
        </div>
      )}

      {isPlaying && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-between px-3 pointer-events-none">
          <button
            className="pointer-events-auto w-10 h-10 border border-solid border-border-primary bg-black/50 text-text-secondary text-lg flex items-center justify-center hover:border-brand-primary active:bg-active-accent"
            onPointerDown={() => movePlayer(-1)}
          >
            ◀
          </button>
          <button
            className="pointer-events-auto w-10 h-10 border border-solid border-border-primary bg-black/50 text-text-secondary text-lg flex items-center justify-center hover:border-brand-primary active:bg-active-accent"
            onPointerDown={() => movePlayer(1)}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default TrafficGame;
