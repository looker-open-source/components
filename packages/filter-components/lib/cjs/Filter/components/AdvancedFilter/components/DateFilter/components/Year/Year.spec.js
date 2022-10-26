"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _Year = require("./Year");

describe('Year', function () {
  var onChangeMock = jest.fn();
  var mockProps = {
    item: {
      id: '1',
      year: '2018'
    },
    onChange: onChangeMock
  };
  it('should render the given year', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Year.Year, mockProps));
    expect(_react.screen.getByDisplayValue('2018')).toBeVisible();
  });
  it('should invoke the onChange handler when the input changes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Year.Year, mockProps));

    var input = _react.screen.getByDisplayValue('2018');

    _react.fireEvent.change(input, {
      target: {
        value: '2019'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith('1', {
      year: '2019'
    });
  });
});
//# sourceMappingURL=Year.spec.js.map