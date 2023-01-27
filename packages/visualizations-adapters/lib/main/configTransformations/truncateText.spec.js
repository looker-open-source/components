"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _fixtures = require("../fixtures");
var _truncateText4 = require("./truncateText");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('truncateText', function () {
  test('config.truncate_text === undefined', function () {
    var config = _objectSpread({}, _fixtures.mockLineConfig);
    var _truncateText = (0, _truncateText4.truncateText)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _truncateText.config;
    expect(transformedConfig.truncate_text).toEqual(true);
  });
  test('config.truncate_text === true', function () {
    var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
      truncate_text: true
    });
    var _truncateText2 = (0, _truncateText4.truncateText)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _truncateText2.config;
    expect(transformedConfig.truncate_text).toEqual(true);
  });
  test('config.truncate_text === false', function () {
    var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
      truncate_text: false
    });
    var _truncateText3 = (0, _truncateText4.truncateText)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _truncateText3.config;
    expect(transformedConfig.truncate_text).toEqual(false);
  });
});
//# sourceMappingURL=truncateText.spec.js.map