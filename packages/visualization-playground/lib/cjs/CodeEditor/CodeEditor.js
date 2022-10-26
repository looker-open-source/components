"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeEditor = void 0;

var _react = _interopRequireDefault(require("react"));

var _componentsData = require("@looker/components-data");

var _components = require("@looker/components");

var _utils = require("../utils");

var _CodeBlock = require("../CodeBlock");

var CodeEditor = function CodeEditor(_ref) {
  var configOverrides = _ref.config,
      query = _ref.query,
      dashboard = _ref.dashboard;

  var _useQueryIdFromDashbo = (0, _componentsData.useQueryIdFromDashboard)(dashboard),
      dashboardQueryId = _useQueryIdFromDashbo.queryId;

  var _useQueryId = (0, _componentsData.useQueryId)(query || dashboardQueryId),
      queryId = _useQueryId.queryId;

  var _useVisConfig = (0, _componentsData.useVisConfig)(queryId, configOverrides),
      visConfig = _useVisConfig.visConfig;

  var visConfigSorted = (0, _utils.sortObjectByKeys)(visConfig);
  var visConfigToDisplay = JSON.stringify(visConfigSorted, null, 2);
  return _react["default"].createElement(_components.Box2, {
    mt: "large",
    height: "100%",
    width: "100%"
  }, _react["default"].createElement(_CodeBlock.CodeBlock, {
    code: visConfigToDisplay,
    language: "json"
  }));
};

exports.CodeEditor = CodeEditor;
//# sourceMappingURL=CodeEditor.js.map