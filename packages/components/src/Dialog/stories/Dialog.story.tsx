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
import { DialogMediumContent } from '../../__mocks__/DialogMediumContent'
import { Dialog, DialogProps } from '../Dialog'
import { dialogSizes } from '../dialogWidth'

export * from './Controlled'
export * from './SaveChanges'

const Template: Story<DialogProps> = (args) => (
  <Dialog {...args}>
    <button>Open Dialog</button>
  </Dialog>
)

export const Basic = Template.bind({})
Basic.args = {
  content: 'Simple Content',
}
Basic.parameters = {
  storyshots: { disable: true },
}

export const Open = Template.bind({})
Open.args = {
  ...Basic.args,
  defaultOpen: true,
}

export const MediumContent = Template.bind({})
MediumContent.args = {
  content: <DialogMediumContent />,
  defaultOpen: true,
}

export const PlacementTop = Template.bind({})
PlacementTop.args = {
  ...MediumContent.args,
  defaultOpen: true,
  placement: 'top',
}

export const PlacementCover = Template.bind({})
PlacementCover.args = {
  ...MediumContent.args,
  defaultOpen: true,
  placement: 'cover',
}

export const LongContent = Template.bind({})
LongContent.args = {
  content: <DialogLongContent />,
  defaultOpen: true,
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
  component: Dialog,
  title: 'Dialog',
}
