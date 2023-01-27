/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputDate } from '..'
import { SpaceVertical } from '../../../..'

export default () => (
  <SpaceVertical>
    <InputDate value={new Date('February 3, 2009')} />
    <InputDate defaultValue={new Date('June 3, 2019')} />
  </SpaceVertical>
)
