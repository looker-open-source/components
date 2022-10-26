"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quarterFade = exports.fadeOut = exports.fadeIn = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2, _templateObject3;

var fadeIn = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n"])));
exports.fadeIn = fadeIn;
var fadeOut = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  0% {opacity: 100;}\n  100% {opacity: 0;}\n"])));
exports.fadeOut = fadeOut;
var quarterFade = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  0% {opacity: 1;}\n  100% {opacity: 0.25;}\n"])));
exports.quarterFade = quarterFade;
//# sourceMappingURL=animations.js.map