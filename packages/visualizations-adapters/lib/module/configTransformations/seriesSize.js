import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["size_by_field", "series"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import merge from 'lodash/merge';
import pick from 'lodash/pick';
import set from 'lodash/set';
import { getMeasureNames } from '../utils';
function removeInvalidSizeBy(series = {}, fields) {
  const measureNames = getMeasureNames(fields);
  const entries = Object.entries(series || {});
  for (const [key, seriesEntry] of entries) {
    const {
      size_by
    } = seriesEntry;
    set(series, [key, 'size_by'], size_by && measureNames.includes(size_by) ? size_by : false);
  }
  return series;
}

export const seriesSize = ({
  config,
  data,
  fields
}) => {
  const {
      size_by_field,
      series = {}
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const measures = getMeasureNames(fields);
  const defaultSizeByValue = size_by_field && size_by_field.length ? size_by_field : false;
  const buildNamedSeries = s => {
    const namedSeries = measures.reduce((seriesConfig, field) => {
      const currentFieldSettings = pick(s, field);
      const defaultSizeBy = {
        [field]: {
          size_by: defaultSizeByValue
        }
      };
      const draftSeries = merge(seriesConfig, defaultSizeBy, currentFieldSettings);
      return draftSeries;
    }, {});
    return removeInvalidSizeBy(namedSeries, fields);
  };
  const buildArraySeries = s => {
    const arraySeries = [...s];
    for (let i = 0; i < measures.length; i++) {
      const currentSeries = arraySeries[i] || {};
      const draftSeries = _objectSpread({
        size_by: defaultSizeByValue
      }, currentSeries);
      arraySeries[i] = draftSeries;
    }
    return removeInvalidSizeBy(arraySeries, fields);
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series)
    }, restConfig),
    data,
    fields
  };
};
//# sourceMappingURL=seriesSize.js.map