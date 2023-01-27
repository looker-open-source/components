import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["series_labels", "series", "show_single_value_title", "single_value_title"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import pick from 'lodash/pick';
import merge from 'lodash/merge';
import set from 'lodash/set';
export const seriesLabels = ({
  config,
  data,
  fields
}) => {
  const {
      series_labels = {},
      series = {},
      show_single_value_title = true,
      single_value_title = ''
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const singleValueTitle = show_single_value_title ? single_value_title : '';
  const buildNamedSeries = s => {
    const namedSeries = fields.measures.reduce((seriesConfig, measure) => {
      const {
        name
      } = measure;
      const currentFieldSettings = pick(s, name);
      const defaultSeriesLabel = {
        [name]: {
          label: (series_labels === null || series_labels === void 0 ? void 0 : series_labels[name]) || measure.label || measure.label_short || singleValueTitle
        }
      };
      return merge(seriesConfig, defaultSeriesLabel, currentFieldSettings);
    }, {});
    return namedSeries;
  };
  const buildArraySeries = (s = []) => {
    const arraySeries = [...s];
    for (let i = 0; i < fields.measures.length; i++) {
      const measure = fields.measures[i];
      const seriesLabelValues = Object.values(series_labels);
      const {
        label = seriesLabelValues[i] || measure.label || measure.label_short
      } = arraySeries[i] || {};
      set(arraySeries, [i, 'label'], label);
    }
    return arraySeries;
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series)
    }, restConfig),
    data,
    fields
  };
};
//# sourceMappingURL=seriesLabels.js.map