"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _sdk = require("@looker/sdk");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _TierFilter = require("./TierFilter");

describe('Tier filter test', function () {
  var enumerations = [{
    value: '1',
    label: 'a'
  }, {
    value: '2',
    label: 'b'
  }, {
    value: 'with^_underscore^_03',
    label: 'With underscore c'
  }, {
    value: 'with^_underscore^_04',
    label: 'With underscore d'
  }];
  var defaultProps = {
    enumerations: enumerations,
    filterType: 'tier',
    onChange: jest.fn(),
    showAdd: false,
    showName: true,
    showRemove: false,
    showOperator: false,
    showMatchesAdvanced: false,
    onAdd: jest.fn(),
    onRemove: jest.fn()
  };
  it('should render a TierFilter', function () {
    var item = {
      id: '1',
      is: true,
      type: 'match',
      value: []
    };
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_TierFilter.TierFilter, (0, _extends2["default"])({}, defaultProps, {
      item: item
    })));

    var inputs = _react.screen.getAllByRole('textbox');

    expect(inputs[0]).toHaveValue('is');
    expect(inputs[1]).toHaveValue('');
  });
  describe('when the filter is a parameter', function () {
    describe('and there is no value selected', function () {
      it('should not change the item value', function () {
        var item = {
          id: '1',
          type: 'match',
          is: false,
          value: []
        };
        (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_TierFilter.TierFilter, (0, _extends2["default"])({}, defaultProps, {
          item: item,
          field: {
            category: _sdk.Category.parameter
          }
        })));

        var inputs = _react.screen.getAllByRole('textbox');

        expect(inputs[0]).toHaveValue('!match');
        expect(inputs[1]).toHaveValue('a');
      });
    });
    describe('and there is an existing value selected', function () {
      it('should not change the item value (default value does not have underscores)', function () {
        var item = {
          id: '1',
          type: 'match',
          is: false,
          value: ['2']
        };
        (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_TierFilter.TierFilter, (0, _extends2["default"])({}, defaultProps, {
          item: item,
          field: {
            category: _sdk.Category.parameter,
            has_allowed_values: true
          }
        })));

        var inputs = _react.screen.getAllByRole('textbox');

        expect(inputs[0]).toHaveValue('!match');
        expect(inputs[1]).toHaveValue('b');
      });
      it('should not change the item value (default value has underscores)', function () {
        var item = {
          id: '1',
          type: 'match',
          is: true,
          value: ['with_underscore_04']
        };
        (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_TierFilter.TierFilter, (0, _extends2["default"])({}, defaultProps, {
          item: item,
          field: {
            category: _sdk.Category.parameter,
            has_allowed_values: true
          }
        })));

        var inputs = _react.screen.getAllByRole('textbox');

        expect(inputs[0]).toHaveValue('is');
        expect(inputs[1]).toHaveValue('With underscore d');
      });
    });
    describe('and there is an invalid value selected', function () {
      it('should change the item value', function () {
        var item = {
          id: '1',
          type: 'match',
          is: false,
          value: ['abc']
        };
        (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_TierFilter.TierFilter, (0, _extends2["default"])({}, defaultProps, {
          item: item,
          field: {
            category: _sdk.Category.parameter,
            has_allowed_values: true
          }
        })));

        var inputs = _react.screen.getAllByRole('textbox');

        expect(inputs[0]).toHaveValue('!match');
        expect(inputs[1]).toHaveValue('a');
      });
    });
  });
  describe('and advanced filter control', function () {
    it('should render with Add button', function () {
      var item = {
        id: '1',
        type: 'match',
        is: false,
        value: ['abc']
      };
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_TierFilter.TierFilter, (0, _extends2["default"])({}, defaultProps, {
        item: item,
        showAdd: true,
        field: {
          category: _sdk.Category.parameter
        }
      })));
      expect(_react.screen.getByRole('button')).toHaveTextContent('Add');
    });
  });
});
//# sourceMappingURL=TierFilter.spec.js.map