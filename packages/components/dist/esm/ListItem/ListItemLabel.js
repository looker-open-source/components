const _excluded = ["color", "children", "disabled", "density", "description", "truncate"];
let _ = t => t,
  _t;
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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