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

import { ReactNode } from 'react'

export type PanelDirection = 'left' | 'right'

export type PanelRenderProp = (props: UsePanelResponseDom) => ReactNode

export interface PanelProps extends Omit<UsePanelProps, 'content'> {
  children?: PanelRenderProp | ReactNode
  content: ReactNode
}

export interface PanelSurfaceProps {
  /**
   * Edge of the screen from which the panel will enter
   * @default 'left'
   */
  direction?: PanelDirection
}

export interface UsePanelResponse {
  isOpen: boolean
  setOpen: (open: boolean) => void
  panel: ReactNode
  domProps: UsePanelResponseDom
}

export interface UsePanelProps {
  /**
   * Specify a callback to be called before each time trying to close Panel.
   * This allows for use-cases where the user might lose work
   * (think common "Save before closing warning" type flow)
   */
  canClose?: () => boolean

  /**
   * Element that will be displayed as Panel
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
   * Edge of the screen from which the panel will enter
   * @default 'left'
   */
  direction?: PanelDirection

  /**
   * IconButton in PanelHeader will have toggled and background color
   * based on theme's key color
   * @default 'false'
   */
  iconToggle?: boolean

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

  /**
   * Value displayed as Panel header clickable to close Panel
   */
  title: string
}

export interface UsePanelResponseDom {
  onClick: () => void
  role: string
  'aria-expanded': boolean
}
