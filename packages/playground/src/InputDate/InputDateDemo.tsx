import React, { FC, useState } from 'react'
import styled from 'styled-components'
import {
  InputDate,
  Select,
  Heading,
  LocaleCodes,
  DateFormat,
} from '@looker/components'

export const InputDateDemo: FC = () => {
  const [date, setDate] = useState()
  const [localizedDate, setLocalizedDate] = useState()
  const [locale, setLocale] = useState('ko')

  const handleLocaleChange = (val: any) => {
    setLocale(val)
    setLocalizedDate('')
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
              <DateFormat locale={locale}>{localizedDate}</DateFormat>
            )}
          </SelectedDateWrapper>
        </HeadingGrid>
        <div>
          <InputDate
            onChange={setLocalizedDate}
            locale={locale as LocaleCodes}
            key={locale}
            m="small"
          />
        </div>
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
