"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLegacyComposition = exports.AccordionLegacy = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _AccordionContent = require("./AccordionContent");

var _AccordionDisclosure = require("./AccordionDisclosure");

var _excluded = ["children", "contentDomProps", "disclosureProps", "isOpen"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var isLegacyComposition = function isLegacyComposition(children) {
  return _react.Children.count(children) === 2;
};

exports.isLegacyComposition = isLegacyComposition;

var AccordionLegacy = function AccordionLegacy(_ref) {
  var children = _ref.children,
      contentDomProps = _ref.contentDomProps,
      disclosureProps = _ref.disclosureProps,
      isOpen = _ref.isOpen,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var accordionChildren = [];

  _react.Children.forEach(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      var isAccordionDisclosure = child.type === _AccordionDisclosure.AccordionDisclosure;
      var isAccordionContent = child.type === _AccordionContent.AccordionContent;

      if (isAccordionDisclosure) {
        accordionChildren.push(_react["default"].cloneElement(child, _objectSpread(_objectSpread({}, disclosureProps), {}, {
          className: (0, _utils.mergeClassNames)([disclosureProps.className, child.props.className]),
          key: 'accordion-disclosure'
        })));
      } else if (isAccordionContent && isOpen) {
        accordionChildren.push(_react["default"].cloneElement(child, _objectSpread(_objectSpread({}, contentDomProps), {}, {
          className: (0, _utils.mergeClassNames)([child.props.className, contentDomProps.className]),
          key: 'accordion-content'
        })));
      }
    }
  });

  return _react["default"].createElement("div", props, accordionChildren);
};

exports.AccordionLegacy = AccordionLegacy;
//# sourceMappingURL=AccordionLegacy.js.map