/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Breakpoint, BreakpointProps } from './Breakpoint'

export default {
  component: Breakpoint,
  title: 'Breakpoint',
}

const Template: Story<BreakpointProps> = (args) => <Breakpoint {...args} />

export const RenderAll = Template.bind({})
RenderAll.args = {
  children: 'Render me everywhere',
}

export const RenderOnMobile = Template.bind({})
RenderOnMobile.args = {
  children:
    'Render on mobile. Shrink viewport to less than mobile breakpoint to view text.',
  show: 'mobile',
}

RenderOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
    viewports: MINIMAL_VIEWPORTS,
  },
}

export const RenderOnTabletAndAbove = Template.bind({})
RenderOnMobile.args = {
  children:
    'Renders on tablet and above. Enlarge viewport to wider than mobile breakpoint to view.',
  show: ['tablet', undefined],
}

RenderOnTabletAndAbove.parameters = {
  viewport: {
    defaultViewport: 'tablet',
    viewports: MINIMAL_VIEWPORTS,
  },
}
