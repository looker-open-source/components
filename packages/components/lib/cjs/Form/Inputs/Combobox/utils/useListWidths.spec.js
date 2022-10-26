"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _useListWidths2 = require("./useListWidths");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getBoundingClientRectMock = jest.fn();
var mockWrapper = {
  getBoundingClientRect: getBoundingClientRectMock
};

function TestComponent(props) {
  var _useListWidths = (0, _useListWidths2.useListWidths)(_objectSpread(_objectSpread({}, props), {}, {
    wrapperElement: mockWrapper
  })),
      minWidth = _useListWidths.minWidth,
      width = _useListWidths.width;

  return _react["default"].createElement("div", null, _react["default"].createElement("span", {
    "data-testid": "minWidth"
  }, minWidth), _react["default"].createElement("span", {
    "data-testid": "width"
  }, width));
}

describe('useListWidths', function () {
  beforeEach(function () {
    getBoundingClientRectMock.mockImplementation(function () {
      return {
        width: 1234
      };
    });
  });
  afterEach(function () {
    getBoundingClientRectMock.mockClear();
  });
  test('getBoundingClientRect is not called when list is closed', function () {
    (0, _react2.render)(_react["default"].createElement(TestComponent, null));
    expect(_react2.screen.getByTestId('width')).toHaveTextContent('auto');
    expect(_react2.screen.getByTestId('minWidth')).toHaveTextContent('');
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled();
  });
  test('getBoundingClientRect is not called when width prop is defined (except auto)', function () {
    (0, _react2.render)(_react["default"].createElement(TestComponent, {
      isVisible: true,
      width: "90vw"
    }));
    expect(_react2.screen.getByTestId('width')).toHaveTextContent('90vw');
    expect(_react2.screen.getByTestId('minWidth')).toHaveTextContent('');
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled();
  });
  test('getBoundingClientRect is not called when width prop is auto and minWidth is defined', function () {
    (0, _react2.render)(_react["default"].createElement(TestComponent, {
      isVisible: true,
      width: "auto",
      minWidth: 101
    }));
    expect(_react2.screen.getByTestId('width')).toHaveTextContent('auto');
    expect(_react2.screen.getByTestId('minWidth')).toHaveTextContent('101');
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled();
  });
  test('getBoundingClientRect is called when width prop is undefined', function () {
    (0, _react2.render)(_react["default"].createElement(TestComponent, {
      isVisible: true
    }));
    expect(_react2.screen.getByTestId('width')).toHaveTextContent('1234');
    expect(_react2.screen.getByTestId('minWidth')).toHaveTextContent('');
    expect(mockWrapper.getBoundingClientRect).toHaveBeenCalledTimes(1);
  });
  test('getBoundingClientRect is called when width prop is auto', function () {
    (0, _react2.render)(_react["default"].createElement(TestComponent, {
      isVisible: true,
      width: "auto"
    }));
    expect(_react2.screen.getByTestId('width')).toHaveTextContent('auto');
    expect(_react2.screen.getByTestId('minWidth')).toHaveTextContent('1234');
    expect(mockWrapper.getBoundingClientRect).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=useListWidths.spec.js.map