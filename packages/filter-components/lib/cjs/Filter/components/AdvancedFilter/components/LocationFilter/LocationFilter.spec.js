"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _LocationFilter = require("./LocationFilter");

describe('Location filter test', function () {
  it('should render a LocationFilter', function () {
    var item = {
      id: '1',
      type: 'anyvalue'
    };
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_LocationFilter.LocationFilter, {
      item: item,
      filterType: "location",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn()
    }));
    expect(_react.screen.getByRole('textbox')).toHaveValue('is anywhere');
  });
});
//# sourceMappingURL=LocationFilter.spec.js.map