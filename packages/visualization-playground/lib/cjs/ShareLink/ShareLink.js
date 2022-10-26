"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareLink = void 0;

var _react = _interopRequireWildcard(require("react"));

var _componentsData = require("@looker/components-data");

var _components = require("@looker/components");

var _extensionSdkReact = require("@looker/extension-sdk-react");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ShareLink = function ShareLink(_ref) {
  var slug = _ref.slug,
      dashboard = _ref.dashboard;

  var _useContext = (0, _react.useContext)(_extensionSdkReact.ExtensionContext),
      extensionSDK = _useContext.extensionSDK;

  var _useQueryIdFromDashbo = (0, _componentsData.useQueryIdFromDashboard)(dashboard),
      dashboardQueryId = _useQueryIdFromDashbo.queryId;

  var _useQueryId = (0, _componentsData.useQueryId)(slug),
      queryId = _useQueryId.queryId;

  var _DataState$useContain = _componentsData.DataState.useContainer(),
      getById = _DataState$useContain.getById;

  var _ref2 = getById(dashboardQueryId || queryId, 'metadata') || {},
      _ref2$share_url = _ref2.share_url,
      share_url = _ref2$share_url === void 0 ? '' : _ref2$share_url;

  if (!extensionSDK) return null;

  var handleClick = function handleClick() {
    extensionSDK.openBrowserWindow(share_url || '', '_blank');
  };

  if (share_url) {
    return _react["default"].createElement(_components.Link, {
      href: "#",
      onClick: handleClick,
      fontSize: "small"
    }, "View query in Explore");
  } else {
    return null;
  }
};

exports.ShareLink = ShareLink;
//# sourceMappingURL=ShareLink.js.map