"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _NumberFilter = require("./NumberFilter");

describe('Number filter test', function () {
  it('should render a NumberFilter', function () {
    var item = {
      id: '1',
      is: true,
      type: '=',
      value: []
    };
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_NumberFilter.NumberFilter, {
      item: item,
      filterType: "number",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn(),
      allowMultipleOptions: true
    }));

    var inputs = _react.screen.getAllByRole('textbox');

    expect(inputs[0]).toHaveValue('is');
    expect(inputs[1]).toHaveValue('');
  });
});
//# sourceMappingURL=NumberFilter.spec.js.map