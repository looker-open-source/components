import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Select } from '../Select';
import { Space } from '../../../Layout';
import { Text } from '../../../Text';
import { InputColor } from './InputColor';

const Template = args => React.createElement(InputColor, args);

export default {
  argTypes,
  component: InputColor,
  title: 'InputColor'
};
export const Basic = Template.bind({});
Basic.args = {};
export const ColorChosen = Template.bind({});
ColorChosen.args = {
  defaultValue: 'purple'
};
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, ColorChosen.args), {}, {
  disabled: true
});
export const DisabledNoValue = Template.bind({});
DisabledNoValue.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const ReadOnly = Template.bind({});
ReadOnly.args = _objectSpread(_objectSpread({}, ColorChosen.args), {}, {
  readOnly: true
});
export const ControlledColor = () => {
  const [color, setColor] = useState('red');

  function handleChange(value) {
    setColor(value);
  }

  function handleColorChange(e) {
    setColor(e.currentTarget.value);
  }

  return React.createElement(Space, null, React.createElement(Select, {
    options: [{
      value: 'green'
    }, {
      value: 'purple'
    }, {
      value: 'red'
    }],
    value: color,
    onChange: handleChange,
    autoResize: true
  }), React.createElement(InputColor, {
    value: color,
    onChange: handleColorChange
  }), React.createElement(Text, null, color));
};
ControlledColor.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=InputColor.stories.js.map