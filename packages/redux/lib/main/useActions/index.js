"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useActions = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");

var dispatchMap = new WeakMap();

var useActions = function useActions(slice) {
  var dispatch = (0, _reactRedux.useDispatch)();

  if (!dispatchMap.has(dispatch)) {
    dispatchMap.set(dispatch, new WeakMap());
  }
  var boundActionCreatorsMap = dispatchMap.get(dispatch);
  if (!boundActionCreatorsMap.has(slice)) {
    boundActionCreatorsMap.set(slice, (0, _redux.bindActionCreators)(slice.actions, dispatch));
  }
  return boundActionCreatorsMap.get(slice);
};
exports.useActions = useActions;
//# sourceMappingURL=index.js.map