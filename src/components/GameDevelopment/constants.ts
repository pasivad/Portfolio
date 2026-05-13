import { LearningPathItem, MainProjectProps, ProjectStatus, SideProjectProps } from './types';

export const MAIN_PROJECTS: Array<MainProjectProps> = [
  {
    imgPath: '/WildernessAlone_v1.mp4',
    status: ProjectStatus.Active,
    statusText: 'IN DEVELOPMENT · BUILD 0.4',
    name: 'Wilderness Alone',
    details: 'Top-down survival game · Unreal Engine 5.7 · C++',
    description:
      "Personal project with all core systems written in C++. UI logic in Blueprints via the CommonUI plugin, following Epic's recommended UI architecture for proper UI stack management.",
    resultItems: [
      'Top-down character movement & spring-arm camera',
      'Sprint mechanic & momentum tuning',
      'Health & stamina with damage and regen',
      '27-slot grid inventory with stacking',
      'Pickup interaction system',
      'Enhanced Input + Input Mapping Context',
      'CommonUI pause menu & UI stack',
      'Basic enemy AI: detect → chase → attack',
      'UMG HUD progress bars',
    ],
    repoLink: 'github.com/pasivad/WildernessAlone',
  },
];

export const SIDE_PROJECTS: Array<SideProjectProps> = [
  {
    status: ProjectStatus.Finished,
    name: 'Snake',
    details: 'Console Snake Game',
    description:
      'Pure C++. First game project — built to drill core language features, the standard library, and basic game-loop architecture. Input handling, grid-based collision, score tracking, and game state from scratch.',
    repoLink: 'github.com/pasivad/SnakeGame',
  },
];

export const LEARNING_PATH: Array<LearningPathItem> = [
  { title: 'Console Snake (C++)', details: 'Foundation: stdlib + game loop', status: ProjectStatus.Finished },
  { title: 'Wilderness Alone (UE5)', details: 'In progress · core systems shipping', status: ProjectStatus.Active },
  { title: 'AI behavior trees', details: 'Next milestone' },
  { title: 'Multiplayer prototype', details: 'Planned' },
  { title: 'First public itch.io release', details: 'Goal: 2026' },
];
