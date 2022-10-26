import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["values"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Space } from '../../../Layout';
import { InputChips } from './InputChips';
const chipValues = ['Looker', 'Google'];

const Template = _ref => {
  let {
    values = []
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [controlledChips, setControlledChips] = useState(values);
  return React.createElement(InputChips, _extends({}, args, {
    values: controlledChips,
    onChange: setControlledChips
  }));
};

export const Basic = Template.bind({});
Basic.args = {};
export const Values = Template.bind({});
Values.args = {
  values: chipValues
};
export const Placeholder = Template.bind({});
Placeholder.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  placeholder: 'Enter more chips here'
});
export const Summary = Template.bind({});
Summary.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  summary: 'some more info here'
});
export const AutoResize = Template.bind({});
AutoResize.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  autoResize: true,
  height: 36,
  maxWidth: 250
});
export const DisabledWithValues = Template.bind({});
DisabledWithValues.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  disabled: true
});
export const DisabledWithOutValues = Template.bind({});
DisabledWithOutValues.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const HeightUndefined = Template.bind({});
HeightUndefined.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  height: undefined,
  values: [...chipValues, 'Alphabet'],
  width: 300
});
export const ReadOnly = Template.bind({});
ReadOnly.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  readOnly: true
});
ReadOnly.parameters = {
  storyshots: {
    disable: true
  }
};
export const FormatInputValuesFalse = () => {
  const [chips, setChips] = useState(['initial', 'values']);
  return React.createElement(Space, null, React.createElement(InputChips, {
    values: chips,
    onChange: setChips,
    formatInputValue: false,
    width: 400
  }), React.createElement("pre", {
    "data-testid": "pre"
  }, JSON.stringify(chips)));
};
FormatInputValuesFalse.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  argTypes,
  component: InputChips,
  title: 'InputChips'
};
//# sourceMappingURL=InputChips.stories.js.map