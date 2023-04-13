"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSlice = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");

var useSlice = function useSlice(slice) {
  var store = (0, _reactRedux.useStore)();
  (0, _react.useEffect)(function () {
    store.addReducer(slice.name, slice.reducer);
  }, [slice, store]);
};
exports.useSlice = useSlice;
//# sourceMappingURL=index.js.map