/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { Ref, ReactNode } from 'react'
import React, { forwardRef, useEffect, useRef } from 'react'
import styled from 'styled-components'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import { Space, SpaceVertical } from '../../Layout'
import { Paragraph } from '../../Text'
import { Truncate } from '../../Truncate'
import { useFocusVisible, useForkedRef } from '../../utils'
import type { DataTableColumnSize } from './columnSize'
import { columnSize } from './columnSize'
import { FocusableCell } from './FocusableCell'

export interface DataTableCellProps
  extends CompatibleHTMLProps<HTMLTableDataCellElement> {
  /**
   * I18n recommended: content that is user visible should be treated for i18n
   */
  description?: ReactNode
  indicator?: ReactNode
  size?: DataTableColumnSize
}

const DataTableCellLayout = forwardRef(
  (
    {
      children,
      description,
      indicator,
      onBlur,
      onKeyUp,
      size,
      ...props
    }: DataTableCellProps,
    forwardedRef: Ref<HTMLElement>
  ) => {
    const focusVisibleProps = useFocusVisible({ onBlur, onKeyUp })

    let content =
      size && size !== 'nowrap' ? <Truncate>{children}</Truncate> : children

    const ref = useRef<HTMLTableDataCellElement>(null)
    const forkedRef = useForkedRef(ref, forwardedRef)

    useEffect(() => {
      const element = ref?.current?.querySelectorAll('a, button, input')
      if (element) {
        element.forEach(activeElement =>
          activeElement.setAttribute('tabIndex', '-1')
        )
      }
    })

    if (description) {
      content = (
        <SpaceVertical gap="u05" align="stretch">
          <span>{content}</span>
          {description && (
            <Paragraph fontSize="xsmall" color="text1" truncate>
              <Truncate>{description}</Truncate>
            </Paragraph>
          )}
        </SpaceVertical>
      )

      if (indicator) {
        content = (
          <Space gap="u4">
            {indicator}
            {content}
          </Space>
        )
      }
    } else if (indicator) {
      content = (
        <Space gap="u4">
          {indicator}
          <Truncate>{content}</Truncate>
        </Space>
      )
    }
    return (
      <FocusableCell ref={forkedRef} {...focusVisibleProps} {...props}>
        {content}
      </FocusableCell>
    )
  }
)

DataTableCellLayout.displayName = 'DataTableCellLayout'

export const DataTableCell = styled(DataTableCellLayout)`
  ${columnSize}
`
