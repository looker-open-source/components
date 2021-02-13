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

import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Button } from '../../../Button'
import { Icon } from '../../../Icon'
import { Space, SpaceVertical } from '../../../Layout'
import { Text } from '../../../Text'
import { Tooltip } from '../../../Tooltip'
import { useToggle } from '../../../utils'
import { FieldCheckbox } from '../FieldCheckbox'
import { FieldRadio } from '../FieldRadio'
import { FieldToggleSwitch } from '../FieldToggleSwitch'
import { FieldText, FieldTextProps } from './FieldText'

export default {
  component: FieldText,
  title: 'FieldText',
}

const Template: Story<FieldTextProps> = (args) => <FieldText {...args} />

export const Basic = Template.bind({})
Basic.args = { label: 'Text Input' }

export const Detail = Template.bind({})
Detail.args = { ...Basic.args, detail: '0/50' }

export const Description = Template.bind({})
Description.args = {
  ...Basic.args,
  description: 'Some important information about this field',
}

export const Inline = Template.bind({})
Inline.args = {
  ...Basic.args,
  detail: 'Detail inline looks like this',
  inline: true,
}

export const Disabled = Template.bind({})
Disabled.args = { ...Basic.args, disabled: true }

export const Required = Template.bind({})
Required.args = { ...Basic.args, required: true }

export const Placeholder = Template.bind({})
Placeholder.args = { ...Basic.args, placeholder: 'Placeholder text here' }

export const Value = Template.bind({})
Value.args = { ...Basic.args, value: 'Text here' }

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationMessage: { message: 'Error Message', type: 'error' },
}

export const Before = Template.bind({})
Before.args = { before: '$', label: 'Dollars' }

export const After = Template.bind({})
After.args = { after: '%', label: 'Percent' }

export const IconBefore = Template.bind({})
IconBefore.args = { iconBefore: 'GearOutline', label: 'Settings' }

export const IconAfter = Template.bind({})
IconAfter.args = { iconAfter: 'GearOutline', label: 'Settings' }

export const Toggles = () => (
  <>
    <FieldCheckbox label="Checkbox" />
    <FieldCheckbox
      required
      label="Checkbox"
      validationMessage={{ message: 'validation Message', type: 'error' }}
    />
    <FieldCheckbox disabled label="Checkbox" />
    <FieldCheckbox required label="Checkbox" />

    <FieldRadio label="Radio" />
    <FieldRadio disabled label="Radio" />

    <FieldToggleSwitch label="Toggle Switch" />
    <FieldToggleSwitch
      required
      label="Toggle Switch"
      validationMessage={{ message: 'validation Message', type: 'error' }}
    />
    <FieldToggleSwitch disabled label="Toggle Switch" />
    <FieldToggleSwitch required label="Toggle Switch" />
  </>
)

Toggles.parameters = {
  storyshots: { disable: true },
}

export const AutoResize = () => {
  return (
    <Space alignItems="flex-end">
      <FieldText autoResize placeholder="Start typing to resize me" />
      <FieldText
        label="I also resize"
        autoResize
        defaultValue="Some default text"
        detail="Detail lines up"
      />
      <FieldText
        label="Inline autoResize"
        inline
        autoResize
        defaultValue="Some default text"
        detail="Detail text"
      />
    </Space>
  )
}

AutoResize.parameters = {
  storyshots: { disable: true },
}

export const BeforeAfterValidation = () => {
  const { value, toggle } = useToggle(true)
  const validation = value
    ? { validationMessage: { message: 'Oops!', type: 'error' as 'error' } }
    : {}
  return (
    <SpaceVertical align="start">
      <Button onClick={toggle}>Toggle error state</Button>
      <Space>
        <FieldText label="iconBefore" iconBefore="Favorite" {...validation} />
        <FieldText label="iconAfter" iconAfter="Account" {...validation} />
        <FieldText label="before string" before="$" {...validation} />
        <FieldText label="after string" after="%" {...validation} />
        <FieldText
          label="before &amp; after"
          before={
            <Tooltip content="Some very important info">
              <Icon
                name="AddAlerts"
                size="small"
                style={{ cursor: 'default' }}
              />
            </Tooltip>
          }
          after={
            <Text fontSize="small" color={value ? 'critical' : 'info'}>
              Helper text
            </Text>
          }
          {...validation}
        />
      </Space>
    </SpaceVertical>
  )
}

BeforeAfterValidation.parameters = {
  storyshots: { disable: true },
}
