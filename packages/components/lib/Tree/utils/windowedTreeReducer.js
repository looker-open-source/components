import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const updateCount = (state, id, isOpen) => {
  var _state$treesWithIDs;

  const shownIDs = [];

  const map = _objectSpread(_objectSpread({}, state.map), {}, {
    [id]: _objectSpread(_objectSpread({}, state.map[id]), {}, {
      isOpen
    })
  });

  const countTree = tree => {
    shownIDs.push(tree.id);

    if (tree.items) {
      const treeIsOpen = map[tree.id].isOpen;

      if (treeIsOpen) {
        tree.items.forEach(countTree);
      }
    }
  };

  (_state$treesWithIDs = state.treesWithIDs) === null || _state$treesWithIDs === void 0 ? void 0 : _state$treesWithIDs.forEach(countTree);
  return _objectSpread(_objectSpread({}, state), {}, {
    map,
    shownIDs
  });
};

export const windowedTreeReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      {
        const trees = action.payload;
        const map = {};
        const shownIDs = [];
        let id = 0;

        const processTree = parentOpen => tree => {
          id++;

          if (parentOpen) {
            shownIDs.push(id);
          }

          if (tree.items) {
            map[id] = {
              isOpen: tree.isOpen || false,
              length: tree.items.length
            };
            return _objectSpread(_objectSpread({}, tree), {}, {
              id,
              items: tree.items.map(processTree(parentOpen ? tree.isOpen : false))
            });
          }

          return {
            content: tree.content,
            id
          };
        };

        const treesWithIDs = trees.map(processTree(true));
        return {
          map,
          shownIDs,
          treesWithIDs
        };
      }

    case 'OPEN':
      {
        return updateCount(state, action.payload, true);
      }

    case 'CLOSE':
      {
        return updateCount(state, action.payload, false);
      }
  }
};
//# sourceMappingURL=windowedTreeReducer.js.map