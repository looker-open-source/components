"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSaga = void 0;
var _useStore = require("../useStore");

var useSaga = function useSaga(saga) {
  var store = (0, _useStore.useStore)();
  if (saga) {
    store.addSaga(saga);
  }
};
exports.useSaga = useSaga;
//# sourceMappingURL=index.js.map