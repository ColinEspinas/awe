import type { EngineOptions } from '../types/Options';
import type { GameNode } from './GameNode';

/**
 * The starting point of an AWE game application.
 */
export class Engine {
  /**
   * Engine's options (merged with defaults in constructor).
   */
  private options: EngineOptions;
  /**
   * Root Node of the engine's graph.
   */
  private rootNode: GameNode;

  constructor(options: EngineOptions) {
    // Merge passed options with defaults
    this.options = {
      width: 1280,
      height: 720,
      resolution: 1,
      fullscreen: true,
      container: 'body',
      framerate: null,
      ...options,
    };
  }
}
