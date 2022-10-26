"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("@testing-library/react");

var _react2 = _interopRequireWildcard(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _ = require("./");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
beforeEach(function () {
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
});
afterEach(function () {
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
});

var ResizeComponent = function ResizeComponent(_ref) {
  var callback = _ref.callback;

  var _useState = (0, _react2.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      element = _useState2[0],
      ref = _useState2[1];

  (0, _.useResize)(element, callback);
  return _react2["default"].createElement("div", {
    ref: ref
  });
};

describe('useResize', function () {
  test('calls the callback', function () {
    var callback = jest.fn();
    (0, _react.render)(_react2["default"].createElement(ResizeComponent, {
      callback: callback
    }));
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('No useLayoutEffect warning with SSR', function () {
    var globalConsole = global.console;
    global.console = _objectSpread(_objectSpread({}, globalConsole), {}, {
      error: function error(message) {
        throw new Error(message);
      }
    });
    var callback = jest.fn();

    _server["default"].renderToString(_react2["default"].createElement(_.SafeSSRProvider, null, _react2["default"].createElement(ResizeComponent, {
      callback: callback
    })));

    expect(callback).not.toHaveBeenCalled();
    global.console = globalConsole;
  });
});
//# sourceMappingURL=useResize.spec.js.map