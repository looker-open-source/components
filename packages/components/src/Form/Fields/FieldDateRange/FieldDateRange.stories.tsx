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
import React, { useState } from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import { defaultArgTypes as argTypes } from '../../../../../../apps/storybook/src/defaultArgTypes'
import type { RangeModifier } from '../../../Calendar'
import type { FieldInputDateRangeProps } from './FieldDateRange'
import { FieldDateRange } from './FieldDateRange'

export type DayOfWeekNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6

export default {
  argTypes,
  component: FieldDateRange,
  title: 'FieldDateRange',
}

const Template: Story<
  FieldInputDateRangeProps & { externalLabel: boolean }
> = ({ externalLabel = true, value, ...args }) => {
  const [range, setRange] = useState<RangeModifier>(value)
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel } }}
    >
      <FieldDateRange {...args} value={range} onChange={setRange} />
    </ExtendComponentsThemeProvider>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  externalLabel: true,
  label: 'Pick A Date',
  value: {},
}

export const Value = Template.bind({})
Value.args = {
  externalLabel: true,
  label: 'Pick A Date',
  value: {
    from: new Date('May 18, 2020'),
    to: new Date('May 21, 2020'),
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Value.args,
  disabled: true,
}

export const FloatingLabel = Template.bind({})
FloatingLabel.args = {
  ...Value.args,
  externalLabel: false,
}

export const FloatingLabelDisabledNoDefaultValue = Template.bind({})
FloatingLabelDisabledNoDefaultValue.args = {
  disabled: true,
  externalLabel: false,
  label: 'Pick A Date',
  value: {},
}

// Disabling screenshots for now on stories using today's date
FloatingLabelDisabledNoDefaultValue.parameters = {
  storyshots: { disable: true },
}

export const FloatingLabelNoDefaultValue = Template.bind({})
FloatingLabelNoDefaultValue.args = {
  externalLabel: false,
  label: 'Pick A Date',
  value: {},
}

// Disabling screenshots for now on stories using today's date
FloatingLabelNoDefaultValue.parameters = {
  storyshots: { disable: true },
}

export const ControlledFloatingLabel = () => {
  const [range, setRange] = useState<FieldInputDateRangeProps['value']>({
    from: new Date('May 18, 2020'),
    to: new Date('May 21, 2020'),
  })
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldDateRange
        externalLabel={false}
        label="Controlled"
        value={range}
        onChange={setRange}
      />
    </ExtendComponentsThemeProvider>
  )
}

export const Error = Template.bind({})
Error.args = {
  ...Value.args,
  validationMessage: { message: 'Field Disabled', type: 'error' },
}
