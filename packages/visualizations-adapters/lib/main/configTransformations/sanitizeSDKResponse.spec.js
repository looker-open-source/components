"use strict";

var _fixtures = require("../fixtures");
var _sanitizeSDKResponse = require("./sanitizeSDKResponse");

describe('sanitizeSDKResponse', function () {
  test('removes appropriate properties from config object', function () {
    var transformedConfig = (0, _sanitizeSDKResponse.sanitizeSDKResponse)({
      config: _fixtures.mockSdkConfigResponse,
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });

    _sanitizeSDKResponse.KEYS_TO_REMOVE.forEach(function (key) {
      return expect(transformedConfig).not.toHaveProperty(key);
    });
  });
});
//# sourceMappingURL=sanitizeSDKResponse.spec.js.map