import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, screen } from '@testing-library/react';
import { NavList } from '../NavList';
import { Link } from './NavTree.stories';
import { NavTreeItem } from './NavTreeItem';
import { NavTree } from './NavTree';

const Basic = () => React.createElement(NavList, null, React.createElement(NavTree, {
  defaultOpen: true,
  label: "Cheeses"
}, React.createElement(NavTreeItem, {
  parentIcon: true
}, "Cheddar")));

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

const runTimers = () => act(() => {
  jest.runOnlyPendingTimers();
});

describe('NavTree', () => {
  test('ripple effect', () => {
    renderWithTheme(React.createElement(NavList, null, React.createElement(NavTree, {
      defaultOpen: true,
      label: "Cheeses"
    }, React.createElement(NavTreeItem, {
      parentIcon: true
    }, "Cheddar"))));
    const navTree = screen.getByText('Cheddar').closest('button');
    expect(navTree).not.toHaveClass('bg-on fg-in');
    expect(navTree).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    navTree && fireEvent.focus(navTree);
    expect(navTree).toHaveClass('bg-on');
    navTree && fireEvent.mouseDown(navTree);
    expect(navTree).toHaveClass('bg-on fg-in');
    navTree && fireEvent.mouseUp(navTree);
    runTimers();
    expect(navTree).toHaveClass('bg-on fg-out');
    runTimers();
    expect(navTree).toHaveClass('bg-on');
    navTree && fireEvent.blur(navTree);
    expect(navTree).not.toHaveClass('bg-on fg-in');
    fireEvent.click(document);
  });
  test('Renders string disclosure label and detail', () => {
    renderWithTheme(React.createElement(Basic, null));
    screen.getByText('Cheeses');
    screen.getByText('Cheddar');
  });
  test('Triggers onClick on label click', () => {
    const labelClick = jest.fn();
    renderWithTheme(React.createElement(NavTree, {
      onClick: labelClick,
      label: "Parent"
    }, React.createElement(NavTreeItem, null, "Child")));
    fireEvent.click(screen.getByText('Parent'));
    expect(labelClick).toHaveBeenCalled();
  });
  describe('href provided', () => {
    test('Changes accordion open state on indicator click', () => {
      renderWithTheme(React.createElement(Link, null));
      const indicator = screen.getByLabelText('Google Link Indicator Open');
      screen.getByText('Some Item');
      fireEvent.click(indicator);
      screen.getByLabelText('Google Link Indicator Close');
      expect(screen.queryByText('Some Item')).not.toBeInTheDocument();
    });
    test('Does not change accordion open state on label click', () => {
      renderWithTheme(React.createElement(Link, null));
      const treeLabel = screen.getByText('Click me to go to Google');
      screen.getByText('Some Item');
      fireEvent.click(treeLabel);
      screen.getByText('Some Item');
    });
    test("Uses role 'treeitem' for main content container", () => {
      renderWithTheme(React.createElement(Link, null));
      expect(screen.getAllByRole('treeitem').length).toBe(2);
    });
    test('Expects an indicatorLabel when href is provided', () => {
      renderWithTheme(React.createElement(NavTree, {
        label: "My NavTree",
        href: "https://google.com"
      }, "Hello"));
    });
    test('Expects an href when indicatorLabel is provided', () => {
      renderWithTheme(React.createElement(NavTree, {
        label: "My NavTree",
        indicatorLabel: "My NavTree Indicator"
      }, "Hello"));
    });
  });
  describe('href not provided', () => {
    test('Changes accordion open state on label click', () => {
      renderWithTheme(React.createElement(Basic, null));
      const treeLabel = screen.getByText('Cheeses');
      screen.getByText('Cheddar');
      fireEvent.click(treeLabel);
      expect(screen.queryByText('Cheddar')).not.toBeInTheDocument();
    });
    test("Uses role 'treeitem' for main content container", () => {
      renderWithTheme(React.createElement(Basic, null));
      expect(screen.getAllByRole('treeitem').length).toBe(2);
    });
  });
});
//# sourceMappingURL=NavTree.spec.js.map