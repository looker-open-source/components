"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSuccessResponse = void 0;

var isSuccessResponse = function isSuccessResponse(response) {
  return (response === null || response === void 0 ? void 0 : response.ok) === true && 'value' in response;
};
exports.isSuccessResponse = isSuccessResponse;
//# sourceMappingURL=isSuccessResponse.js.map