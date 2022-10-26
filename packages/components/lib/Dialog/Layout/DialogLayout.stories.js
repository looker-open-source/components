import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ConstitutionShort } from '../../fixtures/Constitution';
import { Box2 } from '../../Layout';
import { DialogLayout } from './DialogLayout';
import { DialogContent } from './DialogContent';

const Template = args => React.createElement(Box2, {
  bg: "ui1"
}, React.createElement(DialogLayout, args, React.createElement(ConstitutionShort, null)));

export const Basic = Template.bind({});
Basic.args = {};
export const Header = Template.bind({});
Header.args = {
  header: 'Header text'
};
export const Footer = Template.bind({});
Footer.args = {
  footer: 'Footer text'
};
export const Full = Template.bind({});
Full.args = _objectSpread(_objectSpread({}, Footer.args), Header.args);
export const HeaderDetail = Template.bind({});
HeaderDetail.args = _objectSpread(_objectSpread({}, Full.args), {}, {
  headerDetail: 'Cancel'
});
export const HeaderCloseButton = Template.bind({});
HeaderCloseButton.args = _objectSpread(_objectSpread({}, Full.args), {}, {
  headerCloseButton: true
});
export const FooterSecondary = Template.bind({});
FooterSecondary.args = _objectSpread(_objectSpread({}, Full.args), {}, {
  footerSecondary: 'Cancel'
});
export const NoPadding = () => React.createElement(Box2, {
  bg: "ui1"
}, React.createElement(DialogContent, {
  hasFooter: false,
  hasHeader: false
}, React.createElement(ConstitutionShort, null)));
export default {
  argTypes,
  component: DialogLayout,
  title: 'DialogLayout'
};
//# sourceMappingURL=DialogLayout.stories.js.map