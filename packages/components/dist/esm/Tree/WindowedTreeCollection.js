let _ = t => t,
  _t;
const _excluded = ["density", "trees"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { height, omitStyledProps, width } from '@looker/design-tokens';
import React from 'react';
import styled from 'styled-components';
import { useWindowedTree } from './utils/useWindowedTree';
import { TreeCollectionContext } from './TreeCollectionContext';
import { TreeCollection } from './TreeCollection';
const WindowedTreeCollectionInternal = _ref => {
  let {
      density,
      trees
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    content,
    contextValue,
    ref
  } = useWindowedTree({
    density,
    trees
  });
  return React.createElement(TreeCollectionContext.Provider, {
    value: contextValue
  }, React.createElement(TreeCollection, _extends({}, omitStyledProps(props), {
    ref: ref
  }), content));
};
export const WindowedTreeCollection = styled(WindowedTreeCollectionInternal).withConfig({
  displayName: "WindowedTreeCollection",
  componentId: "sc-1ur0g0h-0"
})(_t || (_t = _`
  ${0}
  ${0}
  overflow: auto;
`), height, width);
//# sourceMappingURL=WindowedTreeCollection.js.map