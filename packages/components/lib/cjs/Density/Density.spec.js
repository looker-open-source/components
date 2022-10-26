"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _testingReact = require("@storybook/testing-react");

var _react2 = require("@testing-library/react");

var stories = _interopRequireWildcard(require("./Density.stories"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _composeStories = (0, _testingReact.composeStories)(stories),
    Basic = _composeStories.Basic,
    Plus1 = _composeStories.Plus1,
    Minus3 = _composeStories.Minus3;

describe('Density', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));
    expect(_react2.screen.getByText('Cheddar')).toHaveStyle('font-size: 0.875rem');
  });
  test('+1', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Plus1, null));
    expect(_react2.screen.getByText('Cheddar')).toHaveStyle('font-size: 1rem');
  });
  test('-3', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Minus3, null));
    expect(_react2.screen.getByText('Cheddar')).toHaveStyle('font-size: 0.75rem');
  });
});
//# sourceMappingURL=Density.spec.js.map