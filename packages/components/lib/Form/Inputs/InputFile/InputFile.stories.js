import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["handleFile"];
import React from 'react';
import noop from 'lodash/noop';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InputFile } from './InputFile';
export default {
  argTypes,
  component: InputFile,
  title: 'InputFile'
};

const Template = _ref => {
  let {
    handleFile
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(InputFile, _extends({
    handleFile: () => noop()
  }, args));
};

export const Basic = Template.bind({});
export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder'
};
export const ButtonText = Template.bind({});
ButtonText.args = {
  buttonText: 'New Button Text'
};
export const Accepts = Template.bind({});
Accepts.args = {
  accept: '.json',
  value: 'Accepts only .json files'
};
//# sourceMappingURL=InputFile.stories.js.map