export class Time {
  /**
   * Start of the engine's step.
   */
  private now: number
  /**
   * Delta time between frame.
   */
  private _delta: number = 0
  /**
   * Accumulator used to store time between frames
   */
  private accumulator: number = 0
  /**
   * Time of the last engine's step.
   */
  private last: number = performance.now()
  /**
   * Slow motion scaling factor.
   */
  private _slow: number = 1
  /**
   * Target framerate of the engine.
   */
  private targetFramerate: number = 60
  /**
   * Current framerate in frames per second.
   */
  private fps: number
  /**
   * Ideal time of a step.
   */
  private _timestep: number = (1 / this.targetFramerate) * this.slow

  /**
   * Get engine's delta time.
   */
  public get delta(): number { return this._delta }

  /**
   * Get engine's timestep.
   */
  public get timestep(): number { return this._timestep }

  /**
   * Get current framerate in frames per second.
   */
  public get framerate(): number { return this.fps }
  /**
   * Set an ideal maximum framerate in frames per second.
   */
  public set framerate(target: number) {
    this.targetFramerate = target
    this._timestep = (1 / this.targetFramerate) * this.slow
  }

  /**
   * Get slow scaling factor.
   */
  public get slow(): number { return this._slow }
  /**
   * Set the slow scaling factor.
   */
  public set slow(value: number) {
    this._slow = value
    this._timestep = (1 / this.targetFramerate) * this.slow
  }

  /**
   * Updates the delta time, used by the engine's step loop.
   */
  public updateDelta(now?: number) {
    this.now = now ?? performance.now()
    this._delta = (this.now - this.last) / 1000
    this.accumulator += this._delta
    this.fps = 1 / this._delta
  }

  /**
   * Updates the time of the last update.
   */
  public updateLast() {
    this.last = this.now
  }

  /**
   * Fixes the timestep of a given function during the engine's step loop.
   * Used in engine's `step` method to make fixed steps.
   * @param callback
   */
  public fixTimestep(callback: (timestep?: number) => void) {
    const updateStepsCount = 0
    while (this.accumulator >= this._timestep) {
      callback(this._timestep)
      this.accumulator -= this._timestep
      // To prevent spiral of death
      if (updateStepsCount >= 240) {
        this.accumulator = 0
        break
      }
    }
  }
}
