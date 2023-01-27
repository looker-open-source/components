"use strict";

var _sdk = require("@looker/sdk");
var _get_expression_type = require("./get_expression_type");

describe('getExpressionTypeFromField', function () {
  it('should return "tier" if the field has enumerations', function () {
    var mockField = {
      enumerations: [{
        label: 'answer',
        value: 42
      }]
    };
    expect((0, _get_expression_type.getExpressionTypeFromField)(mockField)).toEqual('tier');
  });
  it('should return "number" if the field is_numeric', function () {
    var mockField = {
      is_numeric: true
    };
    expect((0, _get_expression_type.getExpressionTypeFromField)(mockField)).toEqual('number');
  });
  describe('is_timeframe', function () {
    it('should return "date" if the field is_timeframe', function () {
      var mockField = {
        is_timeframe: true,
        type: 'field_type'
      };
      expect((0, _get_expression_type.getExpressionTypeFromField)(mockField)).toEqual('date');
    });
    it('should return "date_time" if the field is_timeframe, type is date_time', function () {
      var mockField = {
        is_timeframe: true,
        type: 'date_time'
      };
      expect((0, _get_expression_type.getExpressionTypeFromField)(mockField)).toEqual('date_time');
    });
    it('should return "date_time" if the field is_timeframe, type is date_hour', function () {
      var mockField = {
        is_timeframe: true,
        type: 'date_hour'
      };
      expect((0, _get_expression_type.getExpressionTypeFromField)(mockField)).toEqual('date_time');
    });
  });
  it('should return "location" if the field is a "location" or "location_bin_level" type', function () {
    var mockField1 = {
      type: 'location'
    };
    var mockField2 = {
      type: 'location_bin_level'
    };
    expect((0, _get_expression_type.getExpressionTypeFromField)(mockField1)).toEqual('location');
    expect((0, _get_expression_type.getExpressionTypeFromField)(mockField2)).toEqual('location');
  });
  it('should return "string" by default', function () {
    var mockField = {};
    expect((0, _get_expression_type.getExpressionTypeFromField)(mockField)).toEqual('string');
  });
  it('should return number for number parameter (b/187940941, b/199507872)', function () {
    var mockField = {
      category: _sdk.Category.parameter,
      type: 'number'
    };
    expect((0, _get_expression_type.getExpressionTypeFromField)(mockField)).toEqual('number');
  });
});
//# sourceMappingURL=get_expression_type.spec.js.map