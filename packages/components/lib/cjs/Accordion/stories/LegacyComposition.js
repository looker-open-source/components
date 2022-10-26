"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LegacyComposition;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function LegacyComposition() {
  return _react["default"].createElement(_.Accordion, {
    id: "basic-accordion",
    px: "large"
  }, _react["default"].createElement(_.AccordionDisclosure, null, "See more..."), _react["default"].createElement(_.AccordionContent, null, lorem));
}
//# sourceMappingURL=LegacyComposition.js.map