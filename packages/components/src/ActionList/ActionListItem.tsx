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
import styled from 'styled-components'
import React, { createContext, RefObject, useRef } from 'react'

export interface ActionListContextProps {
  actionListItemRef: RefObject<HTMLElement> | undefined
}

export const ActionListItemContext = createContext<ActionListContextProps>({
  actionListItemRef: undefined,
})

const ActionListItemInternal = (props: CompatibleHTMLProps<HTMLDivElement>) => {
  const { children, className, onClick } = props

  const actionListItemRef = useRef<HTMLDivElement>(null)
  const context = {
    actionListItemRef,
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick && onClick(event)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const isEventFromChild = event.currentTarget !== event.target
    if (event.keyCode === 13 && !isEventFromChild) {
      event.currentTarget.click()
    }
  }

  return (
    <ActionListItemContext.Provider value={context}>
      <div
        className={className}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={actionListItemRef}
        tabIndex={onClick ? 0 : undefined}
      >
        {children}
      </div>
    </ActionListItemContext.Provider>
  )
}

export const ActionListItem = styled(ActionListItemInternal)`
  border-bottom: solid 1px ${props => props.theme.colors.palette.charcoal200};
  display: flex;

  &:focus,
  &:hover {
    box-shadow: ${({ theme, onClick }) => onClick && theme.shadows[2]};
    outline: none;

    /**
      The hovered ActionListItem needs to sit above its siblings (otherwise the bottom box-shadow is covered up).
      Using position relative to paint it above static siblings.
     */
    position: relative;
  }
`
