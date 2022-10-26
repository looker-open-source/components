"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _CodeBlock = require("./CodeBlock");

test('A default CodeBlock component', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CodeBlock.CodeBlock, null, "Hello"));
  expect(_react2.screen.getByText('Hello')).toBeInTheDocument();
  expect(_react2.screen.getByText('Hello').tagName).toEqual('CODE');
});
//# sourceMappingURL=CodeBlock.spec.js.map