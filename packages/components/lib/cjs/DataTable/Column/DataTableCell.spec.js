"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _DataTableCell = require("./DataTableCell");

describe('DataTableCell', function () {
  test('Basic content', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_DataTableCell.DataTableCell, null, "Cell content")))));
    expect(_react2.screen.getByText('Cell content')).toBeInTheDocument();
  });
  test('indicator', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_DataTableCell.DataTableCell, {
      indicator: "FauxIcon"
    }, "Cell content")))));
    expect(_react2.screen.getByText('FauxIcon')).toBeInTheDocument();
  });
  test('description & indicator', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_DataTableCell.DataTableCell, {
      indicator: "FauxIcon",
      description: "descriptive text"
    }, "Cell content")))));
    expect(_react2.screen.getByText('descriptive text')).toBeInTheDocument();
    expect(_react2.screen.getByText('FauxIcon')).toBeInTheDocument();
  });
  test('onKeyUp callback', function () {
    var onKeyUp = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_DataTableCell.DataTableCell, {
      onKeyUp: onKeyUp
    }, "Cell content")))));

    _react2.fireEvent.keyUp(_react2.screen.getByText('Cell content'), {
      charCode: 13,
      code: 13,
      key: 'Enter'
    });

    expect(onKeyUp).toHaveBeenCalledTimes(1);
  });
  test('keyup triggers :focus-visible blur removes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_DataTableCell.DataTableCell, null, "Cell content")))));

    var cell = _react2.screen.getByText('Cell content');

    var td = cell.closest('td');
    expect(td).toHaveStyleRule('outline', 'none');

    _react2.fireEvent.keyUp(cell, {
      charCode: 13,
      code: 13,
      key: 'Enter'
    });

    expect(td).toHaveStyleRule('outline', '1px solid #6C43E0');

    _react2.fireEvent.blur(cell);

    expect(td).toHaveStyleRule('outline', 'none');
  });
  test('onClick callback + unset :focus-visible', function () {
    var onClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_DataTableCell.DataTableCell, {
      onClick: onClick
    }, "Cell content")))));

    var cell = _react2.screen.getByText('Cell content');

    var td = cell.closest('td');

    _react2.fireEvent.keyUp(cell, {
      key: 'Enter'
    });

    expect(td).toHaveStyleRule('outline', '1px solid #6C43E0');

    _userEvent["default"].click(cell);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('tabIndex set properly on tabbable ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_DataTableCell.DataTableCell, null, _react["default"].createElement("button", null, "Click here"))))));
    expect(_react2.screen.getByRole('button')).toHaveAttribute('tabIndex', '-1');
  });
  test('onBlur callback', function () {
    var onBlur = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_DataTableCell.DataTableCell, {
      onBlur: onBlur
    }, "Cell content")))));

    var cell = _react2.screen.getByText('Cell content');

    cell.focus();

    _userEvent["default"].tab();

    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=DataTableCell.spec.js.map