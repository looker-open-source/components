import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["externalLabel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import partial from 'lodash/partial';
import React, { useState } from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../../Button';
import { Paragraph } from '../../../Text/Paragraph';
import { Space, SpaceVertical } from '../../../Layout/Space';
import { FieldTime } from './FieldTime';
export default {
  argTypes,
  component: FieldTime,
  title: 'Date / FieldTime'
};

const Template = _ref => {
  let {
    externalLabel = true
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel
      }
    }
  }, React.createElement(FieldTime, args));
};

export const Basic = Template.bind({});
Basic.args = {
  defaultValue: '14:34',
  format: '12h',
  label: 'Label'
};
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValue: '02:34',
  disabled: true
});
export const Required = Template.bind({});
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'this is the description is a very long one',
  detail: 'detail',
  validationMessage: {
    message: 'validation Message',
    type: 'error'
  }
});
export const FloatingLabel = Template.bind({});
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'this is the description is a very long one',
  detail: 'detail',
  externalLabel: false
});
export const MilitaryTime = Template.bind({});
MilitaryTime.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  format: '24h'
});
export const Controlled = () => {
  const [controlledTime, setControlledTime] = useState('12:00');
  return React.createElement(SpaceVertical, null, React.createElement(Paragraph, null, "Selected: ", controlledTime), React.createElement(Space, null, React.createElement(Button, {
    onClick: partial(setControlledTime, '14:00')
  }, "2:00pm"), React.createElement(Button, {
    onClick: partial(setControlledTime, '15:15')
  }, "3:15pm"), React.createElement(Button, {
    onClick: partial(setControlledTime, '16:32')
  }, "4:32pm")), React.createElement(FieldTime, {
    label: "Controlled",
    value: controlledTime,
    onChange: setControlledTime
  }));
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldTime.stories.js.map