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
import React, { useState } from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { ExtendComponentsThemeProvider, Paragraph } from '@looker/components'
import it from 'date-fns/locale/it'
import type { DayOfWeekNumbers } from '../stories/LocaleSettings'
import { LocaleSettings } from '../stories/LocaleSettings'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import { DateFormat } from '../DateFormat'
import type { FieldInputDateRangeProps } from './FieldDateRange'
import { FieldDateRange } from './FieldDateRange'

interface DateRange {
  from?: Date
  to?: Date
}

export default {
  argTypes,
  component: FieldDateRange,
  title: 'Date / FieldDateRange',
}

const Template: Story<FieldInputDateRangeProps & { externalLabel: boolean }> =
  ({ externalLabel = true, ...args }) => (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel } }}
    >
      <FieldDateRange {...args} />
    </ExtendComponentsThemeProvider>
  )

export const Basic = Template.bind({})
Basic.args = {
  defaultValue: {
    from: new Date('May 18, 2020'),
    to: new Date('May 21, 2020'),
  },
  externalLabel: true,
  label: 'Pick A Date',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Basic.args,
  disabled: true,
}

export const FloatingLabel = Template.bind({})
FloatingLabel.args = {
  ...Basic.args,
  externalLabel: false,
}

export const FloatingLabelDisabledNoDefaultValue = Template.bind({})
FloatingLabelDisabledNoDefaultValue.args = {
  disabled: true,
  externalLabel: false,
  label: 'Pick A Date',
}

export const FloatingLabelNoDefaultValue = Template.bind({})
FloatingLabelNoDefaultValue.args = {
  externalLabel: false,
  label: 'Pick A Date',
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

export const ControlledNoValueFloatingLabel = () => {
  const [range, setRange] = useState<FieldInputDateRangeProps['value']>()
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
  ...Basic.args,
  validationMessage: { message: 'Field Disabled', type: 'error' },
}

export const Localized = () => {
  const [range, setDateRange] = useState<DateRange | undefined>()
  const [locale, setLocale] = useState(it)
  const [firstDayOfWeek, setFirstDayOfWeek] = useState<DayOfWeekNumbers>(
    locale.options?.weekStartsOn || 0
  )
  const clearDate = () => setDateRange(undefined)

  return (
    <>
      <Paragraph>
        Selected:
        <DateFormat locale={locale}>{range?.from}</DateFormat>
        {` - `}
        <DateFormat locale={locale}>{range?.to}</DateFormat>
      </Paragraph>
      <FieldDateRange onChange={setDateRange} locale={locale} />
      <LocaleSettings
        setLocale={setLocale}
        firstDayOfWeek={firstDayOfWeek}
        setFirstDayOfWeek={setFirstDayOfWeek}
        clearDate={clearDate}
      />
    </>
  )
}

Localized.parameters = {
  storyshots: { disable: true },
}
