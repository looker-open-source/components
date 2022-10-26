import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["on"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Delete } from '@styled-icons/material';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { IconButton } from '../../../Button';
import { useToggle } from '../../../utils/useToggle';
import { FieldToggleSwitch } from './FieldToggleSwitch';

const Template = _ref => {
  let {
    on = false
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const {
    value,
    toggle
  } = useToggle(on);
  return React.createElement(FieldToggleSwitch, _extends({
    onChange: toggle,
    on: value
  }, args));
};

export const Basic = Template.bind({});
Basic.args = {
  id: 'id',
  label: 'Toggle Switch',
  name: 'thumbsUp'
};
export const DetailDescription = Template.bind({});
DetailDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'describe something here.',
  detail: '4/20'
});
export const Tabstops = Template.bind({});
Tabstops.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: React.createElement(React.Fragment, null, "describe something here. ", React.createElement("a", {
    href: "somewhere"
  }, "Link")),
  detail: React.createElement(IconButton, {
    icon: React.createElement(Delete, null),
    label: "Hello world"
  })
});
Tabstops.parameters = {
  storyshots: {
    disable: true
  }
};
export const Checked = Template.bind({});
Checked.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  on: true
});
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const DisabledChecked = Template.bind({});
DisabledChecked.args = _objectSpread(_objectSpread({}, Checked.args), {}, {
  disabled: true
});
export const ReadOnly = Template.bind({});
ReadOnly.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  readOnly: true
});
export const Error = Template.bind({});
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'This is an error',
    type: 'error'
  }
});
export const DetailDescriptionError = Template.bind({});
DetailDescriptionError.args = _objectSpread(_objectSpread({}, DetailDescription.args), {}, {
  validationMessage: {
    message: 'This is an error',
    type: 'error'
  }
});
export default {
  argTypes,
  component: FieldToggleSwitch,
  title: 'FieldToggleSwitch'
};
//# sourceMappingURL=FieldToggleSwitch.stories.js.map