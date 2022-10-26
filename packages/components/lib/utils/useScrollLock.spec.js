import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { ScrollLockProvider } from '@looker/components-providers';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { useScrollLock, useToggle } from './';
const globalConsole = global.console;
const warnMock = jest.fn();
let paddingSpy;
beforeEach(() => {
  paddingSpy = jest.spyOn(document.body.style, 'paddingRight', 'set');
  global.console = _objectSpread(_objectSpread({}, globalConsole), {}, {
    warn: warnMock
  });
});
afterEach(() => {
  jest.resetAllMocks();
  global.console = globalConsole;
  paddingSpy.mockClear();
});

const ScrollLockComponent = () => {
  const [, ref] = useScrollLock();
  const {
    value,
    toggle
  } = useToggle();
  return React.createElement(React.Fragment, null, value && React.createElement("div", {
    ref: ref,
    "data-testid": "scroll-lock-element"
  }), React.createElement("button", {
    onClick: toggle
  }, "toggle"));
};

describe('useScrollLock', () => {
  describe('toggle body styles', () => {
    test('with no existing style', () => {
      render(React.createElement(ScrollLockProvider, null, React.createElement(ScrollLockComponent, null)));
      expect(document.body).not.toHaveStyle({
        overflow: 'hidden'
      });
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      expect(document.body).toHaveStyle({
        overflow: 'hidden'
      });
      expect(paddingSpy.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "calc( + 0px)",
          ],
        ]
      `);
      fireEvent.click(toggle);
      expect(document.body).not.toHaveStyle({
        overflow: 'hidden'
      });
    });
    test('with existing style', () => {
      document.body.style.overflow = 'scroll';
      render(React.createElement(ScrollLockProvider, null, React.createElement(ScrollLockComponent, null)));
      expect(document.body).toHaveStyle({
        overflow: 'scroll'
      });
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      expect(document.body).toHaveStyle({
        overflow: 'hidden'
      });
      expect(paddingSpy.mock.calls).toMatchInlineSnapshot(`
              Array [
                Array [
                  "calc( + 0px)",
                ],
              ]
          `);
      fireEvent.click(toggle);
      expect(document.body).toHaveStyle({
        overflow: 'scroll'
      });
      document.body.style.overflow = '';
    });
    test('no scrollbar detected', () => {
      const widthSpy = jest.spyOn(document.documentElement, 'clientWidth', 'get').mockImplementation(() => 1025);
      render(React.createElement(ScrollLockProvider, null, React.createElement(ScrollLockComponent, null)));
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      expect(paddingSpy).not.toHaveBeenCalled();
      widthSpy.mockRestore();
    });
  });
  test('warning when used without ScrollLockProvider', () => {
    render(React.createElement(ScrollLockComponent, null));
    expect(warnMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "ScrollLockContext is missing. Please wrap all @looker/components in a ComponentsProvider.",
        ],
      ]
    `);
  });
  describe('scroll handler', () => {
    test('stops scroll in other elements', () => {
      render(React.createElement(ScrollLockProvider, null, React.createElement(ScrollLockComponent, null), React.createElement("div", {
        "data-testid": "scrollable-element"
      })));
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      const scrollDiv = screen.getByTestId('scrollable-element');
      const scrollSpy = jest.spyOn(scrollDiv, 'scrollTop', 'set');
      fireEvent.scroll(scrollDiv);
      expect(scrollSpy.mock.calls).toMatchInlineSnapshot(`
              Array [
                Array [
                  0,
                ],
              ]
          `);
      scrollSpy.mockRestore();
    });
    test('does not stop scroll in scroll lock element', () => {
      render(React.createElement(ScrollLockProvider, null, React.createElement(ScrollLockComponent, null), React.createElement("div", {
        "data-testid": "scroll me"
      })));
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      const scrollDiv = screen.getByTestId('scroll-lock-element');
      const scrollSpy = jest.spyOn(scrollDiv, 'scrollTop', 'set');
      fireEvent.scroll(scrollDiv);
      expect(scrollSpy).not.toHaveBeenCalled();
      scrollSpy.mockRestore();
    });
    test('stops scroll on document', () => {
      render(React.createElement(ScrollLockProvider, null, React.createElement(ScrollLockComponent, null), React.createElement("div", {
        "data-testid": "scroll me"
      })));
      const toggle = screen.getByText('toggle');
      fireEvent.click(toggle);
      const scrollSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
      fireEvent.scroll(document);
      expect(scrollSpy.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            Object {
              "top": 0,
            },
          ],
        ]
      `);
      scrollSpy.mockRestore();
    });
  });
});
//# sourceMappingURL=useScrollLock.spec.js.map