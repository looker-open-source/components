/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { FocusEvent } from 'react'
import { useState } from 'react'
import { useWrapEvent } from '../../utils'

export const useTreeHandlers = (
  props: Pick<
    CompatibleHTMLProps<HTMLElement>,
    'onFocus' | 'onMouseEnter' | 'onMouseLeave'
  >
) => {
  const [hovered, setHovered] = useState(false)

  // This is needed so that hover disclosed elements don't get lost during keyboard nav
  const onBlur = (event: FocusEvent<HTMLElement>) => {
    const nextFocusTarget = event.relatedTarget

    if (nextFocusTarget && !event.currentTarget.contains(nextFocusTarget)) {
      setHovered(false)
    }
  }
  const onFocus = useWrapEvent(
    useWrapEvent(() => setHovered(true), props.onFocus)
  )

  const onMouseEnter = useWrapEvent(() => setHovered(true), props.onMouseEnter)
  const onMouseLeave = useWrapEvent(() => setHovered(false), props.onMouseLeave)

  return {
    contentHandlers: {
      onFocus,
    },
    hovered,
    wrapperHandlers: {
      onBlur,
      onMouseEnter,
      onMouseLeave,
    },
  }
}
