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
import { DialogLongContent } from '../../__mocks__/DialogLongContent'
import { dialogSizes } from '../../Dialog/dialogWidth'
import { Drawer, DrawerProps } from '../Drawer'

export * from './useDrawer.story'
export * from './renderProps.story'

const Template: Story<DrawerProps> = (args) => (
  <Drawer {...args} content={<DialogLongContent />}>
    <button>Open Drawer</button>
  </Drawer>
)

export const Basic = Template.bind({})
Basic.args = {}
Basic.parameters = {
  storyshots: { disable: true },
}

export const Open = Template.bind({})
Open.args = {
  defaultOpen: true,
}

export const PlacementLeft = Template.bind({})
PlacementLeft.args = {
  defaultOpen: true,
  placement: 'left',
}

export const Width = Template.bind({})
Width.args = {
  ...Open.args,
  width: '50rem',
}

/** TODO: Add Placement when supported */

export default {
  argTypes: {
    width: {
      control: {
        options: Object.keys(dialogSizes),
        type: 'radio',
      },
    },
  },
  component: Drawer,
  title: 'Drawer',
}
