export const LANES = 5;
export const PLAYER_WIDTH = 28;
export const PLAYER_HEIGHT = 48;
export const INITIAL_SPEED = 3.5;
export const SPEED_INCREMENT = 0.18;
export const OBSTACLE_INTERVAL = 55;
export const SCORE_PER_DODGE = 1;

export const OBSTACLE_SIZES: Record<string, { w: number; h: number }> = {
  car_red: { w: 28, h: 48 },
  car_yellow: { w: 26, h: 44 },
  car_blue: { w: 30, h: 50 },
  pit: { w: 36, h: 28 },
  fence: { w: 26, h: 18 },
};

export const BEST_SCORE_KEY = 'vpPortfolio_trafficGame_bestScore_v1';
