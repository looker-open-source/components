"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogFooter = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ModalFooter = require("../../../Modal/ModalFooter");

var _templateObject;

var DialogFooter = (0, _styledComponents["default"])(_ModalFooter.ModalFooter).attrs(function (_ref) {
  var _ref$px = _ref.px,
      px = _ref$px === void 0 ? 'xlarge' : _ref$px,
      _ref$py = _ref.py,
      py = _ref$py === void 0 ? 'large' : _ref$py;
  return {
    px: px,
    py: py
  };
}).withConfig({
  displayName: "DialogFooter",
  componentId: "sc-1em1awf-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.DialogFooter = DialogFooter;
//# sourceMappingURL=DialogFooter.js.map