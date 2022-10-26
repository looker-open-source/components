"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultFilters = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _chunk = _interopRequireDefault(require("lodash/chunk"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _material = require("@styled-icons/material");

var _react2 = require("@testing-library/react");

var _Button = require("../Button");

var _Form = require("../Form");

var _Link = require("../Link");

var _utils = require("../utils");

var _ = require(".");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultFilters = [{
  field: 'name',
  label: 'Name',
  options: ['Cheddar', 'Gouda', 'Swiss', 'Mozzarella']
}, {
  field: 'color',
  label: 'Color',
  multiple: true,
  options: ['blue', 'orange', 'yellow', 'white']
}, {
  field: 'origin',
  label: 'Origin',
  multiple: true,
  options: ['France', 'England', 'Italy', 'Netherlands', 'United States']
}];
exports.defaultFilters = defaultFilters;
var columns = [{
  canSort: true,
  hide: true,
  id: 'calories',
  title: 'Calories',
  type: 'number'
}, {
  canSort: true,
  id: 'id',
  title: 'ID',
  type: 'number'
}, {
  id: 'status',
  title: 'Status',
  titleIcon: _react["default"].createElement(_material.Link, null),
  type: 'string'
}, {
  id: 'name',
  size: 'medium',
  title: 'Name',
  type: 'string'
}, {
  id: 'role',
  size: 100,
  title: 'Role',
  type: 'string'
}];
var data = [{
  calories: 101,
  id: 1,
  name: 'Richard Garfield',
  type: 'Game Designer'
}, {
  calories: 102,
  id: 2,
  name: 'John Carmack',
  type: 'Programmer'
}, {
  calories: 103,
  id: 3,
  name: _react["default"].createElement("a", {
    href: "https://components.looker.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Gouda"),
  type: 'semi-hard, artisan, brined, processed'
}, {
  calories: 104,
  id: 4,
  name: _react["default"].createElement(_Link.Link, {
    href: "https://components.looker.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "American"),
  type: 'semi-soft, processed'
}];

var bestCheeseDiv = _react["default"].createElement("div", null, "Pepper Jack");

var items = data.map(function (_ref) {
  var calories = _ref.calories,
      id = _ref.id,
      name = _ref.name,
      type = _ref.type;

  var availableActions = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.DataTableAction, null, "View Profile"));

  return _react["default"].createElement(_.DataTableItem, {
    key: id,
    id: String(id),
    actions: availableActions
  }, _react["default"].createElement(_.DataTableCell, null, calories), _react["default"].createElement(_.DataTableCell, null, id), _react["default"].createElement(_.DataTableCell, null, "Meh."), _react["default"].createElement(_.DataTableCell, null, name), _react["default"].createElement(_.DataTableCell, null, type));
});
var itemsActionPrimary = data.map(function (_ref2) {
  var calories = _ref2.calories,
      id = _ref2.id,
      name = _ref2.name,
      type = _ref2.type;

  var actionPrimary = _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_material.Delete, null),
    label: "Trash It",
    onClick: function onClick() {
      return alert('Trash it');
    }
  });

  return _react["default"].createElement(_.DataTableItem, {
    key: id,
    id: String(id),
    actionPrimary: actionPrimary
  }, _react["default"].createElement(_.DataTableCell, null, calories), _react["default"].createElement(_.DataTableCell, null, id), _react["default"].createElement(_.DataTableCell, null, name), _react["default"].createElement(_.DataTableCell, null, type));
});
var itemsActionsPrimaryAction = data.map(function (_ref3) {
  var calories = _ref3.calories,
      id = _ref3.id,
      name = _ref3.name,
      type = _ref3.type;

  var availableActions = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.DataTableAction, null, "View Profile"), _react["default"].createElement(_.DataTableAction, null, "edit Profile"), _react["default"].createElement(_.DataTableAction, null, "comment Profile"));

  var ActionPrimary = _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_material.Delete, null),
    label: "Trash It",
    onClick: function onClick() {
      return alert('Trash it');
    }
  });

  return _react["default"].createElement(_.DataTableItem, {
    key: id,
    id: String(id),
    actions: availableActions,
    actionPrimary: ActionPrimary
  }, _react["default"].createElement(_.DataTableCell, null, calories), _react["default"].createElement(_.DataTableCell, null, id), _react["default"].createElement(_.DataTableCell, null, name), _react["default"].createElement(_.DataTableCell, null, type));
});

