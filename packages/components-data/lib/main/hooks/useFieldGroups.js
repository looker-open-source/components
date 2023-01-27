"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFieldGroups = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _useExplore2 = require("./useExplore");
var _excluded = ["explore"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var groupFields = function groupFields(fields) {
  if (!fields) return {};
  return fields.reduce(function (acc, dimension) {
    var view = dimension.view;
    if (!view) return acc;
    if (!acc[view]) {
      acc[view] = [];
    }
    acc[view].push(dimension);
    return acc;
  }, {});
};

var useFieldGroups = function useFieldGroups(id) {
  var _useExplore = (0, _useExplore2.useExplore)(id),
    explore = _useExplore.explore,
    rest = (0, _objectWithoutProperties2["default"])(_useExplore, _excluded);
  var _ref = explore || {},
    fields = _ref.fields;
  var fieldGroups = fields !== null && fields !== void 0 && fields.dimensions ? groupFields(fields === null || fields === void 0 ? void 0 : fields.dimensions) : {};
  return _objectSpread({
    fieldGroups: fieldGroups
  }, rest);
};
exports.useFieldGroups = useFieldGroups;
//# sourceMappingURL=useFieldGroups.js.map