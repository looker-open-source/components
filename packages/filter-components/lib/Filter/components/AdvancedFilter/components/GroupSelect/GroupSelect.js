import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import { InputText, Select } from '@looker/components';
import omit from 'lodash/omit';
import React from 'react';
import styled from 'styled-components';
import { inputPlacementStyle } from '../../../../utils/filter_styles';
export const GroupSelect = styled(props => React.createElement(Select, _extends({
  autoResize: true
}, omit(props, 'placement'), {
  noErrorIcon: true
}))).withConfig({
  displayName: "GroupSelect",
  componentId: "sc-jsg7oj-0"
})(_t || (_t = _`
  ${0} {
    ${0}
  }
`), InputText, inputPlacementStyle);
//# sourceMappingURL=GroupSelect.js.map