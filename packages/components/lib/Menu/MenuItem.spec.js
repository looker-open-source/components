import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Science } from '@styled-icons/material-outlined';
import { act, fireEvent, screen } from '@testing-library/react';
import { MenuItem } from './MenuItem';
const globalConsole = global.console;
const warnMock = jest.fn();
beforeEach(() => {
  jest.useFakeTimers();
  global.console = {
    warn: warnMock
  };
});
afterEach(() => {
  global.console = globalConsole;
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

const runTimers = () => act(() => {
  jest.runOnlyPendingTimers();
});

describe('MenuItem', () => {
  test('renders', () => {
    renderWithTheme(React.createElement(MenuItem, null, "who!"));
    expect(screen.getByText('who!')).toBeVisible();
  });
  test('detail', () => {
    renderWithTheme(React.createElement(MenuItem, {
      detail: "Is an excellent question"
    }, "who!"));
    expect(screen.getByText('Is an excellent question')).toBeVisible();
  });
  test('icon', () => {
    renderWithTheme(React.createElement(MenuItem, {
      icon: React.createElement(Science, null)
    }, "Icon"));
    expect(screen.getByText('Icon')).toBeVisible();
  });
  test('artwork', () => {
    renderWithTheme(React.createElement(MenuItem, {
      icon: React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("title", null, "SVG Title Here"))
    }, "Artwork"));
    expect(screen.getByTitle('SVG Title Here')).toBeInTheDocument();
  });
  test('disabled to be a button', () => {
    const callbackFn = jest.fn();
    renderWithTheme(React.createElement(MenuItem, {
      disabled: true,
      href: "https://google.com",
      onClick: callbackFn,
      target: "_blank"
    }, "Item"));
    const item = screen.getByText('Item');
    expect(item.closest('button')).toBeInTheDocument();
  });
  test('disabled is not clickable', () => {
    const callbackFn = jest.fn();
    renderWithTheme(React.createElement(MenuItem, {
      itemRole: "button",
      disabled: true,
      onClick: callbackFn
    }, "Item"));
    const item = screen.getByText('Item');
    fireEvent.click(item);
    expect(callbackFn).toHaveBeenCalledTimes(0);
  });
  test('link with target="_blank" and no passed-in rel prop value uses rel="noopener noreferrer"', () => {
    renderWithTheme(React.createElement(MenuItem, {
      itemRole: "link",
      href: "https://google.com",
      target: "_blank"
    }, "Link"));
    const item = screen.getByRole('menuitem');
    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('target', '_blank');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'noopener noreferrer');
  });
  test('link with target="_blank" and passed-in rel prop value auto appends "noopener noreferrer" to rel prop value', () => {
    renderWithTheme(React.createElement(MenuItem, {
      itemRole: "link",
      href: "https://google.com",
      rel: "nogouda",
      target: "_blank"
    }, "Link"));
    const item = screen.getByRole('menuitem');
    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('target', '_blank');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'nogouda noopener noreferrer');
  });
  test('link without target="_blank" does not auto append "noopener noreferrer"', () => {
    renderWithTheme(React.createElement(MenuItem, {
      itemRole: "link",
      rel: "nogouda",
      href: "https://google.com"
    }, "Link"));
    const item = screen.getByRole('menuitem');
    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'nogouda');
  });
  test('warns on nested menu item w/ detail', () => {
    const warnMock = jest.fn();
    global.console = {
      warn: warnMock
    };
    renderWithTheme(React.createElement(MenuItem, {
      detail: "Something",
      nestedMenu: true
    }, "Nested Menu"));
    expect(warnMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "The detail prop is not supported when nestedMenu is used.",
        ],
        Array [
          "The detail prop is not supported when nestedMenu is used.",
        ],
      ]
    `);
  });
  describe('ripple effect', () => {
    test('default', () => {
      renderWithTheme(React.createElement(MenuItem, null, "Menu Item"));
      const menu = screen.getByText('Menu Item').closest('button');
      expect(menu).not.toHaveClass('bg-on fg-in');
      expect(menu).toHaveStyle({
        '--ripple-color': '#71767a',
        '--ripple-scale-end': '1',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0'
      });
      menu && fireEvent.focus(menu);
      expect(menu).toHaveClass('bg-on');
      menu && fireEvent.mouseDown(menu);
      expect(menu).toHaveClass('bg-on fg-in');
      menu && fireEvent.mouseUp(menu);
      runTimers();
      expect(menu).toHaveClass('bg-on fg-out');
      runTimers();
      expect(menu).toHaveClass('bg-on');
      menu && fireEvent.blur(menu);
      expect(menu).not.toHaveClass('bg-on fg-in');
      fireEvent.click(document);
    });
  });
});
//# sourceMappingURL=MenuItem.spec.js.map