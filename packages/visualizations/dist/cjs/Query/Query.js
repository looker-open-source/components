"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var _Query = function Query(props) {
  var theme = (0, _styledComponents.useTheme)();
  if (!theme) {
    return _react["default"].createElement(_components.ComponentsProvider, null, _react["default"].createElement(_Query, props));
  }
  return _react["default"].createElement(_visualizationsAdapters.ErrorBoundary, null, _react["default"].createElement(QueryInternal, props));
};
exports.Query = _Query;
//# sourceMappingURL=Query.js.map