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

import type { KeyboardEvent } from 'react'
import type { ScaleOrdinal } from 'd3-scale'
import type { CPie } from '@looker/visualizations-adapters'
import React, { useState } from 'react'
import { LegendOrdinal } from '@visx/legend'
import type { DefaultTheme } from 'styled-components'
import styled, { css, useTheme } from 'styled-components'
import { useMeasuredElement, useCallbackRef } from '@looker/components'
import pick from 'lodash/pick'
import { useTranslation } from '../utils'
import { PieLegendControls } from './PieLegendControls'
import { getLabelContent } from './getLabelContent'
import type { LegendOrientations } from './types'

type PieLegendProps = {
  /*
   * A hash of relevant legend settings, such as position
   */
  legendConfig: CPie['legend']
  /*
   * The domain and range to render within the legend
   */
  scale: ScaleOrdinal<string, string>
  /*
   * Key/Value data to derive legend values
   */
  data: Record<string, number>
  /*
   * The accumulated total value reperesented by the pie chart.
   * For use in deriving percentages for each slice.
   */
  measureTotal: number
  /*
   * The height (in pixels) available for pie/legend content.
   */
  height: number
  /*
   * The width (in pixels) available for pie/legend content.
   */
  width: number
}

const getLegendStyle = (
  scale: ScaleOrdinal<string, string>,
  orientation: LegendOrientations,
  theme: DefaultTheme
) => {
  const domain = scale.domain()
  const rows = domain.length > 3 ? 3 : 1

  return orientation === 'horizontal'
    ? {
        display: `grid`,
        gridTemplateRows: `repeat(${rows}, auto )`,
        gridColumnGap: theme.space.small,
        gridAutoFlow: `column`,
      }
    : {}
}

export const PieLegend = ({
  legendConfig,
  scale,
  data,
  measureTotal,
  height,
  width,
}: PieLegendProps) => {
  const { t } = useTranslation('PieLegend')

  // track state for scrolling through very long legends
  const [page, setPage] = useState(0)

  const theme = useTheme()
  const { position } = legendConfig || {}
  const ORIENTATION: LegendOrientations =
    position === 'top' || position === 'bottom' ? 'horizontal' : 'vertical'

  // find the dimensions of content and container to trigger pagination behavior
  const [contentElement, contentRef] = useCallbackRef(null)
  const [{ height: contentHeight, width: contentWidth }] =
    useMeasuredElement(contentElement)
  const [containerElement, containerRef] = useCallbackRef(null)
  const [containerElementRect] = useMeasuredElement(containerElement)

  // containerDimensions falls back to height prop in jest testing environment
  const containerHeight =
    typeof DOMRect === 'function' ? containerElementRect.height : height
  const containerWidth =
    typeof DOMRect === 'function' ? containerElementRect.width : width

  const pageSize =
    ORIENTATION === 'horizontal' ? containerWidth * 0.9 : containerHeight * 0.9
  const totalPages =
    ORIENTATION === 'horizontal'
      ? Math.floor(contentWidth / Math.max(pageSize, 1))
      : Math.floor(contentHeight / Math.max(pageSize, 1))

  // event handlers
  const handleNextPage = () => {
    setPage(Math.min(page + 1, totalPages))
  }

  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 0))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      handleNextPage()
      e.preventDefault()
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      handlePrevPage()
      e.preventDefault()
    }
  }

  return (
    <LegendWrapper
      maxHeight={height}
      maxWidth={width}
      orientation={ORIENTATION}
    >
      <LegendContent
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="figure"
        aria-label={t('Legend page {{page}} of {{totalPages}}', {
          page: page + 1,
          totalPages: totalPages + 1,
        })}
      >
        <ContentPositioner
          pageNumber={page}
          pageSize={pageSize}
          orientation={ORIENTATION}
          ref={contentRef}
        >
          <LegendOrdinal
            labelFormat={label => {
              const datum = pick(data, label as string)
              return getLabelContent(measureTotal, datum, legendConfig)
            }}
            scale={scale}
            shape="circle"
            style={getLegendStyle(scale, ORIENTATION, theme)}
          />
        </ContentPositioner>
      </LegendContent>
      <PieLegendControls
        containerRect={{ width: containerWidth, height: containerHeight }}
        contentRect={{ width: contentWidth, height: contentHeight }}
        orientation={ORIENTATION}
        page={page}
        totalPages={totalPages}
        handleNextClick={handleNextPage}
        handlePrevClick={handlePrevPage}
      />
    </LegendWrapper>
  )
}

type OrientationConfig = {
  orientation: LegendOrientations
}

type LegendWrapperProps = {
  maxHeight: number
  maxWidth: number
} & OrientationConfig

const LegendWrapper = styled.div<LegendWrapperProps>`
  border: 1px solid transparent;
  display: grid;
  max-height: ${({ maxHeight }) => maxHeight}px;
  max-width: ${({ maxWidth }) => maxWidth}px;
  overflow: hidden;
  position: relative;
  ${({ orientation, theme }) => {
    if (orientation === 'horizontal') {
      return css`
        align-items: center;
        grid-template-columns: 1fr auto;
      `
    } else {
      return css`
        grid-template-rows: 1fr auto;
        padding: ${theme.space.medium} 0;
      `
    }
  }}
  width: fit-content;
  &:focus {
    border-color: ${({ theme }) => theme.colors.key};
  }
`

const LegendContent = styled.figure`
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  .visx-legend-label {
    width: max-content;
  }
`

type ContentPositionerProps = {
  pageNumber: number
  pageSize: number
} & OrientationConfig

const ContentPositioner = styled.div<ContentPositionerProps>`
  overflow: visible;
  transition: transform 300ms;
  width: max-content;
  ${({ orientation, pageNumber, pageSize }) => {
    if (orientation === 'horizontal') {
      // slide content left/right
      return css`
        transform: translateX(${pageNumber * pageSize * -1}px);
      `
    } else {
      // slide content up/down
      return css`
        transform: translateY(${pageNumber * pageSize * -1}px);
      `
    }
  }}
`
