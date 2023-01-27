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
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from '@styled-icons/material'
import { IconButton } from '@looker/components'
import styled, { css } from 'styled-components'
import type { LegendOrientations } from './types'
import { useTranslation } from '../utils'

type PieLegendControlsProps = {
  contentRect: { width: number; height: number }
  containerRect: { width: number; height: number }
  orientation: LegendOrientations
  page: number
  totalPages: number
  handleNextClick: () => void
  handlePrevClick: () => void
}

export const PieLegendControls = ({
  orientation,
  contentRect,
  containerRect,
  page,
  totalPages,
  handleNextClick,
  handlePrevClick,
}: PieLegendControlsProps) => {
  const { t } = useTranslation('PieLegendControls')
  return (
    <>
      {/* Vertical layout */}
      {contentRect.height > containerRect.height &&
        orientation === 'vertical' && (
          <LegendControls orientation={orientation}>
            <CondensedIconButton
              shape="square"
              p="small"
              icon={<KeyboardArrowUp />}
              onClick={handlePrevClick}
              disabled={page === 0}
              size="large"
              label={t('Previous page')}
            />
            <span>
              {page + 1}/{totalPages + 1}
            </span>
            <CondensedIconButton
              shape="square"
              icon={<KeyboardArrowDown />}
              onClick={handleNextClick}
              disabled={page === totalPages}
              p="small"
              size="large"
              label={t('Next page')}
            />
          </LegendControls>
        )}

      {/* Horizontal layout */}
      {contentRect.width > containerRect.width &&
        orientation === 'horizontal' && (
          <LegendControls orientation={orientation}>
            <CondensedIconButton
              shape="square"
              p="small"
              icon={<KeyboardArrowRight />}
              onClick={handleNextClick}
              disabled={page === totalPages}
              size="large"
              label={t('Next page')}
            />
            <span>
              {page + 1}/{totalPages + 1}
            </span>
            <CondensedIconButton
              shape="square"
              icon={<KeyboardArrowLeft />}
              onClick={handlePrevClick}
              disabled={page === 0}
              p="small"
              size="large"
              label={t('Previous page')}
            />
          </LegendControls>
        )}
    </>
  )
}

const LegendControls = styled.div<{ orientation: LegendOrientations }>`
  align-items: center;
  display: grid;
  grid-gap: ${({ theme }) => theme.space.xxsmall};
  justify-items: center;
  ${({ orientation, theme }) => {
    if (orientation === 'horizontal') {
      return css`
        border-left: 1px solid ${theme.colors.ui2};
        grid-template-rows: auto auto auto;
        padding-left: ${theme.space.xxsmall};
      `
    } else {
      return css`
        border-top: 1px solid ${theme.colors.ui2};
        grid-template-columns: auto auto auto 1fr;
        padding-top: ${theme.space.xxsmall};
      `
    }
  }}
`

const CondensedIconButton = styled(IconButton)`
  height: auto;
  padding: 0;
`
