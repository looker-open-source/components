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
import {
  Button,
  DateFormat,
  FieldDateRange,
  Fieldset,
  FieldSelect,
  InputDateRange,
  Locales,
  Paragraph,
  Popover,
  PopoverContent,
} from '@looker/components'

interface DateRange {
  from?: Date
  to?: Date
}

export const All = () => (
  <Fieldset>
    <Basic />
    <Disabled />
    <Controlled />
    <Localized />
  </Fieldset>
)

export default {
  component: All,
  title: 'Forms/DateRange',
}

export const Basic = () => <FieldDateRange />
export const Disabled = () => <FieldDateRange disabled />

export const Controlled: FC = () => {
  const startDate = new Date()
  startDate.setDate(9)
  const endDate = new Date()
  endDate.setDate(15)

  const [controlledDateRange, setControlledDateRange] = useState<any>()

  const handleNextWeekClick = () => {
    setControlledDateRange({
      from: new Date('03/02/2020'),
      to: new Date('03/09/2020'),
    })
  }

  return (
    <Popover
      content={
        <PopoverContent>
          <Button onClick={handleNextWeekClick}>Next Week</Button>
          <InputDateRange
            value={controlledDateRange}
            onChange={setControlledDateRange}
          />
        </PopoverContent>
      }
    >
      {(onClick, ref, className) => (
        <Button
          aria-haspopup="true"
          onClick={onClick}
          ref={ref}
          className={className}
        >
          {controlledDateRange ? (
            <>
              <DateFormat>{controlledDateRange.from}</DateFormat> &mdash;
              <DateFormat>{controlledDateRange.to}</DateFormat>
            </>
          ) : (
            'Select Dates'
          )}
        </Button>
      )}
    </Popover>
  )
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
