import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["y_axes", "y_axis"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import omitBy from 'lodash/omitBy';
import isNull from 'lodash/isNull';

export const yAxisRange = ({
  config,
  data,
  fields
}) => {
  const {
      y_axes: y_axis_raw = [{}],
      y_axis = [{}]
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const longestListLength = Math.max(y_axis_raw.length, y_axis.length);
  const yAxisWithDefaults = [];
  for (let i = 0; i < longestListLength; i++) {
    const rawAxisAtPosition = omitBy(y_axis_raw[i] || {}, isNull);
    const officialAxisAtPosition = y_axis[i] || {};

    const {
      minValue,
      maxValue
    } = rawAxisAtPosition;

    const {
      range = [minValue === undefined ? 'auto' : minValue, maxValue === undefined ? 'auto' : maxValue]
    } = officialAxisAtPosition;
    yAxisWithDefaults[i] = _objectSpread(_objectSpread({}, officialAxisAtPosition), {}, {
      range
    });
  }
  return {
    config: _objectSpread(_objectSpread({}, restConfig), {}, {
      y_axis: yAxisWithDefaults
    }),
    data,
    fields
  };
};
//# sourceMappingURL=yAxisRange.js.map