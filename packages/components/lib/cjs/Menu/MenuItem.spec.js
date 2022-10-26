"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _materialOutlined = require("@styled-icons/material-outlined");

var _react2 = require("@testing-library/react");

var _MenuItem = require("./MenuItem");

var globalConsole = global.console;
var warnMock = jest.fn();
beforeEach(function () {
  jest.useFakeTimers();
  global.console = {
    warn: warnMock
  };
});
afterEach(function () {
  global.console = globalConsole;
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

var runTimers = function runTimers() {
  return (0, _react2.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

describe('MenuItem', function () {
  test('renders', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, null, "who!"));
    expect(_react2.screen.getByText('who!')).toBeVisible();
  });
  test('detail', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, {
      detail: "Is an excellent question"
    }, "who!"));
    expect(_react2.screen.getByText('Is an excellent question')).toBeVisible();
  });
  test('icon', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_materialOutlined.Science, null)
    }, "Icon"));
    expect(_react2.screen.getByText('Icon')).toBeVisible();
  });
  test('artwork', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg"
      }, _react["default"].createElement("title", null, "SVG Title Here"))
    }, "Artwork"));
    expect(_react2.screen.getByTitle('SVG Title Here')).toBeInTheDocument();
  });
  test('disabled to be a button', function () {
    var callbackFn = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, {
      disabled: true,
      href: "https://google.com",
      onClick: callbackFn,
      target: "_blank"
    }, "Item"));

    var item = _react2.screen.getByText('Item');

    expect(item.closest('button')).toBeInTheDocument();
  });
  test('disabled is not clickable', function () {
    var callbackFn = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, {
      itemRole: "button",
      disabled: true,
      onClick: callbackFn
    }, "Item"));

    var item = _react2.screen.getByText('Item');

    _react2.fireEvent.click(item);

    expect(callbackFn).toHaveBeenCalledTimes(0);
  });
  test('link with target="_blank" and no passed-in rel prop value uses rel="noopener noreferrer"', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, {
      itemRole: "link",
      href: "https://google.com",
      target: "_blank"
    }, "Link"));

    var item = _react2.screen.getByRole('menuitem');

    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('target', '_blank');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'noopener noreferrer');
  });
  test('link with target="_blank" and passed-in rel prop value auto appends "noopener noreferrer" to rel prop value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, {
      itemRole: "link",
      href: "https://google.com",
      rel: "nogouda",
      target: "_blank"
    }, "Link"));

    var item = _react2.screen.getByRole('menuitem');

    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('target', '_blank');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'nogouda noopener noreferrer');
  });
  test('link without target="_blank" does not auto append "noopener noreferrer"', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, {
      itemRole: "link",
      rel: "nogouda",
      href: "https://google.com"
    }, "Link"));

    var item = _react2.screen.getByRole('menuitem');

    expect(item.nodeName).toBe('A');
    expect(item).toHaveAttribute('href', 'https://google.com');
    expect(item).toHaveAttribute('rel', 'nogouda');
  });
  test('warns on nested menu item w/ detail', function () {
    var warnMock = jest.fn();
    global.console = {
      warn: warnMock
    };
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, {
      detail: "Something",
      nestedMenu: true
    }, "Nested Menu"));
    expect(warnMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"The detail prop is not supported when nestedMenu is used.\",\n        ],\n        Array [\n          \"The detail prop is not supported when nestedMenu is used.\",\n        ],\n      ]\n    ");
  });
  describe('ripple effect', function () {
    test('default', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MenuItem.MenuItem, null, "Menu Item"));

      var menu = _react2.screen.getByText('Menu Item').closest('button');

      expect(menu).not.toHaveClass('bg-on fg-in');
      expect(menu).toHaveStyle({
        '--ripple-color': '#71767a',
        '--ripple-scale-end': '1',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0'
      });
      menu && _react2.fireEvent.focus(menu);
      expect(menu).toHaveClass('bg-on');
      menu && _react2.fireEvent.mouseDown(menu);
      expect(menu).toHaveClass('bg-on fg-in');
      menu && _react2.fireEvent.mouseUp(menu);
      runTimers();
      expect(menu).toHaveClass('bg-on fg-out');
      runTimers();
      expect(menu).toHaveClass('bg-on');
      menu && _react2.fireEvent.blur(menu);
      expect(menu).not.toHaveClass('bg-on fg-in');

      _react2.fireEvent.click(document);
    });
  });
});
//# sourceMappingURL=MenuItem.spec.js.map