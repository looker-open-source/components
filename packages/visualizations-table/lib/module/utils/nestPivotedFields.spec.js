

import { nestPivotedFields } from '.';
it('Nests pivots inside columns arrays', () => {
  const result = nestPivotedFields({
    pivotList: [{
      name: 'orders.status',
      label: 'Order Status'
    }, {
      name: 'users.gender',
      label: 'User Gender'
    }],
    nestedPivots: [{
      id: 'orders.count',
      header: 'Order Count'
    }, {
      id: 'users.count',
      header: 'Users Count'
    }],
    pivotIndex: 0
  });
  expect(result).toEqual({
    id: 'users.gender',
    header: 'User Gender',
    columns: [{
      id: 'orders.status',
      header: 'Order Status',
      columns: [{
        id: 'orders.count',
        header: 'Order Count'
      }, {
        id: 'users.count',
        header: 'Users Count'
      }]
    }]
  });
});
it('Nests column array inside a column array when pivotList array is empty', () => {
  const result = nestPivotedFields({
    pivotList: [],
    nestedPivots: [{
      id: 'column1',
      header: 'Column One'
    }],
    pivotIndex: 0
  });
  expect(result).toEqual({
    columns: [{
      header: 'Column One',
      id: 'column1'
    }],
    id: 'pivot-field-0'
  });
});
//# sourceMappingURL=nestPivotedFields.spec.js.map