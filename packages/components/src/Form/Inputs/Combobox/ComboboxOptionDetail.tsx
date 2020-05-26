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
import React, {
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useContext,
} from 'react'
import styled from 'styled-components'
import { ComboboxContext, ComboboxMultiContext } from './ComboboxContext'
import { ComboboxOptionStatuses } from './utils/useOptionStatus'

type ComboboxOptionDetailRenderProp = (
  detailProps: ComboboxOptionStatuses
) => ReactNode

function isRenderProp(
  children: ReactNode | ComboboxOptionDetailRenderProp
): children is ComboboxOptionDetailRenderProp {
  return typeof children === 'function'
}

export interface ComboboxOptionDetailProps
  extends ComboboxOptionStatuses,
    CompatibleHTMLProps<HTMLDivElement> {
  /**
   * Customize the area to the left of the label, which by default
   * renders a check mark for the selected option or a spacer
   */
  detail?: ReactNode | ComboboxOptionDetailRenderProp
  isMulti?: boolean
}

export const ComboboxOptionDetailLayout: FC<ComboboxOptionDetailProps> = ({
  children,
  detail: propsDetail,
  isActive,
  isSelected,
  isMulti,
  ...props
}) => {
  const context = useContext(ComboboxContext)
  const contextMulti = useContext(ComboboxMultiContext)
  const contextToUse = isMulti ? contextMulti : context
  const { detailPropRef } = contextToUse

  const detail =
    propsDetail !== undefined
      ? propsDetail
      : detailPropRef && detailPropRef.current
  const statuses = { isActive, isSelected }

  if (detail !== undefined) {
    if (isValidElement(detail)) {
      return <>{cloneElement(detail, statuses)}</>
    } else if (isRenderProp(detail)) {
      return <>{detail(statuses)}</>
    }
    return <>{detail}</>
  } else {
    return <div {...props}>{children}</div>
  }
}

export const ComboboxOptionDetail = styled(ComboboxOptionDetailLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.space.large};
  flex-shrink: 0;
  margin-right: ${(props) => props.theme.space.xxsmall};
  flex-basis: ${({ theme, isMulti }) =>
    isMulti ? theme.space.xlarge : theme.space.medium};
`
