"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@testing-library/react");
var _AppContext = require("../AppContext");
var _useLocalStorage5 = require("./useLocalStorage");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var mockLocalStorage = {
  'TEST-DATA-STORE': 'true'
};
var localStorageGetItem = jest.fn().mockImplementation(function (key) {
  return Promise.resolve(mockLocalStorage[key]);
});
var localStorageSetItem = jest.fn().mockImplementation(function (key, val) {
  mockLocalStorage[key] = val;
});
afterEach(function () {
  jest.fn();
});
var MockContextWrapper = function MockContextWrapper(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_AppContext.AppContext.Provider, {
    value: {
      localStorageGetItem: localStorageGetItem,
      localStorageSetItem: localStorageSetItem
    }
  }, children);
};
describe('useLocalStorage', function () {
  it('writes to localstorage', function () {
    var valStateListener = jest.fn();
    var localStorageListener = jest.fn();
    var TestComponent = function TestComponent(_ref2) {
      var value = _ref2.value;
      var _useLocalStorage = (0, _useLocalStorage5.useLocalStorage)('VALUE-PROP', value),
        _useLocalStorage2 = (0, _slicedToArray2["default"])(_useLocalStorage, 2),
        valState = _useLocalStorage2[0],
        setValState = _useLocalStorage2[1];
      valStateListener(valState);
      localStorageListener(mockLocalStorage);
      (0, _react.useEffect)(function () {
        setValState(value);
      }, [value, setValState]);
      return null;
    };

    var _render = (0, _react2.render)(_react["default"].createElement(MockContextWrapper, null, _react["default"].createElement(TestComponent, {
        value: "hello world"
      }))),
      rerender = _render.rerender;
    expect(valStateListener).toHaveBeenLastCalledWith('hello world');
    expect(localStorageListener).toHaveBeenLastCalledWith(expect.objectContaining({
      'VALUE-PROP': '"hello world"'
    }));

    rerender(_react["default"].createElement(MockContextWrapper, null, _react["default"].createElement(TestComponent, {
      value: "goodbye world"
    })));
    expect(valStateListener).toHaveBeenLastCalledWith('goodbye world');
    expect(localStorageListener).toHaveBeenLastCalledWith(expect.objectContaining({
      'VALUE-PROP': '"goodbye world"'
    }));
  });

  it('reads from localstorage', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var valStateListener, TestComponent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          valStateListener = jest.fn();
          TestComponent = function TestComponent() {
            var _useLocalStorage3 = (0, _useLocalStorage5.useLocalStorage)('TEST-DATA-STORE'),
              _useLocalStorage4 = (0, _slicedToArray2["default"])(_useLocalStorage3, 1),
              valState = _useLocalStorage4[0];
            valStateListener(valState);
            return null;
          };
          (0, _react2.render)(_react["default"].createElement(MockContextWrapper, null, _react["default"].createElement(TestComponent, null)));
          _context.next = 5;
          return (0, _react2.waitFor)(function () {
            expect(valStateListener).toHaveBeenLastCalledWith(true);
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
});
//# sourceMappingURL=useLocalStorage.spec.js.map