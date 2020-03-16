import React, { FC, useState } from 'react'
import styled from 'styled-components'
import {
  Select,
  Heading,
  LocaleCodes,
  DateFormat,
  InputDateRange,
  Popover,
  Button,
  Box,
} from '@looker/components'

interface DateRange {
  from?: Date
  to?: Date
}

export const InputDateRangeDemo: FC = () => {
  const startDate = new Date()
  startDate.setDate(9)
  const endDate = new Date()
  endDate.setDate(15)

  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [localizedDate, setLocalizedDate] = useState<DateRange | undefined>()
  const [locale, setLocale] = useState('ko')

  const handleRangeChange = (range: any) => {
    setDateRange(range)
  }

  const handleLocaleChange = (val: any) => {
    setLocale(val)
    setLocalizedDate(undefined)
  }

  const [controlledDateRange, setControlledDateRange] = useState<any>()

  function handleNextWeekClick() {
    setControlledDateRange({
      from: new Date('03/02/2020'),
      to: new Date('03/09/2020'),
    })
  }

  return (
    <DemoWrapper>
      <div>
        <HeadingGrid>
          <Heading as="h1">Basic Input</Heading>
          <SelectedDateWrapper>
            Selected:{' '}
            {dateRange && (
              <>
                <DateFormat>{dateRange?.from}</DateFormat> &mdash;{' '}
                <DateFormat>{dateRange?.to}</DateFormat>
              </>
            )}
          </SelectedDateWrapper>
        </HeadingGrid>
        <InputDateRange onChange={handleRangeChange} />
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
                <InputDateRange
                  value={controlledDateRange}
                  onChange={setControlledDateRange}
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
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">I18n</Heading>
          <div>
            <Select
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
          </div>
          <SelectedDateWrapper>
            Selected:{' '}
            {localizedDate && (
              <>
                <DateFormat locale={locale}>{localizedDate?.from}</DateFormat>{' '}
                &mdash;{' '}
                <DateFormat locale={locale}>{localizedDate?.to}</DateFormat>
              </>
            )}
          </SelectedDateWrapper>
        </HeadingGrid>
        <div>
          <InputDateRange
            onChange={setLocalizedDate}
            locale={locale as LocaleCodes}
            key={locale}
          />
        </div>
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">defaultValue</Heading>
        </HeadingGrid>
        <InputDateRange defaultValue={{ from: startDate, to: endDate }} />
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
  border-bottom: 3px solid ${({ theme }) => theme.colors.palette.charcoal300};
  padding-top: 3rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  grid-gap: 1rem;
  align-items: center;
`

const SelectedDateWrapper = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.palette.blue500};
`
