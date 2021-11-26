import type { EngineOptions } from '../types/Options';
import { TreeNode } from './TreeNode';
import { System } from './System';
import { Time } from '../systems/Time';

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
   * Engine's attached systems.
   */
  private _systems: Map<string, System> = new Map();

  /**
   * Get engine's options.
   * @readonly
   */
  public get options(): EngineOptions { return this._options; }
  /**
   * Get engine's systems.
   * @readonly
   */
  public get systems(): Map<string, System> { return this._systems; }

  /**
   * Merge given options with defaults and calls the engine's `init` method.
   * @param {EngineOptions} options Engine's options
   */
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
    this.init();
  }

  /**
   * Inits the engine by registering default core systems.
   */
  private init(): void {
    this.systems.set('Time', new Time());
  }

  /**
   * Loads systems/rootNode and starts the update loops.
   */
  public run(): void {
    // Check if root node exists before loading.
    if (!this.rootNode) {
      throw new Error('No root node given to engine, cannot run.');
    }
    // Load systems.
    this.systems.forEach((system) => {
      system.load();
    });
    // Load rootNode.
    this.rootNode.load();
    // Start engine's steps.
    requestAnimationFrame(this.step.bind(this));
  }

  /**
   * Update loop function, uses notions from
   * [this article](https://gafferongames.com/post/fix_your_timestep/)
   * to fix the timestep for fixed update loops (useful for physics and user interactions).
   */
  protected step(): void {
    this.run(); // Runs requestAnimationFrame to request next step.

    // Use time system to update delta and fix timestep.
    const time = this.systems.get('Time') as Time;
    time.updateDelta();
    time.fixTimestep(() => {
      // TODO: Call with timestep as a parameter.
      this.systems.forEach((system) => {
        system.fixedStep();
      });
      this.rootNode.fixedStep();
    });
    // TODO: Call with time.delta / time.slow as a parameter.
    this.systems.forEach((system) => {
      system.step();
    });
    this.rootNode.step();
    time.updateLast();
  }
}
