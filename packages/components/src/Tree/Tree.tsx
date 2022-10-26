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

import styled, { css } from 'styled-components'
import React, { useContext } from 'react'
import { useAccordion2 } from '../Accordion2'
import type { ControlledOrUncontrolled } from '../Accordion2/controlTypes'
import { Flex } from '../Layout'
import {
  createSafeRel,
  HoverDisclosureContext,
  partitionAriaProps,
  undefinedCoalesce,
} from '../utils'
import { List } from '../List'
import type { ListItemProps } from '../ListItem'
import { ListItemContext } from '../ListItem'
import { createListItemPartitions } from '../ListItem/utils'
import { TreeContext } from './TreeContext'
import type { TreeBorderProps } from './utils'
import {
  generateTreeBorder,
  indicatorDefaults,
  partitionTreeProps,
  useTreeHandlers,
} from './utils'
import { WindowedTreeContext } from './WindowedTreeNode'
import type { TreeProps } from './types'
import { TreeItemContent } from './TreeItemContent'
import { TreeItem } from './TreeItem'

const TreeLayout = ({
  border: propsBorder,
  children,
  isOpen: propsIsOpen,
  itemRole = 'none', // By default, Tree's content container should be a 'div'
  label,
  defaultOpen,
  onBlur,
  onClose,
  onFocus,
  onOpen,
  onMouseEnter,
  onMouseLeave,
  toggleOpen: propsToggleOpen,
  ...restProps
}: TreeProps) => {
  const [treeItemInnerProps, accordionInnerProps] = partitionTreeProps(
    restProps as Record<string, unknown>
  )

  const { hovered, contentHandlers, wrapperHandlers } = useTreeHandlers({
    onFocus,
    onMouseEnter,
    onMouseLeave,
  })

  const {
    color: propsColor,
    density: propsDensity,
    disabled,
    href,
    icon,
    rel,
    selected,
    target,
  } = treeItemInnerProps as Partial<ListItemProps>
  const [ariaProps] = partitionAriaProps(restProps)

  const listContext = useContext(ListItemContext)
  const treeContext = useContext(TreeContext)

  // Context for supporting windowing
  // - density must be defined at the collection level for consistent child height
  // - opened / closed state must be managed at the collection level for accurate item count
  // - partialRender to hide the accordion disclosure if it's above the window
  const {
    density: collectionDensity,
    isOpen: contextIsOpen,
    toggleNode,
    partialRender,
  } = useContext(WindowedTreeContext)

  const isOpen = contextIsOpen ?? propsIsOpen
  const toggleOpen = toggleNode ?? propsToggleOpen

  const border = undefinedCoalesce([propsBorder, treeContext.border])
  const color = undefinedCoalesce([
    propsColor,
    treeContext.color,
    listContext.color,
  ])

  const startingDepth = 0
  const depth = treeContext.depth ? treeContext.depth : startingDepth

  const density = collectionDensity || propsDensity || treeContext.density || 0

  const { indicatorIcons, indicatorPosition } = indicatorDefaults

  const [inside, outside] = createListItemPartitions({
    ...treeItemInnerProps,
    children: label,
    color,
    density,
    icon,
  })
  let accordionProps: ControlledOrUncontrolled = {
    defaultOpen,
    onClose,
    onOpen,
    ...accordionInnerProps,
  }
  if (isOpen !== undefined && toggleOpen) {
    accordionProps = { ...accordionProps, isOpen, toggleOpen }
  }

  const {
    contentDomProps,
    domProps,
    disclosureProps,
    isOpen: accordionIsOpen,
  } = useAccordion2({
    'aria-selected': selected,
    children: (
      <List disableKeyboardNav role="group" windowing={false}>
        {children}
      </List>
    ),
    density,
    disabled,
    indicatorIcons,
    indicatorPosition,
    label: inside,
    onBlur,
    role: 'treeitem',
    tabIndex: -1,
    ...accordionProps,
  })

  const {
    indicator,
    children: disclosureLabel,
    ...disclosureDomProps
  } = disclosureProps

  const statefulProps = {
    color,
    disabled,
    hovered,
    selected,
  }

  const content = (
    <TreeItemContent
      aria-selected={selected}
      depth={depth}
      href={href}
      itemRole={itemRole}
      {...contentHandlers}
      rel={createSafeRel(rel, target)}
      ripple={false}
      target={target}
      {...ariaProps}
      {...disclosureDomProps}
      {...statefulProps}
    >
      {indicator}
      {disclosureLabel}
    </TreeItemContent>
  )

  return (
    <HoverDisclosureContext.Provider value={{ visible: hovered }}>
      <TreeContext.Provider
        value={{
          border,
          color,
          density,
          depth: depth + 1,
        }}
      >
        <div {...domProps}>
          {!partialRender && (
            <Flex as="li" color="text5" {...wrapperHandlers}>
              {content}
              {outside}
            </Flex>
          )}
          {accordionIsOpen && (
            <TreeAccordionContent
              border={border}
              density={density}
              depth={depth}
              {...contentDomProps}
            />
          )}
        </div>
      </TreeContext.Provider>
    </HoverDisclosureContext.Provider>
  )
}

/**
 * Container for hidden / revealed content based on Tree open state
 */
const TreeAccordionContent = styled.div<TreeBorderProps>`
  ${generateTreeBorder}
`

const dividersCSS = css`
  ${TreeItem} {
    margin-top: 1px;
  }

  & & {
    margin-top: 1px;
  }
`

export const Tree = styled(TreeLayout)<TreeProps>`
  ${({ dividers }) => dividers && dividersCSS}
`
