"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _useDataTable = require("./useDataTable");

describe('useSelectManager', function () {
  var data = [{
    id: 1,
    name: 'Gorgonzola'
  }, {
    id: 2,
    name: 'Cheddar'
  }, {
    id: 3,
    name: "Blue"
  }];
  var columns = [{
    id: 'id',
    title: 'ID',
    type: 'number'
  }, {
    id: 'name',
    title: 'Name',
    type: 'string'
  }];
  test('returns a DataTable', function () {
    var Test = function Test() {
      return (0, _useDataTable.useDataTable)(data, columns, 'Cheeses example');
    };

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Test, null));
    expect(_react2.screen.getByText('ID')).toBeInTheDocument();
    expect(_react2.screen.getByText('Name')).toBeInTheDocument();
    expect(_react2.screen.getByText('Gorgonzola')).toBeInTheDocument();
    expect(_react2.screen.getByText('Cheddar')).toBeInTheDocument();
    expect(_react2.screen.getByText('Blue')).toBeInTheDocument();
  });
});
//# sourceMappingURL=useDataTable.spec.js.map