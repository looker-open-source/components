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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import React, { ReactNode } from 'react'
import { MenuItem } from '../../Menu'

export interface DataTableActionProps extends CompatibleHTMLProps<HTMLElement> {
  children?: ReactNode
  detail?: ReactNode
  icon?: IconNames
  /**
   * Determines if the DataTableAction is an <a/> or <button/> element
   * Note: The value passed into this prop is passed into the underlying MenuItem's itemRole prop
   * @default 'button'
   */
  itemRole?: 'link' | 'button'
}

/**
 * MenuItem may undergo a refactor soon. Creating a proxy in the form of DataTableAction
 * allows us to adapt to any changes to MenuItem or its interface.
 * */
export const DataTableAction = (props: DataTableActionProps) => (
  <MenuItem {...props} />
)
