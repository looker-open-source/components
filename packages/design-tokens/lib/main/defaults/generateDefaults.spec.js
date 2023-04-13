"use strict";

var _generateDefaults = require("./generateDefaults");
var _index = require("./index");

describe('generateDefaults', function () {
  test('none', function () {
    var defaults = (0, _generateDefaults.generateDefaults)(_index.componentSettingsDefaults);
    expect(defaults.brandAnimation).toEqual(true);
    expect(defaults.density).toEqual(0);
  });
  test('empty', function () {
    var defaults = (0, _generateDefaults.generateDefaults)(_index.componentSettingsDefaults, {});
    expect(defaults.brandAnimation).toEqual(_index.componentSettingsDefaults.brandAnimation);
    expect(defaults.density).toEqual(_index.componentSettingsDefaults.density);
  });
  test('overwrite', function () {
    var defaults = (0, _generateDefaults.generateDefaults)(_index.componentSettingsDefaults, {
      brandAnimation: false,
      density: -1
    });
    expect(defaults.brandAnimation).toEqual(false);
    expect(defaults.density).toEqual(-1);
  });
  test('overwrite externalLabel', function () {
    var defaults = (0, _generateDefaults.generateDefaults)(_index.componentSettingsDefaults, {
      externalLabel: false
    });
    expect(defaults.brandAnimation).toEqual(true);
    expect(defaults.density).toEqual(0);
    expect(defaults.externalLabel).toEqual(false);
  });
});
//# sourceMappingURL=generateDefaults.spec.js.map