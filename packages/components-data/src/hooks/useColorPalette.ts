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

import type {
  IError,
  IColorCollection,
  IContinuousPalette,
  IDiscretePalette,
} from '@looker/sdk'
import type { SDKResponse } from '@looker/sdk-rtl'
import find from 'lodash/find'
import useSWR from 'swr'
import { DEFAULT_SERIES_COLORS } from '@looker/visualizations-adapters'
import type { ColorApplication } from '@looker/visualizations-adapters'
import { getErrorResponse, isErrorResponse } from '../utils'
import { useSDK } from './useSDK'

type RunQueryReturnType = SDKResponse<IColorCollection, IError>

const isDiscretePalette = (
  palette: IDiscretePalette | IContinuousPalette
): palette is IDiscretePalette => {
  return 'colors' in palette
}

const isContinuousPalette = (
  palette: IDiscretePalette | IContinuousPalette
): palette is IContinuousPalette => {
  return 'stops' in palette
}

/**
 * normalizePalette extracts an array of hex codes from discrete and continuous
 * palette configuration. Sets default values when palette is undefined.
 * @param palette IDiscretePalette | IContinuousPalette
 * @returns an array of hex codes
 */
const normalizePalette = (
  palette: IDiscretePalette | IContinuousPalette = {}
): IDiscretePalette => {
  if (isDiscretePalette(palette)) {
    return palette
  } else if (isContinuousPalette(palette)) {
    return {
      colors: palette.stops?.map((stop, i) =>
        stop.color
          ? stop.color
          : DEFAULT_SERIES_COLORS[i % DEFAULT_SERIES_COLORS.length]
      ),
    }
  } else {
    return { colors: DEFAULT_SERIES_COLORS }
  }
}

/**
 * useColorPalette fetches color collection based on vis config metadata
 * @param colorApplication is represented by the color_application field in vis config
 * @returns an array of hex codes
 */

export const useColorPalette = (colorApplication?: ColorApplication) => {
  const { collection_id, palette_id, custom } = colorApplication || {}

  const sdk = useSDK()

  /*
   * Dispatch network request
   * -----------------------------------------------------------
   */

  const fetcher = async () => {
    if (collection_id) {
      return (await sdk.color_collection(
        collection_id
      )) as unknown as Promise<RunQueryReturnType>
    }

    return undefined
  }

  const { data, isValidating } = useSWR<void | RunQueryReturnType>(
    collection_id,
    fetcher,
    { revalidateOnFocus: false }
  )

  const {
    value: {
      categoricalPalettes = [],
      divergingPalettes = [],
      sequentialPalettes = [],
    },
  } = data?.ok === true ? data : { value: {} }

  const allPalettes = [
    ...categoricalPalettes,
    ...divergingPalettes,
    ...sequentialPalettes,
    custom,
  ]

  const paletteConfig = find(allPalettes, { id: palette_id ?? custom?.id })

  const colorPalette = normalizePalette(paletteConfig).colors

  return {
    colorPalette,
    isOK: !(colorApplication && isErrorResponse(data)) || !!colorPalette,
    isPending: isValidating,
    ...getErrorResponse(data),
  }
}
