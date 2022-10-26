import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const getTreeWindowIntersection = (list, index, firstIDinWindow, lastIDinWindow) => {
  const tree = list[index];
  if (tree.id > lastIDinWindow) return 'after';
  const nextTree = list[index + 1];

  if (tree.id < firstIDinWindow) {
    if (nextTree && nextTree.id > firstIDinWindow) {
      return 'intersects';
    }
  } else if (tree.id <= lastIDinWindow) {
    return 'intersects';
  }

  return 'before';
};

export const getWindowedTreeNodeFilterer = (filteredList, firstIDinWindow, lastIDinWindow) => (node, index, list) => {
  const intersection = getTreeWindowIntersection(list, index, firstIDinWindow, lastIDinWindow);
  if (intersection === 'after') return false;

  if (intersection === 'intersects') {
    const treeItems = node.items;

    if (treeItems) {
      const filteredItems = [];
      treeItems.every(getWindowedTreeNodeFilterer(filteredItems, firstIDinWindow, lastIDinWindow));

      const treeWithFilteredItems = _objectSpread(_objectSpread({}, node), {}, {
        items: filteredItems
      });

      filteredList.push(treeWithFilteredItems);
    } else {
      filteredList.push(node);
    }
  }

  return true;
};
//# sourceMappingURL=getWindowedTreeNodeFilterer.js.map