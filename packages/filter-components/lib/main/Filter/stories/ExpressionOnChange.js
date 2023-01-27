"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExpressionOnChange;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _components = require("@looker/components");
var _Filter = require("../Filter");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ExpressionOnChange() {
  var _useState = (0, _react.useState)('[0,100]'),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    expression = _useState2[0],
    setExpression = _useState2[1];
  var handleChange = function handleChange(value) {
    setExpression(value.expression);
  };
  return _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_Filter.Filter, {
    name: "Age",
    expressionType: "number",
    expression: expression,
    onChange: handleChange
  }), _react["default"].createElement(_components.Paragraph, null, _react["default"].createElement("strong", null, "Current filter expression:"), " ", expression));
}
//# sourceMappingURL=ExpressionOnChange.js.map