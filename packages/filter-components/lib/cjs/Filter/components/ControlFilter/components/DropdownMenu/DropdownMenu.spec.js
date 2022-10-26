"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _DropdownMenu = require("./DropdownMenu");

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
describe('DropdownMenu tests', function () {
  describe('anyOption', function () {
    it('true – able to clear the filter value', function () {
      var onChange = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DropdownMenu.DropdownMenu, {
        value: 'value1',
        options: options,
        onChange: onChange,
        anyOption: true
      }));

      var clearButton = _react2.screen.getByText('Clear Field');

      _react2.fireEvent.click(clearButton);

      expect(onChange).toHaveBeenCalledWith('');
    });
    it('undefined – unable to clear the filter value', function () {
      var onChange = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DropdownMenu.DropdownMenu, {
        value: 'value1',
        options: options,
        onChange: onChange
      }));
      expect(_react2.screen.queryByText('Clear Field')).not.toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=DropdownMenu.spec.js.map