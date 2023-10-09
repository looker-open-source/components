const _excluded = ["ref"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useCallback, useEffect, useReducer } from 'react';
import { listItemDimensions } from '../../ListItem';
import { useWindow } from '../../utils';
import { WindowedTreeNode } from '../WindowedTreeNode';
import { windowedTreeReducer } from './windowedTreeReducer';
import { getWindowedTreeNodeFilterer } from './getWindowedTreeNodeFilterer';
export const useWindowedTreeState = ({
  trees
}) => {
  const [{
    map,
    shownIDs,
    treesWithIDs
  }, dispatch] = useReducer(windowedTreeReducer, {
    map: {},
    shownIDs: [],
    treesWithIDs: []
  });
  useEffect(() => {
    dispatch({
      payload: trees,
      type: 'RESET'
    });
  }, [trees]);
  const toggleNode = useCallback((id, isOpen) => {
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
    map,
    shownIDs,
    toggleNode,
    treesWithIDs
  };
};
export const useWindowedTree = ({
  density: _density = 0,
  trees
}) => {
  const {
    map,
    shownIDs,
    toggleNode,
    treesWithIDs
  } = useWindowedTreeState({
    trees
  });
  const {
    height
  } = listItemDimensions(_density || 0);
  const _useWindow = useWindow({
      enabled: shownIDs.length > 100,
      itemCount: shownIDs.length,
      itemHeight: height
    }),
    {
      ref
    } = _useWindow,
    windowResult = _objectWithoutProperties(_useWindow, _excluded);
  return {
    content: getWindowedTreeContent(_objectSpread(_objectSpread({}, windowResult), {}, {
      shownIDs,
      treesWithIDs
    })),
    contextValue: {
      density: _density,
      toggleNode,
      toggleStateMap: map
    },
    ref
  };
};
export const getWindowedTreeContent = ({
  shownIDs,
  treesWithIDs,
  start,
  end,
  before,
  after
}) => {
  if (treesWithIDs) {
    const firstIDinWindow = shownIDs[start];
    const lastIDinWindow = shownIDs[end];
    const nodesInWindow = [];
    treesWithIDs.every(getWindowedTreeNodeFilterer(nodesInWindow, firstIDinWindow, lastIDinWindow));
    return React.createElement(React.Fragment, null, before, nodesInWindow.map(tree => React.createElement(WindowedTreeNode, _extends({}, tree, {
      firstIDinWindow: firstIDinWindow,
      key: tree.id
    }))), after);
  }
  return null;
};
//# sourceMappingURL=useWindowedTree.js.map