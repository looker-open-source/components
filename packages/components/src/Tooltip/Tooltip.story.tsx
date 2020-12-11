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
import { Button } from '../Button'
import { Card } from '../Card'
import { Popover, PopoverContent } from '../Popover'
import { Tooltip, TooltipProps } from './Tooltip'

const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <Button m="xxxlarge">Open Tooltip</Button>
  </Tooltip>
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
  isOpen: true,
}
Open.parameters = {
  storyshots: { disable: true },
}

export const PlacemenTop = Template.bind({})
PlacemenTop.args = {
  ...Basic.args,
  placement: 'top',
}
PlacemenTop.parameters = {
  storyshots: { disable: true },
}

export const PlacementRight = Template.bind({})
PlacementRight.args = {
  ...Basic.args,
  placement: 'right',
}
PlacementRight.parameters = {
  storyshots: { disable: true },
}

export const PlacementLeft = Template.bind({})
PlacementLeft.args = {
  ...Basic.args,
  content: 'Left',
  placement: 'left',
}
PlacementLeft.parameters = {
  storyshots: { disable: true },
}

export const DelayNone = Template.bind({})
DelayNone.args = {
  ...Basic.args,
  delay: 'none',
}
DelayNone.parameters = {
  storyshots: { disable: true },
}

export const OpenDelayNone = Template.bind({})
OpenDelayNone.args = {
  ...DelayNone.args,
  isOpen: true,
}
OpenDelayNone.parameters = {
  storyshots: { disable: true },
}

export const RenderProp = () => (
  <Tooltip content="Start editing" placement="right">
    {(tooltipProps) => (
      <Button m="xxxlarge" {...tooltipProps}>
        Open Tooltip
      </Button>
    )}
  </Tooltip>
)

RenderProp.parameters = {
  storyshots: { disable: true },
}

export const LargeTrigger = () => (
  <Tooltip content="See what happens when you scroll" placement="right">
    <Card width={500} height={800} raised p="large">
      Very large trigger
    </Card>
  </Tooltip>
)

LargeTrigger.parameters = {
  storyshots: { disable: true },
}

export const NestedInPopover = () => (
  <Popover content={<PopoverContent>Some content</PopoverContent>}>
    <Tooltip content="Some tooltip">
      <Button>Open</Button>
    </Tooltip>
  </Popover>
)

NestedInPopover.parameters = {
  storyshots: { disable: true },
}

export default {
  component: Tooltip,
  title: 'Tooltip',
}
