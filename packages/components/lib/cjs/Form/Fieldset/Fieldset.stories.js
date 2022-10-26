"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Nesting = exports.LegendInlineFields = exports.Legend = exports.InlineLegend = exports.Inline = exports.FieldsHideLabel = exports.Basic = exports.AccordionAlt = exports.Accordion = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Button = require("../../Button");

var _Divider = require("../../Divider");

var _Link = require("../../Link");

var _Status = require("../../Status");

var _Tooltip = require("../../Tooltip");

var _Fields = require("../Fields");

var _Form = require("../Form");

var _Fieldset = require("./Fieldset");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Fieldset.Fieldset,
  title: 'Fieldset'
};
exports["default"] = _default;

var Fields = function Fields(_ref) {
  var inline = _ref.inline;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Fields.FieldText, {
    inline: inline,
    placeholder: "First name",
    required: true,
    label: "First name",
    description: "This is a description"
  }), _react["default"].createElement(_Fields.FieldText, {
    inline: inline,
    label: "Middle",
    placeholder: "Middle"
  }), _react["default"].createElement(_Fields.FieldText, {
    inline: inline,
    required: true,
    label: "Last name",
    placeholder: "Last name"
  }));
};

var Template = function Template(args) {
  return _react["default"].createElement(_Form.Form, {
    m: "xxlarge",
    maxWidth: "600px"
  }, _react["default"].createElement(_Fieldset.Fieldset, args, _react["default"].createElement(Fields, null)));
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Inline = Template.bind({});
exports.Inline = Inline;
Inline.args = {
  inline: true
};
var Legend = Template.bind({});
exports.Legend = Legend;
Legend.args = {
  legend: 'Standard Legend, Standard FieldText'
};
var InlineLegend = Template.bind({});
exports.InlineLegend = InlineLegend;
InlineLegend.args = {
  inline: true,
  legend: 'Inline w/ Legend'
};

var LegendInlineFields = function LegendInlineFields() {
  return _react["default"].createElement(_Fieldset.Fieldset, {
    legend: "Individual fields inline"
  }, _react["default"].createElement(Fields, {
    inline: true
  }));
};

exports.LegendInlineFields = LegendInlineFields;

var Accordion = function Accordion() {
  return _react["default"].createElement(_Fieldset.Fieldset, {
    legend: "This is the Legend",
    accordion: true,
    defaultOpen: true
  }, _react["default"].createElement(_Fields.FieldCheckbox, {
    name: "box1",
    label: "you can click here"
  }), _react["default"].createElement(_Fields.FieldCheckbox, {
    name: "box2",
    label: "here too"
  }), _react["default"].createElement(_Fields.FieldCheckbox, {
    name: "box3",
    label: "also here"
  }));
};

exports.Accordion = Accordion;

var AccordionAlt = function AccordionAlt() {
  var options = [{
    detail: _react["default"].createElement(_Tooltip.Tooltip, {
      content: "PNW > Wisconsin",
      placement: "right"
    }, _react["default"].createElement(_Status.Status, {
      size: "small",
      intent: "neutral"
    })),
    label: 'Cheddar',
    required: true,
    value: 'cheddar'
  }, {
    detail: _react["default"].createElement(_Tooltip.Tooltip, {
      placement: "right",
      content: _react["default"].createElement(_react["default"].Fragment, null, "Some helpful explanatory text. ", _react["default"].createElement(_Link.Link, null, "Learn more"))
    }, _react["default"].createElement(_Status.Status, {
      size: "small",
      intent: "neutral"
    })),
    disabled: true,
    label: 'Green',
    value: 'blue'
  }, {
    label: 'Swiss',
    tooltip: 'Has holes',
    value: 'swiss'
  }];
  var value = 'blue';
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Fieldset.Fieldset, {
    width: "26rem",
    legend: "Advanced Cheese Options",
    accordion: true,
    defaultOpen: true
  }, _react["default"].createElement(_Fields.FieldRadioGroup, {
    defaultValue: value,
    label: "Favorite",
    options: options
  }), _react["default"].createElement(_Fields.FieldRadioGroup, {
    defaultValue: value,
    label: "Worst",
    options: options
  }), _react["default"].createElement(_Fields.FieldCheckboxGroup, {
    defaultValue: [value],
    label: "Would Eat",
    options: options
  })), _react["default"].createElement(_Divider.Divider, {
    my: "xxlarge"
  }), _react["default"].createElement(_Fieldset.Fieldset, {
    legend: "Advanced Cheese Options",
    accordion: true,
    defaultOpen: true
  }, ' ', _react["default"].createElement(_Fields.FieldRadioGroup, {
    defaultValue: value,
    label: "Favorite",
    options: options,
    inline: true
  }), _react["default"].createElement(_Fields.FieldCheckboxGroup, {
    defaultValue: [value],
    label: "Edible",
    options: options,
    inline: true
  })));
};

exports.AccordionAlt = AccordionAlt;
AccordionAlt.parameters = {
  storyshots: {
    disable: true
  }
};

var Nesting = function Nesting() {
  return _react["default"].createElement(_Fieldset.Fieldset, {
    gap: "u10"
  }, _react["default"].createElement(_Button.Button, {
    fullWidth: true
  }, "Button A"), _react["default"].createElement(_Button.Button, {
    fullWidth: true
  }, "Button B"), _react["default"].createElement(_Button.Button, {
    fullWidth: true
  }, "Button C"), _react["default"].createElement(_Fieldset.Fieldset, {
    gap: "none"
  }, _react["default"].createElement(_Button.Button, {
    fullWidth: true
  }, "Button A"), _react["default"].createElement(_Button.Button, {
    fullWidth: true
  }, "Button B"), _react["default"].createElement(_Button.Button, {
    fullWidth: true
  }, "Button C"), _react["default"].createElement(_Fieldset.Fieldset, {
    gap: "u4"
  }, _react["default"].createElement(_Button.Button, {
    fullWidth: true
  }, "Button A"), _react["default"].createElement(_Button.Button, {
    fullWidth: true
  }, "Button B"), _react["default"].createElement(_Button.Button, {
    fullWidth: true
  }, "Button C"))));
};

exports.Nesting = Nesting;
Nesting.parameters = {
  storyshots: {
    disable: true
  }
};

var FieldsHideLabel = function FieldsHideLabel() {
  return _react["default"].createElement(_Fieldset.Fieldset, {
    fieldsHideLabel: true,
    legend: "This is the Legend 1"
  }, _react["default"].createElement(_Fields.FieldText, {
    label: "First Label"
  }), _react["default"].createElement(_Fields.FieldText, {
    label: "Second Label"
  }), _react["default"].createElement(_Fields.FieldText, {
    label: "Third Label",
    hideLabel: false
  }));
};

exports.FieldsHideLabel = FieldsHideLabel;
//# sourceMappingURL=Fieldset.stories.js.map