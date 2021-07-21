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
import { Flex } from '../Layout'
import {
  ListItemContent,
  ListItemContentProps,
  ListItemProps,
} from '../ListItem'
import {
  createListItemPartitions,
  listItemBackgroundColor,
  ListItemBackgroundColorProps,
} from '../ListItem/utils'
import {
  getNextFocusTarget,
  HoverDisclosureContext,
  partitionAriaProps,
  undefinedCoalesce,
  useFocusVisible,
  useWrapEvent,
} from '../utils'
import { TreeContext } from './TreeContext'
import { generateIndent, GenerateIndentProps } from './utils'

export type TreeItemProps = ListItemProps & {
  labelBackgroundOnly?: boolean
}

const TreeItemLayout: FC<TreeItemProps> = ({
  className,
  color: propsColor,
  density: propsDensity,
  disabled,
  itemRole,
  labelBackgroundOnly: propsLabelBackgroundOnly,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
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
    labelBackgroundOnly: contextLabelBackgroundOnly,
  } = useContext(TreeContext)

  const hasLabelBackgroundOnly =
    contextLabelBackgroundOnly || propsLabelBackgroundOnly

  const [hovered, setHovered] = useState(false)
  const handleWrapperMouseEnter = useWrapEvent(
    () => setHovered(true),
    onMouseEnter
  )
  const handleWrapperMouseLeave = useWrapEvent(
    () => setHovered(false),
    onMouseLeave
  )

  const handleWrapperFocus = () => setHovered(true)
  // This is needed so that hover disclosed elements don't get lost during keyboard nav
  const handleWrapperBlur = (event: FocusEvent<HTMLElement>) => {
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
  if (hasLabelBackgroundOnly && itemRole !== 'none')
    // eslint-disable-next-line no-console
    console.warn(
      'TreeItems should use itemRole="none" when a parent Tree has labelBackgroundOnly=true for visualize purposes.'
    )

  const density = undefinedCoalesce([propsDensity, contextDensity])
  const color = undefinedCoalesce([propsColor, contextColor])
  const statefulProps = {
    color,
    disabled,
    hovered,
    selected,
  }
  const [ariaProps, wrapperProps] = partitionAriaProps(restProps)
  const [inside, outside] = createListItemPartitions({
    color,
    density,
    ...restProps,
    ...statefulProps,
  })

  return (
    <HoverDisclosureContext.Provider value={{ visible: hovered }}>
      <Flex
        as="li"
        className={className}
        onBlur={handleWrapperBlur}
        onFocus={handleWrapperFocus}
        onMouseEnter={handleWrapperMouseEnter}
        onMouseLeave={handleWrapperMouseLeave}
        {...wrapperProps}
      >
        <TreeItem2Content
          aria-selected={selected}
          density={density}
          /**
           * Child items should be +1 depth more than their parents so that their label
           * aligns with the label of the parent as opposed to the indicator
           */
          depth={depth + 1}
          focusVisible={focusVisible}
          itemRole={itemRole}
          labelBackgroundOnly={hasLabelBackgroundOnly}
          onClick={onClick}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          tabIndex={-1}
          {...ariaProps}
          {...focusVisibleHandlers}
          {...statefulProps}
        >
          {/**
           * @TODO: Delete labelBackgroundOnly behavior once FieldItem component is completed
           */}
          {hasLabelBackgroundOnly ? (
            <TreeItem2Label {...statefulProps}>{inside}</TreeItem2Label>
          ) : (
            inside
          )}
        </TreeItem2Content>
        {outside}
      </Flex>
    </HoverDisclosureContext.Provider>
  )
}

type TreeItem2ContentProps = ListItemContentProps &
  GenerateIndentProps & {
    labelBackgroundOnly?: boolean
  }

/**
 * @TODO: Delete labelBackgroundOnly behavior once FieldItem component is completed
 */
export const TreeItem2Content = styled(
  ListItemContent
).attrs<TreeItem2ContentProps>(({ role = 'treeitem' }) => ({
  role,
}))<TreeItem2ContentProps>`
  ${generateIndent}
  ${({ labelBackgroundOnly }) => labelBackgroundOnly && 'background: none;'}
  display: flex;
  flex: 1;
  padding-right: 0;

  &[disabled] {
    color: ${({ theme }) => theme.colors.text1};
    cursor: not-allowed;
  }
`

/**
 * @TODO: Delete TreeItem2Label once FieldItem component is completed
 */
export const TreeItem2Label = styled.div<ListItemBackgroundColorProps>`
  ${listItemBackgroundColor}
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`

export const TreeItem = styled(TreeItemLayout)``
