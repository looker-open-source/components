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
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'
import { ArrowRight } from '@styled-icons/material/ArrowRight'
import styled from 'styled-components'
import React, {
  cloneElement,
  KeyboardEvent,
  MouseEvent,
  useContext,
} from 'react'
import { ControlledOrUncontrolled } from '../Accordion2/controlTypes'
import { partitionTreeProps, useTreeHandlers } from '../Tree/utils'
import { ListItemDetail, listItemDimensions, ListItemProps } from '../ListItem'
import { TreeContext } from '../Tree/TreeContext'
import { useAccordion2 } from '../Accordion2'
import {
  createSafeRel,
  HoverDisclosureContext,
  mergeClassNames,
  partitionAriaProps,
  useWrapEvent,
} from '../utils'
import { List } from '../List'
import { AccordionIndicator } from '../Accordion2/AccordionIndicator'
import { createListItemPartitions } from '../ListItem/utils'
import { WindowedTreeContext } from '../Tree/WindowedTreeNode'
import { NavTreeProps } from './types'
import { NavTreeDisclosure } from './NavTreeDisclosure'
import { NavTreeItemContent } from './NavTreeItemContent'

const NavTreeLayout = ({
  children,
  className,
  defaultOpen,
  indicatorLabel,
  isOpen: propsIsOpen,
  label,
  onBlur,
  onClick,
  onClose,
  onFocus,
  onKeyUp,
  onOpen,
  onMouseEnter,
  onMouseLeave,
  toggleOpen: propsToggleOpen,
  ...restProps
}: NavTreeProps) => {
  /**
   * If `href` is supplied the clicking the label will NOT trigger
   * the underlying accordion. Only the indicator will trigger toggle
   */
  const isIndicatorToggleOnly = !!restProps.href

  const [treeItemInnerProps, accordionInnerProps] =
    partitionTreeProps(restProps)

  const { hovered, contentHandlers, wrapperHandlers } = useTreeHandlers({
    onFocus,
    onMouseEnter,
    onMouseLeave,
  })

  const { disabled, href, icon, rel, selected, target } =
    treeItemInnerProps as Partial<ListItemProps>
  const [ariaProps] = partitionAriaProps(restProps)

  const treeContext = useContext(TreeContext)

  // Context for supporting windowing
  // - density must be defined at the collection level for consistent child height
  // - opened / closed state must be managed at the collection level for accurate item count
  // - partialRender to hide the accordion disclosure if it's above the window
  const {
    isOpen: contextIsOpen,
    toggleNode,
    partialRender,
  } = useContext(WindowedTreeContext)

  const isOpen = contextIsOpen ?? propsIsOpen
  const toggleOpen = toggleNode ?? propsToggleOpen

  const startingDepth = 0
  const depth = treeContext.depth ? treeContext.depth : startingDepth

  const [inside, outside] = createListItemPartitions({
    ...treeItemInnerProps,
    children: label,
    icon,
    truncate: true,
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
    disabled,
    indicatorIcons: {
      close: <ArrowRight aria-label={`${indicatorLabel} Close`} />,
      open: <ArrowDropDown aria-label={`${indicatorLabel} Open`} />,
    },
    indicatorPosition: 'left',
    label: inside,
    onBlur,
    tabIndex: -1,
    ...accordionProps,
  })

  const {
    indicator,
    children: disclosureLabel,
    onClick: onClickDisclosureToggle,
    onKeyUp: onKeyUpDisclosureToggle,
    ...disclosureDomProps
  } = disclosureProps

  const indicatorToggleOnlyProps = {
    onClick: onClickDisclosureToggle,
    onKeyUp: onKeyUpDisclosureToggle,
    tabIndex: -1,
  }
  const renderedIndicator = cloneElement(indicator, {
    ...(isIndicatorToggleOnly ? indicatorToggleOnlyProps : undefined),
  })

  const handleContentClick = useWrapEvent((event: MouseEvent<HTMLElement>) => {
    !isIndicatorToggleOnly &&
      onClickDisclosureToggle &&
      onClickDisclosureToggle(event)
  }, onClick)
  const handleContentKeyUp = useWrapEvent(
    (event: KeyboardEvent<HTMLElement>) => {
      !isIndicatorToggleOnly &&
        onKeyUpDisclosureToggle &&
        onKeyUpDisclosureToggle(event)
    },
    onKeyUp
  )

  const statefulProps = {
    color: 'key',
    disabled,
    hovered,
    selected,
  }

  const content = (
    <>
      {isIndicatorToggleOnly && renderedIndicator}
      <NavTreeItemContent
        aria-selected={selected}
        href={href}
        itemRole={isIndicatorToggleOnly ? 'link' : 'none'}
        /**
         * useAccordion2 would normally just wrap props' onClick and onKeyup
         * with open state toggling, but because we only want the indicator to handle
         * open state toggling, we do not pass onClick and onKeyUp
         * into useAccordion2 and receive them via disclosureProps, so instead we directly assign them here
         */
        onClick={handleContentClick}
        {...contentHandlers}
        onKeyUp={handleContentKeyUp}
        rel={createSafeRel(rel, target)}
        role="treeitem"
        target={target}
        {...ariaProps}
        {...disclosureDomProps}
      >
        {!isIndicatorToggleOnly && renderedIndicator}
        {disclosureLabel}
      </NavTreeItemContent>
    </>
  )

  return (
    <HoverDisclosureContext.Provider value={{ visible: hovered }}>
      <TreeContext.Provider
        value={{
          color: statefulProps.color,
          depth: depth + 1,
        }}
      >
        <div
          {...domProps}
          className={mergeClassNames([domProps.className, className])}
        >
          {!partialRender && (
            <NavTreeDisclosure
              as="li"
              depth={depth}
              {...wrapperHandlers}
              {...statefulProps}
            >
              {content}
              {outside}
            </NavTreeDisclosure>
          )}
          {accordionIsOpen && <div {...contentDomProps} />}
        </div>
      </TreeContext.Provider>
    </HoverDisclosureContext.Provider>
  )
}

/**
 * Adds additional padding to left side of all NavTree-related elements
 * to allow for better click targeting when NavTree composition bumps against
 * left page edge.
 */
export const INDICATOR_SPACER = '8px'

export const NavTree = styled(NavTreeLayout)`
  ${AccordionIndicator} {
    padding-left: ${INDICATOR_SPACER};
    ${({ icon, theme }) =>
      !icon && `margin-right: ${theme.space[listItemDimensions().iconGap]}`}
  }

  ${ListItemDetail} {
    padding-right: ${({ theme }) => theme.space[listItemDimensions().px]};
  }
`
