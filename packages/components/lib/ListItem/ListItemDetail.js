import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["accessory", "density", "hoverDisclosure", "width"];

let _ = t => t,
    _t;

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