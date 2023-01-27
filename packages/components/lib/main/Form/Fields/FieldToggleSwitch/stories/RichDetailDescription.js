"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RichDetailDescription;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _Button = require("../../../../Button");
var _ = require("..");
var _excluded = ["label", "name", "id", "description", "detail"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function RichDetailDescription(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? 'Toggle Switch' : _props$label,
    _props$name = props.name,
    name = _props$name === void 0 ? 'thumbsUp' : _props$name,
    _props$id = props.id,
    id = _props$id === void 0 ? 'id' : _props$id,
    _props$description = props.description,
    description = _props$description === void 0 ? _react["default"].createElement(_react["default"].Fragment, null, "describe something here. ", _react["default"].createElement("a", {
      href: "somewhere"
    }, "Link")) : _props$description,
    _props$detail = props.detail,
    detail = _props$detail === void 0 ? _react["default"].createElement(_Button.IconButton, {
      icon: _react["default"].createElement(MaterialIcons.Delete, null),
      label: "Hello world"
    }) : _props$detail,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.FieldToggleSwitch, (0, _extends2["default"])({
    id: id,
    label: label,
    name: name,
    detail: detail,
    description: description
  }, restProps));
}
//# sourceMappingURL=RichDetailDescription.js.map