"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _2 = require("./");

var globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
jest.mock('lodash/throttle', function () {
  return function (fn) {
    return fn;
  };
});
beforeEach(function () {
  jest.useFakeTimers();
  Element.prototype.getBoundingClientRect = jest.fn(function () {
    return {
      bottom: 0,
      height: 342,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 260,
      x: 0,
      y: 0
    };
  });
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.resetAllMocks();
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
});
var arr3000 = Array.from(Array(3000), function (_, i) {
  return i;
});

var WindowedComponent = function WindowedComponent(_ref) {
  var children = _ref.children;

  var _useToggle = (0, _2.useToggle)(true),
      value = _useToggle.value,
      toggle = _useToggle.toggle;

  var _useWindow = (0, _2.useWindow)({
    enabled: value,
    itemCount: 3000,
    itemHeight: 87,
    spacerTag: 'li'
  }),
      after = _useWindow.after,
      before = _useWindow.before,
      end = _useWindow.end,
      start = _useWindow.start,
      ref = _useWindow.ref;

  return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("ul", {
    ref: ref,
    "data-testid": "list"
  }, before, children.slice(start, end + 1), after), _react2["default"].createElement("button", {
    onClick: toggle
  }, "toggle"));
};

describe('useWindow', function () {
  test('returns placeholders and children in "window"', function () {
    (0, _react.render)(_react2["default"].createElement(WindowedComponent, null, arr3000.map(function (num) {
      return _react2["default"].createElement("li", {
        key: num
      }, num);
    })));
    expect(_react.screen.getByText('0')).toBeVisible();
    expect(_react.screen.getByText('9')).toBeVisible();
    expect(_react.screen.queryByText('10')).not.toBeInTheDocument();
    expect(_react.screen.queryByTestId('before')).not.toBeInTheDocument();
    expect(_react.screen.getByTestId('after')).toHaveStyle('height: 260130px;');
  });
  test('updates window on scroll', function () {
    (0, _react.render)(_react2["default"].createElement(WindowedComponent, null, arr3000.map(function (num) {
      return _react2["default"].createElement("li", {
        key: num
      }, num);
    })));

    var list = _react.screen.getByTestId('list');

    Object.defineProperty(list, 'scrollTop', {
      value: 1514,
      writable: true
    });
    jest.runAllTimers();

    _react.fireEvent.scroll(list);

    expect(_react.screen.queryByText('11')).not.toBeInTheDocument();
    expect(_react.screen.getByText('12')).toBeVisible();
    expect(_react.screen.getByText('27')).toBeVisible();
    expect(_react.screen.queryByText('28')).not.toBeInTheDocument();
    expect(_react.screen.getByTestId('before')).toHaveStyle('height: 1044px;');
    expect(_react.screen.getByTestId('after')).toHaveStyle('height: 258564px;');
  });
  test('updates window on scroll (to end)', function () {
    (0, _react.render)(_react2["default"].createElement(WindowedComponent, null, arr3000.map(function (num) {
      return _react2["default"].createElement("li", {
        key: num
      }, num);
    })));

    var list = _react.screen.getByTestId('list');

    Object.defineProperty(list, 'scrollTop', {
      value: 260658,
      writable: true
    });
    jest.runAllTimers();

    _react.fireEvent.scroll(list);

    expect(_react.screen.queryByText('2990')).not.toBeInTheDocument();
    expect(_react.screen.getByText('2991')).toBeVisible();
    expect(_react.screen.getByText('2999')).toBeVisible();
    expect(_react.screen.getByTestId('before')).toHaveStyle('height: 260217px;');
    expect(_react.screen.queryByTestId('after')).not.toBeInTheDocument();
  });
  test('updates window on resize', function () {
    (0, _react.render)(_react2["default"].createElement(WindowedComponent, null, arr3000.map(function (num) {
      return _react2["default"].createElement("li", {
        key: num
      }, num);
    })));
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        bottom: 0,
        height: 873,
        left: 0,
        right: 0,
        toJSON: jest.fn(),
        top: 0,
        width: 260,
        x: 0,
        y: 0
      };
    });
    (0, _react.fireEvent)(window, new Event('resize'));
    expect(_react.screen.getByText('0')).toBeVisible();
    expect(_react.screen.getByText('16')).toBeVisible();
    expect(_react.screen.queryByText('17')).not.toBeInTheDocument();
    expect(_react.screen.queryByTestId('before')).not.toBeInTheDocument();
    expect(_react.screen.getByTestId('after')).toHaveStyle('height: 259521px;');
  });
});
//# sourceMappingURL=useWindow.spec.js.map