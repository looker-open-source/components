import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["type", "point_style", "series"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import get from 'lodash/get';
import set from 'lodash/set';
import { getMeasureNames } from '../utils';

export const seriesPointStyle = ({
  config,
  data,
  fields
}) => {
  const {
      type,
      point_style: _point_style,
      series = {}
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const POINT_STYLE = _objectSpread({
    '': 'filled',
    circle: 'filled',
    circle_outline: 'outline',
    filled: 'filled',
    outline: 'outline'
  }, type !== 'scatter' ? {
    none: 'none'
  } : {
    none: 'filled'
  });
  const normalizedPointStyle = POINT_STYLE[config.point_style || ''];
  const measures = getMeasureNames(fields);
  const buildArraySeries = (s = []) => {
    const arraySeries = [...s];
    for (let i = 0; i < measures.length; i++) {
      const {
        style = normalizedPointStyle
      } = arraySeries[i] || {};
      set(arraySeries, [i, 'style'], style);
    }
    return arraySeries;
  };
  const buildNamedSeries = s => {
    const namedSeries = _objectSpread({}, s);
    for (const field of measures) {
      const style = get(namedSeries, [field, 'style'], normalizedPointStyle);
      set(namedSeries, [field, 'style'], style);
    }
    return namedSeries;
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series),
      type
    }, restConfig),
    data,
    fields
  };
};
//# sourceMappingURL=seriesPointStyle.js.map