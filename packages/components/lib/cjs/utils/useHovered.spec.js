"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("@testing-library/react");

var _react2 = _interopRequireWildcard(require("react"));

var _useHovered3 = require("./useHovered");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HoveredComponent = function HoveredComponent() {
  var hoverRef = (0, _react2.useRef)(null);

  var _useHovered = (0, _useHovered3.useHovered)(hoverRef),
      _useHovered2 = (0, _slicedToArray2["default"])(_useHovered, 1),
      isHovered = _useHovered2[0];

  return _react2["default"].createElement("div", {
    ref: hoverRef,
    tabIndex: 0
  }, "hover me", isHovered && _react2["default"].createElement("button", null, "button"));
};

describe('useHovered', function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });

  var runTimers = function runTimers() {
    return (0, _react.act)(function () {
      jest.runOnlyPendingTimers();
    });
  };

  it('toggles on hover', function () {
    (0, _react.render)(_react2["default"].createElement(HoveredComponent, null));
    expect(_react.screen.queryByText('button')).not.toBeInTheDocument();

    var hoverMe = _react.screen.getByText('hover me');

    _react.fireEvent.mouseEnter(hoverMe);

    expect(_react.screen.getByText('button')).toBeVisible();

    _react.fireEvent.mouseLeave(hoverMe);

    runTimers();
    expect(_react.screen.queryByText('button')).not.toBeInTheDocument();
  });
  it('toggles on focus', function () {
    (0, _react.render)(_react2["default"].createElement(HoveredComponent, null));
    expect(_react.screen.queryByText('button')).not.toBeInTheDocument();

    var hoverMe = _react.screen.getByText('hover me');

    _react.fireEvent.focus(hoverMe);

    var button = _react.screen.getByText('button');

    expect(button).toBeVisible();

    _react.fireEvent.focus(button);

    _react.fireEvent.mouseEnter(hoverMe);

    expect(button).toBeVisible();

    _react.fireEvent.mouseLeave(hoverMe);

    expect(button).toBeVisible();

    _react.fireEvent.blur(button);

    runTimers();
    expect(_react.screen.queryByText('button')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=useHovered.spec.js.map