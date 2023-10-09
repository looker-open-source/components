"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowedTreeCollection = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _useWindowedTree2 = require("./utils/useWindowedTree");
var _TreeCollectionContext = require("./TreeCollectionContext");
var _TreeCollection = require("./TreeCollection");
var _templateObject;
var _excluded = ["density", "trees"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var WindowedTreeCollectionInternal = function WindowedTreeCollectionInternal(_ref) {
  var density = _ref.density,
    trees = _ref.trees,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useWindowedTree = (0, _useWindowedTree2.useWindowedTree)({
      density: density,
      trees: trees
    }),
    content = _useWindowedTree.content,
    contextValue = _useWindowedTree.contextValue,
    ref = _useWindowedTree.ref;
  return _react["default"].createElement(_TreeCollectionContext.TreeCollectionContext.Provider, {
    value: contextValue
  }, _react["default"].createElement(_TreeCollection.TreeCollection, _extends({}, (0, _designTokens.omitStyledProps)(props), {
    ref: ref
  }), content));
};
var WindowedTreeCollection = (0, _styledComponents["default"])(WindowedTreeCollectionInternal).withConfig({
  displayName: "WindowedTreeCollection",
  componentId: "sc-1ur0g0h-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  overflow: auto;\n"])), _designTokens.height, _designTokens.width);
exports.WindowedTreeCollection = WindowedTreeCollection;
//# sourceMappingURL=WindowedTreeCollection.js.map