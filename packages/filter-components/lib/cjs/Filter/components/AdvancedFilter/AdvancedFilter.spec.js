"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _AdvancedFilter = require("./AdvancedFilter");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var renderAdvancedFilter = function renderAdvancedFilter(props) {
  return (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AdvancedFilter.AdvancedFilter, (0, _extends2["default"])({
    updateAST: jest.fn(),
    expressionType: "string",
    validationMessage: {
      message: 'test error'
    },
    name: "test filter",
    ast: {
      type: 'string',
      value: 'testexpression'
    },
    changeFilter: jest.fn(),
    allowMultipleValues: true
  }, props)));
};

describe('Advanced filters', function () {
  describe('add button', function () {
    it('should render the add button', function () {
      renderAdvancedFilter();

      var addButtonIcon = _react.screen.queryByText('Add');

      expect(addButtonIcon).toBeInTheDocument();
    });
    it('should not render the add button when allowMultipleOptions is false', function () {
      renderAdvancedFilter({
        allowMultipleOptions: false
      });

      var addButtonIcon = _react.screen.queryByRole('img');

      expect(addButtonIcon).not.toBeInTheDocument();
    });
    it('should not render the add button when the field is a parameter', function () {
      renderAdvancedFilter({
        allowMultipleOptions: false,
        field: {
          paremeter: true
        }
      });

      var addButtonIcon = _react.screen.queryByRole('img');

      expect(addButtonIcon).not.toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=AdvancedFilter.spec.js.map