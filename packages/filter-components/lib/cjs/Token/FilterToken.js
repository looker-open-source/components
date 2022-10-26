"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterToken = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@looker/components");

var _filterExpressions = require("@looker/filter-expressions");

var _constants = require("../constants");

var _Filter = require("../Filter/Filter");

var _FilterErrorMessage = require("../FilterErrorMessage");

var _Token = require("./Token");

var _get_label = require("./utils/get_label");

var _excluded = ["config", "maxWidth", "onClick", "userAttributes"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var FilterToken = (0, _react.forwardRef)(function (_ref, ref) {
  var config = _ref.config,
      maxWidth = _ref.maxWidth,
      onClick = _ref.onClick,
      userAttributes = _ref.userAttributes,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var expressionType = props.expressionType || (0, _filterExpressions.getExpressionType)({
    type: props.type,
    field: props.field || undefined
  });
  var label = (0, _get_label.getLabel)(_objectSpread(_objectSpread({}, props), {}, {
    type: expressionType,
    userAttributes: userAttributes
  }));

  var hasError = (0, _FilterErrorMessage.useFiltersErrors)([props], {
    userAttributes: userAttributes
  }).type === _constants.ERROR_TYPE;

  var userAttribute = (0, _filterExpressions.getUserAttributeMatchingTypeAndExpression)(expressionType, props.expression, userAttributes);
  var isSubdued = props.expression === '' || props.expression === undefined || !!userAttribute && !userAttribute.value;

  var content = _react["default"].createElement(_Filter.Filter, (0, _extends2["default"])({
    expressionType: expressionType,
    config: config,
    inline: (config === null || config === void 0 ? void 0 : config.display) === 'inline',
    userAttributes: userAttributes
  }, props));

  if ((config === null || config === void 0 ? void 0 : config.display) === 'inline') {
    return content;
  }

  var popoverContent = _react["default"].createElement(_components.PopoverContent, {
    maxWidth: "90vw",
    py: "large"
  }, content, _react["default"].createElement(_FilterErrorMessage.FilterErrorMessage, {
    filters: [props],
    userAttributes: userAttributes,
    useLongMessageForm: true
  }));

  return _react["default"].createElement(_components.Popover, {
    content: popoverContent,
    placement: "bottom-start",
    ref: ref
  }, _react["default"].createElement(_Token.Token, {
    label: label,
    subdued: isSubdued,
    hasError: hasError,
    maxWidth: maxWidth,
    onClick: onClick
  }));
});
exports.FilterToken = FilterToken;
//# sourceMappingURL=FilterToken.js.map