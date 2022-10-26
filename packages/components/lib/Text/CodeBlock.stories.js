import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { CodeBlock } from './CodeBlock';
export default {
  argTypes,
  component: CodeBlock,
  title: 'CodeBlock'
};

const Template = args => React.createElement(CodeBlock, args);

export const Basic = Template.bind({});
Basic.args = {
  children: 'This is a simple example of some code'
};
export const Border = Template.bind({});
Border.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  border: 'key'
});
//# sourceMappingURL=CodeBlock.stories.js.map