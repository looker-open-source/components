"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQueryIdFromDashboard = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = require("react");
var _swr = _interopRequireDefault(require("swr"));
var _utils = require("../utils");
var _useDataState = require("./useDataState");
var _useSDK = require("./useSDK");
var _excluded = ["id"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useQueryIdFromDashboard = function useQueryIdFromDashboard(dashboardId) {
  var sdk = (0, _useSDK.useSDK)();
  var _DataState$useContain = _useDataState.DataState.useContainer(),
    getIdFromDashboard = _DataState$useContain.getIdFromDashboard,
    setByDashboardId = _DataState$useContain.setByDashboardId;

  var queryId = getIdFromDashboard(dashboardId);

  var fetcher = function () {
    var _ref = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(dashboardId && !queryId)) {
              _context.next = 4;
              break;
            }
            _context.next = 3;
            return sdk.dashboard(String(dashboardId), 'dashboard_elements');
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
  var _useSWR = (0, _swr["default"])("useQueryIdFromDashboard-".concat(dashboardId),
    fetcher, {
      revalidateOnFocus: false
    }),
    SWRData = _useSWR.data,
    isValidating = _useSWR.isValidating;

  (0, _react.useEffect)(function () {
    var _SWRData$value, _SWRData$value$dashbo, _SWRData$value$dashbo2;
    var firstTile = SWRData !== null && SWRData !== void 0 && SWRData.ok ? SWRData === null || SWRData === void 0 ? void 0 : (_SWRData$value = SWRData.value) === null || _SWRData$value === void 0 ? void 0 : (_SWRData$value$dashbo = _SWRData$value.dashboard_elements) === null || _SWRData$value$dashbo === void 0 ? void 0 : (_SWRData$value$dashbo2 = _SWRData$value$dashbo[0]) === null || _SWRData$value$dashbo2 === void 0 ? void 0 : _SWRData$value$dashbo2.query : undefined;
    var _ref2 = firstTile || {},
      id = _ref2.id,
      query = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
    if (dashboardId && id && Number(id) !== queryId) {
      setByDashboardId(dashboardId, Number(id), {
        metadata: query
      });
    }
  }, [SWRData, dashboardId, setByDashboardId, queryId]);
  return _objectSpread({
    isOK: !!queryId || typeof dashboardId === 'undefined',
    isPending: isValidating,
    queryId: queryId
  }, (0, _utils.getErrorResponse)(SWRData));
};
exports.useQueryIdFromDashboard = useQueryIdFromDashboard;
//# sourceMappingURL=useQueryIdFromDashboard.js.map