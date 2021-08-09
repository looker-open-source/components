/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { useToggle, FieldToggleSwitch, Flex } from '@looker/components'
import { defaultArgTypes as argTypes } from '../../../../../../storybook/src/defaultArgTypes'
import { Aside, AsideProps } from '../Aside/Aside'

export default {
  argTypes,
  component: Aside,
  title: 'Aside',
}

const Template: Story<AsideProps> = (args) => (
  <AsideStyle p="large" text-align="center" {...args} />
)

const AsideStyle = styled(Aside)`
  /* stylelint-disable color-named */
  background-color: lightsalmon;
  height: 40rem;
  padding-top: 3.5rem;
  text-align: center;
`
export const AsideDefaultWidthSidebar = Template.bind({})
AsideDefaultWidthSidebar.args = {
  children: 'Sidebar',
}

export const AsideWidthNavigation = Template.bind({})
AsideWidthNavigation.args = {
  children: 'Navigation',
  width: 'navigation',
}

export const AsideWidthRail = Template.bind({})
AsideWidthRail.args = {
  children: 'Rail',
  width: 'rail',
}

export const AsideCollapse = () => {
  const { value, toggle } = useToggle(false)

  return (
    <Flex>
      <AsideStyle collapse={!value}>Aside content</AsideStyle>
      <FieldToggleSwitch
        m="small"
        label="Show Aside"
        onChange={toggle}
        on={value}
      />
    </Flex>
  )
}

AsideCollapse.parameters = {
  storyshots: {
    disable: true,
  },
}

const TemplateBorder: Story<AsideProps> = (args) => (
  <Aside p="large" text-align="center" {...args} />
)

export const AsideDefaultBorderAndColor = TemplateBorder.bind({})
AsideDefaultBorderAndColor.args = {
  border: true,
  children: 'Aside',
}

export const AsideBorderBottom = TemplateBorder.bind({})
AsideBorderBottom.args = {
  borderBottom: 'key',
  children: 'border-bottom',
}

export const AsideBorderLeft = TemplateBorder.bind({})
AsideBorderLeft.args = {
  borderLeft: 'key',
  children: 'border-left',
}

export const AsideBorderRight = TemplateBorder.bind({})
AsideBorderRight.args = {
  borderRight: 'key',
  children: 'border-right',
}

export const AsideBorderTop = TemplateBorder.bind({})
AsideBorderTop.args = {
  borderTop: 'key',
  children: 'border-top',
}

export const AsideBorderX = TemplateBorder.bind({})
AsideBorderX.args = {
  borderX: 'key',
  children: 'border-left and border-right',
}

export const AsideBorderY = TemplateBorder.bind({})
AsideBorderY.args = {
  borderY: 'key',
  children: 'border-bottom and border-top',
}
