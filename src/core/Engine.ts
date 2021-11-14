import type { EngineOptions } from '../types/Options';
import type { TreeNode } from './TreeNode';

/**
 * The starting point of an AWE game application.
 */
export class Engine {
  /**
   * Engine's options (merged with defaults in constructor).
   */
  private _options: EngineOptions;
  /**
   * Root node of the engine's graph.
   */
  private rootNode: TreeNode;

  /**
   * Get engine's options.
   * @readonly
   */
  public get options(): EngineOptions { return this._options; }

  constructor(options: EngineOptions) {
    // Merge passed options with defaults
    this._options = {
      width: 1280,
      height: 720,
      resolution: 1,
      fullscreen: true,
      container: 'body',
      framerate: null,
      ...options,
    };
  }

  /**
   * Init systems and starts the update loops.
   */
  public run(): void {
    requestAnimationFrame(this.update.bind(this));
  }

  /**
   * Update loop function, uses notions from
   * [this article](https://gafferongames.com/post/fix_your_timestep/)
   * to fix the timestep for fixed update loops (useful for physics and user interactions).
   */
  protected update(): void {
    this.run();
  }
}
