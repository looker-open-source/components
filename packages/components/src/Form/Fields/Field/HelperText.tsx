/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { SpaceVertical } from '../../../Layout'
import { Paragraph } from '../../../Text'
import { ValidationMessage } from '../../ValidationMessage'
import type { FieldBaseProps } from './types'

export const HelperText = styled(
  ({ className, description, id, validationMessage }: FieldBaseProps) => {
    return (
      <SpaceVertical
        pt={description || validationMessage ? 'u2' : 'none'}
        gap="u1"
        className={className}
        id={`describedby-${id}`}
        aria-live="polite"
      >
        {description && (
          <Paragraph fontSize="xsmall" color="text2">
            {description}
          </Paragraph>
        )}
        {validationMessage && <ValidationMessage {...validationMessage} />}
      </SpaceVertical>
    )
  }
)``
