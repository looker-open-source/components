import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ConstitutionShort } from '../../fixtures/Constitution';
import { ButtonTransparent } from '../../Button/ButtonTransparent';
import { PopoverLayout } from './PopoverLayout';
export default {
  argTypes,
  component: PopoverLayout,
  title: 'PopoverLayout'
};

const Template = args => React.createElement(PopoverLayout, args);

export const Basic = Template.bind({});
Basic.args = {
  children: React.createElement(ConstitutionShort, {
    fontSize: "small"
  })
};
export const Header = Template.bind({});
Header.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  footer: false,
  header: 'Header text'
});
export const FooterCloseButton = Template.bind({});
FooterCloseButton.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  closeButton: React.createElement(ButtonTransparent, {
    color: "neutral",
    size: "small"
  }, "Close"),
  header: 'Header text'
});
export const NoFooter = Template.bind({});
NoFooter.args = _objectSpread({
  footer: false
}, Basic.args);
NoFooter.parameters = {
  storyshots: {
    disable: true
  }
};
export const Full = Template.bind({});
Full.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  footer: React.createElement(ButtonTransparent, {
    color: "neutral",
    size: "small"
  }, "Cancel"),
  header: 'Header text'
});
export const HeaderHideHeading = Template.bind({});
HeaderHideHeading.args = _objectSpread(_objectSpread({}, Full.args), {}, {
  hideHeader: true
});
//# sourceMappingURL=PopoverLayout.stories.js.map