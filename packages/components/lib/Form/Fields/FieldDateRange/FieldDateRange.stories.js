import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["externalLabel", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { FieldDateRange } from './FieldDateRange';
export default {
  argTypes,
  component: FieldDateRange,
  title: 'FieldDateRange'
};

const Template = _ref => {
  let {
    externalLabel = true,
    value
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [range, setRange] = useState(value);
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel
      }
    }
  }, React.createElement(FieldDateRange, _extends({}, args, {
    value: range,
    onChange: setRange
  })));
};

export const Basic = Template.bind({});
Basic.args = {
  externalLabel: true,
  label: 'Pick A Date',
  value: {}
};
export const Value = Template.bind({});
Value.args = {
  externalLabel: true,
  label: 'Pick A Date',
  value: {
    from: new Date('May 18, 2020'),
    to: new Date('May 21, 2020')
  }
};
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  disabled: true
});
export const FloatingLabel = Template.bind({});
FloatingLabel.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  externalLabel: false
});
export const FloatingLabelDisabledNoDefaultValue = Template.bind({});
FloatingLabelDisabledNoDefaultValue.args = {
  disabled: true,
  externalLabel: false,
  label: 'Pick A Date',
  value: {}
};
FloatingLabelDisabledNoDefaultValue.parameters = {
  storyshots: {
    disable: true
  }
};
export const FloatingLabelNoDefaultValue = Template.bind({});
FloatingLabelNoDefaultValue.args = {
  externalLabel: false,
  label: 'Pick A Date',
  value: {}
};
FloatingLabelNoDefaultValue.parameters = {
  storyshots: {
    disable: true
  }
};
export const ControlledFloatingLabel = () => {
  const [range, setRange] = useState({
    from: new Date('May 18, 2020'),
    to: new Date('May 21, 2020')
  });
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(FieldDateRange, {
    externalLabel: false,
    label: "Controlled",
    value: range,
    onChange: setRange
  }));
};
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  validationMessage: {
    message: 'Field Disabled',
    type: 'error'
  }
});
//# sourceMappingURL=FieldDateRange.stories.js.map