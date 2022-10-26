"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntentLabel = exports.Status = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _CheckCircle = require("@styled-icons/material/CheckCircle");

var _Error = require("@styled-icons/material/Error");

var _Info = require("@styled-icons/material/Info");

var _Warning = require("@styled-icons/material/Warning");

var _designTokens = require("@looker/design-tokens");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

var _templateObject;

var _excluded = ["className", "title", "intent"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useTranslation = (0, _utils.useTranslation)('Status'),
      t = _useTranslation.t;

  var Component = getIntentIcon(intent);
  return _react["default"].createElement(Component, (0, _extends2["default"])({}, (0, _omit["default"])(props, 'size', 'crossOrigin'), {
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  flex-shrink: 0;\n"])), _designTokens.color, _designTokens.size);
exports.Status = Status;
//# sourceMappingURL=Status.js.map