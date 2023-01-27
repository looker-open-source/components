import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["label_type", "legend"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

export const legendValue = ({
  config,
  data,
  fields
}) => {
  const LEGEND_VALUE = {
    '': 'label_percent',
    lab: 'label',
    label: 'label',
    labPer: 'label_percent',
    label_percent: 'label_percent',
    labVal: 'label_value',
    label_value: 'label_value',
    per: 'percent',
    percent: 'percent',
    val: 'value',
    value: 'value'
  };
  const {
      label_type,
      legend
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const legendValue = LEGEND_VALUE[legend && legend.value || label_type || ''];
  return {
    config: _objectSpread({
      legend: legend === false ? false : _objectSpread(_objectSpread({}, legend), {}, {
        value: legendValue
      })
    }, restConfig),
    data,
    fields
  };
};
//# sourceMappingURL=legendValue.js.map