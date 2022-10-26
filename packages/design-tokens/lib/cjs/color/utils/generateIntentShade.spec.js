"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _src = require("../../../../components-test-utils/src");

var _theme = require("../../theme");

var _generateIntentShade = require("./generateIntentShade");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('generateIntentShade', function () {
  test('default', function () {
    var Test = _styledComponents["default"].p.withConfig({
      displayName: "generateIntentShadespec__Test",
      componentId: "sc-poy04n-0"
    })(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      background: ", ";\n      color: ", ";\n    "])), (0, _generateIntentShade.generateIntentShade)('blue'), (0, _generateIntentShade.generateIntentShade)('lightblue'));

    (0, _src.renderWithTheme)(_react2["default"].createElement(Test, null, "Find me"));

    var test = _react.screen.getByText('Find me');

    expect(test).toHaveStyle('background: #0000bf');
    expect(test).toHaveStyle('color: #348fac');
  });
  test('light background', function () {
    var Test = _styledComponents["default"].p.withConfig({
      displayName: "generateIntentShadespec__Test",
      componentId: "sc-poy04n-1"
    })(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      background: ", ";\n      color: ", ";\n    "])), (0, _generateIntentShade.generateIntentShade)('blue'), (0, _generateIntentShade.generateIntentShade)('lightblue'));

    var customTheme = _theme.theme;
    _theme.theme.colors.background = 'black';
    (0, _react.render)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: customTheme
    }, _react2["default"].createElement(Test, null, "Find me")));

    var test = _react.screen.getByText('Find me');

    expect(test).toHaveStyle('background: rgb(64, 64, 255);');
    expect(test).toHaveStyle('color: rgb(255, 255, 255);');
  });
});
//# sourceMappingURL=generateIntentShade.spec.js.map