"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allItemsSelected = void 0;

var allItemsSelected = function allItemsSelected() {
  var select = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    pageItems: [],
    selectedItems: []
  };
  var selectedItems = select.selectedItems,
      pageItems = select.pageItems;

  if (selectedItems.length > 0) {
    if (pageItems.every(function (id) {
      return selectedItems.includes(id);
    })) return true;else if (pageItems.some(function (id) {
      return selectedItems.includes(id);
    })) return 'mixed';
  }

  return false;
};

exports.allItemsSelected = allItemsSelected;
//# sourceMappingURL=allItemsSelected.js.map