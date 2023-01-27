/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
  const uiConfig = (
    skipFallback
      ? // use existing config
        props.config || {}
      : // fallback to using an advanced filter
        getFallbackFilterConfig(props.config)
  ) as FilterUIConfig
  return {
    skipFilterConfigCheck: skipFallback,
    uiConfig,
  }
}
