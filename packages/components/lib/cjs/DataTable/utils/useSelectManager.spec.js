"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Item = require("../Item");

var _Column = require("../Column");

var _DataTable = require("../DataTable");

var _useSelectManager2 = require("./useSelectManager");

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

  var Test = function Test(_ref) {
    var defaultSelected = _ref.defaultSelected;
    var allSelectableItems = data.map(function (_ref2) {
      var id = _ref2.id;
      return String(id);
    });

    var _useSelectManager = (0, _useSelectManager2.useSelectManager)(allSelectableItems, defaultSelected),
        onSelect = _useSelectManager.onSelect,
        onSelectAll = _useSelectManager.onSelectAll,
        selections = _useSelectManager.selections;

    var items = data.map(function (_ref3) {
      var id = _ref3.id,
          name = _ref3.name;
      return _react["default"].createElement(_Item.DataTableItem, {
        id: String(id),
        key: id,
        onClick: function onClick() {
          return alert("".concat(name, " clicked"));
        },
        actions: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Item.DataTableAction, {
          onClick: function onClick() {
            return alert("".concat(name, " deleted"));
          }
        }, "Delete"))
      }, _react["default"].createElement(_Column.DataTableCell, null, id), _react["default"].createElement(_Column.DataTableCell, null, name));
    });
    return _react["default"].createElement(_DataTable.DataTable, {
      caption: "Cheeses example",
      columns: columns,
      select: {
        onSelect: onSelect,
        onSelectAll: onSelectAll,
        pageItems: allSelectableItems,
        selectedItems: selections
      }
    }, items);
  };

  test('returns a DataTable', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Test, null));
    expect(_react2.screen.getByText('ID')).toBeInTheDocument();
    expect(_react2.screen.getByText('Name')).toBeInTheDocument();
    expect(_react2.screen.getByText('Gorgonzola')).toBeInTheDocument();
    expect(_react2.screen.getByText('Cheddar')).toBeInTheDocument();
    expect(_react2.screen.getByText('Blue')).toBeInTheDocument();
  });
  test('selects all checkbox', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Test, null));

    var checkbox = _react2.screen.getAllByRole('checkbox');

    expect(checkbox[0]).toBeInTheDocument();
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'false');

    _react2.fireEvent.click(checkbox[0]);

    expect(checkbox[0]).toHaveAttribute('aria-checked', 'true');
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'true');
  });
  test('clicking the header deselects all when a mixed selection exists', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Test, {
      defaultSelected: ['2', '3']
    }));

    var checkbox = _react2.screen.getAllByRole('checkbox');

    expect(checkbox[0]).toHaveAttribute('aria-checked', 'mixed');
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'true');
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'true');

    _react2.fireEvent.click(checkbox[0]);

    expect(checkbox[0]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'false');
  });
  test('toggles mixed checkbox state in header', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Test, {
      defaultSelected: ['2']
    }));

    var checkbox = _react2.screen.getAllByRole('checkbox');

    expect(checkbox[0]).toHaveAttribute('aria-checked', 'mixed');
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'true');
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'false');

    _react2.fireEvent.click(checkbox[2]);

    expect(checkbox[0]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'false');
  });
  test('selects individual checkbox', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Test, null));

    var checkbox = _react2.screen.getAllByRole('checkbox');

    expect(checkbox[1]).toBeInTheDocument();
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false');

    _react2.fireEvent.click(checkbox[1]);

    expect(checkbox[1]).toHaveAttribute('aria-checked', 'true');
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'false');
  });
});
//# sourceMappingURL=useSelectManager.spec.js.map