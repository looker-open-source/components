"use strict";

var _getWindowedListBoundaries = require("./getWindowedListBoundaries");

describe('getWindowedListBoundaries', function () {
  test('returns entire length if enabled is false', function () {
    var result = (0, _getWindowedListBoundaries.getWindowedListBoundaries)({
      enabled: false,
      height: 446,
      itemCount: 129,
      itemHeight: 57,
      scrollPosition: 0
    });
    expect(result.start).toEqual(0);
    expect(result.end).toEqual(128);
  });
  test('returns 0 0 if height and scrollPosition are missing', function () {
    var result = (0, _getWindowedListBoundaries.getWindowedListBoundaries)({
      itemCount: 98,
      itemHeight: 31
    });
    expect(result.start).toEqual(0);
    expect(result.end).toEqual(0);
  });
  test('top of list', function () {
    var result = (0, _getWindowedListBoundaries.getWindowedListBoundaries)({
      height: 1002,
      itemCount: 873,
      itemHeight: 16,
      scrollPosition: 0
    });
    expect(result.start).toEqual(0);
    expect(result.end).toEqual(68);
  });
  test('middle of list', function () {
    var result = (0, _getWindowedListBoundaries.getWindowedListBoundaries)({
      height: 775,
      itemCount: 1109,
      itemHeight: 26,
      scrollPosition: 922
    });
    expect(result.start).toEqual(30);
    expect(result.end).toEqual(71);
  });
  test('end of list', function () {
    var result = (0, _getWindowedListBoundaries.getWindowedListBoundaries)({
      height: 300,
      itemCount: 50,
      itemHeight: 30,
      scrollPosition: 1200
    });
    expect(result.start).toEqual(35);
    expect(result.end).toEqual(49);
  });
  test('top of list (custom buffer)', function () {
    var result = (0, _getWindowedListBoundaries.getWindowedListBoundaries)({
      buffer: 11,
      height: 1002,
      itemCount: 873,
      itemHeight: 16,
      scrollPosition: 0
    });
    expect(result.start).toEqual(0);
    expect(result.end).toEqual(74);
  });
  test('middle of list (custom buffer)', function () {
    var result = (0, _getWindowedListBoundaries.getWindowedListBoundaries)({
      buffer: 11,
      height: 775,
      itemCount: 1109,
      itemHeight: 26,
      scrollPosition: 922
    });
    expect(result.start).toEqual(24);
    expect(result.end).toEqual(77);
  });
  test('end of list (custom buffer)', function () {
    var result = (0, _getWindowedListBoundaries.getWindowedListBoundaries)({
      buffer: 11,
      height: 300,
      itemCount: 50,
      itemHeight: 30,
      scrollPosition: 1200
    });
    expect(result.start).toEqual(29);
    expect(result.end).toEqual(49);
  });
});
//# sourceMappingURL=getWindowedListBoundaries.spec.js.map