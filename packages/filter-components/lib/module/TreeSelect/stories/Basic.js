import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["tree"];

import React from 'react';
import { TreeSelect } from '../TreeSelect';
import { createExploreViewsTree } from '../utils';
import { exploreData } from './examples';
const exploreTree = createExploreViewsTree(exploreData);
export default function Basic(_ref) {
  let {
      tree = exploreTree
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(TreeSelect, _extends({
    tree: tree
  }, props));
}
//# sourceMappingURL=Basic.js.map