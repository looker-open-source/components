import { stringComparator, doDataTableSort } from './sort_utils';
describe('DataTable Sort Utils', () => {
  test('Default string comparison', () => {
    const compared = [['Animal', 'Crossing'], ['MaRiO', 'mario'], ['Samus', 'Link'], ['', '%(#&@'], ['1234', '10000']].map(values => stringComparator(values[0], values[1]));
    expect(compared).toMatchInlineSnapshot(`
      Array [
        -1,
        0,
        1,
        -1,
        1,
      ]
    `);
  });
  const data = [{
    birthday: new Date('March 6, 1972'),
    id: 1,
    name: 'Shaq'
  }, {
    birthday: new Date('August 23, 1978'),
    id: 2,
    name: 'Kobe'
  }, {
    birthday: new Date('August 23, 1978'),
    id: 3,
    name: 'Andrew Rannells'
  }];
  const columns = [{
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
    id: 'birthday',
    title: 'Birthday',
    type: 'date'
  }];
  const testConditions = [['Sort ID Ascending', {
    id: 'id',
    sortDirection: 'asc'
  }], ['Sort ID Descending', {
    id: 'id',
    sortDirection: 'desc'
  }], ['Sort Name Ascending', {
    id: 'name',
    sortDirection: 'asc'
  }], ['Sort Name Ascending', {
    id: 'name',
    sortDirection: 'desc'
  }], ['Sort Date Ascending', {
    id: 'birthday',
    sortDirection: 'asc'
  }], ['Sort Date Descending', {
    id: 'birthday',
    sortDirection: 'desc'
  }]];
  test.each(testConditions)('%s', (_, {
    id,
    sortDirection
  }) => {
    expect(doDataTableSort(data, columns, id, sortDirection).data).toMatchSnapshot();
  });
});
//# sourceMappingURL=sort_utils.spec.js.map