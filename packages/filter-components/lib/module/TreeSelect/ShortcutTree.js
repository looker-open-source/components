import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["tree", "onFieldClick"],
  _excluded2 = ["id", "label", "value"];
let _ = t => t,
  _t;

import React from 'react';
import styled from 'styled-components';
import { Box } from '@looker/components';
import { Field } from './Field';
export const ShortcutTree = styled(_ref => {
  let {
      tree,
      onFieldClick
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(Box, props, tree.map(_ref2 => {
    let {
        id,
        label,
        value
      } = _ref2,
      field = _objectWithoutProperties(_ref2, _excluded2);
    return React.createElement(Field, _extends({}, field, {
      key: id,
      displayLabel: label,
      label: value,
      alignItems: "center",
      pl: "medium",
      onClick: onFieldClick
    }));
  }));
}).withConfig({
  displayName: "ShortcutTree",
  componentId: "sc-1wljjho-0"
})(_t || (_t = _`
  ${0} {
    border-left: none;
  }

  border-bottom: solid 1px ${0};
`), Field, ({
  theme
}) => theme.colors.ui2);
//# sourceMappingURL=ShortcutTree.js.map