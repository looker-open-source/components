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
import styled, { css, useTheme } from 'styled-components'
import {
  getSeriesMax,
  getSeriesMin,
  pickSeriesByName,
} from '@looker/visualizations-adapters'
import type {
  ChartData,
  CCartesian,
  LineProps,
  CSeriesSize,
  SDKRecord,
} from '@looker/visualizations-adapters'
import { Tooltip as VisxTooltip } from '@visx/xychart'
import type { TooltipData } from '@visx/xychart'
import { SpaceVertical, TooltipContent } from '@looker/components'
import get from 'lodash/get'
import { Glyph } from '../Glyph'
import {
  seriesLabelFormatter,
  getRelativeGlyphSize,
  getDefaultGlyphSize,
  useTranslation,
} from '../utils'
import { DLGroup } from '../DLGroup'
import numeral from 'numeral'

export const tooltipStyles = css`
  background-color: ${({ theme }) => theme.colors.inverse};
  border-radius: ${({ theme }) => theme.radii.medium};
  color: ${({ theme }) => theme.colors.inverseOn};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  padding: ${({ theme }) => theme.space.u3};
  pointer-events: none; /* Prevents mouse from falling onto tooltip and interrupting horizontal hover flow on charts */
`

export type TooltipProps = Pick<LineProps, 'fields'> & {
  className?: string
  config: CCartesian
  data: ChartData
  showDatumGlyph?: boolean
  snapToDatum?: boolean
}

/**
 * XYTooltip component for charts that leverage visx's XYChart component like Line
 * and Area with 2 main purposes:
 * 1. Override default styling on visx Tooltip component
 * 2. Construct a renderTooltip function to be passed to nested visx Tooltip component
 *
 * @prop config: Vis Config Object
 * @prop data: Query response
 * @prop showDatumGlyph: Render the glyph on hover
 * @prop snapToDatum: Toggle tooltip position between data point position or mouse position
 */
export const XYTooltip = styled(
  ({
    className,
    config,
    data,
    fields,
    snapToDatum = true,
    showDatumGlyph = true,
  }: TooltipProps) => {
    const { t } = useTranslation('XYTooltip')
    const theme = useTheme()
    const { tooltips, series } = config
    if (!tooltips) {
      return <></>
    }

    const renderTooltip = ({
      tooltipData,
    }: {
      tooltipData?: TooltipData<SDKRecord>
    }) => {
      const nearestDatumMeasureName = tooltipData?.nearestDatum?.key || ''
      const nearestDatumIndex = tooltipData?.nearestDatum?.index || 0
      const datum = data[nearestDatumIndex]

      const nearestSeries = pickSeriesByName(
        fields,
        config,
        nearestDatumMeasureName
      )
      /**
       * In the event there is more than 1 dimension, we'll hide the label
       * and instead just display the concatenation of all dimension values
       */
      const dimensionLabel =
        fields.dimensions.length === 1 ? fields.dimensions[0].label_short : ''

      const valueFormatted = numeral(datum[nearestDatumMeasureName]).format(
        nearestSeries.value_format
      )
      const { size_by } = nearestSeries
      const sizeBySeries = size_by ? get(series, size_by) : {}
      const sizeByValueFormatted = numeral(
        datum[nearestSeries.size_by || '']
      ).format(sizeBySeries.value_format)

      return (
        <TooltipContent>
          <StyledDL>
            <SpaceVertical gap="u3">
              <DLGroup label={dimensionLabel} value={datum.dimension} />
              <DLGroup
                label={seriesLabelFormatter(
                  fields,
                  config,
                  nearestDatumMeasureName
                )}
                value={valueFormatted}
              />
              {nearestSeries.size_by && (
                <DLGroup
                  preface={t('Points sized by')}
                  label={seriesLabelFormatter(
                    fields,
                    config,
                    nearestSeries.size_by
                  )}
                  value={sizeByValueFormatted}
                />
              )}
            </SpaceVertical>
          </StyledDL>
        </TooltipContent>
      )
    }

    const glyphSize = (
      sizeByData = 0,
      line_width = 3,
      size_by: CSeriesSize['size_by']
    ) => {
      const defaultSize = getDefaultGlyphSize(line_width) + 20 + line_width * 4

      if (size_by) {
        const sizeByMin = getSeriesMin(size_by, data)
        const sizeByMax = getSeriesMax(size_by, data)
        return sizeByMin !== sizeByMax
          ? getRelativeGlyphSize(sizeByData, sizeByMin, sizeByMax)
          : defaultSize
      }

      return defaultSize
    }

    const styleObj = (size: number, size_by: CSeriesSize['size_by']) => {
      // A decreasing linear function defines the scaleValue, so that
      // when size is ~80 scaleValue = 1.1, but when size is ~8000 scaleValue = 1.01
      const scaleValue = Math.round(-0.001 * size + 20) / 100 + 0.9
      return {
        stroke: theme.colors.background,
        transform: `scale(${scaleValue}, ${scaleValue})`,
        ...(size_by
          ? {
              opacity: `0.5`,
              filter: `drop-shadow(1px 1px 3px rgb(0 0 0 / 0.5))`,
            }
          : {}),
      }
    }

    return (
      <VisxTooltip
        className={className}
        detectBounds
        renderTooltip={renderTooltip}
        showDatumGlyph={showDatumGlyph}
        snapTooltipToDatumX={snapToDatum}
        snapTooltipToDatumY={snapToDatum}
        unstyled
        applyPositionStyle
        renderGlyph={({ color, key, datum }) => {
          const nearestSeries = pickSeriesByName(fields, config, key)
          const { line_width = 1, size_by } = nearestSeries
          const size = glyphSize(
            get(datum, size_by || '') as number,
            line_width,
            size_by
          )

          const style = styleObj(size, size_by)
          return (
            <Glyph
              series={{ ...nearestSeries, line_width: 3 }}
              top={0}
              left={0}
              size={size}
              fill={color}
              styleObj={style}
            />
          )
        }}
      />
    )
  }
)`
  ${tooltipStyles}
`

const StyledDL = styled.dl`
  margin: 0;
`