var dataTableWithGeneratedHeader = _react["default"].createElement(_.DataTable, {
  caption: "this is a table's caption",
  columns: columns
}, items);

var handleActionClick = jest.fn();
var handleListItemClick = jest.fn();
var clickableItems = data.map(function (_ref4) {
  var calories = _ref4.calories,
      id = _ref4.id,
      name = _ref4.name,
      type = _ref4.type;

  var availableActions = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.DataTableAction, {
    onClick: handleActionClick
  }, "View Profile"));

  return _react["default"].createElement(_.DataTableItem, {
    id: String(id),
    key: id,
    actions: availableActions,
    actionsTooltip: "My Actions Button",
    onClick: handleListItemClick
  }, _react["default"].createElement(_.DataTableCell, null, calories), _react["default"].createElement(_.DataTableCell, null, id), _react["default"].createElement(_.DataTableCell, null, name), _react["default"].createElement(_.DataTableCell, null, type));
});

var dataTableWithClickableRows = _react["default"].createElement(_.DataTable, {
  caption: "this is a table's caption",
  columns: columns
}, clickableItems);

var onSelect = jest.fn();
var onSelectAll = jest.fn();
var defaultSelectConfig = {
  onSelect: onSelect,
  onSelectAll: onSelectAll,
  pageItems: ['1', '2'],
  selectedItems: []
};

var dataTableWithSelect = _react["default"].createElement(_.DataTable, {
  caption: "this is a table's caption",
  columns: columns,
  select: defaultSelectConfig
}, items);

var dataTableWithSelectedItems = _react["default"].createElement(_.DataTable, {
  caption: "this is a table's caption",
  columns: columns,
  select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
    selectedItems: ['1']
  })
}, items);

