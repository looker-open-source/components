import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["externalLabel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../../Button';
import { Space, SpaceVertical } from '../../../Layout';
import { FieldTextArea } from './FieldTextArea';
export default {
  argTypes,
  component: FieldTextArea,
  title: 'FieldTextArea'
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
  }, React.createElement(FieldTextArea, args));
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Text Area'
};
export const FloatingLabel = Template.bind({});
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  externalLabel: false
});
export const FloatingLabelValue = Template.bind({});
FloatingLabelValue.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValue: 'Default value',
  externalLabel: false
});
export const DefaultValue = Template.bind({});
DefaultValue.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValue: 'Default value'
});
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const DisabledValue = Template.bind({});
DisabledValue.args = _objectSpread(_objectSpread({}, DefaultValue.args), {}, {
  disabled: true
});
export const Required = Template.bind({});
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
export const Description = Template.bind({});
Description.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'This is a description'
});
export const Detail = Template.bind({});
Detail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: '0/50'
});
export const DetailDescription = Template.bind({});
DetailDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'This is a description',
  detail: '0/50'
});
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
export const ErrorDetail = Template.bind({});
ErrorDetail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: '0/50',
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
export const ErrorValueDetail = Template.bind({});
ErrorValueDetail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValue: 'This value is too long',
  detail: '50/50',
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
export const Inline = Template.bind({});
Inline.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  inline: true
});
export const NoResize = Template.bind({});
NoResize.args = {
  placeholder: 'no resize',
  resize: false
};
export const ExternalLabel = Template.bind({});
ExternalLabel.args = _objectSpread(_objectSpread({}, DetailDescription.args), {}, {
  externalLabel: true
});
const initialValue = 'Initial Value';
export const Controlled = () => {
  const [value, setValue] = useState(initialValue);

  const handleReset = () => setValue(initialValue);

  const handleClear = () => setValue('');

  const handleChange = e => {
    setValue(e.currentTarget.value);
  };

  return React.createElement(SpaceVertical, null, React.createElement(Space, null, React.createElement(Button, {
    onClick: handleReset
  }, "Reset"), React.createElement(Button, {
    onClick: handleClear
  }, "Clear")), React.createElement(FieldTextArea, {
    width: "100%",
    label: "Controlled",
    value: value,
    onChange: handleChange
  }));
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldTextArea.stories.js.map