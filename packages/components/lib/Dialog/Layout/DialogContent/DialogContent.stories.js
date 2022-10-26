import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Box2, Paragraph } from '../../..';
import { DialogContent } from './DialogContent';
export const Basic = () => React.createElement(DialogContent, null, React.createElement(Box2, {
  height: "2rem",
  bg: "rebeccapurple"
}));
export const Overflow = () => React.createElement(Box2, {
  height: "10rem",
  display: "flex",
  bg: "white",
  p: "u5"
}, React.createElement(DialogContent, null, React.createElement(Paragraph, null, "Scroll down here..."), React.createElement(Box2, {
  height: "12rem",
  bg: "rebeccapurple"
})));
export default {
  argTypes,
  component: DialogContent,
  title: 'DialogContent'
};
//# sourceMappingURL=DialogContent.stories.js.map