"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSagas = void 0;
var _useStore = require("../useStore");

var useSagas = function useSagas(sagas) {
  var store = (0, _useStore.useStore)();
  sagas.forEach(function (saga) {
    return store.addSaga(saga);
  });
};
exports.useSagas = useSagas;
//# sourceMappingURL=index.js.map