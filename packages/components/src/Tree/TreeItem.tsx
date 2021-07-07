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

import React, { FC, FocusEvent, useContext, useState } from 'react'
import styled from 'styled-components'
import { ListItemProps } from '../ListItem'
import { createListItemPartitions } from '../ListItem/utils'
import {
  getNextFocusTarget,
  HoverDisclosureContext,
  undefinedCoalesce,
  useFocusVisible,
  useWrapEvent,
} from '../utils'
import { TreeContext } from './TreeContext'
import { TreeItem2Content } from './Tree'

export type TreeItemProps = ListItemProps

const TreeItemLayout: FC<TreeItemProps> = ({
  color: propsColor,
  density: propsDensity,
  disabled,
  onBlur,
  onClick,
  onFocus,
  onKeyUp,
  onMouseEnter,
  onMouseLeave,
  selected,
  ...restProps
}) => {
  const {
    density: contextDensity,
    depth,
    color: contextColor,
    labelBackgroundOnly,
  } = useContext(TreeContext)

  const [hovered, setHovered] = useState(false)
  const handleWrapperMouseEnter = useWrapEvent(
    () => setHovered(true),
    onMouseEnter
  )
  const handleWrapperMouseLeave = useWrapEvent(
    () => setHovered(false),
    onMouseLeave
  )

  const handleWrapperFocus = useWrapEvent(() => setHovered(true), onFocus)
  // This is needed so that hover disclosed elements don't get lost during keyboard nav
  const handleWrapperBlur = (event: FocusEvent<HTMLLIElement>) => {
    const nextFocusTarget = getNextFocusTarget(event)

    if (
      nextFocusTarget &&
      !event.currentTarget.contains(nextFocusTarget as Node)
    ) {
      setHovered(false)
    }
  }
  const { focusVisible, ...focusVisibleHandlers } = useFocusVisible({
    onBlur,
    onKeyUp,
  })

  // Using labelBackgroundOnly with items with itemRole="button" or "link" leads to overly thin backgrounds
  if (labelBackgroundOnly && restProps.itemRole !== 'none')
    // eslint-disable-next-line no-console
    console.warn(
      'TreeItems should use itemRole="none" when a parent Tree has labelBackgroundOnly=true for visualize purposes.'
    )

  const density = undefinedCoalesce([propsDensity, contextDensity])
  const color = undefinedCoalesce([propsColor, contextColor])

  const [inside, outside] = createListItemPartitions({
    color,
    density,
    ...restProps,
  })

  const statefulProps = {
    color,
    disabled,
    hovered,
    selected,
  }

  return (
    <HoverDisclosureContext.Provider value={{ visible: hovered }}>
      <Wrapper
        onBlur={handleWrapperBlur}
        onFocus={handleWrapperFocus}
        onMouseEnter={handleWrapperMouseEnter}
        onMouseLeave={handleWrapperMouseLeave}
      >
        <TreeItem2Content
          onClick={onClick}
          density={density}
          depth={depth}
          focusVisible={focusVisible}
          tabIndex={-1}
          {...focusVisibleHandlers}
          {...statefulProps}
        >
          {inside}
        </TreeItem2Content>
        {outside}
      </Wrapper>
    </HoverDisclosureContext.Provider>
  )
}

export const TreeItem = styled(TreeItemLayout)``

const Wrapper = styled.li`
  display: flex;
`
