"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFallbackFilterConfig = exports.canRenderFilter = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _filterExpressions = require("@looker/filter-expressions");

var _ = require(".");

var _noop = _interopRequireDefault(require("lodash/noop"));

var _filter_ui_config = require("../types/filter_ui_config");

var _filter_token_type_map = require("./filter_token_type_map");

var _excluded = ["config", "field", "suggestions", "enumerations"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var canRenderFilter = function canRenderFilter(_ref) {
  var config = _ref.config,
      field = _ref.field,
      suggestions = _ref.suggestions,
      enumerations = _ref.enumerations,
      filterProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  if ((config === null || config === void 0 ? void 0 : config.type) === _filter_ui_config.FilterUIType.Advanced) return true;
  if (!(0, _filter_token_type_map.isValidFilterType)(config === null || config === void 0 ? void 0 : config.type)) return false;
  var ast;

  if ('ast' in filterProps) {
    ast = filterProps.ast;
  } else {
    ast = (0, _filterExpressions.parseFilterExpression)(filterProps.expressionType, filterProps.expression, filterProps.userAttributes);
  }

  var item = _objectSpread(_objectSpread({}, ast), {}, {
    is: true,
    left: null,
    right: null
  });

  var _getControlFilterInfo = (0, _.getControlFilterInfo)(item, {
    config: config,
    suggestions: suggestions,
    enumerations: enumerations,
    field: field,
    changeFilter: _noop["default"],
    allowMultipleValues: true,
    name: ''
  }),
      props = _getControlFilterInfo.props;

  return Boolean(props);
};

exports.canRenderFilter = canRenderFilter;

var getFallbackFilterConfig = function getFallbackFilterConfig(config) {
  return (config === null || config === void 0 ? void 0 : config.type) !== _filter_ui_config.FilterUIType.Advanced && (config === null || config === void 0 ? void 0 : config.display) === _filter_ui_config.FilterUIDisplay.INLINE ? _objectSpread(_objectSpread({}, config), {}, {
    display: _filter_ui_config.FilterUIDisplay.POPOVER,
    type: _filter_ui_config.FilterUIType.Advanced
  }) : _objectSpread(_objectSpread({}, config), {}, {
    type: _filter_ui_config.FilterUIType.Advanced
  });
};

exports.getFallbackFilterConfig = getFallbackFilterConfig;
//# sourceMappingURL=can_render_filter.js.map