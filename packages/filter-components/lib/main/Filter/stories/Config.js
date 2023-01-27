"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Config;
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _Filter = require("../Filter");

function Config() {
  return _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h3"
  }, "String"), _react["default"].createElement(_components.Space, {
    align: "start"
  }, _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "button_group"), _react["default"].createElement(_Filter.Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending,complete",
    config: {
      type: 'button_group'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  })), _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "button_toggles"), _react["default"].createElement(_Filter.Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending",
    config: {
      type: 'button_toggles'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  }))), _react["default"].createElement(_components.Space, null, _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "taglist"), _react["default"].createElement(_Filter.Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending,complete",
    config: {
      type: 'tag_list'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  })), _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "dropdown_menu"), _react["default"].createElement(_Filter.Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending",
    config: {
      type: 'dropdown_menu'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  }))), _react["default"].createElement(_components.Space, null, _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "checkboxes"), _react["default"].createElement(_Filter.Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending,complete",
    config: {
      type: 'checkboxes'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  })), _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "radio_buttons"), _react["default"].createElement(_Filter.Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending",
    config: {
      type: 'radio_buttons'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  }))), _react["default"].createElement(_components.Divider, null), _react["default"].createElement(_components.Heading, {
    as: "h3"
  }, "Date"), _react["default"].createElement(_components.Space, null, _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "relative_timeframes"), _react["default"].createElement(_Filter.Filter, {
    name: "Date",
    expressionType: "date",
    expression: "7 day",
    config: {
      type: 'relative_timeframes'
    }
  })), _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "day_picker"), _react["default"].createElement(_Filter.Filter, {
    name: "Date",
    expressionType: "date",
    expression: "2021/06/29",
    config: {
      type: 'day_picker'
    }
  }))), _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "day_range_picker"), _react["default"].createElement(_Filter.Filter, {
    name: "Date",
    expressionType: "date",
    expression: "2021/06/01 to 2021/06/30",
    config: {
      type: 'day_range_picker'
    }
  })), _react["default"].createElement(_components.Divider, null), _react["default"].createElement(_components.Heading, {
    as: "h3"
  }, "Number"), _react["default"].createElement(_components.Space, null, _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "slider"), _react["default"].createElement(_Filter.Filter, {
    name: "Age",
    expressionType: "number",
    expression: "55",
    config: {
      max: 120,
      min: 0,
      type: 'slider'
    }
  })), _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Heading, {
    as: "h5"
  }, "range_slider"), _react["default"].createElement(_Filter.Filter, {
    name: "Age",
    expressionType: "number",
    expression: "[0,45]",
    config: {
      max: 120,
      min: 0,
      type: 'range_slider'
    }
  }))));
}
//# sourceMappingURL=Config.js.map