export const stringComparator = (stringA, stringB) => {
  const upperCasedStringA = stringA.toUpperCase();
  const upperCasedStringB = stringB.toUpperCase();
  if (upperCasedStringA < upperCasedStringB) return -1;
  if (upperCasedStringA > upperCasedStringB) return 1;
  return 0;
};
export const dateComparator = (dateA, dateB) => {
  if (dateA < dateB) return -1;
  if (dateA > dateB) return 1;
  return 0;
};
export const doDataTableSort = (data, columns, id, sortDirection) => {
  const sortedData = [...data];
  const updatedColumns = [...columns];
  const targetColumn = updatedColumns.find(column => column.id === id);
  columns.forEach(column => delete column.sortDirection);

  if (targetColumn) {
    if (targetColumn.type === 'number') {
      if (sortDirection === 'desc') {
        sortedData.sort((a, b) => b[id] - a[id]);
      } else {
        sortedData.sort((a, b) => a[id] - b[id]);
      }
    } else if (targetColumn.type === 'date') {
      if (sortDirection === 'desc') {
        sortedData.sort((a, b) => dateComparator(b[id], a[id]));
      } else {
        sortedData.sort((a, b) => dateComparator(a[id], b[id]));
      }
    } else {
      if (sortDirection === 'desc') {
        sortedData.sort((a, b) => stringComparator(b[id], a[id]));
      } else {
        sortedData.sort((a, b) => stringComparator(a[id], b[id]));
      }
    }

    targetColumn.sortDirection = sortDirection;
  }

  return {
    columns: updatedColumns,
    data: sortedData
  };
};
//# sourceMappingURL=sort_utils.js.map