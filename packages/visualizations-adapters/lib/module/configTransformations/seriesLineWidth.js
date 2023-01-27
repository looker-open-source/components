import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["series"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import set from 'lodash/set';
import { getMeasureNames } from '../utils';

export const seriesLineWidth = ({
  config,
  data,
  fields
}) => {
  const {
      series = {}
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const measures = getMeasureNames(fields);
  const buildArraySeries = (s = []) => {
    const arraySeries = [...s];
    for (let i = 0; i < measures.length; i++) {
      const {
        line_width = 3
      } = arraySeries[i] || {};
      set(arraySeries, [i, 'line_width'], line_width);
    }
    return arraySeries;
  };
  const buildNamedSeries = s => {
    const namedSeries = _objectSpread({}, s);
    for (const field of measures) {
      const {
        line_width = 3
      } = namedSeries[field] || {};
      set(namedSeries, [field, 'line_width'], line_width);
    }
    return namedSeries;
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series)
    }, restConfig),
    data,
    fields
  };
};
//# sourceMappingURL=seriesLineWidth.js.map