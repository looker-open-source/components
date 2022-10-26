import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["externalLabel", "initialValue"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../../Button';
import { FieldColor } from './FieldColor';
export default {
  argTypes,
  component: FieldColor,
  title: 'FieldColor'
};

const Template = _ref => {
  let {
    externalLabel = true,
    initialValue
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [value, setValue] = useState(initialValue);

  const handleChange = e => setValue(e.currentTarget.value);

  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel
      }
    }
  }, React.createElement(FieldColor, _extends({}, args, {
    value: value,
    onChange: handleChange
  })));
};

export const Basic = Template.bind({});
Basic.args = {
  initialValue: 'purple',
  label: 'Basic'
};
export const Required = Template.bind({});
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
export const FloatingLabel = Template.bind({});
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  externalLabel: false
});
export const FloatingLabelNoDefaultValue = Template.bind({});
FloatingLabelNoDefaultValue.args = {
  externalLabel: false,
  initialValue: undefined,
  label: 'Example'
};
export const ControlledFloatingLabelNoValue = () => {
  const [blue, setBlue] = useState('');

  const onClickSetColorToBlue = () => setBlue('blue');

  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(Button, {
    onClick: onClickSetColorToBlue
  }, "Blue"), React.createElement(FieldColor, {
    externalLabel: false,
    label: "Controlled",
    value: blue
  }));
};
ControlledFloatingLabelNoValue.parameters = {
  storyshots: {
    disable: true
  }
};
export const ControlledFloatingLabel = () => {
  const [blue, setBlue] = useState('white');

  const onClickSetColorToBlue = () => setBlue('blue');

  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(Button, {
    onClick: onClickSetColorToBlue
  }, "Blue"), React.createElement(FieldColor, {
    externalLabel: false,
    label: "Controlled",
    value: blue
  }));
};
ControlledFloatingLabel.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldColor.stories.js.map