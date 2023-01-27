let _ = t => t,
  _t;
import React from 'react';
import styled from 'styled-components';
import { SpaceVertical } from '@looker/components';
export const DLGroup = ({
  label: _label = '',
  value,
  preface
}) => {
  return React.createElement(SpaceVertical, {
    gap: "none"
  }, preface && React.createElement("em", null, preface), React.createElement("dt", null, _label), React.createElement(DD, null, value));
};
const DD = styled.dd.withConfig({
  displayName: "DLGroup__DD",
  componentId: "sc-ayqk0v-0"
})(_t || (_t = _`
  font-weight: bold;
  margin: 0;
`));
//# sourceMappingURL=DLGroup.js.map