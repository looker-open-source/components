"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigEditor = void 0;
var _react = _interopRequireDefault(require("react"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _componentsData = require("@looker/components-data");
var _Series = require("../Series");
var _axes = require("../axes");
var _components = require("@looker/components");
var _StyledCard = require("../StyledCard");

var ConfigEditor = function ConfigEditor(_ref) {
  var configOverrides = _ref.config,
    onConfigChange = _ref.onConfigChange,
    query = _ref.query,
    dashboard = _ref.dashboard;
  var _useQueryIdFromDashbo = (0, _componentsData.useQueryIdFromDashboard)(dashboard),
    dashboardQueryId = _useQueryIdFromDashbo.queryId;
  var _useQueryId = (0, _componentsData.useQueryId)(query || dashboardQueryId),
    queryId = _useQueryId.queryId;
  var _useVisConfig = (0, _componentsData.useVisConfig)(queryId, configOverrides),
    visConfig = _useVisConfig.visConfig;
  var _useQueryData = (0, _componentsData.useQueryData)(queryId),
    _useQueryData$fields = _useQueryData.fields,
    fields = _useQueryData$fields === void 0 ? _visualizationsAdapters.DEFAULT_EMPTY_FIELDS : _useQueryData$fields;
  return _react["default"].createElement(_StyledCard.StyledCard, null, _react["default"].createElement(_components.Heading, {
    as: "h4"
  }, "2. Customize"), _react["default"].createElement(_components.Tabs2, {
    distributed: true
  }, _react["default"].createElement(_components.Tab2, {
    id: "series",
    label: "Series",
    p: "0"
  }, _react["default"].createElement(_Series.Series, {
    config: visConfig,
    fields: fields,
    onConfigChange: onConfigChange
  })), _react["default"].createElement(_components.Tab2, {
    id: "axis",
    label: "Axis"
  }, _react["default"].createElement(_axes.XAxis, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), _react["default"].createElement(_axes.YAxis, {
    config: visConfig,
    onConfigChange: onConfigChange
  }))));
};
exports.ConfigEditor = ConfigEditor;
//# sourceMappingURL=ConfigEditor.js.map