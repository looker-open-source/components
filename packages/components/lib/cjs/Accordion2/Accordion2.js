"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion2 = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Accordion2Disclosure = require("./Accordion2Disclosure");

var _accordionDimensions = require("./accordionDimensions");

var _useAccordion2 = require("./useAccordion2");

var _templateObject;

var Accordion2Internal = function Accordion2Internal(props) {
  var _useAccordion = (0, _useAccordion2.useAccordion2)(props),
      content = _useAccordion.content,
      domProps = _useAccordion.domProps,
      disclosureProps = _useAccordion.disclosureProps;

  return _react["default"].createElement("div", domProps, _react["default"].createElement(_Accordion2Disclosure.Accordion2Disclosure, disclosureProps), content);
};

var Accordion2 = (0, _styledComponents["default"])(Accordion2Internal).withConfig({
  displayName: "Accordion2",
  componentId: "sc-526vzy-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  width: 100%;\n"])), function (_ref) {
  var theme = _ref.theme,
      density = _ref.density;
  return theme.fontSizes[(0, _accordionDimensions.accordionDimensions)(density || theme.defaults.density).fontSize];
});
exports.Accordion2 = Accordion2;
//# sourceMappingURL=Accordion2.js.map