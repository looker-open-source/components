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
import React, { FC, useState } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Locales } from '../utils/i18n'
import { FieldSelect } from '../Form/Fields/FieldSelect'
import { Paragraph } from '../Text/Paragraph'
import { DateFormat } from '../DateFormat'
import { FieldDateRange, FieldInputDateRangeProps } from '.'

interface DateRange {
  from?: Date
  to?: Date
}

export default {
  component: FieldDateRange,
  title: 'FieldDateRange',
}

const Template: Story<FieldInputDateRangeProps> = (args) => (
  <FieldDateRange {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  defaultValue: {
    from: new Date('May 18, 2020'),
    to: new Date('May 21, 2020'),
  },
  label: 'Pick A Date',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Pick A Date',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Pick A Date',
  validationMessage: { message: 'Field Disabled', type: 'error' },
}

export const Localized: FC = () => {
  const startDate = new Date()
  startDate.setDate(9)
  const endDate = new Date()
  endDate.setDate(15)

  const [localizedDate, setLocalizedDate] = useState<DateRange | undefined>()
  const [locale, setLocale] = useState<Locales>(Locales.Korean)

  const handleLocaleChange = (val: any) => {
    setLocale(val)
    setLocalizedDate(undefined)
  }

  return (
    <>
      <Paragraph>
        Selected:
        <DateFormat locale={locale}>{localizedDate?.from}</DateFormat>
        {` - `}
        <DateFormat locale={locale}>{localizedDate?.to}</DateFormat>
      </Paragraph>
      <FieldSelect
        label="Locale"
        options={[
          { label: 'Arabic (ar)', value: 'ar' },
          { label: 'German (de)', value: 'de' },
          { label: 'English (en)', value: 'en' },
          { label: 'Spanish (es)', value: 'es' },
          { label: 'French (fr)', value: 'fr' },
          { label: 'Italian (it)', value: 'it' },
          { label: 'Japanese (ja)', value: 'ja' },
          { label: 'Korean (ko)', value: 'ko' },
          { label: 'Dutch (nl)', value: 'nl' },
          { label: 'Polish (pl)', value: 'pl' },
          { label: 'Portuguese (pt)', value: 'pt' },
          { label: 'Portuguese - Brazil (pt-br)', value: 'pt-br' },
          { label: 'Russian (ru)', value: 'ru' },
          { label: 'Swedish (sv)', value: 'sv' },
          { label: 'Turkish (tr)', value: 'tr' },
          { label: 'Chinese - China (zh-cn)', value: 'zh-cn' },
          { label: 'Chinese - Taiwan (zh-tw)', value: 'zh-tw' },
        ]}
        value={locale}
        onChange={handleLocaleChange}
        width="auto"
      />

      <FieldDateRange onChange={setLocalizedDate} />
    </>
  )
}
