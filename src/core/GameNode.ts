import { nanoid } from 'nanoid';

/**
 * Basic Node class for engine's graph
 */
export class GameNode {
  /**
   * Node's ID generated with [nanoid](https://github.com/ai/nanoid).
   */
  protected id: string;

  /**
   * Creates a GameNode with a random id.
   */
  constructor() {
    this.id = nanoid(16);
  }
}
