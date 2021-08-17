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

import { ReactElement } from 'react'
import {
  CompatibleHTMLProps,
  FontSizeProps,
  LayoutProps,
  PaddingProps,
  TypographyProps,
} from '@looker/design-tokens'

export type Tab2Props = Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'> &
  LayoutProps &
  PaddingProps &
  TypographyProps & {
    /**
     * displays as the `Tab`'s value
     */
    label: string
    /**
     * callback to manage when `Tab` is clicked
     */
    onSelect?: () => void
    /**
     * specific `Tab` that is selected.
     */
    selected?: boolean
  }

export type TabList2Props = PaddingProps &
  FontSizeProps & {
    /**
     * element that will be displayed as the `Tab` value
     */
    children: JSX.Element[]
    className?: string
    /**
     * spread the collection of `Tab` on its full width.
     */
    distribute?: boolean
  }

type TabStackMember = Tab2Props & {
  id: string
}

export type TabStack = TabStackMember[]

type Controlled = {
  /**
   * Controlled: which tab to show now
   */
  tabId: string
  /**
   * Callback called when tabId changes
   */
  onTabChange: (tabId: string) => void
  defaultTabId?: never
}

type Uncontrolled = {
  /**
   * Which tab to show on load
   */
  defaultTabId?: string
  tabId?: never
  onTabChange?: never
}

export type Tabs2Props = (Controlled | Uncontrolled) & {
  /**
   * The list of `Tab`
   */
  children: ReactElement<Tab2Props> | ReactElement<Tab2Props>[]

  /**
   * Spread the Tab between all the space available
   */
  distributed?: boolean
}
