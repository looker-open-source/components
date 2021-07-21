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
import React, { FocusEvent, useContext, useState } from 'react'
import { useAccordion2 } from '../Accordion2'
import { ControlledOrUncontrolled } from '../Accordion2/controlTypes'
import { Flex } from '../Layout'
import {
  createSafeRel,
  getNextFocusTarget,
  HoverDisclosureContext,
  partitionAriaProps,
  undefinedCoalesce,
  useWrapEvent,
} from '../utils'
import { List } from '../List'
import { ListItemContext, ListItemProps } from '../ListItem'
import { createListItemPartitions } from '../ListItem/utils'
import { TreeContext } from './TreeContext'
import {
  generateTreeBorder,
  GenerateTreeBorderProps,
  indicatorDefaults,
} from './utils'
import { WindowedTreeContext } from './WindowedTreeNode'
import { treeItemInnerPropKeys, TreeProps } from './types'
import {
  TreeItem,
  TreeItem2Content as TreeDisclosureLabel,
  TreeItem2Label,
} from './TreeItem'

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
  onFocus: propsOnFocus,
  onOpen,
  onMouseEnter,
  onMouseLeave,
  toggleOpen: propsToggleOpen,
  ...restProps
}: TreeProps) => {
  const treeItemInnerProps = {}
  const accordionInnerProps = {}
  Object.entries(restProps).forEach((prop) => {
    const [propKey, propValue] = prop
    /**
     * treeItemInnerPropKeys const assertion doesn't like checking against a string type;
     * using "as ReadonlyArray<string>" to make the types happy
     */
    if (
      restProps &&
      (treeItemInnerPropKeys as ReadonlyArray<string>).includes(propKey)
    ) {
      treeItemInnerProps[propKey] = propValue
    } else {
      accordionInnerProps[propKey] = propValue
    }
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

  const [hovered, setHovered] = useState(false)
  const handleWrapperMouseEnter = useWrapEvent(
    () => setHovered(true),
    onMouseEnter
  )
  const handleWrapperMouseLeave = useWrapEvent(
    () => setHovered(false),
    onMouseLeave
  )

  const { color: listColor } = useContext(ListItemContext)

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
  const color = undefinedCoalesce([propsColor, treeContext.color, listColor])

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
  if (isOpen && toggleOpen) {
    accordionProps = { ...accordionProps, isOpen, toggleOpen }
  }

  const {
    contentDomProps,
    domProps: { onFocus, ...restDomProps },
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
    onFocus: useWrapEvent(() => setHovered(true), propsOnFocus),
    role: 'treeitem',
    tabIndex: -1,
    ...accordionProps,
  })

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
        <div
          {...restDomProps}
          className={`${restDomProps.className} ${className}`}
        >
          {!partialRender && (
            <Flex
              as="li"
              color="text5"
              onBlur={handleWrapperBlur}
              onMouseEnter={handleWrapperMouseEnter}
              onMouseLeave={handleWrapperMouseLeave}
            >
              <TreeDisclosureLabel
                aria-selected={selected}
                depth={depth}
                href={href}
                itemRole={itemRole}
                labelBackgroundOnly={hasLabelBackgroundOnly}
                onFocus={onFocus}
                rel={createSafeRel(rel, target)}
                target={target}
                {...ariaProps}
                {...disclosureDomProps}
                {...statefulProps}
              >
                {indicator}
                {/**
                 * @TODO: Delete labelBackgroundOnly behavior once FieldItem component is completed
                 */}
                {hasLabelBackgroundOnly ? (
                  <TreeItem2Label {...statefulProps}>
                    {disclosureLabel}
                  </TreeItem2Label>
                ) : (
                  disclosureLabel
                )}
              </TreeDisclosureLabel>
              {outside}
            </Flex>
          )}
          {accordionIsOpen && (
            <TreeContent
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

const TreeContent = styled.div<GenerateTreeBorderProps>`
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
