"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorResponse = void 0;
var _ = require(".");

var getErrorResponse = function getErrorResponse(sdkResponse) {
  var errorResponse = (0, _.isErrorResponse)(sdkResponse) ? sdkResponse.error : undefined;
  return errorResponse ? {
    error: errorResponse
  } : {};
};
exports.getErrorResponse = getErrorResponse;
//# sourceMappingURL=getErrorResponse.js.map