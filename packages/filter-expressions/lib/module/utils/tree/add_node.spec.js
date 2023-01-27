
import { addNode } from './add_node';
import { treeToList } from './tree_to_list';
describe('Add Node function', () => {
  it('Ensure when root is singular node gets broken into a balanced tree, comma separated', () => {
    var _ast$left, _ast$right;
    const rootValue = 1;
    const newNodeValue = 2;
    const root = {
      id: 1,
      type: '=',
      value: rootValue
    };
    const newNode = {
      id: 2,
      type: '=',
      value: newNodeValue
    };
    const ast = addNode(root, newNode);
    expect(ast.type).toEqual(',');
    expect(ast.left).toBeDefined();
    expect(ast.right).toBeDefined();
    expect((_ast$left = ast.left) === null || _ast$left === void 0 ? void 0 : _ast$left.value).toEqual(rootValue);
    expect((_ast$right = ast.right) === null || _ast$right === void 0 ? void 0 : _ast$right.value).toEqual(newNodeValue);
  });
  it('Tree node count increases by one', () => {
    const node = {
      id: 2,
      type: '=',
      value: 1
    };
    const root = {
      id: 1,
      right: node
    };
    const newNode = {
      id: 3,
      type: '=',
      value: 10
    };
    const nodeListCount = treeToList(root).length;
    const ast = addNode(root, newNode);
    expect(treeToList(ast)).toHaveLength(nodeListCount + 1);
  });
});
//# sourceMappingURL=add_node.spec.js.map