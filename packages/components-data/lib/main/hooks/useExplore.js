"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useExplore = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = require("react");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _swr = _interopRequireDefault(require("swr"));
var _utils = require("../utils");
var _ = require(".");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useExplore = function useExplore(id) {
  var sdk = (0, _.useSDK)();
  var _DataState$useContain = _.DataState.useContainer(),
    setModelExplore = _DataState$useContain.setModelExplore,
    getModelExplore = _DataState$useContain.getModelExplore;

  var _useQueryMetadata = (0, _.useQueryMetadata)(id),
    _useQueryMetadata$met = _useQueryMetadata.metadata,
    model = _useQueryMetadata$met.model,
    view = _useQueryMetadata$met.view;
  var explore = getModelExplore(model, view);

  var fetcher = function () {
    var _ref = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(id > 0 && model && view && (0, _isEmpty["default"])(explore))) {
              _context.next = 4;
              break;
            }
            _context.next = 3;
            return sdk.lookml_model_explore(model, view);
          case 3:
            return _context.abrupt("return", _context.sent);
          case 4:
            return _context.abrupt("return", undefined);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetcher() {
      return _ref.apply(this, arguments);
    };
  }();
  var _useSWR = (0, _swr["default"])("useExplore-".concat(model, "-").concat(view),
    fetcher, {
      revalidateOnFocus: false
    }),
    SWRData = _useSWR.data,
    isValidating = _useSWR.isValidating;

  (0, _react.useEffect)(function () {
    var draftExplore = (SWRData === null || SWRData === void 0 ? void 0 : SWRData.ok) && SWRData.value || {};
    if (id && model && view && !(0, _isEmpty["default"])(draftExplore) && !(0, _isEqual["default"])(draftExplore, explore)) {
      setModelExplore(model, view, draftExplore);
    }
  }, [id, SWRData, explore, model, setModelExplore, view]);
  return _objectSpread({
    explore: explore,
    isOK: !!explore,
    isPending: isValidating
  }, (0, _utils.getErrorResponse)(SWRData));
};
exports.useExplore = useExplore;
//# sourceMappingURL=useExplore.js.map