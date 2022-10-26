"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Text = require("./Text");

test('Text has default fontSize', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Text.Text, null, "Hello"));
  expect(_react2.screen.getByText('Hello')).toHaveStyleRule('font-size', '1rem');
  expect(_react2.screen.getByText('Hello')).toHaveStyleRule('line-height', '1.5rem');
  expect(_react2.screen.getByText('Hello')).toHaveStyleRule('color', undefined);
});
//# sourceMappingURL=Text.spec.js.map