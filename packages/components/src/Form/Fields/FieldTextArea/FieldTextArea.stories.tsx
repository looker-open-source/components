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
import type { Story } from '@storybook/react/types-6-0'
import type { FormEvent } from 'react'
import React, { useState } from 'react'
import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import { defaultArgTypes as argTypes } from '../../../../../../apps/storybook/src/defaultArgTypes'
import { Button } from '../../../Button'
import { Space, SpaceVertical } from '../../../Layout'
import type { FieldTextAreaProps } from './FieldTextArea'
import { FieldTextArea } from './FieldTextArea'

export default {
  argTypes,
  component: FieldTextArea,
  title: 'FieldTextArea',
}

const Template: Story<FieldTextAreaProps & { externalLabel: boolean }> = ({
  externalLabel = true,
  ...args
}) => (
  <ExtendComponentsThemeProvider
    themeCustomizations={{ defaults: { externalLabel } }}
  >
    <FieldTextArea {...args} />
  </ExtendComponentsThemeProvider>
)

export const Basic = Template.bind({})
Basic.args = { label: 'Text Area' }

export const FloatingLabel = Template.bind({})
FloatingLabel.args = { ...Basic.args, externalLabel: false }

export const FloatingLabelValue = Template.bind({})
FloatingLabelValue.args = {
  ...Basic.args,
  defaultValue: 'Default value',
  externalLabel: false,
}

export const DefaultValue = Template.bind({})
DefaultValue.args = { ...Basic.args, defaultValue: 'Default value' }

export const Disabled = Template.bind({})
Disabled.args = { ...Basic.args, disabled: true }

export const DisabledValue = Template.bind({})
DisabledValue.args = { ...DefaultValue.args, disabled: true }

export const Required = Template.bind({})
Required.args = { ...Basic.args, required: true }

export const Description = Template.bind({})
Description.args = { ...Basic.args, description: 'This is a description' }

export const Detail = Template.bind({})
Detail.args = { ...Basic.args, detail: '0/50' }

export const DetailDescription = Template.bind({})
DetailDescription.args = {
  ...Basic.args,
  description: 'This is a description',
  detail: '0/50',
}

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationMessage: { message: 'Error Message', type: 'error' },
}

export const ErrorDetail = Template.bind({})
ErrorDetail.args = {
  ...Basic.args,
  detail: '0/50',
  validationMessage: { message: 'Error Message', type: 'error' },
}

export const ErrorValueDetail = Template.bind({})
ErrorValueDetail.args = {
  ...Basic.args,
  defaultValue: 'This value is too long',
  detail: '50/50',
  validationMessage: { message: 'Error Message', type: 'error' },
}

export const Inline = Template.bind({})
Inline.args = {
  ...Basic.args,
  inline: true,
}

export const NoResize = Template.bind({})
NoResize.args = {
  placeholder: 'no resize',
  resize: false,
}

export const ExternalLabel = Template.bind({})
ExternalLabel.args = {
  ...DetailDescription.args,
  externalLabel: true,
}

const initialValue = 'Initial Value'

export const Controlled = () => {
  const [value, setValue] = useState(initialValue)
  const handleReset = () => setValue(initialValue)
  const handleClear = () => setValue('')
  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }
  return (
    <SpaceVertical>
      <Space>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleClear}>Clear</Button>
      </Space>
      <FieldTextArea
        width="100%"
        label="Controlled"
        value={value}
        onChange={handleChange}
      />
    </SpaceVertical>
  )
}

Controlled.parameters = {
  storyshots: { disable: true },
}
