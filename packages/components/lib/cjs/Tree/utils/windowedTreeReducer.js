"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowedTreeReducer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var updateCount = function updateCount(state, id, isOpen) {
  var _state$treesWithIDs;

  var shownIDs = [];

  var map = _objectSpread(_objectSpread({}, state.map), {}, (0, _defineProperty2["default"])({}, id, _objectSpread(_objectSpread({}, state.map[id]), {}, {
    isOpen: isOpen
  })));

  var countTree = function countTree(tree) {
    shownIDs.push(tree.id);

    if (tree.items) {
      var treeIsOpen = map[tree.id].isOpen;

      if (treeIsOpen) {
        tree.items.forEach(countTree);
      }
    }
  };

  (_state$treesWithIDs = state.treesWithIDs) === null || _state$treesWithIDs === void 0 ? void 0 : _state$treesWithIDs.forEach(countTree);
  return _objectSpread(_objectSpread({}, state), {}, {
    map: map,
    shownIDs: shownIDs
  });
};

var windowedTreeReducer = function windowedTreeReducer(state, action) {
  switch (action.type) {
    case 'RESET':
      {
        var trees = action.payload;
        var map = {};
        var shownIDs = [];
        var id = 0;

        var processTree = function processTree(parentOpen) {
          return function (tree) {
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
                id: id,
                items: tree.items.map(processTree(parentOpen ? tree.isOpen : false))
              });
            }

            return {
              content: tree.content,
              id: id
            };
          };
        };

        var treesWithIDs = trees.map(processTree(true));
        return {
          map: map,
          shownIDs: shownIDs,
          treesWithIDs: treesWithIDs
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

exports.windowedTreeReducer = windowedTreeReducer;
//# sourceMappingURL=windowedTreeReducer.js.map