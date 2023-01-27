/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react'

export interface HoverDisclosureContextProps {
  visible: boolean
}

const hoverDisclosureContext = {
  visible: false,
}

export const HoverDisclosureContext = createContext(hoverDisclosureContext)
