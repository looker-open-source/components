const _excluded = ["accessory", "density", "hoverDisclosure", "width"];
let _ = t => t,
  _t;
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import styled from 'styled-components';
import React from 'react';
import { HoverDisclosure } from '../utils/HoverDisclosure';
import { listItemDimensions } from './utils';
export const ListItemDetail = styled(_ref => {
  let {
      accessory,
      density,
      hoverDisclosure,
      width
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(HoverDisclosure, {
    width: width,
    visible: !hoverDisclosure
  }, React.createElement("div", props));
}).withConfig({
  displayName: "ListItemDetail",
  componentId: "sc-tpflji-0"
})(_t || (_t = _`
  align-items: center;
  color: ${0};
  display: flex;
  font-size: ${0};
  height: 100%;
  margin-left: auto;
  padding-left: ${0};
`), ({
  theme
}) => theme.colors.text2, ({
  theme
}) => theme.fontSizes.xsmall, ({
  accessory,
  density: _density = 0,
  theme
}) => accessory ? 0 : theme.space[listItemDimensions(_density).gap]);
//# sourceMappingURL=ListItemDetail.js.map