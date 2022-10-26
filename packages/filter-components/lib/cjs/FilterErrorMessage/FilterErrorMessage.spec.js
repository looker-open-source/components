"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = _interopRequireDefault(require("react"));

var _FilterErrorMessage = require("./FilterErrorMessage");

describe('FilterErrorMessage tests', function () {
  it('displays that the required filter is in an error state', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_FilterErrorMessage.FilterErrorMessage, {
      filters: [{
        expression: '',
        expressionType: 'string',
        name: 'testfilter',
        isRequired: true,
        allowMultipleValues: true
      }]
    }));
    expect(_react.screen.getByText('Selection required')).toBeVisible();
  });
});
//# sourceMappingURL=FilterErrorMessage.spec.js.map