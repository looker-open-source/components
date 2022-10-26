import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["color", "children", "disabled", "density", "description", "truncate"];

let _ = t => t,
    _t;

import React from 'react';
import styled, { useTheme } from 'styled-components';
import { TruncateOptionally } from '../Truncate';
import { listItemDimensions, listItemLabelColor } from './utils';
import { listItemPaddingY } from './utils/listItemPaddingY';
export const ListItemLabel = styled(_ref => {
  let {
    color,
    children,
    disabled,
    density,
    description,
    truncate
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const theme = useTheme();
  const {
    descriptionFontSize,
    descriptionLineHeight,
    labelFontSize,
    labelLineHeight
  } = listItemDimensions(density || theme.defaults.density);
  return React.createElement("div", props, React.createElement(TruncateOptionally, {
    truncate: truncate,
    color: listItemLabelColor(color, disabled),
    fontSize: labelFontSize,
    lineHeight: labelLineHeight
  }, children), description && React.createElement(TruncateOptionally, {
    truncate: truncate,
    color: disabled ? 'text1' : 'text2',
    fontSize: descriptionFontSize,
    lineHeight: descriptionLineHeight
  }, description));
}).withConfig({
  displayName: "ListItemLabel",
  componentId: "sc-gwpd17-0"
})(_t || (_t = _`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  min-height: ${0}px;
  /**
   * min-width needed so truncates are aware of container width
   */
  min-width: 0;

  ${0}
`), ({
  density: _density = 0
}) => listItemDimensions(_density).height, ({
  density: _density2 = 0
}) => listItemPaddingY(_density2));
//# sourceMappingURL=ListItemLabel.js.map