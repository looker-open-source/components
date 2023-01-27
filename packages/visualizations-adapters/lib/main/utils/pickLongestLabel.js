"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickLongestLabel = void 0;

var pickLongestLabel = function pickLongestLabel(labels) {
  return labels.reduce(function (longestLabel, label) {
    return label.length > longestLabel.length ? label : longestLabel;
  }, '');
};
exports.pickLongestLabel = pickLongestLabel;
//# sourceMappingURL=pickLongestLabel.js.map