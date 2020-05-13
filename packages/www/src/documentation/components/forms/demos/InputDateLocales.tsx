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
          options={toPairs(Locales).map((locale) => ({
            label: `${locale[0]} (${locale[1]})`,
            value: locale[1],
          }))}
          value={locale}
          onChange={handleLocaleChange}
          id="locale-picker"
        />
      </SelectWrapper>
      <InputDate key={locale} locale={locale as LocaleCodes} />
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
