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

import React, {
  forwardRef,
  Ref,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import { CompatibleHTMLProps } from '@looker/design-tokens'
import { Space, SpaceVertical } from '../../Layout'
import { Link } from '../../Link'
import { Paragraph } from '../../Text'
import { Truncate } from '../../Truncate'
import { useForkedRef } from '../../utils'
import { columnSize, DataTableColumnSize } from './columnSize'

export interface DataTableCellProps
  extends CompatibleHTMLProps<HTMLTableDataCellElement> {
  description?: ReactNode
  focusVisible?: boolean
  indicator?: ReactNode
  size?: DataTableColumnSize
}

const DataTableCellLayout = forwardRef(
  (props: DataTableCellProps, forwardedRef: Ref<HTMLElement>) => {
    const { children, description, indicator, onBlur, onKeyUp, size } = props

    const [isFocusVisible, setFocusVisible] = useState(false)

    const handleOnKeyUp = (
      event: React.KeyboardEvent<HTMLTableDataCellElement>
    ) => {
      setFocusVisible(true)
      onKeyUp && onKeyUp(event)
    }

    const handleOnBlur = (
      event: React.FocusEvent<HTMLTableDataCellElement>
    ) => {
      setFocusVisible(false)
      onBlur && onBlur(event)
    }

    const onClick = () => {
      setFocusVisible(false)
    }

    let content =
      size && size !== 'nowrap' ? <Truncate>{children}</Truncate> : children

    const ref = useRef<HTMLTableDataCellElement>(null)
    const forkedRef = useForkedRef(ref, forwardedRef)

    useEffect(() => {
      const element = ref?.current?.querySelectorAll('a, button, input')
      if (element) {
        element.forEach((activeElement) =>
          activeElement.setAttribute('tabIndex', '-1')
        )
      }
    })

    if (description) {
      content = (
        <SpaceVertical gap="xxxsmall">
          <span>{content}</span>
          {description && (
            <Paragraph fontSize="xsmall" color="subdued" truncate>
              <Truncate>{description}</Truncate>
            </Paragraph>
          )}
        </SpaceVertical>
      )

      if (indicator) {
        content = (
          <Space gap="xsmall">
            {indicator}
            {content}
          </Space>
        )
      }
    } else if (indicator) {
      content = (
        <Space gap="xsmall">
          {indicator}
          <span>{content}</span>
        </Space>
      )
    }
    return (
      <td
        focusVisible={isFocusVisible}
        onBlur={handleOnBlur}
        onClick={onClick}
        onKeyUp={handleOnKeyUp}
        ref={forkedRef}
        tabIndex={-1}
        {...props}
      >
        {content}
      </td>
    )
  }
)

DataTableCellLayout.displayName = 'DataTableCellLayout'

export const DataTableCell = styled(DataTableCellLayout)`
  ${columnSize}

  ${({ focusVisible, theme: { colors } }) =>
    focusVisible && `border: 1px solid ${colors.key};`}

  a,
  ${Link} {
    color: inherit;
    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.link};
      outline: none;
      text-decoration: underline;
    }
  }
  :focus {
    outline: none;
  }
`
