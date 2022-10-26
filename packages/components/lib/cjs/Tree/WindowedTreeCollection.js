"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowedTreeCollection = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _useWindowedTree2 = require("./utils/useWindowedTree");

var _TreeCollectionContext = require("./TreeCollectionContext");

var _TreeCollection = require("./TreeCollection");

var _templateObject;

var _excluded = ["density", "trees"];

var WindowedTreeCollectionInternal = function WindowedTreeCollectionInternal(_ref) {
  var density = _ref.density,
      trees = _ref.trees,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useWindowedTree = (0, _useWindowedTree2.useWindowedTree)({
    density: density,
    trees: trees
  }),
      content = _useWindowedTree.content,
      contextValue = _useWindowedTree.contextValue,
      ref = _useWindowedTree.ref;

  return _react["default"].createElement(_TreeCollectionContext.TreeCollectionContext.Provider, {
    value: contextValue
  }, _react["default"].createElement(_TreeCollection.TreeCollection, (0, _extends2["default"])({}, (0, _designTokens.omitStyledProps)(props), {
    ref: ref
  }), content));
};

var WindowedTreeCollection = (0, _styledComponents["default"])(WindowedTreeCollectionInternal).withConfig({
  displayName: "WindowedTreeCollection",
  componentId: "sc-1ur0g0h-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  overflow: auto;\n"])), _designTokens.height, _designTokens.width);
exports.WindowedTreeCollection = WindowedTreeCollection;
//# sourceMappingURL=WindowedTreeCollection.js.map