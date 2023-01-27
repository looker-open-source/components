"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowRowTotals = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var renderFor = ['table'];
var ShowRowTotals = function ShowRowTotals(props) {
  var config = props.config,
    onConfigChange = props.onConfigChange;
  var show_row_totals = config.show_row_totals;
  if (!renderFor.includes(config.type)) {
    return null;
  }
  var handleChange = function handleChange(e) {
    var _ref = e.target,
      checked = _ref.checked;
    var draft = _objectSpread(_objectSpread({}, config), {}, {
      show_row_totals: checked
    });
    onConfigChange(draft);
  };
  return _react["default"].createElement(_components.FieldCheckbox, {
    label: "Show row totals",
    checked: show_row_totals,
    onChange: handleChange
  });
};
exports.ShowRowTotals = ShowRowTotals;
//# sourceMappingURL=ShowRowTotals.js.map