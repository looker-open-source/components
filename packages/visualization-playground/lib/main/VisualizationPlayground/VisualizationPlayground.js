"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setQueryProps = exports.VisualizationPlayground = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _visualizations = require("@looker/visualizations");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _componentsData = require("@looker/components-data");
var _components = require("@looker/components");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Radar = require("../Radar");
var _TurtleTable = require("../TurtleTable");
var _utils = require("../utils");
var _EmbedEditor = require("../EmbedEditor");
var _ConfigEditor = require("../ConfigEditor");
var _QueryInput = require("../QueryInput");
var _Filtering = require("../Filtering");
var _CodeEditor = require("../CodeEditor");
var _CodeToggle = require("../CodeToggle");
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var setQueryProps = function setQueryProps(_ref) {
  var fetchBy = _ref.fetchBy,
    queryIdentifier = _ref.queryIdentifier,
    dashboardId = _ref.dashboardId,
    tabId = _ref.tabId;
  if (tabId === 'live') {
    return fetchBy === 'dashboard' ? {
      dashboard: dashboardId
    } : {
      query: queryIdentifier
    };
  } else {
    return {
      query: 'mock-query-slug'
    };
  }
};
exports.setQueryProps = setQueryProps;
var VisualizationPlayground = function VisualizationPlayground(_ref2) {
  var sdk = _ref2.sdk;
  var _useLocalStorage = (0, _utils.useLocalStorage)('sdkTabId', sdk ? 'live' : 'mock'),
    _useLocalStorage2 = (0, _slicedToArray2["default"])(_useLocalStorage, 2),
    storedTabId = _useLocalStorage2[0],
    setStoredTabId = _useLocalStorage2[1];
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    queryIdentifier = _useState2[0],
    setQueryIdentifier = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    dashboardId = _useState4[0],
    setDashboardId = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    fetchBy = _useState6[0],
    setFetchBy = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    configOverrides = _useState8[0],
    setConfigOverrides = _useState8[1];
  var _useState9 = (0, _react.useState)(),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    width = _useState10[0],
    setWidth = _useState10[1];
  var _useState11 = (0, _react.useState)(),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    height = _useState12[0],
    setHeight = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    codeToggled = _useState14[0],
    setCodeToggled = _useState14[1];
  var handleQueryInputChange = (0, _react.useCallback)(function (_ref3) {
    var type = _ref3.type,
      value = _ref3.value;
    setFetchBy(type);
    if (type === 'query') {
      setQueryIdentifier(value);
    } else if (type === 'dashboard') {
      setDashboardId((0, _visualizationsAdapters.isNumeric)(value) ? Number(value) : undefined);
    }
  }, []);
  (0, _react.useEffect)(function () {
    setConfigOverrides({});
  }, [storedTabId, fetchBy, dashboardId, queryIdentifier]);
  var _useTheme = (0, _styledComponents.useTheme)(),
    colors = _useTheme.colors;
  var queryProps = setQueryProps({
    fetchBy: fetchBy,
    queryIdentifier: queryIdentifier,
    dashboardId: dashboardId,
    tabId: storedTabId
  });
  return _react["default"].createElement(_componentsData.DataProvider, {
    sdk: storedTabId === 'live' && sdk ? sdk : _visualizationsAdapters.mockSDK
  }, _react["default"].createElement(_components.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      colors: {
        background: colors.ui5,
        key: '#609FF2',
        pageBackground: colors.ui5,
        text: colors.background
      }
    }
  }, _react["default"].createElement(PageLayout, {
    fixed: true,
    hasAside: true,
    p: "medium",
    borderRadius: "large"
  }, _react["default"].createElement(_visualizationsAdapters.ErrorBoundary, null, _react["default"].createElement(_components.Aside, {
    backgroundColor: "background",
    width: "25rem"
  }, _react["default"].createElement(_EmbedEditor.EmbedEditor, (0, _extends2["default"])({
    width: width,
    setWidth: setWidth,
    height: height,
    setHeight: setHeight,
    config: configOverrides,
    onConfigChange: setConfigOverrides
  }, queryProps)), _react["default"].createElement(_ConfigEditor.ConfigEditor, (0, _extends2["default"])({
    config: configOverrides,
    onConfigChange: setConfigOverrides
  }, queryProps)))), _react["default"].createElement(_components.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      colors: {
        background: colors.background,
        text: colors.text
      }
    }
  }, _react["default"].createElement(_components.Section, {
    main: true,
    px: "large",
    py: "medium",
    bg: "".concat(_components.theme.colors.background),
    borderRadius: "medium"
  }, _react["default"].createElement(_visualizationsAdapters.ErrorBoundary, null, _react["default"].createElement(_CodeToggle.CodeToggle, (0, _extends2["default"])({
    codeToggled: codeToggled,
    setCodeToggled: setCodeToggled,
    config: configOverrides
  }, queryProps)), codeToggled ? _react["default"].createElement(_CodeEditor.CodeEditor, (0, _extends2["default"])({
    config: configOverrides
  }, queryProps)) : _react["default"].createElement(_components.Tabs2, {
    tabId: storedTabId,
    onTabChange: setStoredTabId
  }, _react["default"].createElement(_components.Tab2, {
    id: "live",
    label: "Live SDK",
    disabled: typeof sdk === 'undefined'
  }, _react["default"].createElement(_visualizationsAdapters.ErrorBoundary, null, _react["default"].createElement(_components.Box, {
    my: "small"
  }, _react["default"].createElement(_QueryInput.QueryInput, (0, _extends2["default"])({
    onChange: handleQueryInputChange,
    dashboardId: dashboardId,
    queryId: queryIdentifier,
    fetchBy: fetchBy,
    setFetchBy: setFetchBy
  }, queryProps))), _react["default"].createElement(_Filtering.Filtering, (0, _extends2["default"])({
    setQueryIdentifier: setQueryIdentifier,
    setFetchBy: setFetchBy
  }, queryProps)), _react["default"].createElement(_components.Box, {
    my: "small"
  }, _react["default"].createElement(_visualizations.Query, (0, _extends2["default"])({
    config: configOverrides
  }, queryProps), _react["default"].createElement(_visualizations.Visualization, {
    width: (0, _visualizationsAdapters.isNumeric)(width) ? Number(width) : undefined,
    height: (0, _visualizationsAdapters.isNumeric)(height) ? Number(height) : undefined
    ,
    chartTypeMap: {
      radar: _Radar.Radar,
      turtle_table: _TurtleTable.TurtleTable
    }
  }))))), _react["default"].createElement(_components.Tab2, {
    id: "mock",
    label: "Mock Data"
  }, _react["default"].createElement(_visualizations.Query, {
    query: "mock-query-id",
    config: configOverrides
  }, _react["default"].createElement(_visualizations.Visualization, {
    width: (0, _visualizationsAdapters.isNumeric)(width) ? Number(width) : undefined,
    height: (0, _visualizationsAdapters.isNumeric)(height) ? Number(height) : undefined
    ,
    chartTypeMap: {
      radar: _Radar.Radar
    }
  }))))))))));
};
exports.VisualizationPlayground = VisualizationPlayground;
var PageLayout = (0, _styledComponents["default"])(_components.Page).withConfig({
  displayName: "VisualizationPlayground__PageLayout",
  componentId: "sc-sb6oox-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  gap: ", ";\n"])), _components.theme.space.medium);
//# sourceMappingURL=VisualizationPlayground.js.map