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

import styled, { css } from 'styled-components'
import React, { useContext } from 'react'
import { useAccordion2 } from '../Accordion2'
import { ControlledOrUncontrolled } from '../Accordion2/controlTypes'
import { Flex } from '../Layout'
import {
  createSafeRel,
  HoverDisclosureContext,
  partitionAriaProps,
  undefinedCoalesce,
} from '../utils'
import { List } from '../List'
import { ListItemContext, ListItemProps } from '../ListItem'
import { createListItemPartitions } from '../ListItem/utils'
import { TreeContext } from './TreeContext'
import {
  generateTreeBorder,
  TreeBorderProps,
  indicatorDefaults,
  partitionTreeProps,
  useTreeHandlers,
} from './utils'
import { WindowedTreeContext } from './WindowedTreeNode'
import { TreeProps } from './types'
import { TreeItem } from './TreeItem'
import { TreeItemContent } from './TreeItemContent'
import { TreeItemLabel } from './TreeItemLabel'

/**
 * TODO: When labelToggle is introduced the aria-* attributes should land on the nested ListItem's
 * label container (i.e. the focusable element).
 */
const TreeLayout = ({
  assumeIconAlignment,
  border: propsBorder,
  children,
  className,
  dividers,
  forceLabelPadding,
  isOpen: propsIsOpen,
  itemRole = 'none', // By default, Tree's content container should be a 'div'
  label,
  labelBackgroundOnly: propsLabelBackgroundOnly,
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
  const [treeItemInnerProps, accordionInnerProps] =
    partitionTreeProps(restProps)

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

  const hasLabelBackgroundOnly = undefinedCoalesce([
    propsLabelBackgroundOnly,
    treeContext.labelBackgroundOnly,
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
      labelBackgroundOnly={hasLabelBackgroundOnly}
      {...contentHandlers}
      rel={createSafeRel(rel, target)}
      target={target}
      {...ariaProps}
      {...disclosureDomProps}
      {...statefulProps}
    >
      {indicator}
      {/* @TODO: Delete labelBackgroundOnly behavior once FieldItem component is completed */}
      {hasLabelBackgroundOnly ? (
        <TreeItemLabel {...statefulProps}>{disclosureLabel}</TreeItemLabel>
      ) : (
        disclosureLabel
      )}
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
          labelBackgroundOnly: hasLabelBackgroundOnly,
        }}
      >
        <div {...domProps} className={`${domProps.className} ${className}`}>
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

/**
 * @deprecated
 */
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
