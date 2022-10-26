import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { useDataTable } from './useDataTable';
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
  test('returns a DataTable', () => {
    const Test = () => useDataTable(data, columns, 'Cheeses example');

    renderWithTheme(React.createElement(Test, null));
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Gorgonzola')).toBeInTheDocument();
    expect(screen.getByText('Cheddar')).toBeInTheDocument();
    expect(screen.getByText('Blue')).toBeInTheDocument();
  });
});
//# sourceMappingURL=useDataTable.spec.js.map