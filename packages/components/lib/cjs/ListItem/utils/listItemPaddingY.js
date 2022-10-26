"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemPaddingY = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _listItemDimensions2 = require("./listItemDimensions");

var _templateObject, _templateObject2;

var calculatePaddingY = function calculatePaddingY(density, space) {
  var _listItemDimensions = (0, _listItemDimensions2.listItemDimensions)(density),
      py = _listItemDimensions.py;

  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding-bottom: ", ";\n    padding-top: ", ";\n  "])), py === '0.375rem' ? py : space[py], py === '0.375rem' ? py : space[py]);
};

var listItemPaddingY = function listItemPaddingY() {
  var density = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref) {
    var theme = _ref.theme;
    return calculatePaddingY(density, theme.space);
  });
};

exports.listItemPaddingY = listItemPaddingY;
//# sourceMappingURL=listItemPaddingY.js.map