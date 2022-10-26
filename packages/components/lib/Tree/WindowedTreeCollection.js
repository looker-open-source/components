import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["density", "trees"];
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