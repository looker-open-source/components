import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["externalLabel", "initialValues"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Grid, SpaceVertical } from '../../../Layout';
import { Paragraph } from '../../../Text';
import { FieldChips } from './FieldChips';
export default {
  argTypes,
  component: FieldChips,
  title: 'FieldChips'
};

const Template = _ref => {
  let {
    externalLabel = true,
    initialValues
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [values, setValues] = useState(initialValues || ['apples']);
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel
      }
    }
  }, React.createElement(FieldChips, _extends({}, args, {
    values: values,
    onChange: setValues
  })));
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Basic'
};
export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  externalLabel: false,
  label: 'Floating Label'
};
export const Truncate = Template.bind({});
Truncate.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  initialValues: ['A very long token that will truncate'],
  label: 'Truncate',
  width: 250
});
export const Overflow = Template.bind({});
Overflow.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  initialValues: ['California', 'Wyoming', 'Nevada', 'Wisconsin', 'Mississippi', 'Missouri', 'New York', 'New Jersey'],
  label: 'Overflow',
  maxHeight: 145,
  width: 200
});
export const AutoResize = Template.bind({});
AutoResize.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  autoResize: true,
  label: 'Auto Resize',
  maxWidth: '50vw',
  placeholder: 'Auto Resize'
});
export const AutoResizeFloatingLabel = Template.bind({});
AutoResizeFloatingLabel.args = _objectSpread(_objectSpread({}, AutoResize.args), {}, {
  externalLabel: false,
  placeholder: 'Auto Resize'
});
export const FieldChipOptions = () => {
  const [values, setValues] = useState(['apples']);

  const handleChange = vals => setValues(vals);

  return React.createElement(Grid, {
    columns: 1
  }, React.createElement(FieldChips, {
    label: "FieldChip's Label",
    onChange: handleChange,
    values: values
  }), React.createElement(FieldChips, {
    detail: "5/50",
    description: "this is a description",
    label: "FieldChip's Label",
    onChange: handleChange,
    values: values
  }), React.createElement(FieldChips, {
    label: "FieldChip's Label",
    onChange: handleChange,
    validationMessage: {
      message: 'This is an error',
      type: 'error'
    },
    values: values
  }));
};
FieldChipOptions.parameters = {
  storyshots: {
    disable: true
  }
};
export const Controlled = () => {
  const [values, setValues] = useState(['bananas']);
  const [inputValue, setInputValue] = useState('oranges');

  const handleChange = vals => setValues(vals);

  const handleInputChange = value => setInputValue(value);

  return React.createElement(FieldChips, {
    values: values,
    inputValue: inputValue,
    onChange: handleChange,
    onInputChange: handleInputChange,
    summary: "summary"
  });
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
const emailValidator = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const ValidationDuplicate = () => {
  const [values, setValues] = useState(['bob@internet.com']);
  const [invalid, setInvalid] = useState('');
  const [duplicate, setDuplicate] = useState('');

  const handleChange = vals => {
    setInvalid('');
    setDuplicate('');
    setValues(vals);
  };

  const handleInvalid = values => setInvalid(`Invalid email: ${values.join(', ')}`);

  const handleDuplicate = values => setDuplicate(`Duplicate email: ${values.join(', ')}`);

  return React.createElement(SpaceVertical, null, React.createElement(FieldChips, {
    values: values,
    onChange: handleChange,
    placeholder: "Email validation",
    validate: val => emailValidator.test(val),
    onValidationFail: handleInvalid,
    onDuplicate: handleDuplicate
  }), React.createElement(Paragraph, null, invalid, " ", duplicate));
};
ValidationDuplicate.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldChips.stories.js.map