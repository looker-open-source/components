import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Science } from '@styled-icons/material-outlined';
import { screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';
import { Controlled } from './stories/Tree.stories';
import { Tree } from '.';
describe('Tree', () => {
  test('Renders string disclosure label and detail', () => {
    renderWithTheme(React.createElement(Tree, {
      label: "Tree Label",
      detail: "Tree Detail"
    }, "Hello World"));
    screen.getByText('Tree Label');
    screen.getByText('Tree Detail');
  });
  test('Renders JSX Element disclosure label', () => {
    renderWithTheme(React.createElement(Tree, {
      label: React.createElement("div", null, "Tree JSX Label"),
      detail: "Tree Detail"
    }, "Hello World"));
    screen.getByText('Tree JSX Label');
  });
  test('Renders and hides children on disclosure click', () => {
    renderWithTheme(React.createElement(Tree, {
      label: "Tree Label"
    }, "Hello World"));
    const treeLabel = screen.getByText('Tree Label');
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
    fireEvent.click(treeLabel);
    screen.getByText('Hello World');
    fireEvent.click(treeLabel);
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
  });
  test('Shows children by default when defaultOpen is true (and uses uncontrolled open state)', () => {
    renderWithTheme(React.createElement(Tree, {
      label: "Tree Label",
      defaultOpen: true
    }, "Hello World"));
    screen.getByText('Hello World');
  });
  test('Handles controlled open state via isOpen and toggleOpen props', () => {
    renderWithTheme(React.createElement(Controlled, null));
    const treeLabel = screen.getByText('Controlled Tree');
    screen.getByText('Stuff here');
    fireEvent.click(treeLabel);
    expect(screen.queryByText('Stuff here')).not.toBeInTheDocument();
    fireEvent.click(treeLabel);
    screen.getByText('Stuff here');
    const toggleSwitch = screen.getByRole('switch');
    fireEvent.click(toggleSwitch);
    expect(screen.queryByText('Stuff here')).not.toBeInTheDocument();
  });
  test('Triggers onClose and onOpen callbacks when provided via props', () => {
    const onClose = jest.fn();
    const onOpen = jest.fn();
    renderWithTheme(React.createElement(Tree, {
      label: "Tree Label",
      onClose: onClose,
      onOpen: onOpen
    }, "Hello World"));
    const treeLabel = screen.getByText('Tree Label');
    fireEvent.click(treeLabel);
    expect(onOpen).toHaveBeenCalledTimes(1);
    fireEvent.click(treeLabel);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  test('Clicks on detail do not open the Tree or trigger callbacks when accessory === true', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(React.createElement(Tree, {
      label: "Tree Label",
      detail: {
        content: React.createElement(Button, null, "Tree Detail"),
        options: {
          accessory: true
        }
      },
      onClose: onClose,
      onOpen: onOpen
    }, "Hello World"));
    const detail = screen.getByText('Tree Detail');
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
    fireEvent.click(detail);
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
    expect(onOpen).toHaveBeenCalledTimes(0);
  });
  test('Key presses on detail do not open the Tree or trigger callbacks when accessory === true', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(React.createElement(Tree, {
      label: "Tree Label",
      detail: {
        content: React.createElement(Button, null, "Tree Detail"),
        options: {
          accessory: true
        }
      },
      onClose: onClose,
      onOpen: onOpen
    }, "Hello World"));
    const detail = screen.getByText('Tree Detail');
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
    fireEvent.keyDown(detail, {
      key: 'Enter'
    });
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
    expect(onOpen).toHaveBeenCalledTimes(0);
  });
  test('Clicks on detail open the Tree and trigger callbacks when accessory === false', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    renderWithTheme(React.createElement(Tree, {
      label: "Tree Label",
      detail: {
        content: 'Tree Detail',
        options: {
          accessory: false
        }
      },
      onClose: onClose,
      onOpen: onOpen
    }, "Hello World"));
    const detail = screen.getByText('Tree Detail');
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
    fireEvent.click(detail);
    screen.getByText('Hello World');
    expect(onOpen).toHaveBeenCalledTimes(1);
    fireEvent.click(detail);
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  test('Shows and hides detail on Tree hover when hoverDisclosure === true', () => {
    renderWithTheme(React.createElement(Tree, {
      label: "Tree Label",
      detail: {
        content: 'Tree Detail',
        options: {
          hoverDisclosure: true
        }
      }
    }, "Hello World"));
    expect(screen.queryByText('Tree Detail')).not.toBeInTheDocument();
    fireEvent.mouseEnter(screen.getByText('Tree Label'), {
      bubbles: true
    });
    expect(screen.getByText('Tree Detail')).toBeInTheDocument();
  });
  describe('color', () => {
    test('theme.colors.key', () => {
      renderWithTheme(React.createElement(Tree, {
        color: "key",
        selected: true,
        label: "Whatever",
        icon: React.createElement(Science, {
          "data-testid": "icon"
        })
      }));
      expect(screen.getByText('Whatever')).toHaveStyle('color: #262d33');
      expect(screen.getByTestId('icon').parentNode).toHaveStyle('color: #707781');
    });
    test('calculation', () => {
      renderWithTheme(React.createElement(Tree, {
        color: "calculation",
        selected: true,
        label: "Whatever",
        icon: React.createElement(Science, {
          "data-testid": "icon"
        })
      }));
      expect(screen.getByText('Whatever')).toHaveStyle('color: #319220');
      expect(screen.getByTestId('icon').parentNode).toHaveStyle('color: #319220');
    });
    test('disabled', () => {
      renderWithTheme(React.createElement(Tree, {
        disabled: true,
        label: "Whatever",
        icon: React.createElement(Science, {
          "data-testid": "icon"
        })
      }));
      expect(screen.getByText('Whatever')).toHaveStyle('color: #939ba5');
      expect(screen.getByTestId('icon').parentNode).toHaveStyle('color: #939ba5');
    });
  });
  describe('aria roles', () => {
    test('selected Trees have aria-selected=true', () => {
      renderWithTheme(React.createElement(Tree, {
        color: "calculation",
        selected: true,
        label: "Whatever",
        icon: React.createElement(Science, {
          "data-testid": "icon"
        })
      }));
      expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-selected', 'true');
    });
    test('Trees can take aria-current=true', () => {
      renderWithTheme(React.createElement(Tree, {
        "aria-current": true,
        color: "calculation",
        label: "Whatever",
        icon: React.createElement(Science, {
          "data-testid": "icon"
        })
      }));
      expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-current', 'true');
    });
  });
  describe('itemRole', () => {
    test('renders inner <TreeItem> as <div> by default', () => {
      renderWithTheme(React.createElement(Tree, {
        label: "Default Tree"
      }));
      expect(screen.getByText('Default Tree').closest('button')).toBe(null);
      expect(screen.getByText('Default Tree').closest('a')).toBe(null);
    });
    test('renders inner <TreeItem> as <a> and receives link-related props when itemRole="link"', () => {
      renderWithTheme(React.createElement(Tree, {
        href: "https://google.com",
        itemRole: "link",
        label: "Link Tree",
        target: "_blank"
      }));
      const treeItemLink = screen.getByText('Link Tree').closest('a');
      expect(treeItemLink).toHaveAttribute('href', 'https://google.com');
      expect(treeItemLink).toHaveAttribute('target', '_blank');
      expect(treeItemLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
//# sourceMappingURL=Tree.spec.js.map