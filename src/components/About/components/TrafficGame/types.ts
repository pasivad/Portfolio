export type GamePhase = 'idle' | 'countdown' | 'playing' | 'gameover';

export type ObstacleKind = 'car_red' | 'car_yellow' | 'car_blue' | 'pit' | 'fence';

export interface Obstacle {
  id: number;
  kind: ObstacleKind;
  lane: number;
  pixelX: number;
  y: number;
  width: number;
  height: number;
}

export interface GameState {
  phase: GamePhase;
  countdown: number;
  score: number;
  speed: number;
  playerLane: number;
  playerX: number;
  playerTargetX: number;
  obstacles: Obstacle[];
  roadOffset: number;
  frameCount: number;
  lastObstacleFrame: number;
}
