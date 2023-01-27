"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isErrorResponse = void 0;

var isErrorResponse = function isErrorResponse(response) {
  return (response === null || response === void 0 ? void 0 : response.ok) === false && 'error' in response;
};
exports.isErrorResponse = isErrorResponse;
//# sourceMappingURL=isErrorResponse.js.map