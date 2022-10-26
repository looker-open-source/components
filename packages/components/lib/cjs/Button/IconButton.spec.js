"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _componentsProviders = require("@looker/components-providers");

var _componentsTestUtils = require("@looker/components-test-utils");

var _material = require("@styled-icons/material");

var _react2 = require("@testing-library/react");

var _Tooltip = require("../Tooltip");

var _IconButton = require("./IconButton");

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

var runTimers = function runTimers() {
  return (0, _react2.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

describe('IconButton', function () {
  test('toggle applies aria-pressed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
      label: "Test",
      icon: _react["default"].createElement(_material.Favorite, null),
      toggle: true
    }));

    var button = _react2.screen.getByRole('button');

    expect(button).toHaveAttribute('aria-pressed');
  });
  test('aria-pressed not present without toggle', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
      label: "Test",
      icon: _react["default"].createElement(_material.Favorite, null)
    }));

    var button = _react2.screen.getByRole('button');

    expect(button).not.toHaveAttribute('aria-pressed');
  });
  test('allows for ARIA attributes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
      label: "Test",
      icon: _react["default"].createElement(_material.Favorite, null),
      "aria-haspopup": true
    }));

    var button = _react2.screen.getByRole('button');

    expect(button).toHaveAttribute('aria-haspopup');
  });
  test('accepts events', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var fauxMouseEnter, fauxClick, button;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fauxMouseEnter = jest.fn();
            fauxClick = jest.fn();
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
              label: "Test",
              icon: _react["default"].createElement(_material.Favorite, null),
              onMouseEnter: fauxMouseEnter,
              onClick: fauxClick
            }));
            button = _react2.screen.getByRole('button');

            _react2.fireEvent.mouseOver(button);

            expect(fauxMouseEnter).toHaveBeenCalledTimes(1);

            _react2.fireEvent.mouseOut(button);

            runTimers();

            _react2.fireEvent.click(button);

            expect(fauxClick).toHaveBeenCalledTimes(1);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('has built-in tooltip', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    var label, notTooltip, icon, tooltip;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            label = 'Mark as my Favorite';
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
              label: label,
              icon: _react["default"].createElement(_material.Favorite, null)
            }));
            notTooltip = _react2.screen.getByText(label);
            expect(notTooltip).toBeInTheDocument();
            icon = _react2.screen.getByText(label);

            _react2.fireEvent.mouseOver(icon);

            runTimers();
            tooltip = _react2.screen.getAllByText(label);
            expect(tooltip).toHaveLength(2);
            expect(tooltip[1]).toBeVisible();

            _react2.fireEvent.mouseOut(icon);

            runTimers();

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('tooltipDisabled actually disables tooltip', function () {
    var label = 'Mark as my Favorite';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
      id: "test-iconButton",
      tooltipDisabled: true,
      label: label,
      icon: _react["default"].createElement(_material.Favorite, null)
    }));

    _react2.fireEvent.mouseOver(_react2.screen.getAllByText(label)[0]);

    runTimers();

    var notTooltip = _react2.screen.queryAllByText(label);

    expect(notTooltip.length).toEqual(1);
  });
  test('built-in tooltip defers to outer tooltip', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
    var tooltip, label, button, iconLabel, tooltipContents;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            tooltip = 'Add to favorites';
            label = 'Mark as my Favorite';
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tooltip.Tooltip, {
              content: tooltip
            }, _react["default"].createElement(_IconButton.IconButton, {
              label: label,
              icon: _react["default"].createElement(_material.Favorite, null)
            })));
            button = _react2.screen.getByRole('button');

            _react2.fireEvent.mouseOver(button);

            runTimers();
            expect(_react2.screen.getByText(tooltip)).toBeInTheDocument();
            iconLabel = _react2.screen.getByText(label);
            expect(iconLabel).toBeInTheDocument();
            tooltipContents = _react2.screen.getByText(tooltip);
            expect(tooltipContents).toBeVisible();

            _react2.fireEvent.mouseOut(button);

            runTimers();

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('built-in tooltip respects text-align, width props', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee4() {
    var label, trigger, tooltip;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            label = 'Mark as my Favorite';
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
              tooltipWidth: "4rem",
              tooltipTextAlign: "right",
              label: label,
              icon: _react["default"].createElement(_material.Favorite, null)
            }));
            trigger = _react2.screen.getByText(label);

            _react2.fireEvent.mouseOver(trigger);

            runTimers();
            tooltip = _react2.screen.queryAllByText(label);
            expect(tooltip[0]).toBeVisible();
            expect(tooltip[0]).toHaveStyleRule('max-width', '4rem');
            expect(tooltip[0]).toHaveStyleRule('text-align', 'right');

            _react2.fireEvent.mouseOut(trigger);

            runTimers();

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test('toggleBackground renders a background', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
      label: "Test",
      toggle: true,
      toggleBackground: true,
      icon: _react["default"].createElement(_material.Favorite, null)
    }));

    var button = _react2.screen.getByRole('button');

    expect(button).toHaveStyle('background-color: #F3F2FF;');
  });
  test('toggleBackground with shape renders a round background', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
      icon: _react["default"].createElement(_material.Favorite, null),
      label: "Test",
      shape: "round",
      toggle: true,
      toggleBackground: true
    }));

    var button = _react2.screen.getByRole('button');

    expect(button).toHaveStyle('background-color: #F3F2FF;');
    expect(button).toHaveStyle('border-radius: 100%;');
    expect(button).toHaveStyle('color: #6c43e0;');
  });
  test('toggleColor', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
      label: "Test",
      toggle: true,
      toggleBackground: true,
      toggleColor: "calculation",
      icon: _react["default"].createElement(_material.Favorite, null)
    }));

    var button = _react2.screen.getByRole('button');

    expect(button).toHaveStyle('background-color: #eaf4e8;');
    expect(button).toHaveStyle('color: #319220;');
  });
  test('toggleColor + :active', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
      className: "active",
      icon: _react["default"].createElement(_material.Favorite, null),
      label: "Test",
      toggle: true,
      toggleColor: "calculation"
    }));

    var button = _react2.screen.getByRole('button');

    expect(button).toHaveStyle('color: #319220');
  });
  describe('ripple effect', function () {
    test('default', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
        icon: _react["default"].createElement(_material.Favorite, null),
        label: "Test"
      }));

      var button = _react2.screen.getByRole('button');

      expect(button).not.toHaveClass('bg-on fg-in');
      expect(button).toHaveStyle({
        '--ripple-color': '#71767a',
        '--ripple-scale-end': '1',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0'
      });

      _react2.fireEvent.focus(button);

      expect(button).toHaveClass('bg-on');

      _react2.fireEvent.mouseDown(button);

      expect(button).toHaveClass('bg-on fg-in');

      _react2.fireEvent.mouseUp(button);

      runTimers();
      expect(button).toHaveClass('bg-on fg-out');
      runTimers();
      expect(button).toHaveClass('bg-on');

      _react2.fireEvent.blur(button);

      expect(button).not.toHaveClass('bg-on fg-in');
    });
    test('toggle', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
        icon: _react["default"].createElement(_material.Favorite, null),
        label: "Test",
        toggle: true
      }));

      var button = _react2.screen.getByRole('button');

      expect(button).toHaveStyle({
        '--ripple-color': '#6C43E0'
      });
    });
    test('toggleColor', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
        icon: _react["default"].createElement(_material.Favorite, null),
        label: "Test",
        toggle: true,
        toggleColor: "measure"
      }));

      var button = _react2.screen.getByRole('button');

      expect(button).toHaveStyle({
        '--ripple-color': '#C2772E'
      });
    });
    test('square', function () {
      var globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
      Element.prototype.getBoundingClientRect = jest.fn(function () {
        return {
          bottom: 0,
          height: 30,
          left: 0,
          right: 0,
          toJSON: jest.fn(),
          top: 0,
          width: 360,
          x: 0,
          y: 0
        };
      });
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_IconButton.IconButton, {
        icon: _react["default"].createElement(_material.Favorite, null),
        label: "Test",
        shape: "square"
      }));

      var button = _react2.screen.getByRole('button');

      expect(button).toHaveStyle({
        '--ripple-color': '#71767a',
        '--ripple-scale-end': '1.414',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0'
      });
      Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
    });
  });
  test('No useLayoutEffect warning', function () {
    _server["default"].renderToString(_react["default"].createElement(_componentsProviders.ComponentsProvider, null, _react["default"].createElement(_IconButton.IconButton, {
      icon: _react["default"].createElement(_material.Favorite, null),
      label: "Test"
    })));
  });
});
//# sourceMappingURL=IconButton.spec.js.map