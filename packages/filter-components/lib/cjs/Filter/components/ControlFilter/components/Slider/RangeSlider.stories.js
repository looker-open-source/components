"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _RangeSlider = require("./RangeSlider");

var Template = function Template(args) {
  return _react["default"].createElement(_RangeSlider.RangeSlider, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  value: {
    min: 0,
    max: 33
  },
  options: {}
};
var _default = {
  title: 'Filters / Range Slider 👓',
  component: _RangeSlider.RangeSlider,
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
};
exports["default"] = _default;
//# sourceMappingURL=RangeSlider.stories.js.map