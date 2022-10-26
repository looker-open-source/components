"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FieldChips = require("./FieldChips");

test('A FieldChip with description', function () {
  var handleChange = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldChips.FieldChips, {
    description: "no vegetables allowed",
    id: "FieldChipsID",
    label: "Chip label",
    onChange: handleChange,
    values: []
  }));
  expect(_react2.screen.getByLabelText('Chip label')).toBeInTheDocument();
  expect(_react2.screen.getByText('no vegetables allowed')).toBeInTheDocument();
});
//# sourceMappingURL=FieldChips.spec.js.map