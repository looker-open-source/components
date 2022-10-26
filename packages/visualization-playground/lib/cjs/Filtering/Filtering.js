"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filtering = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _componentsData = require("@looker/components-data");

var _components = require("@looker/components");

var _ActiveFilters = require("../ActiveFilters");

var _excluded = ["client_id"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var createQueryRequest = function createQueryRequest(_ref, newFilters) {
  var client_id = _ref.client_id,
      query = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var result = _objectSpread(_objectSpread({}, query), {}, {
    filters: newFilters
  });

  return result;
};

var Filtering = function Filtering(_ref2) {
  var query = _ref2.query,
      dashboard = _ref2.dashboard,
      setQueryIdentifier = _ref2.setQueryIdentifier,
      setFetchBy = _ref2.setFetchBy;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      draftQueryMetadata = _useState2[0],
      setDraftQueryMetadata = _useState2[1];

  var _useQueryIdFromDashbo = (0, _componentsData.useQueryIdFromDashboard)(dashboard),
      dashboardQueryId = _useQueryIdFromDashbo.queryId;

  var _useQueryId = (0, _componentsData.useQueryId)(query || dashboardQueryId),
      queryId = _useQueryId.queryId;

  var _useQueryMetadata = (0, _componentsData.useQueryMetadata)(queryId),
      metadata = _useQueryMetadata.metadata,
      _useQueryMetadata$met = _useQueryMetadata.metadata.filters,
      currentFilters = _useQueryMetadata$met === void 0 ? {} : _useQueryMetadata$met;

  var _useState3 = (0, _react.useState)(currentFilters),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      draftFilters = _useState4[0],
      setDraftFilters = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isFieldsetOpen = _useState6[0],
      setIsFieldsetOpen = _useState6[1];

  var _useCreateQuery = (0, _componentsData.useCreateQuery)(draftQueryMetadata),
      draftQueryId = _useCreateQuery.queryId;

  var handleFilterSubmit = function handleFilterSubmit(e) {
    e.preventDefault();
    var newQuery = createQueryRequest(metadata, draftFilters);
    setDraftQueryMetadata(newQuery);
  };

  var draftFilterJSONString = JSON.stringify(draftFilters);
  var handleRemoveFilter = (0, _react.useCallback)(function (name) {
    var draftFiltersCopy = JSON.parse(draftFilterJSONString);
    delete draftFiltersCopy[name];
    setDraftFilters(draftFiltersCopy);
  }, [draftFilterJSONString]);
  var handleUpdateFilter = (0, _react.useCallback)(function (name, expression) {
    var draftFiltersCopy = JSON.parse(draftFilterJSONString);
    setDraftFilters(_objectSpread(_objectSpread({}, draftFiltersCopy), {}, (0, _defineProperty2["default"])({}, name, expression)));
  }, [draftFilterJSONString]);
  (0, _react.useEffect)(function () {
    if (draftQueryId && draftQueryId !== queryId) {
      setQueryIdentifier(draftQueryId);
      setFetchBy('query');
      setDraftQueryMetadata(undefined);
    }
  }, [draftQueryId, queryId, setFetchBy, setQueryIdentifier]);
  (0, _react.useEffect)(function () {
    setDraftFilters(metadata.filters);
    setIsFieldsetOpen(Object.keys(currentFilters || {}).length > 0);
  }, [currentFilters, metadata.filters]);

  if (!queryId) {
    return null;
  }

  return _react["default"].createElement("form", {
    onSubmit: handleFilterSubmit
  }, _react["default"].createElement(_components.Fieldset, {
    legend: "Filters",
    accordion: true,
    isOpen: isFieldsetOpen,
    toggleOpen: setIsFieldsetOpen
  }, _react["default"].createElement(_ActiveFilters.ActiveFilters, {
    onRemoveFilter: handleRemoveFilter,
    onUpdateFilter: handleUpdateFilter,
    queryId: queryId,
    filters: draftFilters
  }), _react["default"].createElement(_components.Button, {
    onClick: handleFilterSubmit
  }, "Run")));
};

exports.Filtering = Filtering;
//# sourceMappingURL=Filtering.js.map