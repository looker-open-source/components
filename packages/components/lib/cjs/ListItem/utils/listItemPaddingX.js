"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemPaddingX = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _listItemDimensions = require("./listItemDimensions");

var _templateObject;

var listItemPaddingX = function listItemPaddingX() {
  var density = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref) {
    var space = _ref.theme.space;
    return "\n      padding-left: ".concat(space[(0, _listItemDimensions.listItemDimensions)(density).px], ";\n      padding-right: ").concat(space[(0, _listItemDimensions.listItemDimensions)(density).px], ";\n    ");
  });
};

exports.listItemPaddingX = listItemPaddingX;
//# sourceMappingURL=listItemPaddingX.js.map