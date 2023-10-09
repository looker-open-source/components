"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FilterRangeSlider;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _utils = require("../../../../utils");
var _2 = require("../../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var getRange = function getRange(value) {
  return [value && value[0] ? value[0] : 0, value && value[1] ? value[1] : 0];
};
var NumberFilter = function NumberFilter(_ref) {
  var AST = _ref.AST,
    onChange = _ref.onChange;
  var _useToggle = (0, _utils.useToggle)(),
    value = _useToggle.value,
    toggle = _useToggle.toggle;
  var rangeValue = getRange(AST.value);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.RangeSlider, {
    min: 0,
    max: value ? 5 : 100,
    value: rangeValue,
    onChange: onChange
  }), _react["default"].createElement(_2.Space, null, _react["default"].createElement(_2.Button, {
    onClick: toggle
  }, "Change min/max to 0 - ", value ? '100' : '5'), _react["default"].createElement(_2.Paragraph, null, "Current Value: ", rangeValue.join(','))));
};
var getValue = function getValue(expression) {
  return expression.split(',').map(function (text) {
    return parseInt(text, 10);
  });
};
var Filter = function Filter(_ref2) {
  var expression = _ref2.expression,
    onChange = _ref2.onChange;
  var _React$useState = _react["default"].useState({
      value: getValue(expression)
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    AST = _React$useState2[0],
    setAST = _React$useState2[1];
  var expressionRef = _react["default"].useRef(expression);
  _react["default"].useEffect(function () {
    if (expressionRef.current !== expression) {
      setAST({
        value: getValue(expression)
      });
      expressionRef.current = expression;
    }
  }, [expression]);
  var handleChange = function handleChange(newValue) {
    onChange(newValue.join(', '));
  };
  return _react["default"].createElement(NumberFilter, {
    AST: AST,
    onChange: handleChange
  });
};
function FilterRangeSlider() {
  var _React$useState3 = _react["default"].useState('0,10'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    expression = _React$useState4[0],
    setExpression = _React$useState4[1];
  var handleChange = function handleChange(newValue) {
    setExpression(newValue);
  };
  return _react["default"].createElement(_2.SpaceVertical, {
    p: "u4",
    align: "stretch"
  }, _react["default"].createElement(_2.OrderedList, {
    type: "number"
  }, _react["default"].createElement("li", null, "When updating the min/max, the value should move to stay within bounds."), _react["default"].createElement("li", null, "When changing the value, it should not immediately reset.")), _react["default"].createElement(Filter, {
    expression: expression,
    onChange: handleChange
  }));
}
//# sourceMappingURL=FilterRangeSlider.js.map