"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeCollection = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../List/utils");
var _utils2 = require("../utils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var TreeCollectionInternal = (0, _react.forwardRef)(function (props, forwardedRef) {
  var internalRef = (0, _react.useRef)(null);
  var handleKeyDown = function handleKeyDown(event) {
    var treeItems = (0, _utils.getItems)(internalRef.current);
    if (event.key === 'Home') {
      var firstItem = treeItems[0];
      firstItem && firstItem.focus();
    } else if (event.key === 'End') {
      var lastItem = treeItems[treeItems.length - 1];
      lastItem && lastItem.focus();
    }
  };
  var navProps = (0, _utils2.useArrowKeyNav)({
    axis: 'both',
    getNextFocus: _utils.getNextItemFocus,
    onKeyDown: handleKeyDown,
    ref: (0, _utils2.useForkedRef)(internalRef, forwardedRef)
  });
  return _react["default"].createElement("ul", _extends({
    role: "tree"
  }, props, navProps));
});
var TreeCollection = (0, _styledComponents["default"])(TreeCollectionInternal).withConfig({
  displayName: "TreeCollection",
  componentId: "sc-l1fxxy-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"])));
exports.TreeCollection = TreeCollection;
//# sourceMappingURL=TreeCollection.js.map