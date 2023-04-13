
import { mockTreeData } from '../stories/examples';
import { openOrCloseNodes } from './open_or_close_nodes';
describe('openOrCloseNodes tests', () => {
  it('should match the snapshot', () => {
    expect(openOrCloseNodes(mockTreeData, {
      id: '.Root2.anotha one2',
      isOpen: true
    })).toMatchSnapshot();
  });
});
//# sourceMappingURL=open_or_close_nodes.spec.js.map