"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalStorage = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _AppContext = require("../AppContext");

var useLocalStorage = function useLocalStorage(key, value) {
  var _useContext = (0, _react.useContext)(_AppContext.AppContext),
      localStorageSetItem = _useContext.localStorageSetItem,
      localStorageGetItem = _useContext.localStorageGetItem;

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      stateValue = _useState2[0],
      setStateValue = _useState2[1];

  (0, _react.useEffect)(function () {
    var getValue = function () {
      var _ref = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
        var localStorageValue;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!localStorageGetItem) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return localStorageGetItem(key);

              case 4:
                localStorageValue = _context.sent;

                if (localStorageValue) {
                  setStateValue(JSON.parse(localStorageValue));
                }

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function getValue() {
        return _ref.apply(this, arguments);
      };
    }();

    getValue();
  }, [key, localStorageGetItem]);
  var setValue = (0, _react.useCallback)(function (newValue) {
    if (localStorageSetItem) {
      localStorageSetItem(key, JSON.stringify(newValue));
    }

    setStateValue(newValue);
  }, [key, localStorageSetItem]);
  return [stateValue, setValue];
};

exports.useLocalStorage = useLocalStorage;
//# sourceMappingURL=useLocalStorage.js.map