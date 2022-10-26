"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _componentsProviders = require("@looker/components-providers");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _ = require("./");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var globalConsole = global.console;
var warnMock = jest.fn();
var paddingSpy;
beforeEach(function () {
  paddingSpy = jest.spyOn(document.body.style, 'paddingRight', 'set');
  global.console = _objectSpread(_objectSpread({}, globalConsole), {}, {
    warn: warnMock
  });
});
afterEach(function () {
  jest.resetAllMocks();
  global.console = globalConsole;
  paddingSpy.mockClear();
});

var ScrollLockComponent = function ScrollLockComponent() {
  var _useScrollLock = (0, _.useScrollLock)(),
      _useScrollLock2 = (0, _slicedToArray2["default"])(_useScrollLock, 2),
      ref = _useScrollLock2[1];

  var _useToggle = (0, _.useToggle)(),
      value = _useToggle.value,
      toggle = _useToggle.toggle;

  return _react2["default"].createElement(_react2["default"].Fragment, null, value && _react2["default"].createElement("div", {
    ref: ref,
    "data-testid": "scroll-lock-element"
  }), _react2["default"].createElement("button", {
    onClick: toggle
  }, "toggle"));
};

describe('useScrollLock', function () {
  describe('toggle body styles', function () {
    test('with no existing style', function () {
      (0, _react.render)(_react2["default"].createElement(_componentsProviders.ScrollLockProvider, null, _react2["default"].createElement(ScrollLockComponent, null)));
      expect(document.body).not.toHaveStyle({
        overflow: 'hidden'
      });

      var toggle = _react.screen.getByText('toggle');

      _react.fireEvent.click(toggle);

      expect(document.body).toHaveStyle({
        overflow: 'hidden'
      });
      expect(paddingSpy.mock.calls).toMatchInlineSnapshot("\n        Array [\n          Array [\n            \"calc( + 0px)\",\n          ],\n        ]\n      ");

      _react.fireEvent.click(toggle);

      expect(document.body).not.toHaveStyle({
        overflow: 'hidden'
      });
    });
    test('with existing style', function () {
      document.body.style.overflow = 'scroll';
      (0, _react.render)(_react2["default"].createElement(_componentsProviders.ScrollLockProvider, null, _react2["default"].createElement(ScrollLockComponent, null)));
      expect(document.body).toHaveStyle({
        overflow: 'scroll'
      });

      var toggle = _react.screen.getByText('toggle');

      _react.fireEvent.click(toggle);

      expect(document.body).toHaveStyle({
        overflow: 'hidden'
      });
      expect(paddingSpy.mock.calls).toMatchInlineSnapshot("\n              Array [\n                Array [\n                  \"calc( + 0px)\",\n                ],\n              ]\n          ");

      _react.fireEvent.click(toggle);

      expect(document.body).toHaveStyle({
        overflow: 'scroll'
      });
      document.body.style.overflow = '';
    });
    test('no scrollbar detected', function () {
      var widthSpy = jest.spyOn(document.documentElement, 'clientWidth', 'get').mockImplementation(function () {
        return 1025;
      });
      (0, _react.render)(_react2["default"].createElement(_componentsProviders.ScrollLockProvider, null, _react2["default"].createElement(ScrollLockComponent, null)));

      var toggle = _react.screen.getByText('toggle');

      _react.fireEvent.click(toggle);

      expect(paddingSpy).not.toHaveBeenCalled();
      widthSpy.mockRestore();
    });
  });
  test('warning when used without ScrollLockProvider', function () {
    (0, _react.render)(_react2["default"].createElement(ScrollLockComponent, null));
    expect(warnMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"ScrollLockContext is missing. Please wrap all @looker/components in a ComponentsProvider.\",\n        ],\n      ]\n    ");
  });
  describe('scroll handler', function () {
    test('stops scroll in other elements', function () {
      (0, _react.render)(_react2["default"].createElement(_componentsProviders.ScrollLockProvider, null, _react2["default"].createElement(ScrollLockComponent, null), _react2["default"].createElement("div", {
        "data-testid": "scrollable-element"
      })));

      var toggle = _react.screen.getByText('toggle');

      _react.fireEvent.click(toggle);

      var scrollDiv = _react.screen.getByTestId('scrollable-element');

      var scrollSpy = jest.spyOn(scrollDiv, 'scrollTop', 'set');

      _react.fireEvent.scroll(scrollDiv);

      expect(scrollSpy.mock.calls).toMatchInlineSnapshot("\n              Array [\n                Array [\n                  0,\n                ],\n              ]\n          ");
      scrollSpy.mockRestore();
    });
    test('does not stop scroll in scroll lock element', function () {
      (0, _react.render)(_react2["default"].createElement(_componentsProviders.ScrollLockProvider, null, _react2["default"].createElement(ScrollLockComponent, null), _react2["default"].createElement("div", {
        "data-testid": "scroll me"
      })));

      var toggle = _react.screen.getByText('toggle');

      _react.fireEvent.click(toggle);

      var scrollDiv = _react.screen.getByTestId('scroll-lock-element');

      var scrollSpy = jest.spyOn(scrollDiv, 'scrollTop', 'set');

      _react.fireEvent.scroll(scrollDiv);

      expect(scrollSpy).not.toHaveBeenCalled();
      scrollSpy.mockRestore();
    });
    test('stops scroll on document', function () {
      (0, _react.render)(_react2["default"].createElement(_componentsProviders.ScrollLockProvider, null, _react2["default"].createElement(ScrollLockComponent, null), _react2["default"].createElement("div", {
        "data-testid": "scroll me"
      })));

      var toggle = _react.screen.getByText('toggle');

      _react.fireEvent.click(toggle);

      var scrollSpy = jest.spyOn(window, 'scrollTo').mockImplementation(function () {});

      _react.fireEvent.scroll(document);

      expect(scrollSpy.mock.calls).toMatchInlineSnapshot("\n        Array [\n          Array [\n            Object {\n              \"top\": 0,\n            },\n          ],\n        ]\n      ");
      scrollSpy.mockRestore();
    });
  });
});
//# sourceMappingURL=useScrollLock.spec.js.map