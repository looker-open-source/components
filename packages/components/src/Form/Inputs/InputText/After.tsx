/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Span } from '../../../Text'
import { ErrorIcon } from '../ErrorIcon'
import { InputTextContent } from './InputTextContent'
import type { InputTextProps } from './types'

export const After = ({
  after,
  iconAfter,
  noErrorIcon,
  validationType,
}: Pick<
  InputTextProps,
  'after' | 'iconAfter' | 'noErrorIcon' | 'validationType'
>) => {
  const iconAfterOrSuffix = (iconAfter || typeof after === 'string') && (
    <InputTextContent pl="u2" pr="u2">
      {iconAfter || <Span fontSize="small">{after}</Span>}
    </InputTextContent>
  )

  const validationIcon = !noErrorIcon && validationType === 'error' && (
    <InputTextContent pl={after || iconAfter ? 'u1' : 'u2'} pr="u2">
      <ErrorIcon />
    </InputTextContent>
  )

  return (
    <>
      {iconAfterOrSuffix ? (
        <>
          {iconAfterOrSuffix}
          {validationIcon}
        </>
      ) : (
        after || validationIcon
      )}
    </>
  )
}
