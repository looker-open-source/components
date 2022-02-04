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
import { useState, useRef } from 'react'
import type { FilterUIConfig } from '../types/filter_ui_config'
import type { RenderFilterProps } from '.'
import { getFallbackFilterConfig, canRenderFilter } from '.'

interface useFallbackReturnValue {
  skipFilterConfigCheck: boolean
  uiConfig: FilterUIConfig
}

const getSkipFallback = ({
  skipFilterConfigCheck,
  ...props
}: RenderFilterProps) => skipFilterConfigCheck ?? canRenderFilter(props)

/**
 * This hook checks the filter control can render
 * the filter expression, otherwise it updates the config
 * to render an advanced filter
 * @param RenderFilterProps
 * @returns useFallbackReturnValue
 */
export const useFilterConfig = (
  props: RenderFilterProps
): useFallbackReturnValue => {
  // store the skipFallback value for the rest of
  // the component lifecycle
  const [skipFallback, setSkipFallback] = useState(getSkipFallback(props))

  const skipFallbackConfigCheckRef = useRef(props.skipFilterConfigCheck)

  // check if skipFilterConfigCheck has been reset from EditMode
  if (props.skipFilterConfigCheck !== skipFallbackConfigCheckRef.current) {
    skipFallbackConfigCheckRef.current = props.skipFilterConfigCheck
    setSkipFallback(getSkipFallback(props))
  }

  // if filter can be rendered for uiConfig
  const uiConfig = (skipFallback
    ? // use existing config
      props.config || {}
    : // fallback to using an advanced filter
      getFallbackFilterConfig(props.config)) as FilterUIConfig
  return {
    skipFilterConfigCheck: skipFallback,
    uiConfig,
  }
}
