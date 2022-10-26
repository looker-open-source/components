"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncateCSS = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2, _templateObject3;

var textTruncate = function textTruncate(props) {
  var truncateLines = props.truncateLines;

  if (truncateLines && truncateLines > 1) {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */\n      -webkit-box-orient: vertical;\n      display: -webkit-box;\n      -webkit-line-clamp: ", ";\n      overflow: hidden;\n      /* stylelint-enable */\n    "])), truncateLines);
  }

  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "])));
};

var truncateCSS = function truncateCSS(props) {
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n  "])), props.truncate || props.truncateLines ? textTruncate : null);
};

exports.truncateCSS = truncateCSS;
//# sourceMappingURL=truncate.js.map