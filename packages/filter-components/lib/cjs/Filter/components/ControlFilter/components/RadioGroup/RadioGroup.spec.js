"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _RadioGroup = require("./RadioGroup");

var options = [{
  label: 'label1',
  value: 'value1',
  name: 'radioSpec'
}, {
  label: 'label2',
  value: 'value2',
  name: 'radioSpec'
}, {
  label: 'label3',
  value: 'value3',
  name: 'radioSpec'
}];
describe('RadioGroup tests', function () {
  it('renders any value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_RadioGroup.RadioGroup, {
      value: '',
      options: options,
      onChange: jest.fn(),
      anyOption: true
    }));
    expect(_react.screen.getByLabelText('any value')).toBeChecked();
  });
  it('handles loading state', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_RadioGroup.RadioGroup, {
      isLoading: true,
      value: 'value1',
      options: options,
      onChange: jest.fn()
    }));
    expect(_react.screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
//# sourceMappingURL=RadioGroup.spec.js.map