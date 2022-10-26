"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _CheckboxGroup = require("./CheckboxGroup");

var options = [{
  label: 'label1',
  value: 'value1'
}, {
  label: 'label2',
  value: 'value2'
}, {
  label: 'label3',
  value: 'value3'
}];
describe('CheckboxGroup', function () {
  it('handles loading state', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_CheckboxGroup.CheckboxGroup, {
      isLoading: true,
      options: options,
      onChange: jest.fn(),
      value: []
    }));
    expect(_react.screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
//# sourceMappingURL=CheckboxGroup.spec.js.map