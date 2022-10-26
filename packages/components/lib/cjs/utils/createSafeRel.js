"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSafeRel = void 0;

var createSafeRel = function createSafeRel(rel, target) {
  var noTabNab = 'noopener noreferrer';

  if (target === '_blank') {
    if (rel) {
      return "".concat(rel, " ").concat(noTabNab);
    } else {
      return noTabNab;
    }
  } else return rel;
};

exports.createSafeRel = createSafeRel;
//# sourceMappingURL=createSafeRel.js.map