"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undefinedCoalesce = void 0;

var undefinedCoalesce = function undefinedCoalesce(arr) {
  return arr.find(function (element) {
    return element !== undefined;
  });
};

exports.undefinedCoalesce = undefinedCoalesce;
//# sourceMappingURL=undefinedCoalesce.js.map