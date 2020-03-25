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
import React, { forwardRef, ReactNode, Ref } from 'react'
import styled from 'styled-components'

export interface ActionListItemLayoutProps
  extends CompatibleHTMLProps<HTMLElement> {
  secondary?: ReactNode
}

export const ActionListRowColumns = styled.div``

const ActionListRowSupplementary = styled.div``

const ActionListRowLayout = forwardRef(
  (props: ActionListItemLayoutProps, ref: Ref<HTMLDivElement>) => {
    const {
      className,
      children,
      secondary,
      onClick,
      onKeyDown,
      tabIndex,
    } = props
    return (
      <div
        ref={ref}
        className={className}
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex={tabIndex}
      >
        <ActionListRowColumns>{children}</ActionListRowColumns>
        <ActionListRowSupplementary>{secondary}</ActionListRowSupplementary>
      </div>
    )
  }
)

ActionListRowLayout.displayName = 'ActionListRowLayout'

export const ActionListRow = styled(ActionListRowLayout)`
  display: flex;

  ${ActionListRowColumns} {
    flex-grow: 1;
  }

  ${ActionListRowSupplementary} {
    flex-basis: 2.5rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
`
