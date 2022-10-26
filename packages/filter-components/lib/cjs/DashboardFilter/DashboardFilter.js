"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardFilter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@looker/components");

var _Filter = require("../Filter/Filter");

var _utils = require("../Filter/utils");

var _use_suggestable = require("./use_suggestable");

var _use_expression_state = require("./use_expression_state");

var _FilterCollection = require("../FilterCollection");

var _excluded = ["filter", "sdk"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var DashboardFilter = function DashboardFilter(_ref) {
  var filter = _ref.filter,
      sdk = _ref.sdk,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var id = filter.id,
      name = filter.name,
      type = filter.type,
      field = filter.field,
      required = filter.required,
      ui_config = filter.ui_config,
      allow_multiple_values = filter.allow_multiple_values;

  var _useContext = (0, _react.useContext)(_FilterCollection.FilterContext),
      removeFilter = _useContext.removeFilter;

  (0, _react.useEffect)(function () {
    return function () {
      removeFilter(filter);
    };
  }, [removeFilter, filter]);
  var stateProps = (0, _use_expression_state.useExpressionState)(_objectSpread({
    filter: filter
  }, rest));

  var _useSuggestable = (0, _use_suggestable.useSuggestable)({
    filter: filter,
    sdk: sdk
  }),
      errorMessage = _useSuggestable.errorMessage,
      suggestableProps = _useSuggestable.suggestableProps;

  var validationMessage = (0, _utils.useValidationMessage)(stateProps.expression, required);
  return _react["default"].createElement(_components.Field, {
    id: id || '',
    label: name || '',
    detail: errorMessage && _react["default"].createElement(_components.Tooltip, {
      content: errorMessage
    }, _react["default"].createElement(_components.Status, {
      intent: "critical",
      "data-testid": "error-icon"
    })),
    validationMessage: validationMessage
  }, _react["default"].createElement(_Filter.Filter, (0, _extends2["default"])({
    name: name || '',
    type: type || '',
    field: field,
    config: ui_config,
    isRequired: required
  }, suggestableProps, stateProps, {
    allowMultipleValues: !!allow_multiple_values
  })));
};

exports.DashboardFilter = DashboardFilter;
//# sourceMappingURL=DashboardFilter.js.map