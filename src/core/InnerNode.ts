import { TreeNode } from './TreeNode';

/**
 * An inner node is a node of the tree that has child nodes.
 *
 * In most cases those nodes will be used as entity nodes and
 * will be composed of component nodes.
 * But those can be used for any other purpose (utility, scene
 * orchestrating, etc.).
 */
export class InnerNode extends TreeNode {
  /**
   * Node's children nodes.
   */
  protected children: TreeNode[];

  /**
   * Setup children and calls create function.
   */
  constructor() {
    super();
    this.children = [];
    this.create();
  }

  /**
   * Adds a child node to this node children.
   * @param {TreeNode} node Node to add as child.
   */
  public add(node: TreeNode) {
    this.children.push(node);
  }

  /**
   * Removes a child node from this node children.
   * @param {TreeNode} node Node to remove of children.
   */
  public remove(node: TreeNode) {
    this.children = this.children.filter(
      (n: TreeNode) => n !== node,
    );
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
