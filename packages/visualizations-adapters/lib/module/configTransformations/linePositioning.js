import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["positioning", "stacking"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

export const linePositioning = ({
  config,
  data,
  fields
}) => {
  const {
      positioning,
      stacking
    } = config,
    restConfig = _objectWithoutProperties(config, _excluded);
  const currentPositioning = positioning || stacking || '';
  const GROUP_MODES = {
    default: 'overlay',
    grouped: 'overlay',
    normal: 'stacked',
    overlay: 'overlay',
    percent: 'percent',
    stacked: 'stacked'
  };
  return {
    config: _objectSpread(_objectSpread({}, restConfig), {}, {
      positioning: GROUP_MODES[currentPositioning] || GROUP_MODES.default
    }),
    data,
    fields
  };
};
//# sourceMappingURL=linePositioning.js.map