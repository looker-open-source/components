
import { mockTreeData } from '../test_utils/mock_tree';
import { getLeavesFromTrees } from './get_leaves_from_trees';
describe('getLeavesFromTrees tests', () => {
  it('should match the snapshot', () => {
    expect(getLeavesFromTrees(mockTreeData)).toMatchSnapshot();
  });
});
//# sourceMappingURL=get_leaves_from_trees.spec.js.map