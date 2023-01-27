import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["series_point_styles", "series"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import merge from 'lodash/merge';
import pick from 'lodash/pick';
import { getMeasureNames } from '../utils';

export const seriesPointShape = ({
  config,
  data,
  fields
}) => {
  const {
      series_point_styles,
      series = {}
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const measures = getMeasureNames(fields);
  const buildArraySeries = (s = []) => {
    const arraySeries = [...s];
    for (let i = 0; i < measures.length; i++) {
      arraySeries[i] = merge({
        shape: 'circle'
      }, arraySeries[i] || {});
    }
    return arraySeries;
  };
  const buildNamedSeries = s => {
    const namedSeries = measures.reduce((seriesConfig, field) => {
      const shape = series_point_styles === null || series_point_styles === void 0 ? void 0 : series_point_styles[field];
      const currentFieldSettings = pick(s, field);
      const DEFAULT_SERIES_SHAPE = {
        [field]: {
          shape: !shape || shape === 'automatic' ? 'circle' : shape
        }
      };
      return merge(seriesConfig, DEFAULT_SERIES_SHAPE, currentFieldSettings);
    }, {});
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
//# sourceMappingURL=seriesPointShape.js.map