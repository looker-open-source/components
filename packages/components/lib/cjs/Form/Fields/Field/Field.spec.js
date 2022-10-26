"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Field = require("./Field");

describe('Field', function () {
  test('Hidden labels', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Field.Field, {
      id: "test",
      hideLabel: true,
      label: "hello!"
    }, _react["default"].createElement("input", {
      id: "test",
      type: "text"
    })));

    _react2.screen.getByText('hello!');
  });
});
//# sourceMappingURL=Field.spec.js.map