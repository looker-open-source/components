/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { DialogRender } from '../Dialog/DialogRender'
import { usePanel, UsePanelProps } from './usePanel'

interface PanelProps extends UsePanelProps {
  /**
   * Specify a callback to be called before || each time trying to close Panel.
   * This allows for use-cases where the user might lose work
   * (think common "Save before closing warning" type flow)
   */
  canClose?: () => boolean
  /**
   * Element that will be shown as Panel
   */
  content: ReactNode
  /**
   * Panel will be displayed immediately when rendered.
   * NOTE: Once rendered, changes to this value will be ignored. This property cannot
   * be used treat this component as "controlled"
   * @default false
   */
  defaultOpen?: boolean

  /**
   * Direction that the animation will show
   * @default 'left'
   */
  direction?: 'left' | 'right' | 'up' | 'down'

  /**
   * Dialog will be displayed immediately when rendered.
   * @default undefined
   */
  isOpen?: boolean

  /**
   * Specify a callback to be called each time this Dialog is closed
   */
  onClose?: () => void

  /**
   * Optional, for a controlled version of the component
   */
  setOpen?: (open: boolean) => void

  title: string
}

const PanelLayout: FC<PanelProps> = ({ children, ...props }) => (
  <DialogRender {...usePanel(props)}>{children}</DialogRender>
)

export const Panel = styled(PanelLayout)`
  /* width = parent width */
`
