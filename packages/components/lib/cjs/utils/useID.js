"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useID = useID;

var _react = require("react");

var _uuid = require("uuid");

function useID(id) {
  return (0, _react.useMemo)(function () {
    return id || (0, _uuid.v4)();
  }, [id]);
}
//# sourceMappingURL=useID.js.map