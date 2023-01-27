"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveFilters = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _componentsData = require("@looker/components-data");
var _filterComponents = require("@looker/filter-components");
var _components = require("@looker/components");
var _Close = require("@styled-icons/material/Close");
var _Add = require("@styled-icons/material/Add");
var _FilterEntry = require("../FilterEntry");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ActiveFilters = function ActiveFilters(_ref) {
  var filters = _ref.filters,
    queryId = _ref.queryId,
    onRemoveFilter = _ref.onRemoveFilter,
    onUpdateFilter = _ref.onUpdateFilter;
  var _useExplore = (0, _componentsData.useExplore)(queryId),
    explore = _useExplore.explore;
  var tree = explore ? (0, _filterComponents.createExploreViewsTree)(explore) : [];
  var _useState = (0, _react.useState)(Object.entries(filters || {})),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    filterEntries = _useState2[0],
    setFilterEntries = _useState2[1];
  var handleCreateFilter = function handleCreateFilter() {
    setFilterEntries([].concat((0, _toConsumableArray2["default"])(filterEntries), [['', '']]));
  };
  var handleDeleteFilter = function handleDeleteFilter(name, i) {
    var draftFilterEntries = (0, _toConsumableArray2["default"])(filterEntries);
    draftFilterEntries.splice(i, 1);
    setFilterEntries(draftFilterEntries);
    onRemoveFilter(name);
  };
  return _react["default"].createElement(_react["default"].Fragment, null, filterEntries.map(function (_ref2, i) {
    var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
      name = _ref3[0],
      value = _ref3[1];
    var filterField = (0, _filterComponents.findField)(name, explore);
    if (filterField || name === '') {
      return _react["default"].createElement(_components.Space, {
        key: "".concat(name).concat(i)
      }, _react["default"].createElement(_components.IconButton, {
        icon: _react["default"].createElement(_Close.Close, null),
        label: "Delete filter",
        outline: true,
        onClick: function onClick() {
          return handleDeleteFilter(name, i);
        }
      }), _react["default"].createElement(_FilterEntry.FilterEntry, {
        tree: tree,
        filterExpression: value,
        filterField: filterField,
        onUpdateFilter: onUpdateFilter
      }));
    }
    return null;
  }), _react["default"].createElement(_components.ButtonOutline, {
    iconBefore: _react["default"].createElement(_Add.Add, null),
    onClick: handleCreateFilter,
    type: "button"
  }, "Create Filter"));
};
exports.ActiveFilters = ActiveFilters;
//# sourceMappingURL=ActiveFilters.js.map