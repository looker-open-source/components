"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStoreState = void 0;
var _reactRedux = require("react-redux");
var _useSaga = require("../useSaga");
var _useSlice = require("../useSlice");
var _get = _interopRequireDefault(require("lodash/get"));

var useStoreState = function useStoreState(slice, saga) {
  (0, _useSaga.useSaga)(saga);
  (0, _useSlice.useSlice)(slice);
  return (0, _reactRedux.useSelector)(function (state) {
    return (0, _get["default"])(state, slice.name, slice.getInitialState());
  });
};
exports.useStoreState = useStoreState;
//# sourceMappingURL=index.js.map