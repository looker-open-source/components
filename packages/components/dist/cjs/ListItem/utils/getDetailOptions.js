"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetailOptions = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var getDetailOptions = function getDetailOptions(detail) {
  var accessory, hoverDisclosure, content, width;
  if (_typeof(detail) === 'object' && detail && 'options' in detail) {
    accessory = detail.options.accessory;
    content = detail.content;
    hoverDisclosure = detail.options.hoverDisclosure;
    width = detail.options.width;
  } else {
    content = detail;
  }
  return {
    accessory: accessory,
    content: content,
    hoverDisclosure: hoverDisclosure,
    width: width
  };
};
exports.getDetailOptions = getDetailOptions;
//# sourceMappingURL=getDetailOptions.js.map