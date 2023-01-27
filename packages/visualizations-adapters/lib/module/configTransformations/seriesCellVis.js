import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["series"],
  _excluded2 = ["cell_visualization"],
  _excluded3 = ["cell_visualization"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import get from 'lodash/get';
const setSeriesCellVisStatus = (config, measureName = '', i) => {
  const cellVisDefault = i === 0;
  const seriesBaseName = measureName.split('|')[0];
  const apiValue = get(config, ['series_cell_visualizations', seriesBaseName, 'is_active'], cellVisDefault);
  return apiValue;
};
export const seriesCellVis = ({
  config,
  data,
  fields
}) => {
  const {
      series = {}
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const buildArraySeries = (s = []) => {
    const arraySeries = fields === null || fields === void 0 ? void 0 : fields.measures.map(({
      name
    }, i) => {
      const defaultSeriesCellValue = setSeriesCellVisStatus(config, name, i);
      const _ref = (s === null || s === void 0 ? void 0 : s[i]) || {},
        {
          cell_visualization = defaultSeriesCellValue
        } = _ref,
        restSeries = _objectWithoutProperties(_ref, _excluded2);
      return _objectSpread({
        cell_visualization
      }, restSeries);
    }, []);
    return arraySeries;
  };
  const buildNamedSeries = (s = {}) => {
    const namedSeries = fields.measures.reduce((seriesConfig, {
      name
    }, i) => {
      const defaultSeriesCellValue = setSeriesCellVisStatus(config, name, i);
      const _ref2 = (s === null || s === void 0 ? void 0 : s[name]) || {},
        {
          cell_visualization = defaultSeriesCellValue
        } = _ref2,
        restSeries = _objectWithoutProperties(_ref2, _excluded3);
      return _objectSpread(_objectSpread({}, seriesConfig), {}, {
        [name]: _objectSpread({
          cell_visualization
        }, restSeries)
      });
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
//# sourceMappingURL=seriesCellVis.js.map