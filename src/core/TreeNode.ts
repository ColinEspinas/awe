/* eslint-disable @typescript-eslint/no-unused-vars */

import { nanoid } from 'nanoid';

/**
 * Basic TreeNode interface for engine's graph.
 */
export abstract class TreeNode {
  /**
   * Node's ID, generate it with [nanoid](https://github.com/ai/nanoid) if applicable.
   */
  protected id: string;

  /**
   * Generates node's id.
   */
  constructor() {
    this.id = nanoid(16);
  }

  /**
   * To execute on instance creation.
   */
  protected abstract create(): void;

  /**
   * To execute at Loopable loading.
   */
  protected abstract load(): void;

  /**
   * To execute at each update loop.
   */
  protected abstract update(): void;

  /**
   * To execute at each fixed update of the loop.
   */
  protected abstract fixedUpdate(): void;

  /**
   * To execute at Loopable unloading.
   */
  protected abstract unload(): void;
}
