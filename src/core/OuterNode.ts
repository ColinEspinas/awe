import type { Engine } from './Engine'
import { TreeNode } from './TreeNode'

/**
 * An outer node is a node of the tree that does not have child nodes.
 *
 * In most cases those nodes will be used as component or system nodes.
 */
export class OuterNode extends TreeNode {
  /**
   * Calls onCreate method.
   */
  constructor(parent: TreeNode | Engine) {
    super(parent)
    this.onCreate()
  }

  /**
   * Implemented to throw an error as outer nodes
   * cannot have children.
   * @sealed
   */
  public add(): number {
    throw new Error('You tried to add a child to an outer node. Outer nodes cannot have children.')
  }

  /**
   * Implemented to throw an error as outer nodes
   * cannot have children.
   * @sealed
   */
  public remove(): TreeNode {
    throw new Error('You tried to remove a child to an outer node. Outer nodes cannot have children.')
  }

  /**
   * Called at parent nodes loading or directly by
   * the engine's loading if this node is the `rootNode`.
   *
   * Calls the `onLoad` method.
   * @sealed
   */
  public load(): void {
    this.onLoad()
    this.isLoaded = true
  }

  /**
   * Called at parent nodes step or directly by
   * the engine's step if this node is the `rootNode`.
   *
   * Calls the `onStep` method.
   * @sealed
   */
  public step(): void {
    this.onStep()
  }

  /**
   * Called at parent nodes fixedStep or directly by
   * the engine's step if this node is the `rootNode`.
   *
   * Calls the `onFixedStep` method.
   * @sealed
   */
  public fixedStep(): void {
    this.onFixedStep()
  }

  /**
   * Called at parent nodes unload or directly by
   * the engine's unload if this node is the `rootNode`.
   *
   * Calls the `onUnload` method.
   * @sealed
   */
  public unload(): void {
    this.onUnload()
    this.isLoaded = false
  }

  /**
   * Called by the node's constructor at instantiation,
   * this method is to be implemented when needed.
   * @virtual
   */
  protected onCreate(): void { }

  /**
   * Called by the parent node when loaded,
   * this method is to be implemented when needed.
   *
   * If this node is the engine's root node, this
   * method will be called by the engine instead.
   * @virtual
   */
  protected onLoad(): void { }

  /**
   * Called by the parent node at each step of the loop,
   * this method is to be implemented when needed.
   * @virtual
   */
  protected onStep(): void { }

  /**
   * Called by the parent node at each fixed step of the loop,
   * this method is to be implemented when needed.
   * @virtual
   */
  protected onFixedStep(): void { }

  /**
   * Called by the parent node at unload,
   * this method is to be implemented when needed.
   *
   * If this node is the engine's root node, this
   * method will be called by the engine instead.
   * @virtual
   */
  protected onUnload(): void { }
}
