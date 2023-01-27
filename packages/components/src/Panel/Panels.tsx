/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { TrapStackContextProps, Trap } from '@looker/components-providers'
import { TrapStackProvider } from '@looker/components-providers'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import React, { createContext } from 'react'
import styled from 'styled-components'

export const PanelsContext = createContext<TrapStackContextProps>({})
PanelsContext.displayName = 'PanelsContext'

const activatePanel = ({ element }: Trap) => {
  // The element is a hidden div inside the panel
  // NOTE: data-panel & data-panels are used as a quick way to find these elemens
  // in the absence of an appropriate aria role
  const panel = element.closest<HTMLDivElement>('[data-panel]')
  const container = element.closest<HTMLDivElement>('[data-panels]')
  if (panel && container) {
    // The active Panel covers all other content in Panels
    // Adding visibility: hidden to Panels avoids moving focus
    // to any hidden content via keyboard nav
    container.style.visibility = 'hidden'
    // Override visibility only in the active Panel
    panel.style.visibility = 'visible'
  }

  // Deactivation, remove visibility styles
  return () => {
    if (panel && container) {
      panel.style.visibility = ''
      container.style.visibility = ''
    }
  }
}

export type PanelsProps = CompatibleHTMLProps<HTMLDivElement>

export const Panels = styled((props: PanelsProps) => {
  // TrapStackProvider calculates the topmost active Panel and activates
  // the visibility styles accordingly
  return (
    <TrapStackProvider activate={activatePanel} context={PanelsContext}>
      <div {...props} data-panels />
    </TrapStackProvider>
  )
})`
  height: 100%;
  position: relative;
  width: 100%;
`
