"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _componentsTestUtils = require("@looker/components-test-utils");
var _WithoutDropdown = _interopRequireDefault(require("./stories/WithoutDropdown"));
var _Basic = _interopRequireDefault(require("./stories/Basic"));

test('without dropdown', function () {
  var onSelectedFieldChangeMock = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_WithoutDropdown["default"], {
    searchInputValue: "",
    onSelectedFieldChange: onSelectedFieldChangeMock
  }));
  var orders = _react2.screen.getByText('Orders');
  expect(orders).toBeVisible();
  expect(_react2.screen.getByText('Users')).toBeVisible();

  _react2.fireEvent.click(orders);
  var createdDate = _react2.screen.getByText('Created Date');
  expect(createdDate).toBeVisible();

  _react2.fireEvent.click(createdDate);
  expect(_react2.screen.getByText('Created Month')).toBeVisible();
  var input = _react2.screen.getByRole('textbox');
  _react2.fireEvent.change(input, {
    target: {
      value: 'zip'
    }
  });

  expect(_react2.screen.queryByText('Orders')).not.toBeInTheDocument();
  expect(_react2.screen.getByText('Users')).toBeVisible();
  var zip = _react2.screen.getByText('Zip');
  expect(zip).toBeVisible();
  expect(zip).toHaveStyle({
    textDecoration: 'underline'
  });
  _react2.fireEvent.click(zip);
  expect(onSelectedFieldChangeMock.mock.calls[0][0]).toMatchObject({
    field: 'users.zip'
  });
});
test('with dropdown', function () {
  var onSelectedFieldChangeMock = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Basic["default"], {
    searchInputValue: "",
    onSelectedFieldChange: onSelectedFieldChangeMock
  }));
  expect(_react2.screen.queryByText('Orders')).not.toBeInTheDocument();
  var input = _react2.screen.getByRole('textbox');
  _react2.fireEvent.click(input);

  _react2.fireEvent.click(_react2.screen.getByText('Orders'));
  _react2.fireEvent.click(_react2.screen.getByText('Created Date'));
  expect(_react2.screen.getByText('Created Month')).toBeVisible();
  _react2.fireEvent.change(input, {
    target: {
      value: 'zip'
    }
  });
  _react2.fireEvent.click(_react2.screen.getByText('Zip'));
  expect(onSelectedFieldChangeMock.mock.calls[0][0]).toMatchObject({
    field: 'users.zip'
  });
});
test('no matching fields', function () {
  var onSelectedFieldChangeMock = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_WithoutDropdown["default"], {
    searchInputValue: "",
    onSelectedFieldChange: onSelectedFieldChangeMock
  }));
  var input = _react2.screen.getByRole('textbox');
  _react2.fireEvent.change(input, {
    target: {
      value: 'foo'
    }
  });
  expect(_react2.screen.getByText('No matching fields')).toBeVisible();
});
//# sourceMappingURL=TreeSelect.spec.js.map