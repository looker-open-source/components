"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("jest-styled-components");

var _react = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _DialogContext = require("../Dialog/DialogContext");

var _Drawer = require("./Drawer");

var _Drawer2 = require("./stories/Drawer.stories");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SimpleContent = function SimpleContent() {
  var _useContext = (0, _react.useContext)(_DialogContext.DialogContext),
      closeModal = _useContext.closeModal;

  return _react["default"].createElement(_react["default"].Fragment, null, "Drawer content", _react["default"].createElement("button", {
    onClick: closeModal
  }, "Done"));
};

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

describe('Drawer', function () {
  test('Basic render', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Drawer.Drawer, {
      content: _react["default"].createElement(SimpleContent, null)
    }));
    expect(_react2.screen.queryByText('Drawer content')).not.toBeInTheDocument();
  });
  test('defaultOpen', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var doneButton;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Drawer.Drawer, {
              defaultOpen: true,
              content: _react["default"].createElement(SimpleContent, null)
            }));
            runTimers();
            expect(_react2.screen.getByText('Drawer content')).toBeInTheDocument();
            doneButton = _react2.screen.getByText('Done');

            _react2.fireEvent.click(doneButton);

            _context.next = 7;
            return (0, _react2.waitForElementToBeRemoved)(function () {
              return _react2.screen.queryByText('Drawer content');
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('useDrawer hook', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    var link, doneButton;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Drawer2.UseDrawerHook, null));
            expect(_react2.screen.queryByText('The Constitution of the United States')).not.toBeInTheDocument();
            link = _react2.screen.getByText('Open Drawer');

            _react2.fireEvent.click(link);

            runTimers();
            expect(_react2.screen.getByText('The Constitution of the United States')).toBeInTheDocument();
            doneButton = _react2.screen.getByText('Done Reading');

            _react2.fireEvent.click(doneButton);

            _context2.next = 10;
            return (0, _react2.waitForElementToBeRemoved)(function () {
              return _react2.screen.queryByText('The Constitution of the United States');
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('renderProps form', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
    var link, doneButton;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Drawer2.RenderProps, null));
            expect(_react2.screen.queryByText('The Constitution of the United States')).not.toBeInTheDocument();
            link = _react2.screen.getByText('Open Drawer');

            _react2.fireEvent.click(link);

            runTimers();
            expect(_react2.screen.getByText('The Constitution of the United States')).toBeInTheDocument();
            doneButton = _react2.screen.getByText('Done Reading');

            _react2.fireEvent.click(doneButton);

            _context3.next = 10;
            return (0, _react2.waitForElementToBeRemoved)(function () {
              return _react2.screen.queryByText('The Constitution of the United States');
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('renderProps form', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Drawer.Drawer, {
              defaultOpen: true,
              width: "rail",
              content: _react["default"].createElement(SimpleContent, null)
            }));
            expect(_react2.screen.getByText('Drawer content')).toHaveStyleRule('width', '3.5rem');

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});
//# sourceMappingURL=Drawer.spec.js.map