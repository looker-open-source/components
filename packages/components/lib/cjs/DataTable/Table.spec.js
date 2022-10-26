"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Table = require("./Table");

describe('DataTable/Table', function () {
  test('loading', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Table.Table, {
      caption: "",
      columnsVisible: [],
      columns: [],
      state: "loading"
    }, "Stuff"));
    expect(_react2.screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
  test('noResultsDisplay', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Table.Table, {
      caption: "",
      columnsVisible: [],
      columns: [],
      state: "noResults",
      noResultsDisplay: "Nope, nothing to see here"
    }, "Stuff"));
    expect(_react2.screen.getByText('Nope, nothing to see here')).toBeInTheDocument();
  });
  test('noResultsDisplay non-string', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Table.Table, {
      caption: "",
      columnsVisible: [],
      columns: [],
      state: "noResults",
      noResultsDisplay: _react["default"].createElement("p", null, "Nope, nothing to see here")
    }, "Stuff"));
    expect(_react2.screen.getByText('Nope, nothing to see here')).toBeInTheDocument();
  });
});
//# sourceMappingURL=Table.spec.js.map