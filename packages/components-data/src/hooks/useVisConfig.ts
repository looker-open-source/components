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

import type { CAll, KnownChartTypes } from '@looker/visualizations-adapters'
import merge from 'lodash/merge'
import {
  buildChartConfig,
  buildTrackingTag,
  CHART_TYPE_MAP,
} from '@looker/visualizations-adapters'
import { useColorPalette } from './useColorPalette'
import { useQueryData, useQueryMetadata } from '.'

/**
 * A shared hook for querying vis config data from the SDK, merging with user overrides,
 * and running config transformations to set defaults and normalize response.
 *
 * @param id a numeric query id
 * @param configOverrides user config overrides to merge with the sdk response
 * @returns final visConfig object and api state
 */

export const useVisConfig = (id: number, configOverrides?: Partial<CAll>) => {
  /*
   * Check for stored values
   * -----------------------------------------------------------
   */

  const {
    metadata: { vis_config },
    isOK: isMetadataOK,
    error,
    isPending,
  } = useQueryMetadata(id)

  /**
   * Used for internal tracking purposes
   */
  const { type = CHART_TYPE_MAP.default } = {
    ...vis_config,
    ...configOverrides,
  }

  const { data, fields } = useQueryData(
    id,
    buildTrackingTag(CHART_TYPE_MAP[type as KnownChartTypes] || type)
  )

  const {
    colorPalette,
    isPending: isColorPalettePending,
    isOK: isColorPaletteOK,
  } = useColorPalette(vis_config?.color_application)

  /*
   * Transform and normalize config for use in visualizations
   * -----------------------------------------------------------
   */

  const configWithOverrides = merge(
    {},
    vis_config,
    {
      default_series_colors: colorPalette,
    },
    configOverrides
  )

  const transformedConfig = buildChartConfig({
    config: configWithOverrides,
    data,
    fields,
  })

  return {
    isOK: isMetadataOK && isColorPaletteOK,
    isPending: isPending || isColorPalettePending,
    visConfig: transformedConfig,
    ...(error ? { error } : {}),
  }
}
