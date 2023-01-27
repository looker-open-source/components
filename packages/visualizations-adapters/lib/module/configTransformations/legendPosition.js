import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["hide_legend", "legend_position", "legend"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

export const legendPosition = ({
  config,
  data,
  fields
}) => {
  const {
      hide_legend,
      legend_position,
      legend
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);

  const DEFAULT_POSITION = config.type === 'pie' ? 'right' : 'bottom';
  const LEGEND_POSITION = {
    '': DEFAULT_POSITION,
    bottom: 'bottom',
    center: DEFAULT_POSITION,
    left: 'left',
    right: 'right',
    top: 'top'
  };
  const positionValue = LEGEND_POSITION[legend && legend.position || legend_position || ''];
  return {
    config: _objectSpread(_objectSpread({}, restConfig), {}, {
      legend: hide_legend === true || legend === false ? false : _objectSpread(_objectSpread({}, legend), {}, {
        position: positionValue
      })
    }),
    data,
    fields
  };
};
//# sourceMappingURL=legendPosition.js.map