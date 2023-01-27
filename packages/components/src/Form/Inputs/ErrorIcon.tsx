/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Error } from '@styled-icons/material/Error'
import styled from 'styled-components'
import { Icon } from '../../Icon'

export const ErrorIcon = styled(Icon).attrs(() => ({
  color: 'critical',
  icon: <Error />,
  size: 'xsmall',
}))``
