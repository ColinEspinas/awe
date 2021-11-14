import { TreeNode } from './TreeNode';

/**
 * An outer node is a node of the tree that does not have child nodes.
 *
 * In most cases those nodes will be used as component or system nodes.
 */
export class OuterNode extends TreeNode {
  /**
   * Calls create function.
   */
  constructor() {
    super();
    this.create();
  }

  /**
   * Called by the node's constructor at instantiation,
   * this function is to be implemented when needed.
   */
  protected create(): void {}

  /**
   * Called by the parent node at load,
   * this function is to be implemented when needed.
   *
   * If this node is the engine's root node, this
   * function will be called by the engine instead.
   */
  protected load(): void {}

  /**
   * Called by the parent node at each update,
   * this function is to be implemented when needed.
   */
  protected update(): void {}

  /**
   * Called by the parent node at each fixed update,
   * this function is to be implemented when needed.
   */
  protected fixedUpdate(): void {}

  /**
   * Called by the parent node at unload,
   * this function is to be implemented when needed.
   *
   * If this node is the engine's root node, this
   * function will be called by the engine instead.
   */
  protected unload(): void {}
}
