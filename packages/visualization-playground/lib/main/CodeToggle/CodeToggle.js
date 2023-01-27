"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeToggle = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _componentsData = require("@looker/components-data");
var _components = require("@looker/components");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../utils");
var _Code = require("@styled-icons/material/Code");
var _templateObject;
var CodeToggle = function CodeToggle(_ref) {
  var configOverrides = _ref.config,
    query = _ref.query,
    dashboard = _ref.dashboard,
    codeToggled = _ref.codeToggled,
    setCodeToggled = _ref.setCodeToggled;
  var _useQueryIdFromDashbo = (0, _componentsData.useQueryIdFromDashboard)(dashboard),
    dashboardQueryId = _useQueryIdFromDashbo.queryId;
  var _useQueryId = (0, _componentsData.useQueryId)(query || dashboardQueryId),
    queryId = _useQueryId.queryId;
  var _useVisConfig = (0, _componentsData.useVisConfig)(queryId, configOverrides),
    visConfig = _useVisConfig.visConfig;
  var visConfigSorted = (0, _utils.sortObjectByKeys)(visConfig);
  var visConfigToDisplay = JSON.stringify(visConfigSorted, null, 2);
  return _react["default"].createElement(_components.Space, {
    reverse: true
  }, _react["default"].createElement(_components.IconButton, {
    icon: _react["default"].createElement(_Code.Code, null),
    label: "Show code",
    size: "large",
    toggle: codeToggled,
    toggleBackground: true,
    onClick: function onClick() {
      return setCodeToggled(!codeToggled);
    }
  }), codeToggled ? _react["default"].createElement(StyledCopyToClipboard, {
    content: visConfigToDisplay,
    success: "Copied to clipboard!"
  }) : '');
};
exports.CodeToggle = CodeToggle;
var StyledCopyToClipboard = (0, _styledComponents["default"])(_components.CopyToClipboard).withConfig({
  displayName: "CodeToggle__StyledCopyToClipboard",
  componentId: "sc-1ntpjxi-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline;\n"])));
//# sourceMappingURL=CodeToggle.js.map