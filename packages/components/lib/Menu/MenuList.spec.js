import { screen } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import { MenuHeading } from './MenuHeading';
import { MenuDivider } from './MenuDivider';
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
describe('MenuList', () => {
  describe('windowing', () => {
    beforeEach(() => {
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          bottom: 0,
          height: 342,
          left: 0,
          right: 0,
          toJSON: jest.fn(),
          top: 0,
          width: 260,
          x: 0,
          y: 0
        };
      });
    });
    afterEach(() => {
      jest.resetAllMocks();
      Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
    });
    test('windows a long list', () => {
      const arr3000 = Array.from(Array(3000), (_, i) => i);
      renderWithTheme(React.createElement(MenuList, null, arr3000.map(num => React.createElement(MenuItem, {
        key: num
      }, num))));
      expect(screen.getByText('0')).toBeVisible();
      expect(screen.getByText('15')).toBeVisible();
      expect(screen.queryByText('16')).not.toBeInTheDocument();
      const totalItems = arr3000.length;
      const windowedItems = 16;
      const defaultItemHeight = 36;
      const height = (totalItems - windowedItems) * defaultItemHeight;
      expect(screen.queryByTestId('before')).not.toBeInTheDocument();
      expect(screen.getByTestId('after')).toHaveStyle(`height: ${height}px;`);
      expect(screen.getByRole('menu')).toHaveStyle('overflow: auto');
    });
  });
  describe('composition', () => {
    test('renders a MenuHeading, MenuDivider and MenuItems together', () => {
      renderWithTheme(React.createElement(MenuList, null, React.createElement(MenuHeading, null, "My Menu List"), React.createElement(MenuItem, null, "First"), React.createElement(MenuDivider, {
        "data-testid": "divider"
      }), React.createElement(MenuItem, null, "Last")));
      expect(screen.getByTestId('divider')).toBeVisible();
      screen.getByText('My Menu List');
    });
  });
});
//# sourceMappingURL=MenuList.spec.js.map