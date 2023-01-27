"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedEditor = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _FieldInfo = require("../FieldInfo");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _componentsData = require("@looker/components-data");
var _Legend = require("../Legend");
var _RenderNullValues = require("../RenderNullValues");
var _Tooltips = require("../Tooltips");
var _Positioning = require("../Positioning");
var _TruncateText = require("../TruncateText");
var _TruncateHeader = require("../TruncateHeader");
var _StyledCard = require("../StyledCard");
var _ShowTotals = require("../ShowTotals");
var _ShowRowTotals = require("../ShowRowTotals");

var EmbedEditor = function EmbedEditor(_ref) {
  var width = _ref.width,
    height = _ref.height,
    setWidth = _ref.setWidth,
    setHeight = _ref.setHeight,
    configOverrides = _ref.config,
    onConfigChange = _ref.onConfigChange,
    query = _ref.query,
    dashboard = _ref.dashboard;
  var handleWidthChange = function handleWidthChange(e) {
    var value = e.target.value;
    setWidth(value);
  };
  var handleHeightChange = function handleHeightChange(e) {
    var value = e.target.value;
    setHeight(value);
  };
  var _useQueryIdFromDashbo = (0, _componentsData.useQueryIdFromDashboard)(dashboard),
    dashboardQueryId = _useQueryIdFromDashbo.queryId;
  var _useQueryId = (0, _componentsData.useQueryId)(query || dashboardQueryId),
    queryId = _useQueryId.queryId;
  var _useVisConfig = (0, _componentsData.useVisConfig)(queryId, configOverrides),
    visConfig = _useVisConfig.visConfig;
  return _react["default"].createElement(_StyledCard.StyledCard, null, _react["default"].createElement(_components.Heading, {
    as: "h4"
  }, "1. Settings"), _react["default"].createElement(_components.FieldSelect, {
    name: "type",
    label: "Chart Type",
    onChange: function onChange(t) {
      onConfigChange({
        type: t
      });
    },
    value: visConfig.type,
    options: [].concat((0, _toConsumableArray2["default"])(Object.values(_visualizationsAdapters.SUPPORTED_CHART_TYPES).map(function (t) {
      return {
        value: t
      };
    })), [{
      value: 'radar',
      label: 'Custom Vis: Radar'
    }, {
      value: 'turtle_table',
      label: 'Custom Vis: Turtles'
    }])
  }), _react["default"].createElement(_components.Fieldset, {
    inline: true
  }, _react["default"].createElement(_components.FieldText, {
    label: "Width",
    value: width,
    onChange: handleWidthChange,
    detail: _react["default"].createElement(_FieldInfo.FieldInfo, {
      content: "'auto' spans available width. Otherwise accepts a number to set pixel value."
    })
  }), _react["default"].createElement(_components.FieldText, {
    label: "Height",
    value: height,
    onChange: handleHeightChange,
    detail: _react["default"].createElement(_FieldInfo.FieldInfo, {
      content: "'auto' falls back to default value hard-coded in the charts. Otherwise accepts a number to set pixel value."
    })
  })), _react["default"].createElement(_Legend.Legend, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), _react["default"].createElement(_components.Fieldset, {
    inline: true
  }, _react["default"].createElement(_components.Grid, null, _react["default"].createElement(_Tooltips.Tooltips, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), _react["default"].createElement(_RenderNullValues.RenderNullValues, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), _react["default"].createElement(_Positioning.Positioning, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), _react["default"].createElement(_TruncateText.TruncateText, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), _react["default"].createElement(_TruncateHeader.TruncateHeader, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), _react["default"].createElement(_ShowTotals.ShowTotals, {
    config: visConfig,
    onConfigChange: onConfigChange
  }), _react["default"].createElement(_ShowRowTotals.ShowRowTotals, {
    config: visConfig,
    onConfigChange: onConfigChange
  }))));
};
exports.EmbedEditor = EmbedEditor;
//# sourceMappingURL=EmbedEditor.js.map