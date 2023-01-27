/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'

import { Flex, Spinner as SpinnerComponent } from '@looker/components'

export const Spinner = () => (
  <Flex alignItems="center" justifyContent="center">
    <SpinnerComponent />
  </Flex>
)
