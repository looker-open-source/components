"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeBranch = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _TreeContext = require("./TreeContext");
var _utils = require("./utils");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TreeBranchLayout = function TreeBranchLayout(_ref) {
  var children = _ref.children,
    className = _ref.className;
  var _useContext = (0, _react.useContext)(_TreeContext.TreeContext),
    depth = _useContext.depth,
    density = _useContext.density;
  return _react["default"].createElement(TreeBranchIndentSpacer, {
    className: className,
    depth: depth + 1,
    density: density
  }, children);
};
var TreeBranchIndentSpacer = _styledComponents["default"].div.withConfig({
  displayName: "TreeBranch__TreeBranchIndentSpacer",
  componentId: "sc-1uogj9w-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _utils.generateIndent);
var TreeBranch = (0, _styledComponents["default"])(TreeBranchLayout).withConfig({
  displayName: "TreeBranch",
  componentId: "sc-1uogj9w-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.TreeBranch = TreeBranch;
//# sourceMappingURL=TreeBranch.js.map