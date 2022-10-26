"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterEntry = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _componentsData = require("@looker/components-data");

var _components = require("@looker/components");

var _filterComponents = require("@looker/filter-components");

var _FieldSelector = require("../FieldSelector");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getSelectFilterLabel = function getSelectFilterLabel(field) {
  if (field !== null && field !== void 0 && field.name) {
    return field.name.replace('.', ' > ').replace(/_/g, ' ');
  }

  return 'Select a field';
};

var FilterEntry = function FilterEntry(_ref) {
  var onUpdateFilter = _ref.onUpdateFilter,
      queryId = _ref.queryId,
      filterFieldProp = _ref.filterField,
      _ref$filterExpression = _ref.filterExpression,
      filterExpressionProp = _ref$filterExpression === void 0 ? '' : _ref$filterExpression;
  var sdk = (0, _componentsData.useSDK)();

  var _useState = (0, _react.useState)(filterFieldProp),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      filterField = _useState2[0],
      setFilterField = _useState2[1];

  var _useState3 = (0, _react.useState)(filterExpressionProp),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      filterExpression = _useState4[0],
      setFilterExpression = _useState4[1];

  var _useFieldGroups = (0, _componentsData.useFieldGroups)(queryId),
      fieldGroups = _useFieldGroups.fieldGroups;

  var handleFilterChange = function handleFilterChange(_ref2) {
    var expression = _ref2.expression;

    if (setFilterExpression) {
      setFilterExpression(expression);
    }
  };

  (0, _react.useEffect)(function () {
    if (filterField !== null && filterField !== void 0 && filterField.name) {
      onUpdateFilter(filterField === null || filterField === void 0 ? void 0 : filterField.name, filterExpression);
    }
  }, [filterField, filterExpression, onUpdateFilter]);

  var _useSuggestable = (0, _filterComponents.useSuggestable)({
    filter: {
      field: filterField
    },
    sdk: sdk
  }),
      suggestableProps = _useSuggestable.suggestableProps;

  return _react["default"].createElement(_components.Space, {
    align: "start"
  }, _react["default"].createElement(_components.Popover, {
    placement: "bottom-start",
    content: _react["default"].createElement(_FieldSelector.FieldSelector, {
      groups: fieldGroups,
      current: filterField,
      onChange: setFilterField
    })
  }, _react["default"].createElement(_components.ButtonOutline, {
    color: "neutral"
  }, getSelectFilterLabel(filterField))), (filterField === null || filterField === void 0 ? void 0 : filterField.name) && _react["default"].createElement(_filterComponents.Filter, (0, _extends2["default"])({
    name: filterField === null || filterField === void 0 ? void 0 : filterField.name,
    expressionType: (0, _filterComponents.getExpressionTypeFromField)(filterField),
    expression: filterExpression,
    onChange: handleFilterChange
  }, suggestableProps)));
};

exports.FilterEntry = FilterEntry;
//# sourceMappingURL=FilterEntry.js.map