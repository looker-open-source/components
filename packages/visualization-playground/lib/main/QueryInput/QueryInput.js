"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryInput = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _components = require("@looker/components");
var _extensionSdkReact = require("@looker/extension-sdk-react");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../utils");
var _ShareLink = require("../ShareLink");
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var QueryInput = function QueryInput(_ref) {
  var onChange = _ref.onChange,
    dashboardId = _ref.dashboardId,
    queryId = _ref.queryId,
    fetchBy = _ref.fetchBy,
    setFetchBy = _ref.setFetchBy;
  var _useContext = (0, _react.useContext)(_extensionSdkReact.ExtensionContext),
    extensionSDK = _useContext.extensionSDK;
  var _useLocalStorage = (0, _utils.useLocalStorage)('visComponentInputType', fetchBy),
    _useLocalStorage2 = (0, _slicedToArray2["default"])(_useLocalStorage, 2),
    storedInputType = _useLocalStorage2[0],
    setStoredInputType = _useLocalStorage2[1];
  var _useLocalStorage3 = (0, _utils.useLocalStorage)('visComponentQueryIdentifier', queryId),
    _useLocalStorage4 = (0, _slicedToArray2["default"])(_useLocalStorage3, 2),
    storedQueryIdentifier = _useLocalStorage4[0],
    setStoredQueryIdentifier = _useLocalStorage4[1];
  var _useLocalStorage5 = (0, _utils.useLocalStorage)('visComponentDashboardId', dashboardId),
    _useLocalStorage6 = (0, _slicedToArray2["default"])(_useLocalStorage5, 2),
    storedDashboardId = _useLocalStorage6[0],
    setStoredDashboardId = _useLocalStorage6[1];
  var debouncedOnChange = (0, _react.useRef)((0, _debounce["default"])(function (nextType, nextValue) {
    onChange({
      type: nextType,
      value: nextValue
    });
  }, 500)).current;
  var handleInputTypeChange = function handleInputTypeChange(e) {
    var _ref2 = e.target,
      type = _ref2.value;
    setFetchBy(type);
    setStoredInputType(type);
    var inputValue = type === 'query' ? storedQueryIdentifier : storedDashboardId;
    onChange({
      type: type,
      value: inputValue
    });
  };
  var handleQueryIdChange = function handleQueryIdChange(e) {
    var _ref3 = e.target,
      value = _ref3.value;
    if (storedInputType) {
      debouncedOnChange(storedInputType, value);
    }
    setStoredQueryIdentifier(value);
  };
  var handleDashboardIdChange = function handleDashboardIdChange(e) {
    var _ref4 = e.target,
      value = _ref4.value;
    if (storedInputType) {
      debouncedOnChange(storedInputType, value);
    }
    setStoredDashboardId(Number(value));
  };

  (0, _react.useEffect)(function () {
    if (fetchBy) {
      setStoredInputType(fetchBy);
    }
    if (dashboardId) {
      setStoredDashboardId(dashboardId);
    }
    if (queryId) {
      setStoredQueryIdentifier(queryId);
    }
  }, [dashboardId, queryId, fetchBy, setStoredDashboardId, setStoredInputType, setStoredQueryIdentifier]);

  (0, _react.useEffect)(function () {
    var inputValue = storedInputType === 'query' ? storedQueryIdentifier : storedDashboardId;
    if (!fetchBy && storedInputType && inputValue) {
      setFetchBy(storedInputType);
      onChange({
        type: storedInputType,
        value: inputValue
      });
    }
  }, [storedInputType, storedQueryIdentifier, storedDashboardId, fetchBy, onChange, setFetchBy]);
  return _react["default"].createElement(_components.Grid, null, _react["default"].createElement("div", null, _react["default"].createElement(_components.FieldRadio, {
    name: "input-selector",
    label: "Query (Numeric ID or Slug)",
    onChange: handleInputTypeChange,
    value: "query",
    checked: storedInputType === 'query'
  }), _react["default"].createElement(_components.InputText, {
    name: "query",
    value: storedQueryIdentifier,
    disabled: storedInputType !== 'query',
    onChange: handleQueryIdChange,
    my: "xsmall",
    placeholder: "CmBbGK2\u2026"
  }), storedInputType === 'query' && _react["default"].createElement(_ShareLink.ShareLink, {
    slug: queryId
  })), _react["default"].createElement("div", null, _react["default"].createElement(_components.FieldRadio, {
    name: "input-selector",
    label: "Dashboard (Numeric ID)",
    onChange: handleInputTypeChange,
    value: "dashboard",
    checked: storedInputType === 'dashboard'
  }), _react["default"].createElement(_components.InputText, {
    name: "dashboard",
    disabled: storedInputType !== 'dashboard',
    my: "xsmall",
    value: storedDashboardId || '',
    onChange: handleDashboardIdChange,
    placeholder: "123"
  }), storedInputType === 'dashboard' && dashboardId ? _react["default"].createElement(_components.Space, {
    gap: "u1"
  }, _react["default"].createElement(_components.Link, {
    href: "#",
    onClick: function onClick() {
      extensionSDK.openBrowserWindow("/dashboards/".concat(dashboardId), '_blank');
    },
    fontSize: "small"
  }, "View Dashboard"), _react["default"].createElement(Middot, null), _react["default"].createElement(_ShareLink.ShareLink, {
    dashboard: Number(dashboardId)
  })) : null));
};
exports.QueryInput = QueryInput;
var Middot = _styledComponents["default"].div.withConfig({
  displayName: "QueryInput__Middot",
  componentId: "sc-18hmla6-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 2px;\n  height: 2px;\n  width: 2px;\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.text;
});
//# sourceMappingURL=QueryInput.js.map