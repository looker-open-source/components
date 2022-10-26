import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Basic, KeyboardNavigation } from './stories/NavList.stories';
describe('NavList', () => {
  test('display with theme.colors.key', () => {
    renderWithTheme(React.createElement(Basic, null));
    const listItem = screen.getByText('Explore');
    expect(listItem).toHaveStyle('color: #6c43e0;');
    expect(screen.getByText('Interesting details')).toHaveStyle('color: #6c43e0');
    expect(screen.getByText('Description')).toHaveStyle('color: #6c43e0;');
  });
  describe('keyboard navigation', () => {
    test('up and down arrow keys traverse from item to item', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "Start Button"), React.createElement(KeyboardNavigation, null)));
      const listItem = screen.getByText('List Item').closest('[role="listitem"]');
      const items = [listItem, ...screen.getAllByRole('treeitem')];
      userEvent.click(screen.getByText('Start Button'));
      userEvent.tab();
      expect(items[0]).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(items[1]).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(items[2]).toHaveFocus();
    });
    test('left and right arrow keys traverse within an item from content to focusable detail elements', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "Start Button"), React.createElement(KeyboardNavigation, null)));
      const items = [screen.getByText('List Item').closest('[role="listitem"]'), ...screen.getAllByRole('treeitem')];
      userEvent.click(screen.getByText('Start Button'));
      userEvent.tab();
      expect(items[0]).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(screen.getByText('list-item-detail-button').closest('button')).toHaveFocus();
      userEvent.keyboard('{arrowleft}');
      expect(items[0]).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(items[1]).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      screen.getByText('nav-tree-detail-button').closest('button');
      userEvent.keyboard('{arrowleft}');
      expect(items[1]).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(items[2]).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      screen.getByText('nav-tree-item-detail-button').closest('button');
      userEvent.keyboard('{arrowleft}');
      expect(items[2]).toHaveFocus();
    });
    test('indicator icon is focusable via keyboard and controls open/close state', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "Start Button"), React.createElement(KeyboardNavigation, null)));
      userEvent.click(screen.getByText('Start Button'));
      userEvent.tab();
      const navTreeLinkIndex = 3;
      const navTreeLink = screen.getByText('Nav Tree Link').closest('[role="treeitem"]');

      for (let i = 0; i < navTreeLinkIndex; i++) {
        userEvent.keyboard('{arrowdown}');
      }

      expect(navTreeLink).toHaveFocus();
      userEvent.keyboard('{arrowleft}');
      expect(screen.getByLabelText('Nav Tree Link Indicator Open').closest('[tabindex="-1"]')).toHaveFocus();
      expect(screen.getByText('Now You See Me')).toBeInTheDocument();
      userEvent.keyboard('{enter}');
      expect(screen.queryByText('Now You See Me')).not.toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=NavList.spec.js.map