describe('DataTable', function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    handleActionClick.mockClear();
    handleListItemClick.mockClear();
    onSelect.mockClear();
    onSelectAll.mockClear();
  });
  describe('General Layout', function () {
    test('Renders a generated header and list item', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithGeneratedHeader);
      expect(_react2.screen.getByText('ID')).toBeInTheDocument();
      expect(_react2.screen.getByText('Name')).toBeInTheDocument();
      expect(_react2.screen.getByText('Role')).toBeInTheDocument();
      expect(_react2.screen.getByText('1')).toBeInTheDocument();
      expect(_react2.screen.getByText('Richard Garfield')).toBeInTheDocument();
      expect(_react2.screen.getByText('Game Designer')).toBeInTheDocument();
    });
    test('Renders action menu on button click and handles action click', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithClickableRows);

      var listItemId = _react2.screen.getByText('1');

      (0, _react2.fireEvent)(listItemId, new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true
      }));

      var listItemButton = _react2.screen.getAllByText('My Actions Button')[0];

      expect(_react2.screen.queryByText('View Profile')).not.toBeInTheDocument();

      _react2.fireEvent.click(listItemButton);

      var viewProfileAction = _react2.screen.getByText('View Profile');

      expect(viewProfileAction).toBeInTheDocument();
      expect(handleActionClick.mock.calls.length).toBe(0);

      _react2.fireEvent.click(viewProfileAction);

      expect(handleActionClick.mock.calls.length).toBe(1);
      expect(_react2.screen.queryByText('View Profile')).not.toBeInTheDocument();
    });
    test('Handles item click', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithClickableRows);

      var dataTableDataTableCell = _react2.screen.getByText('1');

      expect(handleListItemClick).toHaveBeenCalledTimes(0);

      _react2.fireEvent.click(dataTableDataTableCell);

      expect(handleListItemClick).toHaveBeenCalledTimes(1);
    });
    test.skip('Item has pointer cursor and shadow when hovering over DataTableItem', function () {});
  });
  describe('Selecting', function () {
    test('Checkbox click calls onSelect', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithSelect);

      _react2.fireEvent.click(_react2.screen.getAllByRole('checkbox')[1]);

      expect(onSelect).toHaveBeenCalled();
    });
    test('Checkbox keyboard entry calls onSelect', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithSelect);

      _react2.fireEvent.keyDown(_react2.screen.getAllByRole('checkbox')[1], {
        code: 'Enter',
        key: 'Enter'
      });

      expect(onSelect).toHaveBeenCalled();
    });
    test('selectedItems determines if a checkbox is checked', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithSelectedItems);

      var checkbox = _react2.screen.getAllByRole('checkbox')[1];

      expect(checkbox).toBeChecked();
    });
    test('selectedItems not selected if clicked on a anchor', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithSelect);

      var Anchor = _react2.screen.getByText('Gouda');

      expect(Anchor).toBeInTheDocument();

      _react2.fireEvent.click(Anchor);

      var checkbox = _react2.screen.getAllByRole('checkbox')[3];

      expect(checkbox).not.toBeChecked();
    });
    test('selectedItems not selected if clicked on a link', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithSelect);

      var link = _react2.screen.getByText('American');

      expect(link).toBeInTheDocument();

      _react2.fireEvent.click(link);

      var checkbox = _react2.screen.getAllByRole('checkbox')[4];

      expect(checkbox).not.toBeChecked();
    });
    test('Selection - no pageItems & no selectedItems', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          pageItems: [],
          selectedItems: []
        })
      }, items));

      var checkbox = _react2.screen.getAllByRole('checkbox')[0];

      expect(checkbox).not.toBeChecked();
    });
  });
  describe('Selecting All', function () {
    var dataTableWithNoItemsSelected = _react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: defaultSelectConfig
    }, items);

    var dataTableWithSomeItemsSelected = _react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
        selectedItems: ['2']
      })
    }, items);

    var dataTableWithAllItemsSelected = _react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
        selectedItems: ['1', '2']
      })
    }, items);

    afterEach(function () {
      onSelect.mockClear();
      onSelectAll.mockClear();
    });
    test('Renders header checkbox that triggers onSelectAll on click when select prop receives a valid object', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithNoItemsSelected);

      var headerCheckbox = _react2.screen.getAllByRole('checkbox')[0];

      _react2.fireEvent.click(headerCheckbox);

      expect(onSelectAll).toHaveBeenCalledTimes(1);
    });
    test('Header checkbox is unchecked when selectedItems includes no row ids', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithNoItemsSelected);

      var headerCheckbox = _react2.screen.getAllByRole('checkbox')[0];

      expect(headerCheckbox).not.toBeChecked();
    });
    test('Header checkbox is mixed when selectedItems includes some row ids', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithSomeItemsSelected);

      _react2.screen.getByTitle('Check Mark Mixed');
    });
    test('Header checkbox is mixed when selectedItems includes all row ids', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithAllItemsSelected);

      var headerCheckbox = _react2.screen.getAllByRole('checkbox')[0];

      expect(headerCheckbox).toBeChecked();
    });
  });
  describe('Control Bar', function () {
    var onBulkActionClick = jest.fn();
    var onTotalClearAll = jest.fn();
    var onTotalSelectAll = jest.fn();
    afterEach(function () {
      onBulkActionClick.mockClear();
      onTotalClearAll.mockClear();
      onTotalSelectAll.mockClear();
    });
    var bulk = {
      actions: _react["default"].createElement(_.DataTableAction, {
        onClick: onBulkActionClick
      }, "My Bulk Action"),
      onTotalClearAll: onTotalClearAll,
      onTotalSelectAll: onTotalSelectAll,
      pageCount: 2,
      totalCount: 4
    };
    test('Control bar is visible when bulk prop is provided and selectedItems prop has length > 0', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['1']
        })
      }, items));

      _react2.screen.getByText('Bulk Actions');

      _react2.screen.getByText('1 of 2 displayed items selected');

      _react2.screen.getByText('Select all 4 results');
    });
    test('Control bar is not visible when bulk prop is not provided', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['1']
        })
      }, items));
      expect(_react2.screen.queryByText('Bulk Actions')).not.toBeInTheDocument();
    });
    test('Control bar is not visible when selectedItems.length < 0', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: []
        })
      }, items));
      expect(_react2.screen.queryByText('Bulk Actions')).not.toBeInTheDocument();
    });
    test('Control bar message reflects when all items are selected', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['0', '1']
        })
      }, items));
      expect(_react2.screen.getByText('All 2 displayed items selected')).toBeInTheDocument();
    });
    test('Clicking the "Bulk Actions" button reveals elements passed via bulk prop', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['1']
        })
      }, items));
      expect(_react2.screen.queryByText('My Bulk Action')).not.toBeInTheDocument();

      _react2.fireEvent.click(_react2.screen.getByText('Bulk Actions'));

      var bulkAction = _react2.screen.getByText('My Bulk Action');

      expect(onBulkActionClick).toHaveBeenCalledTimes(0);

      _react2.fireEvent.click(bulkAction);

      expect(onBulkActionClick).toHaveBeenCalledTimes(1);
      expect(_react2.screen.queryByText('My Bulk Action')).not.toBeInTheDocument();
    });
    test('Pressing "Select all X Results" button triggers onTotalSelectAll', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['1']
        })
      }, items));
      expect(onTotalSelectAll).toHaveBeenCalledTimes(0);

      _react2.fireEvent.click(_react2.screen.getByText('Select all 4 results'));

      expect(onTotalSelectAll).toHaveBeenCalledTimes(1);
    });
    test('Pressing "Clear Selection" button triggers onTotalClearAll', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['1', '2', '3', '4']
        })
      }, items));
      expect(onTotalClearAll).toHaveBeenCalledTimes(0);

      _react2.fireEvent.click(_react2.screen.getByText('Clear Selection'));

      expect(onTotalClearAll).toHaveBeenCalledTimes(1);
    });
  });
  describe('Actions', function () {
    var dataTableWithActions = _react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: defaultSelectConfig
    }, items);

    var dataTableWithPrimaryAction = _react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: defaultSelectConfig
    }, itemsActionPrimary);

    var dataTableWithActionPrimaryAction = _react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: defaultSelectConfig
    }, itemsActionsPrimaryAction);

    test('Displays Icon for Actions and PrimaryAction', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithActionPrimaryAction);
      expect(_react2.screen.getAllByText('Trash It')[0]).toBeInTheDocument();
      expect(_react2.screen.getAllByText('Trash It')[0].closest('button')).toBeInTheDocument();
      expect(_react2.screen.getAllByText('Options')[0]).toBeInTheDocument();
      expect(_react2.screen.getAllByText('Options')[0].closest('button')).toBeInTheDocument();
    });
    test('Displays Icon for Actions', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithActions);
      expect(_react2.screen.getAllByText('Options')[0]).toBeInTheDocument();
      expect(_react2.screen.getAllByText('Options')[0].closest('button')).toBeInTheDocument();
    });
    test('Displays Icon for PrimaryAction', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithPrimaryAction);
      expect(_react2.screen.getAllByText('Trash It')[0]).toBeInTheDocument();
      expect(_react2.screen.getAllByText('Trash It')[0].closest('button')).toBeInTheDocument();
    });
  });
  describe('Accessibility', function () {
    var columns = [{
      id: 'calories',
      title: 'Calories',
      type: 'number'
    }, {
      canSort: true,
      id: 'id',
      title: 'ID',
      type: 'number'
    }, {
      canSort: true,
      id: 'name',
      sortDirection: 'asc',
      title: 'Name',
      type: 'string'
    }, {
      canSort: true,
      id: 'role',
      sortDirection: 'desc',
      title: 'Role',
      type: 'string'
    }];
    test('Table has aria-label', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        select: defaultSelectConfig
      }, items));
      expect(_react2.screen.getByRole('table')).toHaveAttribute('aria-label', "this is a table's caption");
    });
    test('Table has role=rowheader for first column elements', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        select: defaultSelectConfig
      }, items));

      var calories1 = _react2.screen.getByText('101');

      var id1 = _react2.screen.getByText('1');

      var calories2 = _react2.screen.getByText('102');

      var id2 = _react2.screen.getByText('2');

      expect(calories1).toHaveAttribute('role', 'rowheader');
      expect(id1).not.toHaveAttribute('role', 'rowheader');
      expect(calories2).toHaveAttribute('role', 'rowheader');
      expect(id2).not.toHaveAttribute('role', 'rowheader');
    });
    test('Table has aria-sort', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        select: defaultSelectConfig
      }, items));

      var idTH = _react2.screen.getByText('ID').closest('th');

      var nameTH = _react2.screen.getByText('Name').closest('th');

      var roleTH = _react2.screen.getByText('Role').closest('th');

      expect(idTH).toHaveAttribute('aria-sort', 'none');
      expect(nameTH).toHaveAttribute('aria-sort', 'ascending');
      expect(roleTH).toHaveAttribute('aria-sort', 'descending');
    });
  });
  describe('Sorting', function () {
    var onSort = jest.fn();

    var dataTableWithSort = _react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      onSort: onSort
    }, items);

    afterEach(function () {
      onSort.mockClear();
    });
    test('Calls onSort if canSort property is true', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithSort);

      var idColumnHeader = _react2.screen.getByText('ID');

      _react2.fireEvent.click(idColumnHeader);

      expect(onSort.mock.calls.length).toBe(1);
    });
    test('Does not call onSort if canSort property is false', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithSort);

      var nameColumnHeader = _react2.screen.getByText('Name');

      _react2.fireEvent.click(nameColumnHeader);

      expect(onSort.mock.calls.length).toBe(0);
    });
    test('Clicking first column calls onSort with correct columnID', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithSort);

      _react2.fireEvent.click(_react2.screen.getByText('ID'));

      expect(onSort).toBeCalledWith('id', 'asc');
    });
  });
  test('Does not render children if state="loading"', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: [],
      state: "loading"
    }, bestCheeseDiv));
    expect(_react2.screen.queryByText('Pepper Jack')).not.toBeInTheDocument();
  });
  test('Does not render children if state="noResults"', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: [],
      state: "noResults"
    }, bestCheeseDiv));
    expect(_react2.screen.queryByText('Pepper Jack')).not.toBeInTheDocument();
  });
  test('Renders custom no results message when noResultsDisplay prop has a value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: [],
      state: "noResults",
      noResultsDisplay: 'Cheddar'
    }, bestCheeseDiv));
    expect(_react2.screen.getByText('Cheddar')).toBeInTheDocument();
  });
  test('default columnsVisible', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: [{
        hide: false,
        id: 'blah',
        title: 'blah'
      }]
    }, _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "Hello world"))));
    expect(_react2.screen.getByText('blah')).toBeInTheDocument();
  });
  test('Hides column is hide prop is true', function () {
    (0, _componentsTestUtils.renderWithTheme)(dataTableWithGeneratedHeader);
    expect(_react2.screen.queryByText('Calories')).not.toBeInTheDocument();
  });
  test('firstColumnStuck renders', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      firstColumnStuck: true
    }, items));

    var secondColumn = _react2.screen.getByText('2');

    expect(secondColumn).not.toHaveStyle('position: sticky;');
  });
  test('filters renders', function () {
    var FilterDataTable = function FilterDataTable() {
      var _useState = (0, _react.useState)(defaultFilters),
          _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
          listFilters = _useState2[0],
          setListFilters = _useState2[1];

      return _react["default"].createElement(_.DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        filters: _react["default"].createElement(_Form.InputFilters, {
          filters: listFilters,
          onChange: function onChange(f) {
            return setListFilters(f);
          }
        })
      }, items);
    };

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(FilterDataTable, null));
    expect(_react2.screen.getByText('Filter List')).toBeInTheDocument();
  });
  describe('Keyboard Navigation', function () {
    var renderAndSelectCells = function renderAndSelectCells() {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithGeneratedHeader);
      var columns = Object.keys(data[0]).length + 1;
      var tableCells = (0, _chunk["default"])(_react2.screen.getAllByRole('cell'), columns);

      var headerCells = _react2.screen.getAllByRole('columnheader');

      return {
        headerCells: headerCells,
        tableCells: tableCells
      };
    };

    test('Down arrow jumps to the next row', function () {
      var _renderAndSelectCells = renderAndSelectCells(),
          tableCells = _renderAndSelectCells.tableCells;

      var startingCell = tableCells[0][1];
      startingCell.focus();

      _react2.fireEvent.keyDown(startingCell, {
        code: 'ArrowDown',
        key: 'ArrowDown'
      });

      expect(tableCells[1][1]).toHaveFocus();
    });
    test('Right arrow jumps to the next column', function () {
      var _renderAndSelectCells2 = renderAndSelectCells(),
          tableCells = _renderAndSelectCells2.tableCells;

      var startingCell = tableCells[0][1];
      startingCell.focus();

      _react2.fireEvent.keyDown(startingCell, {
        code: 'ArrowRight',
        key: 'ArrowRight'
      });

      expect(tableCells[0][2]).toHaveFocus();
    });
    test('Up arrow jumps to the previous column', function () {
      var _renderAndSelectCells3 = renderAndSelectCells(),
          tableCells = _renderAndSelectCells3.tableCells;

      var startingCell = tableCells[1][1];
      startingCell.focus();

      _react2.fireEvent.keyDown(startingCell, {
        code: 'ArrowUp',
        key: 'ArrowUp'
      });

      expect(tableCells[0][1]).toHaveFocus();
    });
    test('Left arrow jumps to the previous column', function () {
      var _renderAndSelectCells4 = renderAndSelectCells(),
          tableCells = _renderAndSelectCells4.tableCells;

      var startingCell = tableCells[0][2];
      startingCell.focus();

      _react2.fireEvent.keyDown(startingCell, {
        code: 'ArrowLeft',
        key: 'ArrowLeft'
      });

      expect(tableCells[0][1]).toHaveFocus();
    });
    test('Navigates between checkboxes', function () {
      (0, _componentsTestUtils.renderWithTheme)(dataTableWithSelect);

      var checkboxes = _react2.screen.getAllByRole('checkbox');

      checkboxes[0].focus();

      _react2.fireEvent.keyDown(checkboxes[0], {
        code: 'ArrowDown',
        key: 'ArrowDown'
      });

      expect(checkboxes[1]).toHaveFocus();
    });
    test('Navigates from thead to tbody', function () {
      var _renderAndSelectCells5 = renderAndSelectCells(),
          tableCells = _renderAndSelectCells5.tableCells,
          headerCells = _renderAndSelectCells5.headerCells;

      var startingCell = headerCells[1];
      startingCell.focus();

      _react2.fireEvent.keyDown(startingCell, {
        code: 'ArrowDown',
        key: 'ArrowDown'
      });

      expect(tableCells[0][1]).toHaveFocus();
    });
    test('Navigates from tbody to thead', function () {
      var _renderAndSelectCells6 = renderAndSelectCells(),
          tableCells = _renderAndSelectCells6.tableCells,
          headerCells = _renderAndSelectCells6.headerCells;

      var startingCell = tableCells[0][1];
      startingCell.focus();

      _react2.fireEvent.keyDown(startingCell, {
        code: 'ArrowUp',
        key: 'ArrowUp'
      });

      expect(headerCells[1]).toHaveFocus();
    });
    test('Will not navigate up from the thead row', function () {
      var _renderAndSelectCells7 = renderAndSelectCells(),
          headerCells = _renderAndSelectCells7.headerCells;

      var startingCell = headerCells[0];
      startingCell.focus();

      _react2.fireEvent.keyDown(startingCell, {
        code: 'ArrowUp',
        key: 'ArrowUp'
      });

      expect(startingCell).toHaveFocus();
    });
    test('Will not navigate down from the last row', function () {
      var _renderAndSelectCells8 = renderAndSelectCells(),
          tableCells = _renderAndSelectCells8.tableCells;

      var startingCell = tableCells[tableCells.length - 1][1];
      startingCell.focus();

      _react2.fireEvent.keyDown(startingCell, {
        code: 'ArrowDown',
        key: 'ArrowDown'
      });

      expect(startingCell).toHaveFocus();
    });
    test('Tabbing from outside selects the first thead cell ', function () {
      var _renderAndSelectCells9 = renderAndSelectCells(),
          headerCells = _renderAndSelectCells9.headerCells;

      var tabStops = (0, _utils.getTabStops)(document.body);
      tabStops[0].focus();

      _react2.fireEvent.keyDown(tabStops[0], {
        code: 'Tab',
        key: 'Tab'
      });

      expect(headerCells[0]).toHaveFocus();
    });
  });
});
//# sourceMappingURL=DataTable.spec.js.map