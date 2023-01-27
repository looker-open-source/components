"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.legendPosition = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _excluded = ["hide_legend", "legend_position", "legend"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var legendPosition = function legendPosition(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var hide_legend = config.hide_legend,
    legend_position = config.legend_position,
    legend = config.legend,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);

  var DEFAULT_POSITION = config.type === 'pie' ? 'right' : 'bottom';
  var LEGEND_POSITION = {
    '': DEFAULT_POSITION,
    bottom: 'bottom',
    center: DEFAULT_POSITION,
    left: 'left',
    right: 'right',
    top: 'top'
  };
  var positionValue = LEGEND_POSITION[legend && legend.position || legend_position || ''];
  return {
    config: _objectSpread(_objectSpread({}, restConfig), {}, {
      legend: hide_legend === true || legend === false ? false : _objectSpread(_objectSpread({}, legend), {}, {
        position: positionValue
      })
    }),
    data: data,
    fields: fields
  };
};
exports.legendPosition = legendPosition;
//# sourceMappingURL=legendPosition.js.map