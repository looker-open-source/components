"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _common = require("../../utils/common");

var _utils = require("../../../utils");

var _templateObject;

var _excluded = ["main", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SectionLayout = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var main = _ref.main,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useOverflow = (0, _utils.useOverflow)(forwardedRef),
      _useOverflow2 = (0, _slicedToArray2["default"])(_useOverflow, 2),
      hasOverflow = _useOverflow2[0],
      ref = _useOverflow2[1];

  return _react["default"].createElement(_utils.OverflowShadow, (0, _extends2["default"])({
    as: main ? 'main' : 'section',
    hasOverflow: hasOverflow,
    ref: ref
  }, props), children);
});
SectionLayout.displayName = 'SectionLayout';
var Section = (0, _styledComponents["default"])(SectionLayout).withConfig({
  displayName: "Section",
  componentId: "sc-1ud6x2v-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  flex: 1 0 auto;\n  overflow: auto;\n  ", "\n"])), _common.commonLayoutCSS, function (_ref2) {
  var scrollWithin = _ref2.scrollWithin;
  return scrollWithin && 'height: fit-content;';
});
exports.Section = Section;
//# sourceMappingURL=Section.js.map