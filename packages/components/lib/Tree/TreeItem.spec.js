import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { TreeItem } from '.';
describe('TreeItem', () => {
  test('Renders children', () => {
    renderWithTheme(React.createElement(TreeItem, null, "Dimension"));
    screen.getByText('Dimension');
  });
  test('Accepts onCLick and onKeyDown props', () => {
    const handleClick = jest.fn();
    const handleKeyDown = jest.fn();
    renderWithTheme(React.createElement(TreeItem, {
      onClick: handleClick,
      onKeyDown: handleKeyDown
    }, "Dimension"));
    screen.getByText('Dimension');
  });
  test('Does not trigger onClick on detail click when accessory === true', () => {
    const onClick = jest.fn();
    renderWithTheme(React.createElement(TreeItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: true
        }
      },
      onClick: onClick
    }, "Dimension"));
    fireEvent.click(screen.getByText('Dimension'));
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Detail'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('Triggers onClick on detail click when accessory === false', () => {
    const onClick = jest.fn();
    renderWithTheme(React.createElement(TreeItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: false
        }
      },
      onClick: onClick
    }, "Dimension"));
    fireEvent.click(screen.getByText('Dimension'));
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Detail'));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
  test('Hides and shows detail when detailHoverDisclosure is true', () => {
    renderWithTheme(React.createElement(TreeItem, {
      detail: {
        content: 'Detail',
        options: {
          hoverDisclosure: true
        }
      }
    }, "Label"));
    expect(screen.queryByText('Detail')).not.toBeInTheDocument();
    fireEvent.mouseEnter(screen.getByText('Label'), {
      bubbles: true
    });
    expect(screen.getByText('Detail')).toBeInTheDocument();
  });
  test('theme.colors.key', () => {
    renderWithTheme(React.createElement(TreeItem, {
      selected: true,
      color: "key"
    }, "Whatever"));
    expect(screen.getByText('Whatever')).toHaveStyle('color: #262d33');
    expect(screen.getByRole('treeitem')).toHaveStyle('background: #f3f2ff');
  });
  describe('link behavior', () => {
    test('renders as a link when itemRole="link" and disperses link-related props onto nested <a>', () => {
      renderWithTheme(React.createElement(TreeItem, {
        itemRole: "link",
        href: "https://google.com",
        target: "_blank",
        rel: "hello"
      }, "Link"));
      const nestedLink = screen.getByRole('treeitem');
      expect(nestedLink.nodeName).toBe('A');
      expect(nestedLink).toHaveAttribute('href', 'https://google.com');
      expect(nestedLink).toHaveAttribute('target', '_blank');
      expect(nestedLink).toHaveAttribute('rel', 'hello noopener noreferrer');
    });
    test('has rel="noopener noreferrer" when it has target="_blank" and no passed-in rel prop value', () => {
      renderWithTheme(React.createElement(TreeItem, {
        itemRole: "link",
        href: "https://google.com",
        target: "_blank"
      }, "Link"));
      const nestedLink = screen.getByRole('treeitem');
      expect(nestedLink).toHaveAttribute('target', '_blank');
      expect(nestedLink).toHaveAttribute('href', 'https://google.com');
      expect(nestedLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
    test('does not auto append "noopener noreferrer" to link without target="_blank"', () => {
      renderWithTheme(React.createElement(TreeItem, {
        itemRole: "link",
        rel: "nogouda",
        href: "https://google.com"
      }, "Link"));
      const nestedLink = screen.getByRole('treeitem');
      expect(nestedLink).toHaveAttribute('href', 'https://google.com');
      expect(nestedLink).toHaveAttribute('rel', 'nogouda');
    });
  });
});
//# sourceMappingURL=TreeItem.spec.js.map