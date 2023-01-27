/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'

import type { Looker40SDK } from '@looker/sdk'

export const SDKContext = React.createContext<Looker40SDK>(
  // Since we can't import APIMethods and set it up properly, we've forced the
  // consumer to provide a value to the SDKProvider and we cast this to ensure
  // they get correct types even though the default is empty.
  {} as Looker40SDK
)
