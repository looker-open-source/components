"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQueryId = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = require("react");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _swr = _interopRequireDefault(require("swr"));
var _utils = require("../utils");
var _useSDK = require("./useSDK");
var _useDataState = require("./useDataState");
var _excluded = ["id"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useQueryId = function useQueryId() {
  var slugOrId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var sdk = (0, _useSDK.useSDK)();
  var _DataState$useContain = _useDataState.DataState.useContainer(),
    getIdFromSlug = _DataState$useContain.getIdFromSlug,
    setBySlug = _DataState$useContain.setBySlug,
    getById = _DataState$useContain.getById;

  var querySlug = slugOrId.toString();
  var queryId = getIdFromSlug(querySlug);
  var cachedQuery = (0, _react.useMemo)(function () {
    return getById(queryId, 'metadata') || {};
  }, [getById, queryId]);

  var fetcher = function () {
    var _ref = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(0, _visualizationsAdapters.isNumeric)(querySlug)) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", Promise.resolve({
              ok: true,
              value: {
                id: querySlug
              }
            }));
          case 4:
            if (!(querySlug && !queryId)) {
              _context.next = 8;
              break;
            }
            _context.next = 7;
            return sdk.query_for_slug(querySlug);
          case 7:
            return _context.abrupt("return", _context.sent);
          case 8:
            return _context.abrupt("return", undefined);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetcher() {
      return _ref.apply(this, arguments);
    };
  }();
  var _useSWR = (0, _swr["default"])("useQueryId-".concat(querySlug),
    fetcher, {
      revalidateOnFocus: false
    }),
    SWRData = _useSWR.data,
    isValidating = _useSWR.isValidating;

  (0, _react.useEffect)(function () {
    var _ref2 = SWRData !== null && SWRData !== void 0 && SWRData.ok ? SWRData.value : {},
      id = _ref2.id,
      SWRValue = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
    var draftQuery = _objectSpread(_objectSpread({}, cachedQuery), SWRValue);
    if (id && Number(id) !== queryId) {
      setBySlug(querySlug, Number(id), {
        metadata: draftQuery
      });
    }
  }, [SWRData, queryId, querySlug, setBySlug, cachedQuery]);
  return _objectSpread({
    isOK: !!queryId,
    isPending: isValidating,
    queryId: queryId
  }, (0, _utils.getErrorResponse)(SWRData));
};
exports.useQueryId = useQueryId;
//# sourceMappingURL=useQueryId.js.map