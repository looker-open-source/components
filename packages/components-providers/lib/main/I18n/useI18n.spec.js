"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("@testing-library/react");
var _i18next = _interopRequireDefault(require("i18next"));
var _react2 = _interopRequireDefault(require("react"));
var _useI18n = require("./useI18n");
var _excluded = ["children"];
var i18nMockResources = {
  en: {
    AComponent: {
      Something: 'Something',
      'Something else': 'Something else'
    },
    BComponent: {
      Hello: 'Hello',
      World: 'World'
    }
  }
};
var TestComponent = function TestComponent(_ref) {
  var children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  (0, _useI18n.useI18n)(props);
  return _react2["default"].createElement(_react2["default"].Fragment, null, children);
};
describe('useI18n', function () {
  test('initializes i18next', function () {
    var spy = jest.spyOn(_i18next["default"], 'init');
    (0, _react.render)(_react2["default"].createElement(TestComponent, null));
    expect(_i18next["default"].init).toHaveBeenCalledTimes(1);
    spy.mockRestore();
    _i18next["default"].isInitialized = false;
  });
  test('updates with new props', function () {
    var spy = jest.spyOn(_i18next["default"], 'addResourceBundle');
    _i18next["default"].isInitialized = true;
    (0, _react.render)(_react2["default"].createElement(TestComponent, {
      resources: i18nMockResources
    }));
    expect(spy).toHaveBeenCalledTimes(Object.keys(i18nMockResources.en).length);
    spy.mockRestore();
  });
  test('updates with new locale', function () {
    var spy = jest.spyOn(_i18next["default"], 'changeLanguage');
    _i18next["default"].isInitialized = true;
    (0, _react.render)(_react2["default"].createElement(TestComponent, {
      locale: "de-DE"
    }));
    expect(spy.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"de-DE\",\n        ],\n      ]\n    ");
    spy.mockRestore();
  });
});
//# sourceMappingURL=useI18n.spec.js.map