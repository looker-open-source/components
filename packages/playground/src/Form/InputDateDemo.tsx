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
import React, { FC, useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import partial from 'lodash/partial'
import {
  Button,
  Box,
  InputDate,
  Fieldset,
  Heading,
  LocaleCodes,
  DateFormat,
  Popover,
  Locales,
  FieldSelect,
  InputText,
  FieldSlider,
  Grid,
} from '@looker/components'

type DayOfWeekNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6

export const InputDateDemo: FC = () => {
  const [date, setDate] = useState<Date | undefined>()
  const [localizedDate, setLocalizedDate] = useState<Date | undefined>()
  const [locale, setLocale] = useState<Locales>(Locales.Italian)
  const [firstDayOfWeek, setFirstDayOfWeek] = useState<DayOfWeekNumbers>(1 as 1)
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

  const [controlledDate, setControlledDate] = useState<any>()

  function handleNextWeekClick() {
    setControlledDate(new Date('03/09/2020'))
  }

  return (
    <DemoWrapper>
      <div>
        <HeadingGrid>
          <Heading as="h1">Basic Input</Heading>
          <SelectedDateWrapper>
            Selected: {date && new Intl.DateTimeFormat().format(date)}
          </SelectedDateWrapper>
        </HeadingGrid>
        <InputDate onChange={setDate} m="small" />
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">Controlled Component</Heading>
        </HeadingGrid>
        <Popover
          content={
            <Box p="small">
              <Button onClick={handleNextWeekClick}>Next Week</Button>
              <Box mt="large">
                <InputDate
                  value={controlledDate}
                  onChange={setControlledDate}
                />
              </Box>
            </Box>
          }
        >
          {(onClick, ref, className) => (
            <Button
              aria-haspopup="true"
              onClick={onClick}
              ref={ref}
              className={className}
            >
              {controlledDate ? (
                <>
                  <DateFormat>{controlledDate}</DateFormat>
                </>
              ) : (
                'Select Dates'
              )}
            </Button>
          )}
        </Popover>
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">I18n</Heading>
          <SelectedDateWrapper>
            Selected:{' '}
            {localizedDate && (
              <DateFormat locale={locale}>{localizedDate}</DateFormat>
            )}
          </SelectedDateWrapper>
        </HeadingGrid>
        <LocaleGrid>
          <div>
            <InputDate
              onChange={setLocalizedDate}
              localization={localizationProps}
              dateFormatLocale={locale as LocaleCodes}
              key={locale}
              m="small"
            />
          </div>
          <div>
            <Grid gap="large" columns={1}>
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
            </Grid>
          </div>
          <Fieldset>
            <legend>Months</legend>
            {months.map((month, key) => (
              <InputText
                value={month}
                key={key}
                onChange={partial(handleMonthChange, key)}
              />
            ))}
          </Fieldset>
          <Fieldset>
            <legend>Weekdays (short)</legend>
            {weekdaysShort.map((weekday, key) => (
              <InputText
                value={weekday}
                key={key}
                onChange={partial(handleWeekdaysShortChange, key)}
                maxLength={2}
              />
            ))}
          </Fieldset>
        </LocaleGrid>
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">defaultValue</Heading>
        </HeadingGrid>
        <InputDate defaultValue={new Date('November 21, 2019')} m="small" />
      </div>
    </DemoWrapper>
  )
}

const DemoWrapper = styled.div`
  padding: 2rem;
`

const HeadingGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  border-bottom: 3px solid ${({ theme }) => theme.colors.ui3};
  padding-top: 3rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  grid-gap: 1rem;
  align-items: center;
`

const SelectedDateWrapper = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.inform};
`

const LocaleGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-gap: 2rem;
`
