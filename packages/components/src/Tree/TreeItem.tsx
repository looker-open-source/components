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

import type { FocusEvent } from 'react'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../Layout'
import type { ListItemProps } from '../ListItem'
import { createListItemPartitions } from '../ListItem/utils'
import {
  createSafeRel,
  getNextFocusTarget,
  HoverDisclosureContext,
  partitionAriaProps,
  undefinedCoalesce,
  useFocusVisible,
  useWrapEvent,
} from '../utils'
import { TreeContext } from './TreeContext'
import { TreeItemContent } from './TreeItemContent'
import { TreeItemLabel } from './TreeItemLabel'

export type TreeItemProps = ListItemProps & {
  labelBackgroundOnly?: boolean
}

export const TreeItem = styled(
  ({
    className,
    color: propsColor,
    density: propsDensity,
    disabled,
    href,
    itemRole,
    labelBackgroundOnly: propsLabelBackgroundOnly,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    rel,
    selected,
    target,
    ...restProps
  }: TreeItemProps) => {
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

      if (nextFocusTarget && !event.currentTarget.contains(nextFocusTarget)) {
        setHovered(false)
      }
    }
    const { focusVisible, ...focusVisibleHandlers } = useFocusVisible({
      onBlur,
      onKeyUp,
    })

    /**
     * Using `labelBackgroundOnly` with items with itemRole="button" or "link"
     * leads to overly thin backgrounds
     */
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
          <TreeItemContent
            aria-selected={selected}
            density={density}
            /**
             * Child items should be +1 depth more than their parents so that their label
             * aligns with the label of the parent as opposed to the indicator
             */
            depth={depth + 1}
            focusVisible={focusVisible}
            href={href}
            itemRole={itemRole}
            labelBackgroundOnly={hasLabelBackgroundOnly}
            onClick={onClick}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            rel={createSafeRel(rel, target)}
            tabIndex={-1}
            target={target}
            {...ariaProps}
            {...focusVisibleHandlers}
            {...statefulProps}
          >
            {/*
             * @TODO: Delete labelBackgroundOnly behavior once FieldItem component is completed
             */}
            {hasLabelBackgroundOnly ? (
              <TreeItemLabel {...statefulProps}>{inside}</TreeItemLabel>
            ) : (
              inside
            )}
          </TreeItemContent>
          {outside}
        </Flex>
      </HoverDisclosureContext.Provider>
    )
  }
)``
