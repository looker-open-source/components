"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LkFieldGroupTree = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _LkFieldTreeAccordionDisclosure = require("./LkFieldTreeAccordionDisclosure");

var _LkFieldTree = require("./LkFieldTree");

var _templateObject;

var LkFieldGroupTree = (0, _styledComponents["default"])(_LkFieldTree.LkFieldTree).withConfig({
  displayName: "LkFieldGroupTree",
  componentId: "sc-1pe0vfg-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  > ", " {\n    /* Margin is to set the equivalent of the two icons (info and menu) 48px */\n    margin-right: ", ";\n  }\n"])), _LkFieldTreeAccordionDisclosure.LkFieldTreeAccordionDisclosure, function (_ref) {
  var isOpen = _ref.isOpen,
      selected = _ref.selected;
  var DEFAULT_ICON_BUTTON_SIZE = 24;
  return !isOpen && selected ? "calc(".concat(DEFAULT_ICON_BUTTON_SIZE, "px * 2)") : undefined;
});
exports.LkFieldGroupTree = LkFieldGroupTree;
//# sourceMappingURL=LkFieldGroupTree.js.map