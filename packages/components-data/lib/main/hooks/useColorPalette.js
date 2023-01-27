"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColorPalette = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _find = _interopRequireDefault(require("lodash/find"));
var _swr = _interopRequireDefault(require("swr"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _utils = require("../utils");
var _useSDK = require("./useSDK");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var isDiscretePalette = function isDiscretePalette(palette) {
  return 'colors' in palette;
};
var isContinuousPalette = function isContinuousPalette(palette) {
  return 'stops' in palette;
};

var normalizePalette = function normalizePalette() {
  var palette = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (isDiscretePalette(palette)) {
    return palette;
  } else if (isContinuousPalette(palette)) {
    var _palette$stops;
    return {
      colors: (_palette$stops = palette.stops) === null || _palette$stops === void 0 ? void 0 : _palette$stops.map(function (stop, i) {
        return stop.color ? stop.color : _visualizationsAdapters.DEFAULT_SERIES_COLORS[i % _visualizationsAdapters.DEFAULT_SERIES_COLORS.length];
      })
    };
  } else {
    return {
      colors: _visualizationsAdapters.DEFAULT_SERIES_COLORS
    };
  }
};

var useColorPalette = function useColorPalette(colorApplication) {
  var _ref = colorApplication || {},
    collection_id = _ref.collection_id,
    palette_id = _ref.palette_id,
    custom = _ref.custom;
  var sdk = (0, _useSDK.useSDK)();

  var fetcher = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!collection_id) {
              _context.next = 4;
              break;
            }
            _context.next = 3;
            return sdk.color_collection(collection_id);
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
      return _ref2.apply(this, arguments);
    };
  }();
  var _useSWR = (0, _swr["default"])(collection_id, fetcher, {
      revalidateOnFocus: false
    }),
    data = _useSWR.data,
    isValidating = _useSWR.isValidating;
  var _ref3 = (data === null || data === void 0 ? void 0 : data.ok) === true ? data : {
      value: {}
    },
    _ref3$value = _ref3.value,
    _ref3$value$categoric = _ref3$value.categoricalPalettes,
    categoricalPalettes = _ref3$value$categoric === void 0 ? [] : _ref3$value$categoric,
    _ref3$value$diverging = _ref3$value.divergingPalettes,
    divergingPalettes = _ref3$value$diverging === void 0 ? [] : _ref3$value$diverging,
    _ref3$value$sequentia = _ref3$value.sequentialPalettes,
    sequentialPalettes = _ref3$value$sequentia === void 0 ? [] : _ref3$value$sequentia;
  var allPalettes = [].concat((0, _toConsumableArray2["default"])(categoricalPalettes), (0, _toConsumableArray2["default"])(divergingPalettes), (0, _toConsumableArray2["default"])(sequentialPalettes), [custom]);
  var paletteConfig = (0, _find["default"])(allPalettes, {
    id: palette_id !== null && palette_id !== void 0 ? palette_id : custom === null || custom === void 0 ? void 0 : custom.id
  });
  var colorPalette = normalizePalette(paletteConfig).colors;
  return _objectSpread({
    colorPalette: colorPalette,
    isOK: !(colorApplication && (0, _utils.isErrorResponse)(data)) || !!colorPalette,
    isPending: isValidating
  }, (0, _utils.getErrorResponse)(data));
};
exports.useColorPalette = useColorPalette;
//# sourceMappingURL=useColorPalette.js.map