"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageBar = void 0;
var _designTokens = require("@looker/design-tokens");
var _Close = require("@styled-icons/material/Close");
var _noop = _interopRequireDefault(require("lodash/noop"));
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Button = require("../Button");
var _Space = require("../Layout/Space");
var _simple = require("../Layout/utils/simple");
var _utils = require("../utils");
var _Status = require("../Status");
var _templateObject, _templateObject2;
var _excluded = ["id", "children", "intent", "visible", "onPrimaryClick", "onSecondaryClick", "primaryAction", "secondaryAction", "noActions"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var NoopComponent = function NoopComponent() {
  return _react["default"].createElement(_react["default"].Fragment, null);
};
function getPrimaryActionButton(t, primaryAction) {
  switch (_typeof(primaryAction)) {
    case 'string':
      return function (_ref) {
        var onClick = _ref.onClick;
        return _react["default"].createElement(_Button.ButtonTransparent, {
          onClick: onClick
        }, primaryAction);
      };
    case 'object':
      return function () {
        return primaryAction;
      };
    default:
      return function (_ref2) {
        var intent = _ref2.intent,
          onClick = _ref2.onClick,
          id = _ref2.id;
        return _react["default"].createElement(_Button.IconButton, {
          id: id ? "".concat(id, "-iconButton") : undefined,
          onClick: onClick,
          icon: _react["default"].createElement(_Close.Close, null),
          size: "small",
          label: "".concat(t('DismissIntent', {
            intent: (0, _Status.getIntentLabel)(t, intent),
            ns: 'MessageBar'
          }))
        });
      };
  }
}
function getSecondaryActionButton(secondaryAction) {
  switch (_typeof(secondaryAction)) {
    case 'string':
      return function (_ref3) {
        var onClick = _ref3.onClick;
        return _react["default"].createElement(_Button.ButtonTransparent, {
          onClick: onClick,
          color: "neutral"
        }, secondaryAction);
      };
    case 'object':
      return function () {
        return secondaryAction;
      };
    default:
      return NoopComponent;
  }
}
var MessageBarLayout = (0, _react.forwardRef)(function (_ref4, ref) {
  var id = _ref4.id,
    children = _ref4.children,
    _ref4$intent = _ref4.intent,
    intent = _ref4$intent === void 0 ? 'inform' : _ref4$intent,
    visibleProp = _ref4.visible,
    _ref4$onPrimaryClick = _ref4.onPrimaryClick,
    onPrimaryClick = _ref4$onPrimaryClick === void 0 ? _noop["default"] : _ref4$onPrimaryClick,
    _ref4$onSecondaryClic = _ref4.onSecondaryClick,
    onSecondaryClick = _ref4$onSecondaryClic === void 0 ? _noop["default"] : _ref4$onSecondaryClic,
    primaryAction = _ref4.primaryAction,
    secondaryAction = _ref4.secondaryAction,
    _ref4$noActions = _ref4.noActions,
    noActions = _ref4$noActions === void 0 ? false : _ref4$noActions,
    props = _objectWithoutProperties(_ref4, _excluded);
  (0, _utils.useReadOnlyWarn)('MessageBar', visibleProp, onPrimaryClick);
  var _useState = (0, _react.useState)((0, _isUndefined["default"])(visibleProp) ? true : visibleProp),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var handlePrimaryClick = function handlePrimaryClick() {
    setVisible(visibleProp || false);
    onPrimaryClick();
  };
  var handleSecondaryClick = function handleSecondaryClick() {
    setVisible(visibleProp || false);
    onSecondaryClick();
  };
  (0, _react.useEffect)(function () {
    if (!(0, _isUndefined["default"])(visibleProp)) {
      setVisible(visibleProp);
    }
  }, [visibleProp]);
  var _useTranslation = (0, _utils.useTranslation)('MessageBar'),
    t = _useTranslation.t;
  var PrimaryButton = getPrimaryActionButton(t, primaryAction);
  var SecondaryButton = getSecondaryActionButton(secondaryAction);
  var messageBarMarkup = _react["default"].createElement("div", _extends({
    "aria-live": "polite",
    ref: ref,
    role: "status"
  }, (0, _designTokens.omitStyledProps)(props), {
    "data-testid": "message-bar"
  }), _react["default"].createElement(_Status.Status, {
    intent: intent
  }), _react["default"].createElement(MessageBarContent, null, children), !noActions && _react["default"].createElement(_Space.Space, {
    width: "auto"
  }, _react["default"].createElement(SecondaryButton, {
    onClick: handleSecondaryClick
  }), _react["default"].createElement(PrimaryButton, {
    intent: intent,
    onClick: handlePrimaryClick,
    id: id
  })));
  return visible ? messageBarMarkup : null;
});
MessageBarLayout.displayName = 'MessageBarLayout';
var MessageBarContent = _styledComponents["default"].div.withConfig({
  displayName: "MessageBar__MessageBarContent",
  componentId: "sc-11gt222-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  padding: 0 ", ";\n"])), function (_ref5) {
  var space = _ref5.theme.space;
  return space.u5;
});
var backgroundColor = (0, _designTokens.variant)({
  prop: 'intent',
  variants: {
    critical: {
      backgroundColor: 'criticalAccent'
    },
    inform: {
      backgroundColor: 'informAccent'
    },
    positive: {
      backgroundColor: 'positiveAccent'
    },
    warn: {
      backgroundColor: 'warnAccent'
    }
  }
});
var MessageBar = (0, _styledComponents["default"])(MessageBarLayout).attrs(function (_ref6) {
  var _ref6$intent = _ref6.intent,
    intent = _ref6$intent === void 0 ? 'inform' : _ref6$intent,
    _ref6$px = _ref6.px,
    px = _ref6$px === void 0 ? 'medium' : _ref6$px,
    _ref6$py = _ref6.py,
    py = _ref6$py === void 0 ? 'small' : _ref6$py,
    _ref6$width = _ref6.width,
    width = _ref6$width === void 0 ? '100%' : _ref6$width;
  return {
    intent: intent,
    px: px,
    py: py,
    width: width
  };
}).withConfig({
  displayName: "MessageBar",
  componentId: "sc-11gt222-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  align-items: center;\n  ", "\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  font-size: ", ";\n"])), _simple.simpleLayoutCSS, backgroundColor, function (_ref7) {
  var radii = _ref7.theme.radii;
  return radii.medium;
}, function (_ref8) {
  var colors = _ref8.theme.colors;
  return colors.text5;
}, function (_ref9) {
  var fontSizes = _ref9.theme.fontSizes;
  return fontSizes.small;
});
exports.MessageBar = MessageBar;
//# sourceMappingURL=MessageBar.js.map