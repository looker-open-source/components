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
import { ChevronLeft } from '@styled-icons/material-rounded/ChevronLeft'
import { ChevronRight } from '@styled-icons/material-rounded/ChevronRight'
import { Flex } from '../Layout'
import type { IconButtonProps } from '../Button'
import { IconButton } from '../Button'
import { Span } from '../Text'
import { useTranslation } from '../utils'
import { DoubleChevronLeft } from './DoubleChevronLeft'
import { DoubleChevronRight } from './DoubleChevronRight'

export interface PaginationProps {
  className?: string
  current: number
  pages: number
  onChange: (page: number) => void
  /**
   * If enabled controls will always be shown regardless of whether or not
   * there are any additional pages to be displayed.
   * @default false
   */
  alwaysVisible?: boolean
}

const PaginationButton = (props: IconButtonProps) => (
  <IconButton outline shape="square" mx="xxsmall" {...props} />
)

const PaginationLayout = ({
  alwaysVisible = false,
  className,
  current,
  pages,
  onChange,
}: PaginationProps) => {
  const { t } = useTranslation('Pagination')
  if (pages <= 1 && !alwaysVisible) return null

  const first = () => onChange(1)
  const previous = () => onChange(current - 1)
  const next = () => onChange(current + 1)
  const last = () => onChange(pages)

  return (
    <Flex alignItems="center" className={className}>
      <PaginationButton
        label={t('First page of results')}
        icon={<DoubleChevronLeft />}
        onClick={first}
        disabled={current === 1}
      />
      <PaginationButton
        label={t('Previous page of results')}
        icon={<ChevronLeft />}
        onClick={previous}
        disabled={current === 1}
      />
      <Span fontSize="small" mx="xxsmall">
        <b>{current}</b> {t('of')} {pages}
      </Span>
      <PaginationButton
        label={t('Next page of results')}
        icon={<ChevronRight />}
        onClick={next}
        disabled={pages - current === 0}
      />
      <PaginationButton
        mr="none"
        label={t('Last page of results')}
        icon={<DoubleChevronRight />}
        onClick={last}
        disabled={pages - current === 0}
      />
    </Flex>
  )
}

export const Pagination = styled(PaginationLayout)``
