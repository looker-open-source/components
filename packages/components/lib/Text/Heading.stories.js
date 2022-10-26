import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Heading } from './Heading';
export default {
  argTypes,
  component: Heading,
  title: 'Heading'
};

const Template = args => React.createElement(Heading, args);

export const Default = Template.bind({});
Default.args = {
  children: 'Heading Text'
};
export const Level = Template.bind({});
Level.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  as: 'h4'
});
export const FontSize = Template.bind({});
FontSize.args = _objectSpread(_objectSpread({}, Level.args), {}, {
  fontSize: 'large'
});
export const FontWeight = Template.bind({});
FontWeight.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  fontWeight: 'bold'
});
export const Color = Template.bind({});
Color.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  color: 'text1'
});
export const Truncate = Template.bind({});
Truncate.args = {
  children: "This is a really long title that will need to truncate. It's gotta get real long so it hits the edge of the jest-dom virtual window size so I'm going to just keep typing and typing to make sure it triggers overflow as needed to prove that this is work properly. Are we there yet? Maybe? I sure hope so!",
  truncate: true
};
export const MultilineTruncate = Template.bind({});
MultilineTruncate.args = {
  children: "This is a really long title that will need to truncate. It's gotta get real long so it hits the edge of the jest-dom virtual window size so I'm going to just keep typing and typing to make sure it triggers overflow as needed to prove that this is work properly. Are we there yet? Maybe? I sure hope so!",
  truncateLines: 2
};
//# sourceMappingURL=Heading.stories.js.map