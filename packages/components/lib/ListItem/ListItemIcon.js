import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["color", "disabled", "density"];

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import styled, { useTheme } from 'styled-components';
import { color as colorHelper } from '@looker/design-tokens';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { IconPlaceholder } from '../Icon';
import { listItemDimensions, listItemIconColor, listItemPaddingY } from './utils';
export const ListItemIcon = styled.div.attrs(_ref => {
  let {
    color,
    disabled,
    density
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const theme = useTheme();
  const {
    height,
    gap,
    iconSize,
    py
  } = listItemDimensions(density || theme.defaults.density);
  return _objectSpread(_objectSpread({}, props), {}, {
    color: listItemIconColor(color, disabled),
    density,
    gap,
    height,
    iconSize,
    py
  });
}).withConfig({
  displayName: "ListItemIcon",
  componentId: "sc-12wbh19-0"
})(_t || (_t = _`
  align-self: ${0};
  display: flex;
  margin-right: ${0};
  ${0}

  ${0}

  & > svg, ${0}, ${0} {
    flex-grow: 0;
    flex-shrink: 0;
    height: ${0};
    width: ${0};
  }
`), ({
  alignStart
}) => alignStart ? 'flex-start' : 'center', ({
  gap,
  theme
}) => theme.space[gap], ({
  density
}) => listItemPaddingY(density), colorHelper, StyledIconBase, IconPlaceholder, ({
  iconSize,
  theme
}) => theme.sizes[iconSize], ({
  iconSize,
  theme
}) => theme.sizes[iconSize]);
//# sourceMappingURL=ListItemIcon.js.map