import { System } from '../core/System';

export class Time extends System {
  /**
   * Start of the engine's step.
   */
  private now: number;
  /**
   * Delta time between frame.
   */
  private _delta: number = 0;
  /**
   * Time of the last engine's step.
   */
  private last: number = performance.now();
  /**
   * Slow motion scaling factor.
   */
  private _slow: number = 1;
  /**
   * Target framerate of the engine.
   */
  private targetFramerate: number = 60;
  /**
   * Current framerate in frames per second.
   */
  private fps: number;
  /**
   * Ideal time of a step.
   */
  private timestep: number = (1 / this.targetFramerate) * this.slow;

  /**
   * Get engine's delta time.
   */
  public get delta(): number { return this._delta; }

  /**
   * Get current framerate in frames per second.
   */
  public get framerate(): number { return this.fps; }
  /**
   * Set an ideal maximum framerate in frames per second.
   */
  public set framerate(target: number) {
    this.targetFramerate = target;
    this.timestep = (1 / this.targetFramerate) * this.slow;
  }

  /**
   * Get slow scaling factor.
   */
  public get slow(): number { return this._slow; }
  /**
   * Set the slow scaling factor.
   */
  public set slow(value: number) {
    this._slow = value;
    this.timestep = (1 / this.targetFramerate) * this.slow;
  }

  /**
   * Updates the delta time, used by the engine's step loop.
   */
  public updateDelta() {
    this.now = performance.now();
    this._delta += Math.min(1, (this.now - this.last) / 1000);
  }

  /**
   * Updates the time of the last update.
   */
  public updateLast() {
    this.last = this.now;
  }

  /**
   * Fixes the timestep of a given function during the engine's step loop.
   * Used in engine's `step` method to make fixed steps.
   * @param callback.
   */
  public fixTimestep(callback: (timestep?: number) => void) {
    while (this.delta > this.timestep) {
      this._delta -= this.timestep;
      callback(this.timestep / this.slow);
    }
  }
}
