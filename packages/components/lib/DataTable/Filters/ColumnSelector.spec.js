import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { columns } from '../../fixtures/DataTable/columns';
import { ColumnSelector } from './ColumnSelector';
describe('ColumnSelector', () => {
  test('render', () => {
    renderWithTheme(React.createElement(ColumnSelector, {
      columns: columns,
      columnsVisible: [],
      onColumnVisibilityChange: jest.fn()
    }));
    expect(screen.getByText('Select columns to display')).toBeInTheDocument();
  });
  test('open, select column, apply', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(ColumnSelector, {
      columns: columns,
      columnsVisible: [],
      onColumnVisibilityChange: onChange
    }));
    fireEvent.click(screen.getByText('Select columns to display'));
    expect(screen.getByText('Inventory')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Inventory'));
    fireEvent.click(screen.getByText('Apply'));
    expect(onChange).toBeCalledWith(['inventory']);
    fireEvent.click(document);
  });
  test('cancel', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(ColumnSelector, {
      columns: columns,
      columnsVisible: [],
      onColumnVisibilityChange: onChange
    }));
    fireEvent.click(screen.getByText('Select columns to display'));
    expect(screen.getByText('Inventory')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Inventory'));
    fireEvent.click(screen.getByText('Cancel'));
    expect(onChange).toBeCalledTimes(0);
    fireEvent.click(document);
  });
  test('Select All', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(ColumnSelector, {
      columns: columns,
      columnsVisible: [],
      onColumnVisibilityChange: onChange
    }));
    fireEvent.click(screen.getByText('Select columns to display'));
    fireEvent.click(screen.getByText('Select All'));
    fireEvent.click(screen.getByText('Apply'));
    expect(onChange).toBeCalledWith(['name', 'status', 'inventory', 'color', 'description', 'origin', 'calories', 'fat', 'protein', 'calcium']);
    fireEvent.click(document);
  });
  test('Select None', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(ColumnSelector, {
      columns: columns,
      columnsVisible: [],
      onColumnVisibilityChange: onChange
    }));
    fireEvent.click(screen.getByText('Select columns to display'));
    fireEvent.click(screen.getByText('Select All'));
    fireEvent.click(screen.getByText('Select None'));
    fireEvent.click(screen.getByText('Apply'));
    expect(onChange).toBeCalledWith([]);
    fireEvent.click(document);
  });
});
//# sourceMappingURL=ColumnSelector.spec.js.map