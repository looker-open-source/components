"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrendLines = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@looker/components");

var _Checkbox = require("../Checkbox");

var _partial = _interopRequireDefault(require("lodash/partial"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _Add = require("@styled-icons/material/Add");

var _Remove = require("@styled-icons/material/Remove");

var _excluded = ["onDelete", "arrayPos"];

var TrendLines = function TrendLines(_ref) {
  var value = _ref.value;

  var addLine = function addLine() {};

  var removeLine = function removeLine(index) {
    var newValue = (0, _toConsumableArray2["default"])(value || []);
    newValue.splice(index, 1);
  };

  return _react["default"].createElement(_components.Dialog, {
    content: _react["default"].createElement(_components.DialogLayout, {
      header: "Trend Lines",
      footer: "Changes saved automatically."
    }, _react["default"].createElement(_components.SpaceVertical, null, (0, _isArray["default"])(value) && value.map(function (line, i) {
      return _react["default"].createElement(TrendLineForm, (0, _extends2["default"])({}, line, {
        arrayPos: i,
        key: i,
        onDelete: (0, _partial["default"])(removeLine, i)
      }));
    }), _react["default"].createElement(_components.Button, {
      iconBefore: _react["default"].createElement(_Add.Add, null),
      onClick: addLine
    }, "Add New Trend Line")))
  }, _react["default"].createElement(_components.ButtonTransparent, null, "Edit Trend Lines (", (value === null || value === void 0 ? void 0 : value.length) || 0, ")"));
};

exports.TrendLines = TrendLines;

var TrendLineForm = function TrendLineForm(_ref2) {
  var onDelete = _ref2.onDelete,
      arrayPos = _ref2.arrayPos,
      lineProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  var color = lineProps.color,
      label_position = lineProps.label_position,
      order = lineProps.order,
      period = lineProps.period,
      regression_type = lineProps.regression_type,
      series_index = lineProps.series_index,
      show_label = lineProps.show_label;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, _react["default"].createElement(_components.Flex, {
    mb: "small"
  }, _react["default"].createElement(_components.FlexItem, null, _react["default"].createElement(_components.Heading, {
    as: "h3",
    mr: "xsmall"
  }, "Line ", arrayPos + 1)), _react["default"].createElement(_components.FlexItem, null, _react["default"].createElement(_components.IconButton, {
    icon: _react["default"].createElement(_Remove.Remove, null),
    label: "Delete trend line",
    outline: true,
    onClick: onDelete
  }))), _react["default"].createElement(_components.Fieldset, null, _react["default"].createElement(_components.Grid, {
    columns: 4
  }, _react["default"].createElement(_components.FieldColor, {
    label: "Color",
    value: color
  }), _react["default"].createElement(_components.FieldSelect, {
    label: "Trend Type",
    value: regression_type,
    options: [{
      value: 'linear'
    }, {
      value: 'exponential'
    }, {
      value: 'logarithmic'
    }, {
      value: 'power'
    }, {
      value: 'polynomial'
    }, {
      value: 'average'
    }]
  }), regression_type === 'polynomial' && _react["default"].createElement(_components.FieldText, {
    label: "Order",
    value: order
  }), regression_type === 'average' && _react["default"].createElement(_components.FieldText, {
    label: "Period",
    value: period
  }), _react["default"].createElement(_components.FieldText, {
    label: "Series Index",
    value: series_index
  }), _react["default"].createElement(_Checkbox.Checkbox, {
    label: "Show Label",
    checked: show_label
  }), show_label === true && _react["default"].createElement(_components.FieldSelect, {
    label: "Label Position",
    value: label_position,
    options: [{
      value: 'left'
    }, {
      value: 'center'
    }, {
      value: 'right'
    }]
  })))), _react["default"].createElement(_components.Divider, null));
};
//# sourceMappingURL=TrendLines.js.map