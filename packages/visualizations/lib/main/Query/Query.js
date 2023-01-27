"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Query = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _flow2 = _interopRequireDefault(require("lodash/flow"));
var _componentsData = require("@looker/components-data");
var _components = require("@looker/components");
var _utils = require("../utils");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _QueryError = require("../QueryError");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var QueryInternal = function QueryInternal(_ref) {
  var query = _ref.query,
    dashboard = _ref.dashboard,
    children = _ref.children,
    configProp = _ref.config,
    LoadingIndicator = _ref.LoadingIndicator;
  var _useTranslation = (0, _utils.useTranslation)('Query'),
    t = _useTranslation.t;
  if (dashboard && query) {
    console.warn(t('Query component received both dashboard and query props'));
  }
  var _useQueryIdFromDashbo = (0, _componentsData.useQueryIdFromDashboard)(dashboard),
    dashboardQueryId = _useQueryIdFromDashbo.queryId,
    isDashboardPending = _useQueryIdFromDashbo.isPending,
    isDashboardOK = _useQueryIdFromDashbo.isOK,
    dashboardError = _useQueryIdFromDashbo.error;
  var _useQueryId = (0, _componentsData.useQueryId)(query || dashboardQueryId),
    queryId = _useQueryId.queryId,
    isQueryIdPending = _useQueryId.isPending,
    isQueryIdOK = _useQueryId.isOK,
    queryIdError = _useQueryId.error;
  var _useVisConfig = (0, _componentsData.useVisConfig)(queryId, configProp),
    visConfig = _useVisConfig.visConfig,
    isVisConfigPending = _useVisConfig.isPending,
    isVisConfigOK = _useVisConfig.isOK,
    visConfigError = _useVisConfig.error;
  var _useQueryData = (0, _componentsData.useQueryData)(queryId, (0, _visualizationsAdapters.buildTrackingTag)(visConfig.type)),
    data = _useQueryData.data,
    fields = _useQueryData.fields,
    pivots = _useQueryData.pivots,
    totals = _useQueryData.totals,
    isQueryDataPending = _useQueryData.isPending,
    isQueryDataOK = _useQueryData.isOK,
    queryDataError = _useQueryData.error;

  var isLoading = [isDashboardPending, isQueryIdPending, isVisConfigPending, isQueryDataPending].some(Boolean);
  var isEveryResponseOk = [isDashboardOK, isQueryIdOK, isVisConfigOK, isQueryDataOK].every(function (responseOk) {
    return responseOk === true;
  });
  if (!query && !dashboard) {
    return null;
  }
  if (isLoading) {
    return _react["default"].createElement(_components.Space, {
      justify: "center",
      p: "small"
    }, LoadingIndicator ? _react["default"].createElement(LoadingIndicator, null) : _react["default"].createElement(_components.ProgressCircular, null));
  }
  if (!isEveryResponseOk) {
    return _react["default"].createElement(_QueryError.QueryError, {
      message: (visConfigError === null || visConfigError === void 0 ? void 0 : visConfigError.message) || (queryIdError === null || queryIdError === void 0 ? void 0 : queryIdError.message) || (dashboardError === null || dashboardError === void 0 ? void 0 : dashboardError.message) || (queryDataError === null || queryDataError === void 0 ? void 0 : queryDataError.message)
    });
  }
  var dataTransformations = [_visualizationsAdapters.sortByDateTime, _visualizationsAdapters.nullValueZero, _visualizationsAdapters.xAxisReversed];
  var _flow = (0, _flow2["default"])(dataTransformations)({
      data: data,
      config: visConfig,
      fields: fields
    }),
    transformedData = _flow.data;

  if (_react.Children.count(children) >= 1) {
    return _react["default"].createElement(_react["default"].Fragment, null, _react.Children.map(children, function (child) {
      return _react["default"].isValidElement(child) ? _react["default"].cloneElement(child, {
        config: visConfig,
        data: transformedData,
        fields: fields,
        pivots: pivots,
        loading: isLoading,
        ok: isEveryResponseOk,
        totals: totals
      }) : child;
    }));
  } else {
    console.warn(t('No children passed to Query component'));
    return null;
  }
};
var Query = function Query(props) {
  var theme = (0, _styledComponents.useTheme)();
  if (!theme) {
    return _react["default"].createElement(_components.ComponentsProvider, null, _react["default"].createElement(Query, props));
  }
  return _react["default"].createElement(_visualizationsAdapters.ErrorBoundary, null, _react["default"].createElement(QueryInternal, props));
};
exports.Query = Query;
//# sourceMappingURL=Query.js.map