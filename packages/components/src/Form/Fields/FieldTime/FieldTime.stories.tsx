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

import type { Story } from '@storybook/react/types-6-0'
import partial from 'lodash/partial'
import React, { useState } from 'react'
import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Button } from '../../../Button'
import { Paragraph } from '../../../Text/Paragraph'
import { Space, SpaceVertical } from '../../../Layout/Space'
import type { FieldTimeProps } from './FieldTime'
import { FieldTime } from './FieldTime'

export default {
  argTypes,
  component: FieldTime,
  title: 'Date / FieldTime',
}

const Template: Story<FieldTimeProps & { externalLabel: boolean }> = ({
  externalLabel = true,
  ...args
}) => (
  <ExtendComponentsThemeProvider
    themeCustomizations={{ defaults: { externalLabel } }}
  >
    <FieldTime {...args} />
  </ExtendComponentsThemeProvider>
)

export const Basic = Template.bind({})
Basic.args = {
  defaultValue: '14:34',
  format: '12h',
  label: 'Label',
}

export const Disabled = Template.bind({})
Disabled.args = { ...Basic.args, defaultValue: '02:34', disabled: true }

export const Required = Template.bind({})
Required.args = { ...Basic.args, required: true }

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  description: 'this is the description is a very long one',
  detail: 'detail',
  validationMessage: { message: 'validation Message', type: 'error' },
}

export const FloatingLabel = Template.bind({})
FloatingLabel.args = {
  ...Basic.args,
  description: 'this is the description is a very long one',
  detail: 'detail',
  externalLabel: false,
}

export const MilitaryTime = Template.bind({})
MilitaryTime.args = {
  ...Basic.args,
  format: '24h',
}

export const Controlled = () => {
  const [controlledTime, setControlledTime] = useState<string | undefined>(
    '12:00'
  )
  return (
    <SpaceVertical>
      <Paragraph>Selected: {controlledTime}</Paragraph>

      <Space>
        <Button onClick={partial(setControlledTime, '14:00')}>2:00pm</Button>
        <Button onClick={partial(setControlledTime, '15:15')}>3:15pm</Button>
        <Button onClick={partial(setControlledTime, '16:32')}>4:32pm</Button>
      </Space>

      <FieldTime
        label="Controlled"
        value={controlledTime}
        onChange={setControlledTime}
      />
    </SpaceVertical>
  )
}

Controlled.parameters = {
  storyshots: { disable: true },
}
