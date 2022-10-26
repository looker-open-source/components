import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import chunk from 'lodash/chunk';
import { renderWithTheme } from '@looker/components-test-utils';
import { Delete, Link as LinkIcon } from '@styled-icons/material';
import { fireEvent, screen } from '@testing-library/react';
import { IconButton } from '../Button';
import { InputFilters } from '../Form';
import { Link } from '../Link';
import { getTabStops } from '../utils';
import { DataTable, DataTableAction, DataTableCell, DataTableItem } from '.';
export const defaultFilters = [{
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
const columns = [{
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
  titleIcon: React.createElement(LinkIcon, null),
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
const data = [{
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
  name: React.createElement("a", {
    href: "https://components.looker.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Gouda"),
  type: 'semi-hard, artisan, brined, processed'
}, {
  calories: 104,
  id: 4,
  name: React.createElement(Link, {
    href: "https://components.looker.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "American"),
  type: 'semi-soft, processed'
}];
const bestCheeseDiv = React.createElement("div", null, "Pepper Jack");
const items = data.map(({
  calories,
  id,
  name,
  type
}) => {
  const availableActions = React.createElement(React.Fragment, null, React.createElement(DataTableAction, null, "View Profile"));
  return React.createElement(DataTableItem, {
    key: id,
    id: String(id),
    actions: availableActions
  }, React.createElement(DataTableCell, null, calories), React.createElement(DataTableCell, null, id), React.createElement(DataTableCell, null, "Meh."), React.createElement(DataTableCell, null, name), React.createElement(DataTableCell, null, type));
});
const itemsActionPrimary = data.map(({
  calories,
  id,
  name,
  type
}) => {
  const actionPrimary = React.createElement(IconButton, {
    icon: React.createElement(Delete, null),
    label: "Trash It",
    onClick: () => alert('Trash it')
  });
  return React.createElement(DataTableItem, {
    key: id,
    id: String(id),
    actionPrimary: actionPrimary
  }, React.createElement(DataTableCell, null, calories), React.createElement(DataTableCell, null, id), React.createElement(DataTableCell, null, name), React.createElement(DataTableCell, null, type));
});
const itemsActionsPrimaryAction = data.map(({
  calories,
  id,
  name,
  type
}) => {
  const availableActions = React.createElement(React.Fragment, null, React.createElement(DataTableAction, null, "View Profile"), React.createElement(DataTableAction, null, "edit Profile"), React.createElement(DataTableAction, null, "comment Profile"));
  const ActionPrimary = React.createElement(IconButton, {
    icon: React.createElement(Delete, null),
    label: "Trash It",
    onClick: () => alert('Trash it')
  });
  return React.createElement(DataTableItem, {
    key: id,
    id: String(id),
    actions: availableActions,
    actionPrimary: ActionPrimary
  }, React.createElement(DataTableCell, null, calories), React.createElement(DataTableCell, null, id), React.createElement(DataTableCell, null, name), React.createElement(DataTableCell, null, type));
});
const dataTableWithGeneratedHeader = React.createElement(DataTable, {
  caption: "this is a table's caption",
  columns: columns
}, items);
const handleActionClick = jest.fn();
const handleListItemClick = jest.fn();
const clickableItems = data.map(({
  calories,
  id,
  name,
  type
}) => {
  const availableActions = React.createElement(React.Fragment, null, React.createElement(DataTableAction, {
    onClick: handleActionClick
  }, "View Profile"));
  return React.createElement(DataTableItem, {
    id: String(id),
    key: id,
    actions: availableActions,
    actionsTooltip: "My Actions Button",
    onClick: handleListItemClick
  }, React.createElement(DataTableCell, null, calories), React.createElement(DataTableCell, null, id), React.createElement(DataTableCell, null, name), React.createElement(DataTableCell, null, type));
});
const dataTableWithClickableRows = React.createElement(DataTable, {
  caption: "this is a table's caption",
  columns: columns
}, clickableItems);
const onSelect = jest.fn();
const onSelectAll = jest.fn();
const defaultSelectConfig = {
  onSelect,
  onSelectAll,
  pageItems: ['1', '2'],
  selectedItems: []
};
const dataTableWithSelect = React.createElement(DataTable, {
  caption: "this is a table's caption",
  columns: columns,
  select: defaultSelectConfig
}, items);
const dataTableWithSelectedItems = React.createElement(DataTable, {
  caption: "this is a table's caption",
  columns: columns,
  select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
    selectedItems: ['1']
  })
}, items);
describe('DataTable', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    handleActionClick.mockClear();
    handleListItemClick.mockClear();
    onSelect.mockClear();
    onSelectAll.mockClear();
  });
  describe('General Layout', () => {
    test('Renders a generated header and list item', () => {
      renderWithTheme(dataTableWithGeneratedHeader);
      expect(screen.getByText('ID')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Role')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('Richard Garfield')).toBeInTheDocument();
      expect(screen.getByText('Game Designer')).toBeInTheDocument();
    });
    test('Renders action menu on button click and handles action click', () => {
      renderWithTheme(dataTableWithClickableRows);
      const listItemId = screen.getByText('1');
      fireEvent(listItemId, new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true
      }));
      const listItemButton = screen.getAllByText('My Actions Button')[0];
      expect(screen.queryByText('View Profile')).not.toBeInTheDocument();
      fireEvent.click(listItemButton);
      const viewProfileAction = screen.getByText('View Profile');
      expect(viewProfileAction).toBeInTheDocument();
      expect(handleActionClick.mock.calls.length).toBe(0);
      fireEvent.click(viewProfileAction);
      expect(handleActionClick.mock.calls.length).toBe(1);
      expect(screen.queryByText('View Profile')).not.toBeInTheDocument();
    });
    test('Handles item click', () => {
      renderWithTheme(dataTableWithClickableRows);
      const dataTableDataTableCell = screen.getByText('1');
      expect(handleListItemClick).toHaveBeenCalledTimes(0);
      fireEvent.click(dataTableDataTableCell);
      expect(handleListItemClick).toHaveBeenCalledTimes(1);
    });
    test.skip('Item has pointer cursor and shadow when hovering over DataTableItem', () => {});
  });
  describe('Selecting', () => {
    test('Checkbox click calls onSelect', () => {
      renderWithTheme(dataTableWithSelect);
      fireEvent.click(screen.getAllByRole('checkbox')[1]);
      expect(onSelect).toHaveBeenCalled();
    });
    test('Checkbox keyboard entry calls onSelect', () => {
      renderWithTheme(dataTableWithSelect);
      fireEvent.keyDown(screen.getAllByRole('checkbox')[1], {
        code: 'Enter',
        key: 'Enter'
      });
      expect(onSelect).toHaveBeenCalled();
    });
    test('selectedItems determines if a checkbox is checked', () => {
      renderWithTheme(dataTableWithSelectedItems);
      const checkbox = screen.getAllByRole('checkbox')[1];
      expect(checkbox).toBeChecked();
    });
    test('selectedItems not selected if clicked on a anchor', () => {
      renderWithTheme(dataTableWithSelect);
      const Anchor = screen.getByText('Gouda');
      expect(Anchor).toBeInTheDocument();
      fireEvent.click(Anchor);
      const checkbox = screen.getAllByRole('checkbox')[3];
      expect(checkbox).not.toBeChecked();
    });
    test('selectedItems not selected if clicked on a link', () => {
      renderWithTheme(dataTableWithSelect);
      const link = screen.getByText('American');
      expect(link).toBeInTheDocument();
      fireEvent.click(link);
      const checkbox = screen.getAllByRole('checkbox')[4];
      expect(checkbox).not.toBeChecked();
    });
    test('Selection - no pageItems & no selectedItems', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          pageItems: [],
          selectedItems: []
        })
      }, items));
      const checkbox = screen.getAllByRole('checkbox')[0];
      expect(checkbox).not.toBeChecked();
    });
  });
  describe('Selecting All', () => {
    const dataTableWithNoItemsSelected = React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: defaultSelectConfig
    }, items);
    const dataTableWithSomeItemsSelected = React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
        selectedItems: ['2']
      })
    }, items);
    const dataTableWithAllItemsSelected = React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
        selectedItems: ['1', '2']
      })
    }, items);
    afterEach(() => {
      onSelect.mockClear();
      onSelectAll.mockClear();
    });
    test('Renders header checkbox that triggers onSelectAll on click when select prop receives a valid object', () => {
      renderWithTheme(dataTableWithNoItemsSelected);
      const headerCheckbox = screen.getAllByRole('checkbox')[0];
      fireEvent.click(headerCheckbox);
      expect(onSelectAll).toHaveBeenCalledTimes(1);
    });
    test('Header checkbox is unchecked when selectedItems includes no row ids', () => {
      renderWithTheme(dataTableWithNoItemsSelected);
      const headerCheckbox = screen.getAllByRole('checkbox')[0];
      expect(headerCheckbox).not.toBeChecked();
    });
    test('Header checkbox is mixed when selectedItems includes some row ids', () => {
      renderWithTheme(dataTableWithSomeItemsSelected);
      screen.getByTitle('Check Mark Mixed');
    });
    test('Header checkbox is mixed when selectedItems includes all row ids', () => {
      renderWithTheme(dataTableWithAllItemsSelected);
      const headerCheckbox = screen.getAllByRole('checkbox')[0];
      expect(headerCheckbox).toBeChecked();
    });
  });
  describe('Control Bar', () => {
    const onBulkActionClick = jest.fn();
    const onTotalClearAll = jest.fn();
    const onTotalSelectAll = jest.fn();
    afterEach(() => {
      onBulkActionClick.mockClear();
      onTotalClearAll.mockClear();
      onTotalSelectAll.mockClear();
    });
    const bulk = {
      actions: React.createElement(DataTableAction, {
        onClick: onBulkActionClick
      }, "My Bulk Action"),
      onTotalClearAll,
      onTotalSelectAll,
      pageCount: 2,
      totalCount: 4
    };
    test('Control bar is visible when bulk prop is provided and selectedItems prop has length > 0', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['1']
        })
      }, items));
      screen.getByText('Bulk Actions');
      screen.getByText('1 of 2 displayed items selected');
      screen.getByText('Select all 4 results');
    });
    test('Control bar is not visible when bulk prop is not provided', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['1']
        })
      }, items));
      expect(screen.queryByText('Bulk Actions')).not.toBeInTheDocument();
    });
    test('Control bar is not visible when selectedItems.length < 0', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: []
        })
      }, items));
      expect(screen.queryByText('Bulk Actions')).not.toBeInTheDocument();
    });
    test('Control bar message reflects when all items are selected', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['0', '1']
        })
      }, items));
      expect(screen.getByText('All 2 displayed items selected')).toBeInTheDocument();
    });
    test('Clicking the "Bulk Actions" button reveals elements passed via bulk prop', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['1']
        })
      }, items));
      expect(screen.queryByText('My Bulk Action')).not.toBeInTheDocument();
      fireEvent.click(screen.getByText('Bulk Actions'));
      const bulkAction = screen.getByText('My Bulk Action');
      expect(onBulkActionClick).toHaveBeenCalledTimes(0);
      fireEvent.click(bulkAction);
      expect(onBulkActionClick).toHaveBeenCalledTimes(1);
      expect(screen.queryByText('My Bulk Action')).not.toBeInTheDocument();
    });
    test('Pressing "Select all X Results" button triggers onTotalSelectAll', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['1']
        })
      }, items));
      expect(onTotalSelectAll).toHaveBeenCalledTimes(0);
      fireEvent.click(screen.getByText('Select all 4 results'));
      expect(onTotalSelectAll).toHaveBeenCalledTimes(1);
    });
    test('Pressing "Clear Selection" button triggers onTotalClearAll', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        bulk: bulk,
        select: _objectSpread(_objectSpread({}, defaultSelectConfig), {}, {
          selectedItems: ['1', '2', '3', '4']
        })
      }, items));
      expect(onTotalClearAll).toHaveBeenCalledTimes(0);
      fireEvent.click(screen.getByText('Clear Selection'));
      expect(onTotalClearAll).toHaveBeenCalledTimes(1);
    });
  });
  describe('Actions', () => {
    const dataTableWithActions = React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: defaultSelectConfig
    }, items);
    const dataTableWithPrimaryAction = React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: defaultSelectConfig
    }, itemsActionPrimary);
    const dataTableWithActionPrimaryAction = React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      select: defaultSelectConfig
    }, itemsActionsPrimaryAction);
    test('Displays Icon for Actions and PrimaryAction', () => {
      renderWithTheme(dataTableWithActionPrimaryAction);
      expect(screen.getAllByText('Trash It')[0]).toBeInTheDocument();
      expect(screen.getAllByText('Trash It')[0].closest('button')).toBeInTheDocument();
      expect(screen.getAllByText('Options')[0]).toBeInTheDocument();
      expect(screen.getAllByText('Options')[0].closest('button')).toBeInTheDocument();
    });
    test('Displays Icon for Actions', () => {
      renderWithTheme(dataTableWithActions);
      expect(screen.getAllByText('Options')[0]).toBeInTheDocument();
      expect(screen.getAllByText('Options')[0].closest('button')).toBeInTheDocument();
    });
    test('Displays Icon for PrimaryAction', () => {
      renderWithTheme(dataTableWithPrimaryAction);
      expect(screen.getAllByText('Trash It')[0]).toBeInTheDocument();
      expect(screen.getAllByText('Trash It')[0].closest('button')).toBeInTheDocument();
    });
  });
  describe('Accessibility', () => {
    const columns = [{
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
    test('Table has aria-label', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        select: defaultSelectConfig
      }, items));
      expect(screen.getByRole('table')).toHaveAttribute('aria-label', "this is a table's caption");
    });
    test('Table has role=rowheader for first column elements', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        select: defaultSelectConfig
      }, items));
      const calories1 = screen.getByText('101');
      const id1 = screen.getByText('1');
      const calories2 = screen.getByText('102');
      const id2 = screen.getByText('2');
      expect(calories1).toHaveAttribute('role', 'rowheader');
      expect(id1).not.toHaveAttribute('role', 'rowheader');
      expect(calories2).toHaveAttribute('role', 'rowheader');
      expect(id2).not.toHaveAttribute('role', 'rowheader');
    });
    test('Table has aria-sort', () => {
      renderWithTheme(React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        select: defaultSelectConfig
      }, items));
      const idTH = screen.getByText('ID').closest('th');
      const nameTH = screen.getByText('Name').closest('th');
      const roleTH = screen.getByText('Role').closest('th');
      expect(idTH).toHaveAttribute('aria-sort', 'none');
      expect(nameTH).toHaveAttribute('aria-sort', 'ascending');
      expect(roleTH).toHaveAttribute('aria-sort', 'descending');
    });
  });
  describe('Sorting', () => {
    const onSort = jest.fn();
    const dataTableWithSort = React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      onSort: onSort
    }, items);
    afterEach(() => {
      onSort.mockClear();
    });
    test('Calls onSort if canSort property is true', () => {
      renderWithTheme(dataTableWithSort);
      const idColumnHeader = screen.getByText('ID');
      fireEvent.click(idColumnHeader);
      expect(onSort.mock.calls.length).toBe(1);
    });
    test('Does not call onSort if canSort property is false', () => {
      renderWithTheme(dataTableWithSort);
      const nameColumnHeader = screen.getByText('Name');
      fireEvent.click(nameColumnHeader);
      expect(onSort.mock.calls.length).toBe(0);
    });
    test('Clicking first column calls onSort with correct columnID', () => {
      renderWithTheme(dataTableWithSort);
      fireEvent.click(screen.getByText('ID'));
      expect(onSort).toBeCalledWith('id', 'asc');
    });
  });
  test('Does not render children if state="loading"', () => {
    renderWithTheme(React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: [],
      state: "loading"
    }, bestCheeseDiv));
    expect(screen.queryByText('Pepper Jack')).not.toBeInTheDocument();
  });
  test('Does not render children if state="noResults"', () => {
    renderWithTheme(React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: [],
      state: "noResults"
    }, bestCheeseDiv));
    expect(screen.queryByText('Pepper Jack')).not.toBeInTheDocument();
  });
  test('Renders custom no results message when noResultsDisplay prop has a value', () => {
    renderWithTheme(React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: [],
      state: "noResults",
      noResultsDisplay: 'Cheddar'
    }, bestCheeseDiv));
    expect(screen.getByText('Cheddar')).toBeInTheDocument();
  });
  test('default columnsVisible', () => {
    renderWithTheme(React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: [{
        hide: false,
        id: 'blah',
        title: 'blah'
      }]
    }, React.createElement("tr", null, React.createElement("td", null, "Hello world"))));
    expect(screen.getByText('blah')).toBeInTheDocument();
  });
  test('Hides column is hide prop is true', () => {
    renderWithTheme(dataTableWithGeneratedHeader);
    expect(screen.queryByText('Calories')).not.toBeInTheDocument();
  });
  test('firstColumnStuck renders', () => {
    renderWithTheme(React.createElement(DataTable, {
      caption: "this is a table's caption",
      columns: columns,
      firstColumnStuck: true
    }, items));
    const secondColumn = screen.getByText('2');
    expect(secondColumn).not.toHaveStyle('position: sticky;');
  });
  test('filters renders', () => {
    const FilterDataTable = () => {
      const [listFilters, setListFilters] = useState(defaultFilters);
      return React.createElement(DataTable, {
        caption: "this is a table's caption",
        columns: columns,
        filters: React.createElement(InputFilters, {
          filters: listFilters,
          onChange: f => setListFilters(f)
        })
      }, items);
    };

    renderWithTheme(React.createElement(FilterDataTable, null));
    expect(screen.getByText('Filter List')).toBeInTheDocument();
  });
  describe('Keyboard Navigation', () => {
    const renderAndSelectCells = () => {
      renderWithTheme(dataTableWithGeneratedHeader);
      const columns = Object.keys(data[0]).length + 1;
      const tableCells = chunk(screen.getAllByRole('cell'), columns);
      const headerCells = screen.getAllByRole('columnheader');
      return {
        headerCells,
        tableCells
      };
    };

    test('Down arrow jumps to the next row', () => {
      const {
        tableCells
      } = renderAndSelectCells();
      const startingCell = tableCells[0][1];
      startingCell.focus();
      fireEvent.keyDown(startingCell, {
        code: 'ArrowDown',
        key: 'ArrowDown'
      });
      expect(tableCells[1][1]).toHaveFocus();
    });
    test('Right arrow jumps to the next column', () => {
      const {
        tableCells
      } = renderAndSelectCells();
      const startingCell = tableCells[0][1];
      startingCell.focus();
      fireEvent.keyDown(startingCell, {
        code: 'ArrowRight',
        key: 'ArrowRight'
      });
      expect(tableCells[0][2]).toHaveFocus();
    });
    test('Up arrow jumps to the previous column', () => {
      const {
        tableCells
      } = renderAndSelectCells();
      const startingCell = tableCells[1][1];
      startingCell.focus();
      fireEvent.keyDown(startingCell, {
        code: 'ArrowUp',
        key: 'ArrowUp'
      });
      expect(tableCells[0][1]).toHaveFocus();
    });
    test('Left arrow jumps to the previous column', () => {
      const {
        tableCells
      } = renderAndSelectCells();
      const startingCell = tableCells[0][2];
      startingCell.focus();
      fireEvent.keyDown(startingCell, {
        code: 'ArrowLeft',
        key: 'ArrowLeft'
      });
      expect(tableCells[0][1]).toHaveFocus();
    });
    test('Navigates between checkboxes', () => {
      renderWithTheme(dataTableWithSelect);
      const checkboxes = screen.getAllByRole('checkbox');
      checkboxes[0].focus();
      fireEvent.keyDown(checkboxes[0], {
        code: 'ArrowDown',
        key: 'ArrowDown'
      });
      expect(checkboxes[1]).toHaveFocus();
    });
    test('Navigates from thead to tbody', () => {
      const {
        tableCells,
        headerCells
      } = renderAndSelectCells();
      const startingCell = headerCells[1];
      startingCell.focus();
      fireEvent.keyDown(startingCell, {
        code: 'ArrowDown',
        key: 'ArrowDown'
      });
      expect(tableCells[0][1]).toHaveFocus();
    });
    test('Navigates from tbody to thead', () => {
      const {
        tableCells,
        headerCells
      } = renderAndSelectCells();
      const startingCell = tableCells[0][1];
      startingCell.focus();
      fireEvent.keyDown(startingCell, {
        code: 'ArrowUp',
        key: 'ArrowUp'
      });
      expect(headerCells[1]).toHaveFocus();
    });
    test('Will not navigate up from the thead row', () => {
      const {
        headerCells
      } = renderAndSelectCells();
      const startingCell = headerCells[0];
      startingCell.focus();
      fireEvent.keyDown(startingCell, {
        code: 'ArrowUp',
        key: 'ArrowUp'
      });
      expect(startingCell).toHaveFocus();
    });
    test('Will not navigate down from the last row', () => {
      const {
        tableCells
      } = renderAndSelectCells();
      const startingCell = tableCells[tableCells.length - 1][1];
      startingCell.focus();
      fireEvent.keyDown(startingCell, {
        code: 'ArrowDown',
        key: 'ArrowDown'
      });
      expect(startingCell).toHaveFocus();
    });
    test('Tabbing from outside selects the first thead cell ', () => {
      const {
        headerCells
      } = renderAndSelectCells();
      const tabStops = getTabStops(document.body);
      tabStops[0].focus();
      fireEvent.keyDown(tabStops[0], {
        code: 'Tab',
        key: 'Tab'
      });
      expect(headerCells[0]).toHaveFocus();
    });
  });
});
//# sourceMappingURL=DataTable.spec.js.map