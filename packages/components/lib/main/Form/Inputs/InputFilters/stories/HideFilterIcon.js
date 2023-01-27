"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../");
var _excluded = ["hideFilterIcon", "filters", "onChange"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var mockFilters = [{
  field: 'role',
  options: ['admin', 'group-admin', 'user', 'pizza']
}, {
  field: 'group',
  label: 'Group',
  options: ['Cheddar', 'Gouda', 'Swiss', 'Mozzarella']
}, {
  field: 'name',
  label: 'Name',
  options: ['Name 1', 'Name 2', 'Name 3']
}, {
  field: 'status',
  options: ['Failed', 'In-Progress', 'Success']
}, {
  field: 'buildAt',
  label: 'Last Build Time',
  options: ['01-22-20', '02-13-20', '05-28-20']
}];
function Basic(props) {
  var _props$hideFilterIcon = props.hideFilterIcon,
    hideFilterIcon = _props$hideFilterIcon === void 0 ? true : _props$hideFilterIcon,
    _props$filters = props.filters,
    filtersProp = _props$filters === void 0 ? mockFilters : _props$filters,
    _onChange = props.onChange,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useState = (0, _react.useState)(filtersProp),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    controlledFilters = _useState2[0],
    setControlledFilters = _useState2[1];
  return _react["default"].createElement(_.InputFilters, (0, _extends2["default"])({
    hideFilterIcon: hideFilterIcon,
    onChange: setControlledFilters,
    filters: controlledFilters
  }, restProps));
}
//# sourceMappingURL=HideFilterIcon.js.map