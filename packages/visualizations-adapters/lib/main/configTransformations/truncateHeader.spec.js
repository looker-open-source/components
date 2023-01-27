"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _fixtures = require("../fixtures");
var _truncateHeader4 = require("./truncateHeader");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
test('config.truncate_header === undefined', function () {
  var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
    truncate_header: undefined
  });
  var _truncateHeader = (0, _truncateHeader4.truncateHeader)({
      config: config,
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    }),
    transformedConfig = _truncateHeader.config;
  expect(transformedConfig.truncate_header).toEqual(true);
});
test('config.truncate_header === true', function () {
  var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
    truncate_header: true
  });
  var _truncateHeader2 = (0, _truncateHeader4.truncateHeader)({
      config: config,
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    }),
    transformedConfig = _truncateHeader2.config;
  expect(transformedConfig.truncate_header).toEqual(true);
});
test('config.truncate_header === false', function () {
  var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
    truncate_header: false
  });
  var _truncateHeader3 = (0, _truncateHeader4.truncateHeader)({
      config: config,
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    }),
    transformedConfig = _truncateHeader3.config;
  expect(transformedConfig.truncate_header).toEqual(false);
});
//# sourceMappingURL=truncateHeader.spec.js.map