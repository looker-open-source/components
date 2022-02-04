/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { Story } from '@storybook/react/types-6-0'
// import type { Page } from 'puppeteer'
import { defaultArgTypes } from '../../../../../apps/storybook/src/defaultArgTypes'
import { DialogLongContent } from '../../__mocks__/DialogLongContent'
import { dialogSizes } from '../../Dialog/dialogWidth'
import type { DrawerProps } from '../Drawer'
import { Drawer } from '../Drawer'
import { ButtonOutline } from '../../Button'

export * from './useDrawer.stories'
export * from './renderProps.stories'

const Template: Story<DrawerProps> = args => (
  <Drawer {...args} content={<DialogLongContent />}>
    <ButtonOutline>Open Drawer</ButtonOutline>
  </Drawer>
)

export const Basic = Template.bind({})
Basic.args = {}
Basic.parameters = {
  storyshots: { disable: true },
}

// const beforeScreenshot = async (page: Page) => {
//   // Delay fixes threshold issue with focus ring
//   await page.waitForTimeout(50)
// }

export const Open = Template.bind({})
Open.args = {
  defaultOpen: true,
}
Open.parameters = {
  // beforeScreenshot,
  docs: { disable: true },
  storyshots: { disable: true },
}

export const PlacementLeft = Template.bind({})
PlacementLeft.args = {
  defaultOpen: true,
  placement: 'left',
}
PlacementLeft.parameters = {
  // beforeScreenshot,
  docs: { disable: true },
  storyshots: { disable: true },
}

export const Width = Template.bind({})
Width.args = {
  ...Open.args,
  width: '50rem',
}
Width.parameters = {
  // beforeScreenshot,
  docs: { disable: true },
  storyshots: { disable: true },
}

export const AnimationCallbacks = Template.bind({})
AnimationCallbacks.args = {
  ...Basic.args,
  onAfterClose: () => {
    // eslint-disable-next-line no-console
    console.log('Close')
  },
  onAfterOpen: () => {
    // eslint-disable-next-line no-console
    console.log('Open')
  },
}
AnimationCallbacks.parameters = {
  storyshots: { disable: true },
}

export default {
  argTypes: {
    ...defaultArgTypes,
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
