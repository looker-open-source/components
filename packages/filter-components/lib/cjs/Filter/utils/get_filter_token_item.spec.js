"use strict";

var _get_filter_token_item = require("./get_filter_token_item");

var _filterExpressions = require("@looker/filter-expressions");

describe('get_filter_token_item', function () {
  describe('gets number item', function () {
    var type = 'number';
    it('works for slider', function () {
      var ast = (0, _filterExpressions.parseFilterExpression)(type, '[35,60]');
      var item = (0, _get_filter_token_item.getFilterTokenItem)(ast, type, 'slider');
      expect(item.type).toEqual('=');
      expect(item.value).toStrictEqual([35]);
    });
    it('works for range', function () {
      var ast = (0, _filterExpressions.parseFilterExpression)(type, '35');
      var item = (0, _get_filter_token_item.getFilterTokenItem)(ast, type, 'range_slider');
      expect(item.type).toEqual('between');
      expect(item.low).toBe(35);
      expect(item.high).toBe(35);
    });
  });
  describe('gets a date item', function () {
    var type = 'date';
    beforeEach(function () {
      var defaultDate = new Date('2019-03-10T00:00:00.000-08:00');
      jest.spyOn(Date, 'now').mockImplementation(function () {
        return defaultDate.getTime();
      });
    });
    it('works for day_picker', function () {
      var ast = (0, _filterExpressions.parseFilterExpression)(type, '2019/03/03 to 2019/03/07');
      var item = (0, _get_filter_token_item.getFilterTokenItem)(ast, type, 'day_picker');
      expect(item.type).toEqual('on');
      expect(item.date).toMatchInlineSnapshot("\n        Object {\n          \"day\": 10,\n          \"month\": 3,\n          \"year\": 2019,\n        }\n      ");
    });
    it('works for day_range_picker', function () {
      var ast = (0, _filterExpressions.parseFilterExpression)(type, '2019/03/03');
      var item = (0, _get_filter_token_item.getFilterTokenItem)(ast, type, 'day_range_picker');
      expect(item.type).toEqual('range');
      expect(item.start).toMatchInlineSnapshot("\n        Object {\n          \"day\": \"03\",\n          \"month\": \"03\",\n          \"year\": \"2019\",\n        }\n      ");
      expect(item.end).toMatchInlineSnapshot({
        day: 11,
        hour: 0,
        minute: 0,
        month: 3,
        second: 0,
        year: 2019
      }, "\n        Object {\n          \"day\": 11,\n          \"hour\": 0,\n          \"minute\": 0,\n          \"month\": 3,\n          \"second\": 0,\n          \"year\": 2019,\n        }\n      ");
    });
    it('works for relative_timeframes for a day value', function () {
      var ast = (0, _filterExpressions.parseFilterExpression)(type, '2019/03/03');
      var item = (0, _get_filter_token_item.getFilterTokenItem)(ast, type, 'relative_timeframes');
      expect(item.type).toEqual('range');
      expect(item.start).toMatchInlineSnapshot("\n        Object {\n          \"day\": \"03\",\n          \"month\": \"03\",\n          \"year\": \"2019\",\n        }\n      ");
      expect(item.end).toMatchInlineSnapshot({
        day: 11,
        hour: 0,
        minute: 0,
        month: 3,
        second: 0,
        year: 2019
      }, "\n        Object {\n          \"day\": 11,\n          \"hour\": 0,\n          \"minute\": 0,\n          \"month\": 3,\n          \"second\": 0,\n          \"year\": 2019,\n        }\n      ");
    });
    it('works for relative_timeframes when provided a relative timeframes value', function () {
      var ast = (0, _filterExpressions.parseFilterExpression)(type, '14 day');
      var item = (0, _get_filter_token_item.getFilterTokenItem)(ast, type, 'relative_timeframes');
      expect(item.type).toEqual('past');
      expect(item.unit).toEqual('day');
      expect(item.value).toEqual(14);
    });
    it('works for relative_timeframes when provided a non relative timeframes value', function () {
      var ast = (0, _filterExpressions.parseFilterExpression)(type, '2018,2019');
      var item = (0, _get_filter_token_item.getFilterTokenItem)(ast, type, 'relative_timeframes');
      expect(item.type).toEqual('past');
      expect(item.unit).toEqual('day');
      expect(item.value).toEqual(7);
    });
  });
});
//# sourceMappingURL=get_filter_token_item.spec.js.map