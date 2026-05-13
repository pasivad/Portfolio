import { useCallback, useState } from 'react';

import { BEST_SCORE_KEY } from '../constants';

export function useBestScore() {
  const [bestScore, setBestScore] = useState<number>(() => {
    try {
      const raw = localStorage.getItem(BEST_SCORE_KEY);
      return raw ? parseInt(raw, 10) : 0;
    } catch {
      return 0;
    }
  });

  const updateBestScore = useCallback((score: number) => {
    setBestScore((prev) => {
      if (score > prev) {
        try {
          localStorage.setItem(BEST_SCORE_KEY, String(score));
        } catch {}
        return score;
      }
      return prev;
    });
  }, []);

  const clearBestScore = useCallback(() => {
    try {
      localStorage.removeItem(BEST_SCORE_KEY);
    } catch {}
    setBestScore(0);
  }, []);

  return { bestScore, updateBestScore, clearBestScore };
}
