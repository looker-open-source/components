import { getNumericColumnIndices } from './dataTableFormatting';
describe('DataTable CSS Utils', () => {
  const columns = [{
    id: 'id',
    title: 'ID',
    type: 'number'
  }, {
    id: 'name',
    title: 'Name',
    type: 'string'
  }, {
    id: 'age',
    title: 'Age',
    type: 'number'
  }];
  test('getNumericColumnIndices', () => {
    expect(getNumericColumnIndices(columns, ['id', 'name', 'age'])).toEqual([1, 3]);
  });
});
//# sourceMappingURL=dataTableFormatting.spec.js.map