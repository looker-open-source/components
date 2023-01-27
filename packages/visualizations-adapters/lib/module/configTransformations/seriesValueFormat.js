import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["series", "value_format", "label_value_format", "series_value_format"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import merge from 'lodash/merge';
import pick from 'lodash/pick';
import get from 'lodash/get';
import { DEFAULT_STRING_FORMAT } from '../utils/constants';
export const seriesValueFormat = ({
  config,
  fields,
  data
}) => {
  const {
      series = {},
      value_format,
      label_value_format,
      series_value_format = {}
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const valueFormat = value_format || label_value_format;
  const buildArraySeries = (s = []) => {
    var _fields$measures;
    const arraySeries = [...s];
    const defaultValues = fields === null || fields === void 0 ? void 0 : (_fields$measures = fields.measures) === null || _fields$measures === void 0 ? void 0 : _fields$measures.map(measure => ({
      value_format: get(series_value_format, [measure.name, 'format_string']) || get(measure, 'value_format') || valueFormat || DEFAULT_STRING_FORMAT
    }));
    for (let i = 0; i < (defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.length); i++) {
      arraySeries[i] = Object.assign({}, defaultValues[i], arraySeries[i]);
    }
    return arraySeries;
  };
  const buildNamedSeries = s => {
    var _fields$measures2;
    const namedSeries = fields === null || fields === void 0 ? void 0 : (_fields$measures2 = fields.measures) === null || _fields$measures2 === void 0 ? void 0 : _fields$measures2.reduce((seriesConfig, measure) => {
      const {
        name
      } = measure;
      const currentFieldSettings = pick(s, name);
      const seriesValueFormatString = get(series_value_format, [name, 'format_string']);
      const measureValueFormat = get(measure, 'value_format');
      const defaultValueFormat = {
        [name]: {
          value_format: seriesValueFormatString || measureValueFormat || valueFormat || DEFAULT_STRING_FORMAT
        }
      };
      return merge(seriesConfig, defaultValueFormat, currentFieldSettings);
    }, {});
    return namedSeries;
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series)
    }, restConfig),
    fields,
    data
  };
};
//# sourceMappingURL=seriesValueFormat.js.map