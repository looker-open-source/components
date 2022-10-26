"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverDisclosure = void 0;

var _react = _interopRequireWildcard(require("react"));

var _HoverDisclosureContext = require("./HoverDisclosureContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HoverDisclosure = function HoverDisclosure(_ref) {
  var children = _ref.children,
      width = _ref.width,
      visible = _ref.visible;
  var context = (0, _react.useContext)(_HoverDisclosureContext.HoverDisclosureContext);
  var isVisible = visible || context.visible;
  var style = width ? {
    flexBasis: width,
    flexShrink: 0,
    width: width
  } : {};
  return _react["default"].createElement("div", {
    style: style
  }, isVisible ? children : null);
};

exports.HoverDisclosure = HoverDisclosure;
//# sourceMappingURL=HoverDisclosure.js.map