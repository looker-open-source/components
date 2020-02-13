import React, { useState } from 'react'
import toPairs from 'lodash/toPairs'
import styled from 'styled-components'
import {
  InputDate,
  Select,
  LocaleCodes,
  Locales,
  Label,
} from '@looker/components'

export const InputDateLocales = () => {
  const [locale, setLocale] = useState('en')

  const handleLocaleChange = (val: string) => {
    setLocale(val)
  }

  return (
    <DemoWrapper>
      <SelectWrapper>
        <Label htmlFor="locale-picker" fontSize="medium">
          Select locale
        </Label>
        <Select
          options={toPairs(Locales).map(locale => ({
            label: `${locale[0]} (${locale[1]})`,
            value: locale[1],
          }))}
          value={locale}
          onChange={handleLocaleChange}
          id="locale-picker"
        />
      </SelectWrapper>
      <InputDate locale={locale as LocaleCodes} />
    </DemoWrapper>
  )
}

const SelectWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.charcoal300};
  padding: ${({ theme }) => theme.space.small} 0;
`

const DemoWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.space.xlarge};
`
