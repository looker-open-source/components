import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ListItem } from '../ListItem';
import { Basic, KeyboardNavigation, LongList } from './List.stories';
import { List } from './List';
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
describe('List', () => {
  describe('windowing', () => {
    beforeEach(() => {
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          bottom: 0,
          height: 360,
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
      renderWithTheme(React.createElement(LongList, null));
      expect(screen.getByRole('list')).toHaveStyle('height: 100%');
      expect(screen.getByText('0')).toBeVisible();
      expect(screen.getByText('15')).toBeVisible();
      expect(screen.queryByText('16')).not.toBeInTheDocument();
      const height = (3000 - 16) * 36;
      expect(screen.queryByTestId('before')).not.toBeInTheDocument();
      expect(screen.getByTestId('after')).toHaveStyle(`height: ${height}px;`);
    });
    test('no "overflow: auto" without windowing', () => {
      renderWithTheme(React.createElement(Basic, null));
      expect(screen.getByRole('list')).not.toHaveStyle('overflow: auto');
    });
  });
  describe('color', () => {
    test('displays the correct background when selected', () => {
      renderWithTheme(React.createElement(List, {
        color: "key"
      }, React.createElement(ListItem, {
        selected: true
      }, "Mozzarella")));
      expect(screen.getByText('Mozzarella')).toBeInTheDocument();
      expect(screen.getByText('Mozzarella').closest('button')).toHaveStyle('background: #F3F2FF;');
    });
    test('updates ListItem get its text color updated', () => {
      renderWithTheme(React.createElement(List, {
        color: "calculation"
      }, React.createElement(ListItem, {
        selected: true
      }, "Mozzarella")));
      expect(screen.getByText('Mozzarella')).toBeInTheDocument();
      expect(screen.getByText('Mozzarella')).toHaveStyle('color: #319220;');
    });
  });
  describe('keyboard navigation', () => {
    test('up and down arrow keys traverse from item to item', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "Start Button"), React.createElement(KeyboardNavigation, null)));
      userEvent.click(screen.getByText('Start Button'));
      userEvent.tab();
      const listItems = screen.getAllByRole('listitem');
      const cheddar = listItems[0];
      const gouda = listItems[1];
      expect(cheddar).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(gouda).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(cheddar).toHaveFocus();
    });
    test('left and right arrow keys traverse within item from content to focusable detail elements', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "Start Button"), React.createElement(KeyboardNavigation, null)));
      userEvent.click(screen.getByText('Start Button'));
      userEvent.tab();
      const listItems = screen.getAllByRole('listitem');
      const cheddar = listItems[0];
      const gouda = listItems[1];
      expect(cheddar).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(screen.getByText('cheddar-button').closest('button')).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(gouda).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(screen.getByText('gouda-button').closest('button')).toHaveFocus();
    });
  });
});
//# sourceMappingURL=List.spec.js.map