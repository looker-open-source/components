"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQueryMetadata = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = require("react");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _swr = _interopRequireDefault(require("swr"));
var _utils = require("../utils");
var _useSDK = require("./useSDK");
var _useDataState = require("./useDataState");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useQueryMetadata = function useQueryMetadata(id) {
  var sdk = (0, _useSDK.useSDK)();
  var _DataState$useContain = _useDataState.DataState.useContainer(),
    getById = _DataState$useContain.getById,
    setById = _DataState$useContain.setById;

  var metadata = (0, _react.useMemo)(function () {
    return getById(id, 'metadata') || {};
  }, [id, getById]);

  var fetcher = function () {
    var _ref = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(id > 0 && ((0, _isEmpty["default"])(metadata.vis_config) || !metadata.model || !metadata.view))) {
              _context.next = 4;
              break;
            }
            _context.next = 3;
            return sdk.query(String(id));
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
  var _useSWR = (0, _swr["default"])("useQueryMetadata-".concat(id),
    fetcher, {
      revalidateOnFocus: false
    }),
    SWRData = _useSWR.data,
    isValidating = _useSWR.isValidating;

  (0, _react.useEffect)(function () {
    var SWRValue = (0, _utils.isSuccessResponse)(SWRData) ? SWRData.value : {};
    var draftConfig = SWRValue.vis_config,
      draftModel = SWRValue.model,
      draftView = SWRValue.view;
    if (id && (!(0, _isEmpty["default"])(draftConfig) && !(0, _isEqual["default"])(metadata.vis_config, draftConfig) || draftModel && draftModel !== metadata.model || draftView && draftView !== metadata.view)) {
      var draftQuery = _objectSpread(_objectSpread({}, metadata), SWRValue);
      setById(id, {
        metadata: draftQuery
      });
    }
  }, [id, SWRData, metadata, setById]);
  return _objectSpread({
    isOK: !!metadata,
    isPending: isValidating,
    metadata: metadata
  }, (0, _utils.getErrorResponse)(SWRData));
};
exports.useQueryMetadata = useQueryMetadata;
//# sourceMappingURL=useQueryMetadata.js.map