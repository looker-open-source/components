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
import { dialogPlacements } from '../DialogSurface'
import { DialogHeader } from '../Layout/DialogHeader'
import { Checkbox } from '../../Form/Inputs/Checkbox'
import { DialogContent } from '../Layout/DialogContent'
import { DialogFooter } from '../Layout/DialogFooter'

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

export const Height = Template.bind({})
Height.args = {
  ...MediumContent.args,
  height: '1000rem',
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

export const withCheckbox = Template.bind({})
withCheckbox.args = {
  content: (
    <>
      <DialogHeader>Header</DialogHeader>
      <DialogContent>
        The top line & bottom shadow should not be there.
        <Checkbox checked />
      </DialogContent>
      <DialogFooter>Footer</DialogFooter>
    </>
  ),
}
withCheckbox.parameters = {
  storyshots: { disable: true },
}

export const ClickOutside = () => {
  return (
    <>
      <input
        type="text"
        style={{
          position: 'absolute',
          right: '0',
          top: '0',
          zIndex: 100,
        }}
      />
      <Dialog
        content={
          <>
            <button>button 1</button>
            <button>button 2</button>
          </>
        }
      >
        <button>Open Dialog</button>
      </Dialog>
    </>
  )
}

export default {
  argTypes: {
    placement: {
      control: {
        options: dialogPlacements,
        type: 'select',
      },
    },
    width: {
      control: {
        options: Object.keys(dialogSizes),
        type: 'select',
      },
    },
  },
  component: Dialog,
  title: 'Dialog',
}
