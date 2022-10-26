"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _LocationBox = require("./LocationBox");

describe('LocationBox filter test', function () {
  it('should render a LocationBox', function () {
    var item = {
      id: '1',
      type: 'anywhere',
      is: true,
      lat: 1,
      lon: 1,
      lat1: 5,
      lon1: 5
    };
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_LocationBox.LocationBox, {
      item: item,
      onChange: jest.fn()
    }));
    expect(_react.screen.getByText('FROM LATITUDE')).toBeVisible();
    expect(_react.screen.getByText('TO LATITUDE')).toBeVisible();
    expect(_react.screen.getAllByText('LONGITUDE')).toHaveLength(2);
    expect(_react.screen.getAllByDisplayValue('1')).toHaveLength(2);
    expect(_react.screen.getAllByDisplayValue('5')).toHaveLength(2);
  });
});
//# sourceMappingURL=LocationBox.spec.js.map