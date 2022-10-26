import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["externalLabel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ButtonToggle } from '../../../Button';
import { Fieldset } from '../../Fieldset';
import { FieldTimeSelect } from './';
export default {
  argTypes,
  component: FieldTimeSelect,
  title: 'Date / FieldTimeSelect'
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
  }, React.createElement(FieldTimeSelect, args));
};

export const Basic = Template.bind({});
Basic.args = {
  defaultValue: '14:30',
  interval: 10,
  label: 'Select Time'
};
export const FloatingLabel = Template.bind({});
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  externalLabel: false
});
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  interval: 10,
  label: 'Select Time'
};
export const Required = Template.bind({});
Required.args = {
  interval: 10,
  label: 'Select Time',
  required: true
};
export const Error = Template.bind({});
Error.args = {
  description: 'this is the description is a very long one',
  detail: 'detail',
  interval: 10,
  label: 'Select Time',
  required: true,
  validationMessage: {
    message: 'validation Message',
    type: 'error'
  }
};
export const ErrorFloatingLabel = Template.bind({});
ErrorFloatingLabel.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  externalLabel: false
});
export const Controlled = () => {
  const [controlledTime, setControlledTime] = useState('09:00');

  const handleClick = value => setControlledTime(value);

  const options = [{
    label: '11:05a',
    value: '11:05'
  }, {
    label: '2:00pm',
    value: '14:00'
  }, {
    label: '3:15pm',
    value: '15:15'
  }, {
    label: '4:30pm',
    value: '16:30'
  }];
  return React.createElement(React.Fragment, null, React.createElement(ButtonToggle, {
    value: controlledTime,
    onChange: handleClick,
    options: options
  }), React.createElement(Fieldset, {
    inline: true
  }, React.createElement(FieldTimeSelect, {
    label: "Standard Time",
    value: controlledTime,
    onChange: setControlledTime,
    autoFocus: true
  }), React.createElement(FieldTimeSelect, {
    label: "Military Time",
    value: controlledTime,
    onChange: setControlledTime,
    format: "24h"
  })));
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldTimeSelect.stories.js.map