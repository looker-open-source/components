/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import {
  TrapStackContextProps,
  TrapStackProvider,
  Trap,
} from '@looker/components-providers'
import { CompatibleHTMLProps } from '@looker/design-tokens'
import React, { createContext } from 'react'
import styled from 'styled-components'

export const PanelsContext = createContext<TrapStackContextProps>({})
PanelsContext.displayName = 'PanelsContext'

const activatePanel = ({ element }: Trap) => {
  // The element is a hidden div inside the panel
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
