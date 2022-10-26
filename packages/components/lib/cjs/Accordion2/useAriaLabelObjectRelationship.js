"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAriaLabelObjectRelationship = void 0;

var _utils = require("../utils");

var useAriaLabelObjectRelationship = function useAriaLabelObjectRelationship(id) {
  id = (0, _utils.useID)(id);
  var labelID = "".concat(id, "-label");
  var objectID = "".concat(id, "-object");
  return [{
    'aria-controls': objectID,
    id: labelID
  }, {
    'aria-labelledby': labelID,
    id: id
  }];
};

exports.useAriaLabelObjectRelationship = useAriaLabelObjectRelationship;
//# sourceMappingURL=useAriaLabelObjectRelationship.js.map