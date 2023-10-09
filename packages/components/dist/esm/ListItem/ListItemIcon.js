const _excluded = ["color", "disabled", "density"];
let _ = t => t,
  _t;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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