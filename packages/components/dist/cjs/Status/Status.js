"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntentLabel = exports.Status = void 0;
var _CheckCircle = require("@styled-icons/material/CheckCircle");
var _Error = require("@styled-icons/material/Error");
var _Info = require("@styled-icons/material/Info");
var _Warning = require("@styled-icons/material/Warning");
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../utils");
var _templateObject;
var _excluded = ["className", "title", "intent"],
  _excluded2 = ["size"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var getIntentIcon = function getIntentIcon(intent) {
  switch (intent) {
    case 'critical':
      return _Error.Error;
    case 'positive':
      return _CheckCircle.CheckCircle;
    case 'warn':
      return _Warning.Warning;
    case 'neutral':
    case 'inform':
    default:
      return _Info.Info;
  }
};
var getIntentLabel = function getIntentLabel(t, intent) {
  switch (intent) {
    case 'critical':
      return t('Error', {
        ns: 'GetIntentLabel'
      });
    case 'inform':
      return t('Inform', {
        ns: 'GetIntentLabel'
      });
    case 'positive':
      return t('Success', {
        ns: 'GetIntentLabel'
      });
    case 'warn':
      return t('Warning', {
        ns: 'GetIntentLabel'
      });
    case 'neutral':
    default:
      return undefined;
  }
};
exports.getIntentLabel = getIntentLabel;
var defaultIntent = 'neutral';
var StatusLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    title = _ref.title,
    _ref$intent = _ref.intent,
    intent = _ref$intent === void 0 ? defaultIntent : _ref$intent,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTranslation = (0, _utils.useTranslation)('Status'),
    t = _useTranslation.t;
  var Component = getIntentIcon(intent);
  var _size = props.size,
    rest = _objectWithoutProperties(props, _excluded2);
  return _react["default"].createElement(Component, _extends({}, rest, {
    className: className,
    ref: ref,
    title: !props['aria-describedby'] ? title || getIntentLabel(t, intent) : undefined
  }));
});
StatusLayout.displayName = 'StatusLayout';
var Status = (0, _styledComponents["default"])(StatusLayout).attrs(function (_ref2) {
  var _ref2$intent = _ref2.intent,
    intent = _ref2$intent === void 0 ? defaultIntent : _ref2$intent,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 'medium' : _ref2$size;
  return {
    color: intent,
    size: size
  };
}).withConfig({
  displayName: "Status",
  componentId: "sc-hjs0z2-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  flex-shrink: 0;\n"])), _designTokens.color, _designTokens.size);
exports.Status = Status;
//# sourceMappingURL=Status.js.map