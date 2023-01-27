/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type { InputProps } from '../InputProps'

export const InputHidden = styled.input.attrs(() => ({ type: 'hidden' }))<
  Omit<InputProps, 'type'>
>``
