"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAccordion2 = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _Accordion2Content = require("./Accordion2Content");

var _accordionDefaults = require("./accordionDefaults");

var _AccordionIndicator = require("./AccordionIndicator");

var _useAriaLabelObjectRelationship = require("./useAriaLabelObjectRelationship");

var _excluded = ["children", "className", "density", "disabled", "label", "id", "indicatorPosition", "indicatorIcons", "defaultOpen", "isOpen", "onBlur", "onClick", "onClose", "onOpen", "onKeyUp", "role", "tabIndex", "toggleOpen"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useAccordion2 = function useAccordion2(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$density = _ref.density,
      density = _ref$density === void 0 ? _accordionDefaults.accordionDefaults.density : _ref$density,
      disabled = _ref.disabled,
      label = _ref.label,
      id = _ref.id,
      indicatorPosition = _ref.indicatorPosition,
      _ref$indicatorIcons = _ref.indicatorIcons,
      indicatorIcons = _ref$indicatorIcons === void 0 ? indicatorPosition === 'left' ? _accordionDefaults.accordionLeftDefaults.indicatorIcons : _accordionDefaults.accordionDefaults.indicatorIcons : _ref$indicatorIcons,
      _ref$defaultOpen = _ref.defaultOpen,
      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
      propsIsOpen = _ref.isOpen,
      onBlur = _ref.onBlur,
      propsOnClick = _ref.onClick,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      onKeyUp = _ref.onKeyUp,
      role = _ref.role,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
      propsToggleOpen = _ref.toggleOpen,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(defaultOpen),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var toggle = function toggle() {
    return setValue(!value);
  };

  var isOpen = propsIsOpen !== undefined ? propsIsOpen : value;
  var onClick = (0, _utils.useWrapEvent)(function () {
    isOpen ? onClose && onClose() : onOpen && onOpen();
    propsToggleOpen !== undefined ? propsToggleOpen(!isOpen) : toggle();
  }, propsOnClick);
  var clickableProps = (0, _utils.useClickable)({
    disabled: disabled,
    onBlur: onBlur,
    onClick: onClick,
    onKeyUp: onKeyUp,
    role: role
  });

  var _useAriaLabelObjectRe = (0, _useAriaLabelObjectRelationship.useAriaLabelObjectRelationship)(id),
      _useAriaLabelObjectRe2 = (0, _slicedToArray2["default"])(_useAriaLabelObjectRe, 2),
      labelProps = _useAriaLabelObjectRe2[0],
      objectProps = _useAriaLabelObjectRe2[1];

  var domProps = _objectSpread(_objectSpread({}, props), {}, {
    className: className,
    id: id
  });

  var indicator = _react["default"].createElement(_AccordionIndicator.AccordionIndicator, {
    density: density,
    indicatorPosition: indicatorPosition
  }, isOpen ? indicatorIcons.open : indicatorIcons.close);

  var disclosureProps = _objectSpread(_objectSpread({}, labelProps), {}, {
    'aria-expanded': isOpen,
    children: label,
    className: clickableProps.focusVisible ? 'focusVisible ' : undefined,
    density: density,
    indicator: indicator,
    indicatorPosition: indicatorPosition,
    tabIndex: tabIndex
  }, clickableProps);

  var contentDomProps = _objectSpread(_objectSpread({}, objectProps), {}, {
    children: children,
    role: 'region'
  });

  var content = isOpen && _react["default"].createElement(_Accordion2Content.Accordion2Content, contentDomProps);

  return {
    content: content,
    contentDomProps: contentDomProps,
    disclosureProps: disclosureProps,
    domProps: domProps,
    isOpen: isOpen
  };
};

exports.useAccordion2 = useAccordion2;
//# sourceMappingURL=useAccordion2.js.map