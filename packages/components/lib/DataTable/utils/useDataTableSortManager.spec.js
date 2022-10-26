import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { DataTableAction } from '../Item/DataTableAction';
import { Link } from '../../Link';
import { useDataTableSortManager } from './useDataTableSortManager';
describe('useDataTableSortManager', () => {
  const actions = () => React.createElement(React.Fragment, null, React.createElement(DataTableAction, {
    onClick: () => alert(`Ordered!!`)
  }, "Order"), React.createElement(DataTableAction, {
    onClick: () => alert('Mmmm...')
  }, "Make Grilled Cheese"), React.createElement(DataTableAction, {
    onClick: () => alert('Delete')
  }, "Delete"));

  const columns = [{
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
    canSort: true,
    id: 'name',
    title: 'Name',
    type: 'string'
  }, {
    canSort: true,
    id: 'type',
    title: 'Type',
    type: 'string'
  }];
  const data = [{
    calories: 101,
    id: 1,
    name: 'Cheddar',
    type: 'hard, artisan, processed'
  }, {
    calories: 102,
    id: 2,
    name: 'Brie',
    type: 'soft, processed'
  }, {
    calories: 103,
    id: 3,
    name: React.createElement("a", {
      href: "https://components.looker.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Gouda"),
    type: 'semi-hard, artisan, brined'
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
  test('returns a DataTable', () => {
    const Test = () => useDataTableSortManager('Caption...', data, columns, actions);

    renderWithTheme(React.createElement(Test, null));
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Cheddar')).toBeInTheDocument();
    expect(screen.getByText('hard, artisan, processed')).toBeInTheDocument();
  });
  test('returns a DataTable caption', () => {
    const Test = () => useDataTableSortManager('Caption...', data, columns, actions);

    renderWithTheme(React.createElement(Test, null));
    expect(screen.getByRole('table')).toHaveAttribute('aria-label', 'Caption...');
  });
  test('onSort sorts elements', () => {
    const Test = () => useDataTableSortManager('Caption...', data, columns, actions);

    renderWithTheme(React.createElement(Test, null));
    const sort = screen.getByText('ID').closest('th');
    expect(sort).not.toBeNull();
    expect(sort).toHaveAttribute('aria-sort', 'none');
    fireEvent.click(screen.getByText('ID'));
    expect(sort).toHaveAttribute('aria-sort', 'ascending');
    fireEvent.click(screen.getByText('ID'));
    expect(sort).toHaveAttribute('aria-sort', 'descending');
  });
  test('DataTableItem onClick behaves as expected', () => {
    const onClickMock = jest.fn();

    const Test = () => useDataTableSortManager('Caption...', data, columns, actions, onClickMock);

    renderWithTheme(React.createElement(Test, null));
    const cheddarCell = screen.getByText('Cheddar');
    expect(cheddarCell).toBeInTheDocument();
    fireEvent.click(cheddarCell);
    expect(onClickMock).toHaveBeenCalled();
  });
});
//# sourceMappingURL=useDataTableSortManager.spec.js.map