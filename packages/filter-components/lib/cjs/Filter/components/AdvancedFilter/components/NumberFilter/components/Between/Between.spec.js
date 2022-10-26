"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _Between = require("./Between");

var fitlerData = {
  bounds: '[]',
  high: '5',
  id: '1',
  is: true,
  low: '3',
  type: 'between'
};
var mockChange = jest.fn();
describe('Between Filter tests', function () {
  it('Input fields only accept numbers', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Between.Between, {
      item: fitlerData
    }));
    expect(_react.screen.getByTestId('low')).toHaveAttribute('type', 'number');
    expect(_react.screen.getByTestId('high')).toHaveAttribute('type', 'number');
  });
  it('registers input change', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Between.Between, {
      item: fitlerData,
      onChange: mockChange
    }));

    _react.fireEvent.change(_react.screen.getByTestId('low'), {
      target: {
        value: 4
      }
    });

    _react.fireEvent.change(_react.screen.getByTestId('high'), {
      target: {
        value: 15
      }
    });

    expect(mockChange.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"1\",\n          Object {\n            \"low\": \"4\",\n          },\n        ],\n        Array [\n          \"1\",\n          Object {\n            \"high\": \"15\",\n          },\n        ],\n      ]\n    ");
  });
});
//# sourceMappingURL=Between.spec.js.map