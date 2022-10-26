"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Indeterminate = exports.Determinate = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _ProgressCircular = require("./ProgressCircular");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_ProgressCircular.ProgressCircular, args);
};

var Indeterminate = Template.bind({});
exports.Indeterminate = Indeterminate;
Indeterminate.args = {
  size: 'large'
};
Indeterminate.argTypes = {
  progress: {
    table: {
      disable: true
    }
  }
};
Indeterminate.parameters = {
  storyshots: {
    disable: true
  }
};
var Determinate = Template.bind({});
exports.Determinate = Determinate;
Determinate.args = {
  size: 'large',
  progress: 0.5
};
var _default = {
  component: _ProgressCircular.ProgressCircular,
  title: 'ProgressCircular',
  argTypes: _objectSpread(_objectSpread({}, _storybook.defaultArgTypes), {}, {
    size: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium', 'large']
      }
    },
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1
      }
    }
  })
};
exports["default"] = _default;
//# sourceMappingURL=ProgressCircular.stories.js.map