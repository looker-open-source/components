import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { DataTableAction, DataTableItem } from '../Item';
import { DataTableCell } from '../Column';
import { DataTable } from '../DataTable';
import { useSelectManager } from './useSelectManager';
describe('useSelectManager', () => {
  const data = [{
    id: 1,
    name: 'Gorgonzola'
  }, {
    id: 2,
    name: 'Cheddar'
  }, {
    id: 3,
    name: `Blue`
  }];
  const columns = [{
    id: 'id',
    title: 'ID',
    type: 'number'
  }, {
    id: 'name',
    title: 'Name',
    type: 'string'
  }];

  const Test = ({
    defaultSelected
  }) => {
    const allSelectableItems = data.map(({
      id
    }) => String(id));
    const {
      onSelect,
      onSelectAll,
      selections
    } = useSelectManager(allSelectableItems, defaultSelected);
    const items = data.map(({
      id,
      name
    }) => React.createElement(DataTableItem, {
      id: String(id),
      key: id,
      onClick: () => alert(`${name} clicked`),
      actions: React.createElement(React.Fragment, null, React.createElement(DataTableAction, {
        onClick: () => alert(`${name} deleted`)
      }, "Delete"))
    }, React.createElement(DataTableCell, null, id), React.createElement(DataTableCell, null, name)));
    return React.createElement(DataTable, {
      caption: "Cheeses example",
      columns: columns,
      select: {
        onSelect,
        onSelectAll,
        pageItems: allSelectableItems,
        selectedItems: selections
      }
    }, items);
  };

  test('returns a DataTable', () => {
    renderWithTheme(React.createElement(Test, null));
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Gorgonzola')).toBeInTheDocument();
    expect(screen.getByText('Cheddar')).toBeInTheDocument();
    expect(screen.getByText('Blue')).toBeInTheDocument();
  });
  test('selects all checkbox', () => {
    renderWithTheme(React.createElement(Test, null));
    const checkbox = screen.getAllByRole('checkbox');
    expect(checkbox[0]).toBeInTheDocument();
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(checkbox[0]);
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'true');
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'true');
  });
  test('clicking the header deselects all when a mixed selection exists', () => {
    renderWithTheme(React.createElement(Test, {
      defaultSelected: ['2', '3']
    }));
    const checkbox = screen.getAllByRole('checkbox');
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'mixed');
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'true');
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'true');
    fireEvent.click(checkbox[0]);
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'false');
  });
  test('toggles mixed checkbox state in header', () => {
    renderWithTheme(React.createElement(Test, {
      defaultSelected: ['2']
    }));
    const checkbox = screen.getAllByRole('checkbox');
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'mixed');
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'true');
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(checkbox[2]);
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'false');
  });
  test('selects individual checkbox', () => {
    renderWithTheme(React.createElement(Test, null));
    const checkbox = screen.getAllByRole('checkbox');
    expect(checkbox[1]).toBeInTheDocument();
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(checkbox[1]);
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'true');
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'false');
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'false');
  });
});
//# sourceMappingURL=useSelectManager.spec.js.map