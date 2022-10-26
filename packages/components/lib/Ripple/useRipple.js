import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useTheme } from 'styled-components';
import { mergeClassNames } from '../utils';
import { useRippleState } from './useRippleState';
import { useRippleStateBG } from './useRippleStateBG';

const getMinMaxDimensions = (width, height) => {
  const min = Math.min(width, height);
  const max = Math.max(width, height);
  return [min, max];
};

const getRippleScaleRange = (bounded, min, max, size, noScale) => {
  const start = 0.1;

  if (bounded && min > 0 && max > 0) {
    const startBounded = min === max ? start : 1;
    const end = Math.hypot(min, max) / min;

    if (noScale) {
      return [end, end];
    }

    return [startBounded, end];
  }

  if (noScale) {
    return [size, size];
  }

  return [start, size];
};

const getRippleOffset = (min, max, bounded) => {
  if (!bounded || min === max) {
    return '0, 0';
  }

  const offset = max / 2 - min / 2;
  return `${offset}px, 0`;
};

export const useRipple = ({
  bounded: _bounded = false,
  className: _className = '',
  color: _color = 'neutral',
  height: _height = 0,
  size: _size = 1,
  style,
  width: _width = 0
}) => {
  const {
    colors,
    defaults: {
      brandAnimation
    }
  } = useTheme();
  const [min, max] = getMinMaxDimensions(_width, _height);
  const rippleScaleRange = getRippleScaleRange(_bounded, min, max, _size, !brandAnimation);
  const rippleOffset = getRippleOffset(min, max, _bounded);
  const {
    start: startBG,
    end: endBG,
    className: bgClass
  } = useRippleStateBG();
  const {
    start: startFG,
    end: endFG,
    className: fgClass
  } = useRippleState();
  const rippleStyle = {
    '--ripple-color': colors[_color],
    '--ripple-overflow': _bounded ? 'hidden' : 'visible',
    '--ripple-scale-end': rippleScaleRange[1] || 1,
    '--ripple-scale-start': rippleScaleRange[0],
    '--ripple-size': _bounded && min > 0 ? `${min}px` : '100%',
    '--ripple-translate': rippleOffset
  };
  return {
    callbacks: {
      endBG,
      endFG,
      startBG,
      startFG
    },
    className: mergeClassNames([_className, `${bgClass} ${fgClass}`]),
    style: _objectSpread(_objectSpread({}, style), rippleStyle)
  };
};
//# sourceMappingURL=useRipple.js.map