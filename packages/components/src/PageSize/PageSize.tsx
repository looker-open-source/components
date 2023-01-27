/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import React from 'react'
import styled from 'styled-components'
import { Select } from '../Form'
import { useTranslation } from '../utils'

export interface PageSizeProps {
  className?: string
  /**
   * Total number of items on all pages
   */
  total: number
  /**
   * Number of items per page
   * Note: The first value passed into this prop should a number included in the options array prop (or defaultPageSizes)
   */
  value: number
  /**
   * Array of page size options
   */
  options?: number[]
  /**
   * Callback that triggers when new value is selected
   */
  onChange: (value: number) => void
  /**
   * If enabled controls will always be shown regardless of whether or not
   * there are any additional pages to be displayed.
   * @default false
   */
  alwaysVisible?: boolean
}

const defaultPageSizes = [10, 25, 50, 100]

const stringToSelectOption = (option: string) => ({
  label: String(option),
  value: String(option),
})

const arrayToSelectOptions = (options: Array<string | number>) =>
  options.map(option => stringToSelectOption(String(option)))

export const PageSizeLayout = ({
  alwaysVisible = false,
  value,
  total,
  className,
  onChange,
  options = defaultPageSizes,
}: PageSizeProps) => {
  const { t } = useTranslation('PageSize')

  const handleOnChange = (newValue: string) => onChange(Number(newValue))

  return alwaysVisible || Math.min(...options) < total ? (
    <div className={className}>
      {t('Display')}
      <Select
        width="5rem"
        mx="xsmall"
        options={arrayToSelectOptions(options)}
        value={String(value > total ? total : value)}
        onChange={handleOnChange}
        disabled={options.every(option => option > total)}
      />
      <span>
        {t('of')} {total}
      </span>
    </div>
  ) : null
}

export const PageSize = styled(PageSizeLayout)`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
`
