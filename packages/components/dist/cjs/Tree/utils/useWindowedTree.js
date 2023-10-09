"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowedTreeState = exports.useWindowedTree = exports.getWindowedTreeContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ListItem = require("../../ListItem");
var _utils = require("../../utils");
var _WindowedTreeNode = require("../WindowedTreeNode");
var _windowedTreeReducer = require("./windowedTreeReducer");
var _getWindowedTreeNodeFilterer = require("./getWindowedTreeNodeFilterer");
var _excluded = ["ref"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useWindowedTreeState = function useWindowedTreeState(_ref) {
  var trees = _ref.trees;
  var _useReducer = (0, _react.useReducer)(_windowedTreeReducer.windowedTreeReducer, {
      map: {},
      shownIDs: [],
      treesWithIDs: []
    }),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    _useReducer2$ = _useReducer2[0],
    map = _useReducer2$.map,
    shownIDs = _useReducer2$.shownIDs,
    treesWithIDs = _useReducer2$.treesWithIDs,
    dispatch = _useReducer2[1];
  (0, _react.useEffect)(function () {
    dispatch({
      payload: trees,
      type: 'RESET'
    });
  }, [trees]);
  var toggleNode = (0, _react.useCallback)(function (id, isOpen) {
    if (isOpen) {
      dispatch({
        payload: id,
        type: 'OPEN'
      });
    } else {
      dispatch({
        payload: id,
        type: 'CLOSE'
      });
    }
  }, []);
  return {
    map: map,
    shownIDs: shownIDs,
    toggleNode: toggleNode,
    treesWithIDs: treesWithIDs
  };
};
exports.useWindowedTreeState = useWindowedTreeState;
var useWindowedTree = function useWindowedTree(_ref2) {
  var _ref2$density = _ref2.density,
    density = _ref2$density === void 0 ? 0 : _ref2$density,
    trees = _ref2.trees;
  var _useWindowedTreeState = useWindowedTreeState({
      trees: trees
    }),
    map = _useWindowedTreeState.map,
    shownIDs = _useWindowedTreeState.shownIDs,
    toggleNode = _useWindowedTreeState.toggleNode,
    treesWithIDs = _useWindowedTreeState.treesWithIDs;
  var _listItemDimensions = (0, _ListItem.listItemDimensions)(density || 0),
    height = _listItemDimensions.height;
  var _useWindow = (0, _utils.useWindow)({
      enabled: shownIDs.length > 100,
      itemCount: shownIDs.length,
      itemHeight: height
    }),
    ref = _useWindow.ref,
    windowResult = _objectWithoutProperties(_useWindow, _excluded);
  return {
    content: getWindowedTreeContent(_objectSpread(_objectSpread({}, windowResult), {}, {
      shownIDs: shownIDs,
      treesWithIDs: treesWithIDs
    })),
    contextValue: {
      density: density,
      toggleNode: toggleNode,
      toggleStateMap: map
    },
    ref: ref
  };
};
exports.useWindowedTree = useWindowedTree;
var getWindowedTreeContent = function getWindowedTreeContent(_ref3) {
  var shownIDs = _ref3.shownIDs,
    treesWithIDs = _ref3.treesWithIDs,
    start = _ref3.start,
    end = _ref3.end,
    before = _ref3.before,
    after = _ref3.after;
  if (treesWithIDs) {
    var firstIDinWindow = shownIDs[start];
    var lastIDinWindow = shownIDs[end];
    var nodesInWindow = [];
    treesWithIDs.every((0, _getWindowedTreeNodeFilterer.getWindowedTreeNodeFilterer)(nodesInWindow, firstIDinWindow, lastIDinWindow));
    return _react["default"].createElement(_react["default"].Fragment, null, before, nodesInWindow.map(function (tree) {
      return _react["default"].createElement(_WindowedTreeNode.WindowedTreeNode, _extends({}, tree, {
        firstIDinWindow: firstIDinWindow,
        key: tree.id
      }));
    }), after);
  }
  return null;
};
exports.getWindowedTreeContent = getWindowedTreeContent;
//# sourceMappingURL=useWindowedTree.js.map