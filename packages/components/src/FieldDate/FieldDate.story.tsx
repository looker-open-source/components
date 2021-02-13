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
import partial from 'lodash/partial'
import React, { useState, SyntheticEvent } from 'react'
import { Button } from '../Button'
import { Grid } from '../Layout'
import { Fieldset, FieldSelect, FieldSlider, FieldText } from '../Form'
import { Popover, PopoverContent } from '../Popover'
import { Paragraph } from '../Text'
import { Locales, LocaleCodes } from '../utils/i18n'
import { DateFormat } from '../DateFormat'
import { FieldDate, FieldDateProps } from '../FieldDate'

export default {
  component: FieldDate,
  title: 'FieldDate',
}

const Template: Story<FieldDateProps> = (args) => <FieldDate {...args} />

export const Basic = Template.bind({})
Basic.args = { defaultValue: new Date('July 25, 2020'), label: 'Example' }

export const Disabled = Template.bind({})
Disabled.args = { ...Basic.args, disabled: true }

export const Required = Template.bind({})
Required.args = { ...Basic.args, required: true }

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationMessage: { message: 'Error Message', type: 'error' },
}

type DayOfWeekNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6

export const Controlled = () => {
  const [controlledDate, setControlledDate] = useState<any>()

  function handleNextWeekClick() {
    setControlledDate(new Date('03/09/2020'))
  }

  return (
    <Popover
      content={
        <PopoverContent>
          <Button onClick={handleNextWeekClick}>Next Week</Button>
          <FieldDate value={controlledDate} onChange={setControlledDate} />
        </PopoverContent>
      }
    >
      <Button>
        {controlledDate ? (
          <>
            <DateFormat>{controlledDate}</DateFormat>
          </>
        ) : (
          'Select Dates'
        )}
      </Button>
    </Popover>
  )
}

Controlled.parameters = {
  storyshots: { disable: true },
}

export const Localized = () => {
  const [localizedDate, setLocalizedDate] = useState<Date | undefined>()
  const [locale, setLocale] = useState<Locales>(Locales.Italian)
  const [firstDayOfWeek, setFirstDayOfWeek] = useState<DayOfWeekNumbers>(1)
  const [months, setMonths] = useState([
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ])
  const [weekdaysShort, setWeekdaysShort] = useState([
    'Do',
    'Lu',
    'Ma',
    'Me',
    'Gi',
    'Ve',
    'Sa',
  ])

  const localizationProps = {
    firstDayOfWeek,
    months,
    weekdaysShort,
  }

  const handleFirstDayOfWeekChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setFirstDayOfWeek(parseInt(e.currentTarget.value, 10) as DayOfWeekNumbers)
  }

  const handleMonthChange = (
    key: number,
    e: SyntheticEvent<HTMLInputElement>
  ) => {
    setMonths(Object.assign([], months, { [key]: e.currentTarget.value }))
  }

  const handleWeekdaysShortChange = (
    key: number,
    e: SyntheticEvent<HTMLInputElement>
  ) => {
    setWeekdaysShort(
      Object.assign([], weekdaysShort, { [key]: e.currentTarget.value })
    )
  }

  const handleLocaleChange = (val: any) => {
    setLocale(val)
    setLocalizedDate(undefined)
  }

  return (
    <Fieldset>
      <Paragraph>
        Selected:
        {localizedDate && (
          <DateFormat locale={locale}>{localizedDate}</DateFormat>
        )}
      </Paragraph>

      <FieldDate
        onChange={setLocalizedDate}
        localization={localizationProps}
        dateStringLocale={locale as LocaleCodes}
        key={locale}
        m="small"
      />

      <FieldSelect
        label="Date String Format"
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
      <FieldSlider
        label="First Day Of Week"
        min={0}
        max={6}
        value={firstDayOfWeek}
        onChange={handleFirstDayOfWeekChange}
      />

      <Grid>
        <Fieldset legend="Months">
          {months.map((month, key) => (
            <FieldText
              value={month}
              key={key}
              onChange={partial(handleMonthChange, key)}
            />
          ))}
        </Fieldset>
        <Fieldset legend="Weekdays (short)">
          {weekdaysShort.map((weekday, key) => (
            <FieldText
              value={weekday}
              key={key}
              onChange={partial(handleWeekdaysShortChange, key)}
              maxLength={2}
            />
          ))}
        </Fieldset>
      </Grid>
    </Fieldset>
  )
}

Localized.parameters = {
  storyshots: { disable: true },
}
