
import noop from 'lodash/noop';
import React from 'react';
import { renderWithTheme } from '@looker/test-utils';
import { mockTreeData } from './test_utils/mock_tree';
import { Tree } from './Tree';
describe('Tree tests', () => {
  it('should render a tree', async () => {
    const {
      container
    } = renderWithTheme(React.createElement(Tree, {
      tree: mockTreeData,
      onSectionClick: noop,
      onFieldClick: noop
    }));
    expect(container).toBeVisible();
  });
});
//# sourceMappingURL=Tree.spec.js.map