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

import React, { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '../Layout'
import { IconButton, IconButtonProps } from '../Button'
import { Text } from '../Text'

export interface PaginationProps {
  className?: string
  current: number
  pages: number
  onChange: (page: number) => void
}

const PaginationButton: FC<IconButtonProps> = (props) => (
  <IconButton outline mx="xxsmall" {...props} />
)

const PaginationLayout: FC<PaginationProps> = ({
  className,
  current,
  pages,
  onChange,
}) => {
  if (pages <= 1) return null

  const first = () => onChange(1)
  const previous = () => onChange(current - 1)
  const next = () => onChange(current + 1)
  const last = () => onChange(pages)

  return (
    <Flex alignItems="center" className={className}>
      <PaginationButton
        label="First page of results"
        icon="DoubleChevronLeft"
        onClick={first}
        disabled={current <= 2}
      />
      <PaginationButton
        label="Previous page of results"
        icon="CaretLeft"
        onClick={previous}
        disabled={current === 1}
      />
      <Text fontSize="small" mx="xxsmall">
        <b>{current}</b> of {pages}
      </Text>
      <PaginationButton
        label="Next page of results"
        icon="CaretRight"
        onClick={next}
        disabled={pages - current === 0}
      />
      <PaginationButton
        mr="none"
        label="Last page of results"
        icon="DoubleChevronRight"
        onClick={last}
        disabled={pages - current <= 1}
      />
    </Flex>
  )
}

export const Pagination = styled(PaginationLayout)``
