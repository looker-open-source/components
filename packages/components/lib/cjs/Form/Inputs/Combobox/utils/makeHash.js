"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeHash = makeHash;

function makeHash(str) {
  var hash = 0;

  if (str.length === 0) {
    return hash;
  }

  for (var i = 0; i < str.length; i++) {
    var _char = str.charCodeAt(i);

    hash = (hash << 5) - hash + _char;
    hash = hash & hash;
  }

  return hash;
}
//# sourceMappingURL=makeHash.js.map