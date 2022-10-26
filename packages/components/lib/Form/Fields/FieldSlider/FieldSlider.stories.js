import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { FieldSlider } from './FieldSlider';
export default {
  argTypes,
  component: FieldSlider,
  title: 'FieldSlider'
};

const Template = args => React.createElement(FieldSlider, args);

export const Basic = Template.bind({});
Basic.args = {
  max: 5,
  min: 0
};
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const Steps = Template.bind({});
Steps.args = {
  label: 'Step',
  max: 1000,
  min: 100,
  step: 100
};
export const FloatingSteps = Template.bind({});
FloatingSteps.args = {
  label: 'Step',
  max: 3,
  min: 0,
  step: 0.5,
  value: 1.5
};

const handleEvent = cb => {
  return event => {
    const target = event.target;
    cb(parseInt(target.value, 10));
  };
};

export const Controlled = () => {
  const [value, setValue] = useState(8);
  const onChange = handleEvent(setValue);
  return React.createElement(FieldSlider, {
    label: "Controlled",
    description: "Min: 0, Max: 11",
    min: 0,
    max: 11,
    value: value,
    onChange: onChange,
    "aria-labelledby": "test-id"
  });
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldSlider.stories.js.map