"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findField = void 0;

var findField = function findField(name, explore) {
  if (name === '' || !explore || !explore.fields) return undefined;
  var fields = explore.fields;
  var result;
  var matchName = function matchName(field) {
    return field.name === name;
  };
  if (fields.dimensions) {
    result = fields.dimensions.find(matchName);
  }
  if (!result && fields.measures) {
    result = fields.measures.find(matchName);
  }
  return result;
};
exports.findField = findField;
//# sourceMappingURL=find_field.js.map