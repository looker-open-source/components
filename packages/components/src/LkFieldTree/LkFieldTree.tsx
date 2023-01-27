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

import styled from 'styled-components'
import React, { useContext } from 'react'
import { useAccordion2 } from '../Accordion2'
import type { ControlledOrUncontrolled } from '../Accordion2/controlTypes'
import { HoverDisclosureContext, partitionAriaProps } from '../utils'
import { List } from '../List'
import type { ListItemProps } from '../ListItem'
import { createListItemPartitions } from '../ListItem/utils'
import { TreeContext } from '../Tree/TreeContext'
import {
  generateBorderRadius,
  indicatorDefaults,
  partitionTreeProps,
  useTreeHandlers,
} from '../Tree/utils'
import { WindowedTreeContext } from '../Tree/WindowedTreeNode'
import { lkFieldItemDensity } from './defaults'
import { LkFieldItem } from './LkFieldItem'
import { LkFieldItemContent } from './LkFieldItemContent'
import { LkFieldItemLabel } from './LkFieldItemLabel'
import { LkFieldTreeAccordionContent } from './LkFieldTreeAccordionContent'
import { LkFieldTreeAccordionDisclosure } from './LkFieldTreeAccordionDisclosure'
import type { LkFieldTreeProps } from './types'

const LkFieldTreeLayout = ({
  children,
  isOpen: propsIsOpen,
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
}: LkFieldTreeProps) => {
  const density = lkFieldItemDensity
  const [treeItemInnerProps, accordionInnerProps] = partitionTreeProps(
    restProps as Record<string, unknown>
  )

  const { hovered, contentHandlers, wrapperHandlers } = useTreeHandlers({
    onFocus,
    onMouseEnter,
    onMouseLeave,
  })

  const { color, disabled, icon, selected } =
    treeItemInnerProps as Partial<ListItemProps>
  const [ariaProps] = partitionAriaProps(restProps)
  const treeContext = useContext(TreeContext)

  // Context for supporting windowing
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

  const { indicatorIcons, indicatorPosition } = indicatorDefaults

  const [inside, outside] = createListItemPartitions({
    ...treeItemInnerProps,
    children: label,
    color,
    density,
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
      <List disableKeyboardNav role="group" windowing={false} as="div">
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
    <LkFieldItemContent
      aria-selected={selected}
      depth={depth}
      {...ariaProps}
      {...contentHandlers}
      {...disclosureDomProps}
      {...statefulProps}
    >
      {indicator}
      <LkFieldItemLabel {...statefulProps}>{disclosureLabel}</LkFieldItemLabel>
    </LkFieldItemContent>
  )

  return (
    <HoverDisclosureContext.Provider value={{ visible: hovered }}>
      <TreeContext.Provider
        value={{
          density,
          depth: depth + 1,
        }}
      >
        <div {...domProps}>
          {!partialRender && (
            <LkFieldTreeAccordionDisclosure role="group" {...wrapperHandlers}>
              {content}
              {outside}
            </LkFieldTreeAccordionDisclosure>
          )}
          {accordionIsOpen && (
            <LkFieldTreeAccordionContent {...contentDomProps} />
          )}
        </div>
      </TreeContext.Provider>
    </HoverDisclosureContext.Provider>
  )
}

export const LkFieldTree = styled(LkFieldTreeLayout)`
  ${({ theme }) => generateBorderRadius('medium', theme)}

  ${LkFieldItem} {
    margin-top: 1px;
  }

  & & {
    margin-top: 1px;
  }
`
