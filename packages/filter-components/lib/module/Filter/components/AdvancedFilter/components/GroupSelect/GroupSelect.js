import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["placement"];
let _ = t => t,
  _t;

import { InputText, Select } from '@looker/components';
import React from 'react';
import styled from 'styled-components';
import { inputPlacementStyle } from '../../../../utils/filter_styles';
export const GroupSelect = styled(props => {
  const {
      placement: _placement
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Select, _extends({
    autoResize: true
  }, rest, {
    noErrorIcon: true
  }));
}).withConfig({
  displayName: "GroupSelect",
  componentId: "sc-jsg7oj-0"
})(_t || (_t = _`
  ${0} {
    ${0}
  }
`), InputText, inputPlacementStyle);
//# sourceMappingURL=GroupSelect.js.map