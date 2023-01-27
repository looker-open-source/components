"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceLines = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _partial = _interopRequireDefault(require("lodash/partial"));
var _isArray = _interopRequireDefault(require("lodash/isArray"));
var _Add = require("@styled-icons/material/Add");
var _Remove = require("@styled-icons/material/Remove");
var _excluded = ["onDelete"];

var ReferenceLines = function ReferenceLines(_ref) {
  var value = _ref.value;
  var addLine = function addLine() {
  };
  var removeLine = function removeLine(index) {
    var newValue = (0, _toConsumableArray2["default"])(value || []);
    newValue.splice(index, 1);
  };

  return _react["default"].createElement(_components.Dialog, {
    content: _react["default"].createElement(_components.DialogLayout, {
      header: "Reference Lines",
      footer: "Changes saved automatically."
    }, _react["default"].createElement(_components.SpaceVertical, null, (0, _isArray["default"])(value) && value.map(function (line, i) {
      return _react["default"].createElement(ReferenceLineForm, (0, _extends2["default"])({}, line, {
        arrayPos: i,
        key: i
        ,
        onDelete: (0, _partial["default"])(removeLine, i)
      }));
    }), _react["default"].createElement(_components.Button, {
      iconBefore: _react["default"].createElement(_Add.Add, null),
      onClick: addLine
    }, "Add New Reference Line")))
  }, _react["default"].createElement(_components.ButtonTransparent, null, "Edit Reference Lines (", (value === null || value === void 0 ? void 0 : value.length) || 0, ")"));
};
exports.ReferenceLines = ReferenceLines;
var ReferenceLineForm = function ReferenceLineForm(_ref2) {
  var onDelete = _ref2.onDelete,
    lineProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  var arrayPos = lineProps.arrayPos,
    color = lineProps.color,
    label_position = lineProps.label_position,
    line_value = lineProps.line_value,
    margin_bottom = lineProps.margin_bottom,
    margin_top = lineProps.margin_top,
    margin_value = lineProps.margin_value,
    range_end = lineProps.range_end,
    range_start = lineProps.range_start,
    reference_type = lineProps.reference_type;
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
  }))), ' ', _react["default"].createElement(_components.Fieldset, null, _react["default"].createElement(_components.Grid, {
    columns: 4
  }, _react["default"].createElement(_components.FieldSelect, {
    label: "Reference Type",
    value: reference_type
    ,
    options: [{
      value: 'line'
    }, {
      value: 'range'
    }, {
      value: 'margins'
    }]
  }), _react["default"].createElement(_components.FieldColor, {
    label: "Color",
    value: color
  }), _react["default"].createElement(_components.FieldSelect, {
    label: "Label Position",
    value: label_position
    ,
    options: [{
      value: 'left'
    }, {
      value: 'center'
    }, {
      value: 'right'
    }]
  }), _react["default"].createElement(_components.FieldSelect, {
    label: "Line Value",
    value: line_value
    ,
    options: [{
      value: 'mean'
    }, {
      value: 'median'
    }, {
      value: 'max'
    }, {
      value: 'min'
    }]
  }), reference_type === 'margins' && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_components.FieldSelect, {
    label: "Margin Bottom",
    value: margin_bottom
    ,
    options: [{
      value: 'deviation'
    }, {
      value: 'variance'
    }]
  }), _react["default"].createElement(_components.FieldSelect, {
    label: "Margin Top",
    value: margin_top
    ,
    options: [{
      value: 'deviation'
    }, {
      value: 'variance'
    }]
  }), _react["default"].createElement(_components.FieldSelect, {
    label: "Margin Value",
    value: margin_value
    ,
    options: [{
      value: 'mean'
    }, {
      value: 'median'
    }, {
      value: 'max'
    }, {
      value: 'min'
    }]
  })), reference_type === 'range' && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_components.FieldSelect, {
    label: "Range Start",
    value: range_start
    ,
    options: [{
      value: 'mean'
    }, {
      value: 'median'
    }, {
      value: 'max'
    }, {
      value: 'min'
    }]
  }), _react["default"].createElement(_components.FieldSelect, {
    label: "Range End",
    value: range_end
    ,
    options: [{
      value: 'mean'
    }, {
      value: 'median'
    }, {
      value: 'max'
    }, {
      value: 'min'
    }]
  }))))), _react["default"].createElement(_components.Divider, null));
};
//# sourceMappingURL=ReferenceLines.js.map