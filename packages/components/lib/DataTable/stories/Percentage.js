import { useDataTable } from '../utils/useDataTable';
import { data } from '../../fixtures/DataTable/data';
export const Percentage = () => {
  const columns = [{
    id: 'id',
    size: 10,
    title: 'ID'
  }, {
    id: 'name',
    size: 50,
    title: 'Name'
  }, {
    id: 'status',
    size: 20,
    title: 'Status'
  }, {
    id: 'inventory',
    size: 20,
    title: 'Inventory',
    type: 'number'
  }];
  return useDataTable(data, columns, 'Cheese inventory');
};
Percentage.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Percentage.js.map