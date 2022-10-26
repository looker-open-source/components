"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowedTree = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ListItem = require("../../ListItem");

var _utils = require("../../utils");

var _WindowedTreeNode = require("../WindowedTreeNode");

var _windowedTreeReducer = require("./windowedTreeReducer");

var _getWindowedTreeNodeFilterer = require("./getWindowedTreeNodeFilterer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useWindowedTree = function useWindowedTree(_ref) {
  var density = _ref.density,
      trees = _ref.trees;

  var _useReducer = (0, _react.useReducer)(_windowedTreeReducer.windowedTreeReducer, {
    map: {},
    shownIDs: [],
    treesWithIDs: []
  }),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
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

  var _listItemDimensions = (0, _ListItem.listItemDimensions)(density || 0),
      height = _listItemDimensions.height;

  var _useWindow = (0, _utils.useWindow)({
    enabled: shownIDs.length > 100,
    itemCount: shownIDs.length,
    itemHeight: height
  }),
      after = _useWindow.after,
      before = _useWindow.before,
      end = _useWindow.end,
      ref = _useWindow.ref,
      start = _useWindow.start;

  var content = null;

  if (treesWithIDs) {
    var firstIDinWindow = shownIDs[start];
    var lastIDinWindow = shownIDs[end];
    var nodesInWindow = [];
    treesWithIDs.every((0, _getWindowedTreeNodeFilterer.getWindowedTreeNodeFilterer)(nodesInWindow, firstIDinWindow, lastIDinWindow));
    content = _react["default"].createElement(_react["default"].Fragment, null, before, nodesInWindow.map(function (tree) {
      return _react["default"].createElement(_WindowedTreeNode.WindowedTreeNode, (0, _extends2["default"])({}, tree, {
        firstIDinWindow: firstIDinWindow,
        key: tree.id
      }));
    }), after);
  }

  return {
    content: content,
    contextValue: {
      density: density,
      toggleNode: toggleNode,
      toggleStateMap: map
    },
    ref: ref
  };
};

exports.useWindowedTree = useWindowedTree;
//# sourceMappingURL=useWindowedTree.js.map