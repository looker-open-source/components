"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _AddRemoveButtons = require("./AddRemoveButtons");

describe('AddRemoveButtons', function () {
  var mockOnAdd = jest.fn();
  var mockOnRemove = jest.fn();
  beforeEach(function () {
    mockOnAdd.mockReset();
    mockOnRemove.mockReset();
  });
  it('should render an add button when showAdd is true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AddRemoveButtons.AddRemoveButtons, {
      onAdd: mockOnAdd,
      onRemove: mockOnRemove,
      showAdd: true,
      showRemove: false
    }));

    var addButton = _react.screen.getByText('Add');

    expect(addButton).toBeVisible();
  });
  it('should render a remove button when showRemove is true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AddRemoveButtons.AddRemoveButtons, {
      onAdd: mockOnAdd,
      onRemove: mockOnRemove,
      showAdd: false,
      showRemove: true
    }));

    var removeButton = _react.screen.getByText('Remove');

    expect(removeButton).toBeVisible();
  });
  it('should call the onAdd handler when the add button is clicked', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AddRemoveButtons.AddRemoveButtons, {
      onAdd: mockOnAdd,
      onRemove: mockOnRemove,
      showAdd: true,
      showRemove: true
    }));

    var addButton = _react.screen.getByText('Add');

    _react.fireEvent.click(addButton);

    expect(mockOnAdd).toHaveBeenCalled();
  });
  it('should call the onRemove handler when the remove button is clicked', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AddRemoveButtons.AddRemoveButtons, {
      onAdd: mockOnAdd,
      onRemove: mockOnRemove,
      showAdd: true,
      showRemove: true
    }));

    var removeButton = _react.screen.getByText('Remove');

    _react.fireEvent.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalled();
  });
});
//# sourceMappingURL=AddRemoveButtons.spec.js.map