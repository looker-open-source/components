let _ = t => t,
  _t,
  _t2,
  _t3;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import styled, { keyframes } from 'styled-components';
import { variant, system } from '@looker/design-tokens';
import { SurfaceBase, surfaceTransition } from '../Dialog/SurfaceBase';
import { dialogSizes } from '../Dialog/dialogWidth';
import { asideSizes } from '../Layout/Semantics/Aside/asideWidth';
const placement = variant({
  prop: 'placement',
  variants: {
    left: {
      boxShadow: '-18px 0 18px -18px rgba(0, 0, 0, 0.12)',
      left: 0
    },
    right: {
      boxShadow: '-18px 0 18px -18px rgba(0, 0, 0, 0.12)',
      right: 0
    }
  }
});
const drawerWidth = () => {
  const drawerSizes = _objectSpread(_objectSpread({}, asideSizes), dialogSizes);
  return system({
    width: {
      defaultScale: drawerSizes,
      property: 'width',
      scale: 'drawerSizes'
    }
  });
};
const slideIn = keyframes(_t || (_t = _`
from {
  opacity: 0.01;
  transform: translate(var(--direction-translate, 0), 0);
}
to {
  opacity: 1;
  transform: translate(0);
}
`));
const slideOut = keyframes(_t2 || (_t2 = _`
  from {
    opacity: 1;
    transform: translate(0);
  }
  to {
    opacity: 0.01;
    transform: translate(var(--direction-translate, 0), 0);
  }
`));
export const DrawerSurface = styled(SurfaceBase).attrs(({
  placement: _placement = 'right',
  width: _width = 'small'
}) => ({
  placement: _placement,
  width: _width
})).withConfig({
  displayName: "DrawerSurface",
  componentId: "sc-1vwnqjh-0"
})(_t3 || (_t3 = _`
  --direction-translate: ${0};

  /* Shadow designed to match theme.elevations.plus3 but with a single left-side shadow */
  height: 100%;
  position: absolute;

  ${0}
  ${0}

  &.entering {
    animation: ${0} ${0};
  }
  &.exiting {
    animation: ${0} ${0};
  }
`), ({
  placement
}) => placement === 'left' ? '-100%' : '100%', placement, drawerWidth, slideIn, surfaceTransition, slideOut, surfaceTransition);
//# sourceMappingURL=DrawerSurface.js.map