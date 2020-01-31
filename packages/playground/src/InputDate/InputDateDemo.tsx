import React, { FC, useState } from 'react'
import styled from 'styled-components'
import toPairs from 'lodash/toPairs'
import {
  InputDate,
  Flex,
  Select,
  Heading,
  LocaleCodes,
} from '@looker/components'

export const InputDateDemo: FC = () => {
  const [smallDate, setSmallDate] = useState()
  const [mediumDate, setMediumDate] = useState()
  const [largeDate, setLargeDate] = useState()
  const [locale, setLocale] = useState(LocaleCodes.En)

  const handleLocaleChange = (val: any) => {
    setLocale(val)
  }

  return (
    <DemoWrapper>
      <Heading as="h1">Sizes</Heading>
      <Flex>
        <div>
          <InputDate size="small" onChange={setSmallDate} />
          {smallDate && (
            <SelectedDateWrapper>
              Selected: {new Intl.DateTimeFormat().format(smallDate)}
            </SelectedDateWrapper>
          )}
        </div>
        <div>
          <InputDate onChange={setMediumDate} />
          {mediumDate && (
            <SelectedDateWrapper>
              Selected: {new Intl.DateTimeFormat().format(mediumDate)}
            </SelectedDateWrapper>
          )}
        </div>
        <div>
          <InputDate size="large" onChange={setLargeDate} />
          {largeDate && (
            <SelectedDateWrapper>
              Selected: {new Intl.DateTimeFormat().format(largeDate)}
            </SelectedDateWrapper>
          )}
        </div>
      </Flex>
      <div>
        <Heading as="h1">I18n</Heading>
        <I18Grid>
          <Select
            options={toPairs(LocaleCodes).map(locale => ({
              label: locale[0],
              value: locale[1],
            }))}
            value={locale}
            onChange={handleLocaleChange}
            width="auto"
            mt="medium"
          />
          <div>
            <InputDate locale={locale} />
          </div>
        </I18Grid>
      </div>
    </DemoWrapper>
  )
}

const DemoWrapper = styled.div`
  padding: 2rem;
`

const I18Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

const SelectedDateWrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.palette.charcoal400};
  border-top: 1px solid #ccc;
  padding-top: 0.75rem;
  margin-top: 0.5rem;
`
