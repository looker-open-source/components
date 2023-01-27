"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopoverFocusTrap;
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

var options = [{
  label: 'Apples',
  value: '1'
}, {
  label: 'Bananas',
  value: '2'
}, {
  label: 'Oranges',
  value: '3'
}, {
  label: 'Pineapples',
  value: '4'
}, {
  label: 'Kiwis',
  value: '5'
}, {
  label: 'Apples2',
  value: '12'
}, {
  label: 'Bananas2',
  value: '22'
}, {
  label: 'Oranges2',
  value: '32'
}, {
  label: 'Pineapples2',
  value: '42'
}, {
  label: 'Kiwis3',
  value: '52'
}, {
  label: 'Apples3',
  value: '13'
}, {
  label: 'Bananas3',
  value: '23'
}, {
  label: 'Oranges3',
  value: '33'
}, {
  label: 'Pineapples3',
  value: '43'
}, {
  label: 'Kiwis3',
  value: '53'
}, {
  label: 'Apples4',
  value: '14'
}, {
  label: 'Bananas4',
  value: '24'
}, {
  label: 'Oranges4',
  value: '34'
}, {
  label: 'Pineapples4',
  value: '44'
}, {
  label: 'Kiwis4',
  value: '54'
}, {
  label: 'Apples5',
  value: '15'
}, {
  label: 'Bananas5',
  value: '25'
}, {
  label: 'Oranges5',
  value: '35'
}, {
  label: 'Pineapples5',
  value: '45'
}, {
  label: 'Kiwis5',
  value: '55'
}];
function PopoverFocusTrap() {
  var _useToggle = (0, _components.useToggle)(false),
    value = _useToggle.value,
    toggle = _useToggle.toggle;
  function getButtonAlert(text) {
    return function () {
      return alert(text);
    };
  }
  return _react["default"].createElement(_components.SpaceVertical, {
    mt: "large"
  }, _react["default"].createElement(_components.Heading, null, "Focus Trap Test"), _react["default"].createElement(_components.FieldToggleSwitch, {
    on: value,
    onChange: function onChange() {
      return toggle();
    },
    label: "Cancel Click Outside"
  }), _react["default"].createElement(_components.Space, null, _react["default"].createElement(_.Popover, {
    cancelClickOutside: value,
    content: _react["default"].createElement(_.PopoverContent, {
      p: "u5",
      width: "360px"
    }, _react["default"].createElement(_components.Paragraph, null, "Does tabbing focus only loop through these 3 buttons & Select?"), _react["default"].createElement(_components.Paragraph, null, "Does clicking (or mousedown) each trigger an alert?"), _react["default"].createElement(_components.Button, {
      mr: "small",
      onClick: getButtonAlert('First')
    }, "First"), _react["default"].createElement(_components.Button, {
      mr: "small",
      onClick: getButtonAlert('Second')
    }, "Second"), _react["default"].createElement(_components.Button, {
      mt: "small",
      mb: "medium",
      onMouseDown: getButtonAlert('Third')
    }, "Third (mousedown)"), _react["default"].createElement(_components.FieldSelect, {
      label: "Default Value",
      width: 300,
      options: options,
      "aria-label": "Fruits",
      defaultValue: "1"
    }), _react["default"].createElement(_components.Paragraph, null, "Does it scroll here when the Select is closed?"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"))
  }, _react["default"].createElement(_components.Button, null, "Open Focus Trap Test Popover")), _react["default"].createElement(_components.ButtonOutline, {
    onClick: function onClick() {
      return alert("You clicked the button!");
    }
  }, "Click me with the popover open")), _react["default"].createElement(_components.Paragraph, null, "Does it scroll here when the Popover is closed?"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"), _react["default"].createElement(_components.Paragraph, null, "Long text"));
}
//# sourceMappingURL=PopoverFocusTrap.js.map