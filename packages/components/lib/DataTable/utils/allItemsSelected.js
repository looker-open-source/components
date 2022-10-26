export const allItemsSelected = (select = {
  pageItems: [],
  selectedItems: []
}) => {
  const {
    selectedItems,
    pageItems
  } = select;

  if (selectedItems.length > 0) {
    if (pageItems.every(id => selectedItems.includes(id))) return true;else if (pageItems.some(id => selectedItems.includes(id))) return 'mixed';
  }

  return false;
};
//# sourceMappingURL=allItemsSelected.js.map