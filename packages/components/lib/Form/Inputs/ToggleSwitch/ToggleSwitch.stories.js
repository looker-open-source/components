import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["on"];
import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { useToggle } from '../../../utils/useToggle';
import { ToggleSwitch } from './ToggleSwitch';

const Template = _ref => {
  let {
    on = false
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const {
    value,
    toggle
  } = useToggle(on);
  return React.createElement(ToggleSwitch, _extends({
    onChange: toggle,
    on: value
  }, args));
};

export const Basic = Template.bind({});
export const Checked = Template.bind({});
Checked.args = {
  on: true
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  on: true
};
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true
};
export default {
  argTypes,
  component: ToggleSwitch,
  title: 'ToggleSwitch'
};
//# sourceMappingURL=ToggleSwitch.stories.js.map