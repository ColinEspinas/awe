/* eslint-disable @typescript-eslint/no-unused-vars */

import { nanoid } from 'nanoid/non-secure';

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
   * Adds a child node to the node children.
   *
   * This method needs to be implemented to throw an
   * error if the node cannot have children (outer nodes).
   *
   * @param {TreeNode} node Node to add as child.
   * @returns {number} New children array length.
   */
  public abstract add(node: TreeNode): number;

  /**
   * Removes a child node from the node children.
   *
   * This method needs to be implemented to throw an
   * error if the node cannot have children (outer nodes).
   *
   * @param {TreeNode} node Node to remove of children.
   * @returns {TreeNode} Removed node instance.
   */
  public abstract remove(node: TreeNode): TreeNode;

  /**
   * To execute on instance creation (in the node's constructor).
   *
   * This method is not called in the abstract
   * TreeNode class constructor because it needs to
   * be called after all members are initialized.
   *
   * We do not need a `create` method as this is an
   * internal behavior of nodes.
   */
  protected abstract onCreate(): void;

  /**
   * Called at node loading in the scene graph.
   *
   * It calls the node's `onLoad` method.
   * In the case of an inner node, this method
   * will call the children's `load` methods too.
   */
  public abstract load(): void;

  /**
   * To execute at node loading/initialization in the graph.
   */
  protected abstract onLoad(): void;

  /**
   * Called at each step of the loop by the parent
   * node load method or the engine's `step` method directly.
   *
   * It calls the node's `onStep` method.
   * In the case of an inner node, this method
   * will call the children's `step` methods too.
   */
  public abstract step(): void;

  /**
   * To execute at each step of the loop.
   */
  protected abstract onStep(): void;

  /**
   * Called at each fixed step of the loop by the parent
   * node load method or the engine's `step` method directly.
   *
   * It calls the node's `onFixedStep` method.
   * In the case of an inner node, this method
   * will call the children's `fixedStep` methods too.
   */
  public abstract fixedStep(): void;

  /**
   * To execute at each fixed step of the loop.
   */
  protected abstract onFixedStep(): void;

  /**
   * Called at node unloading in the scene graph.
   *
   * It calls the node's `onUnload` method.
   * In the case of an inner node, this method
   * will call the children's `unload` methods too.
   */
  public abstract unload(): void;

  /**
   * To execute at node unloading in the graph.
   */
  protected abstract onUnload(): void;
}
