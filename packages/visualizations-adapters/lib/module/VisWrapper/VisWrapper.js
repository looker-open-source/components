import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
let _ = t => t,
  _t,
  _t2;
const _excluded = ["legend"];

import React, { forwardRef } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { ComponentsProvider } from '@looker/components';
const VisWrapperInternal = forwardRef((_ref, ref) => {
  let {
      legend
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const theme = useTheme();
  if (!theme) {
    return React.createElement(ComponentsProvider, null, React.createElement(VisWrapperInternal, _extends({}, props, {
      ref: ref
    })));
  }
  return React.createElement("div", _extends({}, props, {
    ref: ref
  }));
});
VisWrapperInternal.displayName = `VisWrapperInternal`;
const flexDirection = ({
  legend
}) => {
  const POSITION_MAP = {
    top: 'column-reverse',
    right: 'row',
    left: 'row-reverse',
    bottom: 'column'
  };
  const POSITION = legend ? legend.position : 'bottom';
  return css(_t || (_t = _`
    flex-direction: ${0};
    justify-content: ${0};
  `), POSITION_MAP[POSITION], POSITION === 'left' ? `flex-end` : `flex-start`);
};
export const VisWrapper = styled(VisWrapperInternal).withConfig({
  displayName: "VisWrapper",
  componentId: "sc-sssqk1-0"
})(_t2 || (_t2 = _`
  /*
    Flex properties primarily used to reposition legend
    based on prop.
   */
  display: flex;
  flex: 1;
  ${0}

  /*
    This style override allows longer dimension to fully render on x-axis.
    Without it, long dimension values get cut off (after being rotated).
  */
  & > div > svg {
    overflow: visible;
  }
`), flexDirection);
//# sourceMappingURL=VisWrapper.js.map