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
  Children,
  cloneElement,
  forwardRef,
  KeyboardEvent,
  useRef,
  Ref,
} from 'react'
import {
  fontSize,
  FontSizeProps,
  PaddingProps,
  padding,
  reset,
} from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { moveFocus, useForkedRef } from '../utils'
import { TabContext } from './TabContext'
import { Tab } from '.'

export interface TabListProps extends PaddingProps, FontSizeProps {
  children: JSX.Element[]
  selectedIndex?: number
  onSelectTab?: (index: any) => void
  className?: string
  distribute?: boolean
}

const TabListLayout = forwardRef(
  (
    { children, selectedIndex, onSelectTab, className }: TabListProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(wrapperRef, ref)

    const clonedChildren = Children.map(
      children,
      (child: JSX.Element, index: number) => {
        return cloneElement(child, {
          index,
          onSelect: () => onSelectTab && onSelectTab(index),
          selected: index === selectedIndex,
          selectedIndex,
        })
      }
    )

    function handleArrowKey(direction: number, initial: number) {
      moveFocus(direction, initial, wrapperRef)
    }

    const context = {
      handleArrowLeft: (e: KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault()
        handleArrowKey(-1, -1)
        return false
      },
      handleArrowRight: (e: KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault()
        handleArrowKey(1, 0)
        return false
      },
    }

    return (
      <TabContext.Provider value={context}>
        <div
          aria-label="Tabs"
          className={className}
          ref={forkedRef}
          role="tablist"
        >
          {clonedChildren}
        </div>
      </TabContext.Provider>
    )
  }
)

TabListLayout.displayName = 'TabListLayout'

const defaultLayoutCSS = css`
  ${Tab} {
    min-width: 3rem;
  }

  ${Tab} + ${Tab} {
    margin-left: ${(props) => props.theme.space.xlarge};
  }
`

const distributeCSS = css`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  ${Tab} {
    padding: ${({ theme: { space } }) => `${space.xsmall} ${space.medium}`};
  }
`

export const TabList = styled(TabListLayout)`
  ${reset}
  ${padding}
  ${fontSize}

  border-bottom: 1px solid ${(props) => props.theme.colors.ui2};
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  ${({ distribute }) => (distribute ? distributeCSS : defaultLayoutCSS)}
`

TabList.defaultProps = {
  fontSize: 'small',
}
