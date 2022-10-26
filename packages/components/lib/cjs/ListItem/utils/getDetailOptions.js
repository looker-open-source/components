"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetailOptions = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var getDetailOptions = function getDetailOptions(detail) {
  var accessory, hoverDisclosure, content, width;

  if ((0, _typeof2["default"])(detail) === 'object' && detail && 'options' in detail) {
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