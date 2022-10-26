"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeBranch = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TreeContext = require("./TreeContext");

var _utils = require("./utils");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _utils.generateIndent);

var TreeBranch = (0, _styledComponents["default"])(TreeBranchLayout).withConfig({
  displayName: "TreeBranch",
  componentId: "sc-1uogj9w-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])([""])));
exports.TreeBranch = TreeBranch;
//# sourceMappingURL=TreeBranch.js.map