/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { SDKContext } from '../SDKContext'

export const useSDK = () => {
  const sdk = React.useContext(SDKContext)
  if (!sdk) {
    throw new Error(
      'You cannot call useSDK() without providing an instance of the SDK to <SDKContext.Provider />.'
    )
  }
  return sdk
}
