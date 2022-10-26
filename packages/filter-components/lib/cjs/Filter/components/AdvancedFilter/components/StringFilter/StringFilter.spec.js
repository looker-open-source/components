"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _StringFilter = require("./StringFilter");

describe('String filter test', function () {
  it('should render a StringFilter', function () {
    var item = {
      id: '1',
      is: true,
      type: 'match',
      value: []
    };
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_StringFilter.StringFilter, {
      item: item,
      filterType: "string",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn()
    }));

    var inputs = _react.screen.getAllByRole('textbox');

    expect(inputs[0]).toHaveValue('is');
    expect(inputs[1]).toHaveValue('');
  });
});
//# sourceMappingURL=StringFilter.spec.js.map