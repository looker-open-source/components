"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQueryData = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = require("react");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _swr = _interopRequireDefault(require("swr"));
var _utils = require("../utils");
var _useSDK = require("./useSDK");
var _useDataState = require("./useDataState");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useQueryData = function useQueryData(id, agentTag) {
  var sdk = (0, _useSDK.useSDK)();
  var _DataState$useContain = _useDataState.DataState.useContainer(),
    getById = _DataState$useContain.getById,
    setById = _DataState$useContain.setById;

  var data = getById(id, 'data');
  var fields = getById(id, 'fields');
  var pivots = getById(id, 'pivots');
  var totals = getById(id, 'totals');

  var fetcher = function () {
    var _ref = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(id > 0 && (0, _isEmpty["default"])(data))) {
              _context.next = 4;
              break;
            }
            _context.next = 3;
            return sdk.run_query({
              query_id: String(id),
              result_format: "json_detail"
            }, {
              agentTag: agentTag
            });
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
  var _useSWR = (0, _swr["default"])("useQueryData-".concat(id),
    fetcher, {
      revalidateOnFocus: false
    }),
    SWRData = _useSWR.data,
    isValidating = _useSWR.isValidating;

  (0, _react.useEffect)(function () {
    var _ref2 = SWRData !== null && SWRData !== void 0 && SWRData.ok ? SWRData.value : {},
      rawData = _ref2.data,
      rawFields = _ref2.fields,
      rawPivots = _ref2.pivots,
      rawTotals = _ref2.totals_data;
    if (id && !(0, _isEmpty["default"])(rawData) && !(0, _isEqual["default"])(rawData, data)) {
      setById(id, _objectSpread(_objectSpread(_objectSpread({
        data: rawData
      }, rawFields ? {
        fields: rawFields
      } : {}), rawPivots ? {
        pivots: rawPivots
      } : {}), rawTotals ? {
        totals: rawTotals
      } : {}));
    }
  }, [id, SWRData, setById, data]);

  var normalizedPivots = (0, _visualizationsAdapters.useNormalizedPivotLabels)(pivots);
  var normalizedFields = normalizedPivots && fields ? (0, _visualizationsAdapters.buildPivotFields)({
    fields: fields,
    pivots: normalizedPivots
  }) : fields;
  var normalizedData = pivots && data && fields ? (0, _visualizationsAdapters.tabularPivotResponse)({
    data: data,
    fields: fields,
    pivots: pivots
  }) : (0, _visualizationsAdapters.tabularResponse)(data || []);
  var normalizedTotals = totals ? (0, _visualizationsAdapters.formatTotals)(totals) : undefined;
  return _objectSpread({
    data: normalizedData,
    fields: normalizedFields,
    isOK: !!data,
    isPending: isValidating,
    pivots: pivots,
    totals: normalizedTotals
  }, (0, _utils.getErrorResponse)(SWRData));
};
exports.useQueryData = useQueryData;
//# sourceMappingURL=useQueryData.js.map