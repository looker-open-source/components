import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["x_axis_reversed", "x_axis_gridlines", "show_x_axis_ticks", "show_x_axis_label", "x_axis_label", "x_axis"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import omitBy from 'lodash/omitBy';
import isNull from 'lodash/isNull';
const deriveDefaults = (axisRaw, axisOfficial, measure) => {
  const {
    label: measureLabel,
    view_label: measureViewLabel
  } = measure;

  const {
    x_axis_reversed,
    x_axis_gridlines,
    show_x_axis_ticks,
    show_x_axis_label,
    x_axis_label = measureLabel || measureViewLabel
  } = axisRaw;

  const {
    gridlines = x_axis_gridlines,
    label = show_x_axis_label === false ? false : x_axis_label,
    reversed = x_axis_reversed,
    values = show_x_axis_ticks
  } = axisOfficial;
  return {
    gridlines: typeof gridlines === 'undefined' ? true : gridlines,
    label: label === null ? false : label,
    reversed: !!reversed,
    values: typeof values === 'undefined' ? true : values
  };
};

export const xAxis = ({
  config,
  data,
  fields
}) => {
  const {
      x_axis_reversed = false,
      x_axis_gridlines = true,
      show_x_axis_ticks = true,
      show_x_axis_label = true,
      x_axis_label,
      x_axis = [{}]
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);

  const xAxisRaw = [{
    x_axis_reversed,
    x_axis_gridlines,
    show_x_axis_ticks,
    show_x_axis_label,
    x_axis_label
  }];
  const longestListLength = Math.max(xAxisRaw.length, x_axis.length);
  const xAxisWithDefaults = [];
  for (let i = 0; i < longestListLength; i++) {
    var _fields$dimensions;
    const rawAxisAtPosition = omitBy(xAxisRaw[i] || {}, isNull);
    const officialAxisAtPosition = x_axis[i] || {};
    const measureAtPosition = (fields === null || fields === void 0 ? void 0 : (_fields$dimensions = fields.dimensions) === null || _fields$dimensions === void 0 ? void 0 : _fields$dimensions[i]) || {};
    xAxisWithDefaults[i] = deriveDefaults(rawAxisAtPosition, officialAxisAtPosition, measureAtPosition);
  }
  return {
    config: _objectSpread(_objectSpread({}, restConfig), {}, {
      x_axis: xAxisWithDefaults
    }),
    data,
    fields
  };
};
//# sourceMappingURL=xAxis.js.map