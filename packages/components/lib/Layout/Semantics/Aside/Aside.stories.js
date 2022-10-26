import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { FieldToggleSwitch } from '../../../Form';
import { useToggle } from '../../../utils';
import { Flex } from '../../Flex';
import { Aside } from '../Aside/Aside';
export default {
  argTypes,
  component: Aside,
  title: 'Aside'
};

const Template = args => React.createElement(AsideStyle, _extends({
  p: "u5",
  "text-align": "center"
}, args));

const AsideStyle = styled(Aside).withConfig({
  displayName: "Asidestories__AsideStyle",
  componentId: "sc-vbbp60-0"
})(_t || (_t = _`
  /* stylelint-disable color-named */
  background-color: lightsalmon;
  height: 40rem;
  padding-top: 3.5rem;
  text-align: center;
`));
export const AsideDefaultWidthSidebar = Template.bind({});
AsideDefaultWidthSidebar.args = {
  children: 'Sidebar'
};
export const AsideWidthNavigation = Template.bind({});
AsideWidthNavigation.args = {
  children: 'Navigation',
  width: 'navigation'
};
export const AsideWidthRail = Template.bind({});
AsideWidthRail.args = {
  children: 'Rail',
  width: 'rail'
};
export const AsideCollapse = () => {
  const {
    value,
    toggle
  } = useToggle(false);
  return React.createElement(Flex, null, React.createElement(AsideStyle, {
    collapse: !value
  }, "Aside content"), React.createElement(FieldToggleSwitch, {
    m: "small",
    label: "Show Aside",
    onChange: toggle,
    on: value
  }));
};
AsideCollapse.parameters = {
  storyshots: {
    disable: true
  }
};

const TemplateBorder = args => React.createElement(Aside, _extends({
  p: "u5",
  "text-align": "center"
}, args));

export const AsideDefaultBorderAndColor = TemplateBorder.bind({});
AsideDefaultBorderAndColor.args = {
  border: true,
  children: 'Aside'
};
export const AsideBorderBottom = TemplateBorder.bind({});
AsideBorderBottom.args = {
  borderBottom: 'key',
  children: 'border-bottom'
};
export const AsideBorderLeft = TemplateBorder.bind({});
AsideBorderLeft.args = {
  borderLeft: 'key',
  children: 'border-left'
};
export const AsideBorderRight = TemplateBorder.bind({});
AsideBorderRight.args = {
  borderRight: 'key',
  children: 'border-right'
};
export const AsideBorderTop = TemplateBorder.bind({});
AsideBorderTop.args = {
  borderTop: 'key',
  children: 'border-top'
};
export const AsideBorderX = TemplateBorder.bind({});
AsideBorderX.args = {
  borderX: 'key',
  children: 'border-left and border-right'
};
export const AsideBorderY = TemplateBorder.bind({});
AsideBorderY.args = {
  borderY: 'key',
  children: 'border-bottom and border-top'
};
//# sourceMappingURL=Aside.stories.js.map