"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _range = _interopRequireDefault(require("lodash/range"));

var _isValidColor = require("./isValidColor");

describe('isValidColor', function () {
  var testColor = function testColor(pred) {
    return function (color) {
      test("".concat(color), function () {
        expect((0, _isValidColor.isValidColor)(color)).toBe(pred);
      });
    };
  };

  var rand = function rand(num) {
    return Math.floor(Math.random() * num);
  };

  var randChar = function randChar(str) {
    return str[rand(str.length)];
  };

  var randString = function randString(chars, size) {
    return '#'.concat((0, _range["default"])(size).map(function () {
      return randChar(chars);
    }).join(''));
  };

  describe('Valid CSS word colors', function () {
    ;
    ['red', 'green', 'papayawhip', 'white', 'aqua', 'ivory', 'cadetblue', 'thistle', 'yellow', 'olive', 'snow'].forEach(testColor(true));
  });
  describe('Invalid CSS word colors', function () {
    ;
    ['Lipstickred', 'applegreen', 'papayawhipsmoothie', 'offwhite', 'aquaman', 'ivorytower', 'armygreen', 'thistleandweeds', 'yellowbanana', 'oliveoil', 'snowwhite'].forEach(testColor(false));
  });
  describe('Valid 3 string RGB colors', function () {
    (0, _range["default"])(20).map(function () {
      return randString('0123456789ABCDEF', 3);
    }).map(testColor(true));
  });
  describe('Invalid 3 string RGB colors', function () {
    (0, _range["default"])(20).map(function () {
      return randString('GHIJKLMNOPpo_+!&^%$', 3);
    }).map(testColor(false));
  });
  describe('Valid 6 string RGB colors', function () {
    (0, _range["default"])(20).map(function () {
      return randString('0123456789ABCDEF', 6);
    }).map(testColor(true));
  });
  describe('Invalid 6 string RGB colors', function () {
    (0, _range["default"])(20).map(function () {
      return randString('GHIJKLMNOPpo_+!&^%$', 6);
    }).map(testColor(false));
  });
});
//# sourceMappingURL=isValidColor.spec.js.map