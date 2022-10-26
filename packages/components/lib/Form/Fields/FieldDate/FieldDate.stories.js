import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["externalLabel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../../Button';
import { Popover, PopoverContent } from '../../../Popover';
import { DateFormat } from '../../Inputs/DateFormat';
import { FieldDate } from './FieldDate';
export default {
  argTypes,
  component: FieldDate,
  title: 'FieldDate'
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
  }, React.createElement(FieldDate, args));
};

export const Basic = Template.bind({});
Basic.args = {
  defaultValue: new Date('July 25, 2020'),
  label: 'Example'
};
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const Required = Template.bind({});
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
export const Controlled = () => {
  const [controlledDate, setControlledDate] = useState();

  function handleNextWeekClick() {
    setControlledDate(new Date('03/09/2020'));
  }

  return React.createElement(Popover, {
    content: React.createElement(PopoverContent, null, React.createElement(Button, {
      onClick: handleNextWeekClick
    }, "Next Week"), React.createElement(FieldDate, {
      value: controlledDate,
      onChange: setControlledDate
    }))
  }, React.createElement(Button, null, controlledDate ? React.createElement(React.Fragment, null, React.createElement(DateFormat, null, controlledDate)) : 'Select Dates'));
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
export const ControlledFloatingLabelNoValue = () => {
  const [today, setToday] = useState();

  const onClickSelectToday = () => setToday(new Date());

  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(Button, {
    onClick: onClickSelectToday
  }, "Today"), React.createElement(FieldDate, {
    externalLabel: false,
    label: "Controlled",
    value: today,
    onChange: setToday
  }));
};
ControlledFloatingLabelNoValue.parameters = {
  storyshots: {
    disable: true
  }
};
export const ControlledFloatingLabel = () => {
  const [today, setToday] = useState(new Date('04/07/1776'));

  const onClickSelectToday = () => setToday(new Date());

  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(Button, {
    onClick: onClickSelectToday
  }, "Today"), React.createElement(FieldDate, {
    externalLabel: false,
    label: "Controlled",
    value: today,
    onChange: setToday
  }));
};
ControlledFloatingLabel.parameters = {
  storyshots: {
    disable: true
  }
};
export const FloatingLabel = Template.bind({});
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  externalLabel: false
});
export const FloatingLabelNoDefaultValue = Template.bind({});
FloatingLabelNoDefaultValue.args = {
  externalLabel: false,
  label: 'Example'
};
FloatingLabelNoDefaultValue.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldDate.stories.js.map