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

import styled from 'styled-components'
import React, {
  KeyboardEvent,
  MouseEvent,
  useContext,
  useRef,
  useState,
} from 'react'
import { useAccordion2 } from '../Accordion2'
import { Accordion2Disclosure } from '../Accordion2/Accordion2Disclosure'
import { ControlledOrUncontrolled } from '../Accordion2/controlTypes'
import { partitionAriaProps, undefinedCoalesce, useWrapEvent } from '../utils'
import { List } from '../List'
import { ListItemContext, ListItemProps } from '../ListItem'
import { listItemDimensions, getDetailOptions } from '../ListItem/utils'
import { TreeContext } from './TreeContext'
import { indicatorDefaults } from './utils'
import { WindowedTreeContext } from './WindowedTreeNode'
import { TreeItemInner, TreeItemInnerDetail, TreeStyle } from './TreeStyle'
import { treeItemInnerPropKeys, TreeProps } from './types'
import { TreeAccordion } from './TreeAccordion'

/**
 * TODO: When labelToggle is introduced the aria-* attributes should land on the nested ListItem's
 * label container (i.e. the focusable element).
 */
const TreeLayout = ({
  assumeIconAlignment,
  branchFontWeight,
  border: propsBorder,
  children,
  className,
  disabled,
  dividers,
  forceLabelPadding,
  itemRole,
  label: propsLabel,
  labelBackgroundOnly: propsLabelBackgroundOnly,
  defaultOpen,
  onBlur,
  onClose,
  onFocus,
  onOpen,
  onMouseEnter,
  onMouseLeave,
  isOpen: propsIsOpen,
  toggleOpen: propsToggleOpen,
  ...restProps
}: TreeProps) => {
  const treeItemInnerProps = treeItemInnerPropKeys.reduce((obj, key) => {
    if (restProps && Object.prototype.hasOwnProperty.call(restProps, key)) {
      obj[key] = restProps[key]
    }
    return obj
  }, {} as Partial<ListItemProps>)

  const {
    color: propsColor,
    density: propsDensity,
    detail: propsDetail,
    icon,
    selected,
    ...restTreeItemInnerProps
  } = treeItemInnerProps
  const [ariaProps] = partitionAriaProps(restProps)

  const detailRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

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

  const hasBorder = undefinedCoalesce([propsBorder, treeContext.border])
  const color = undefinedCoalesce([propsColor, treeContext.color, listColor])

  const hasLabelBackgroundOnly = undefinedCoalesce([
    propsLabelBackgroundOnly,
    treeContext.labelBackgroundOnly,
  ])
  const startingDepth = 0
  const depth = treeContext.depth ? treeContext.depth : startingDepth

  const density = collectionDensity || propsDensity || treeContext.density || 0
  const { iconGap, iconSize } = listItemDimensions(density)

  const { accessory, content, hoverDisclosure } = getDetailOptions(propsDetail)

  const handleDetailClick = (event: MouseEvent<HTMLElement>) => {
    if (
      accessory &&
      detailRef.current &&
      detailRef.current.contains(event.target as Node)
    ) {
      event.stopPropagation()
    }
  }

  const handleDetailKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (
      accessory &&
      detailRef.current &&
      detailRef.current.contains(event.target as Node)
    ) {
      event.stopPropagation()
    }
  }

  const handleMouseEnter = useWrapEvent(() => setHovered(true), onMouseEnter)
  const handleMouseLeave = useWrapEvent(() => setHovered(false), onMouseLeave)
  const handleBlur = useWrapEvent(() => setHovered(false), onBlur)
  const handleFocus = useWrapEvent(() => setHovered(true), onFocus)

  const detail = {
    content: (
      <TreeItemInnerDetail
        onClick={handleDetailClick}
        onKeyDown={handleDetailKeyDown}
        ref={detailRef}
      >
        {content}
      </TreeItemInnerDetail>
    ),
    options: {
      accessory,
      hoverDisclosure,
    },
  }

  const label = (
    <TreeItemInner
      renderAsDiv
      color={color}
      density={density}
      detail={detail}
      disabled={disabled}
      icon={icon}
      itemRole={itemRole || 'none'}
      role="none"
      tabIndex={-2} // Prevents tab stop behavior from reaching inner TreeItems
      {...restTreeItemInnerProps}
      {...ariaProps}
    >
      {propsLabel}
    </TreeItemInner>
  )

  const { indicatorIcons, indicatorPosition } = indicatorDefaults

  let accordionProps: ControlledOrUncontrolled = {
    defaultOpen,
    onClose,
    onOpen,
  }
  if (isOpen && toggleOpen) {
    accordionProps = { ...accordionProps, isOpen, toggleOpen }
  }

  const {
    content: treeContent,
    domProps,
    disclosureProps,
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
    label,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    role: 'treeitem',
    tabIndex: -1,
    ...restProps,
    ...accordionProps,
  })

  const innerAccordion = (
    <TreeAccordion className="tree-accordion-disclosure">
      {!partialRender && (
        <Accordion2Disclosure {...domProps} {...disclosureProps} />
      )}
      {treeContent}
    </TreeAccordion>
  )

  return (
    <TreeContext.Provider
      value={{
        border: hasBorder,
        color,
        density,
        depth: depth + 1,
        labelBackgroundOnly: hasLabelBackgroundOnly,
      }}
    >
      <TreeStyle
        assumeIconAlignment={assumeIconAlignment || forceLabelPadding} // TODO 3.x: Deprecate forceLabelPadding as input
        border={hasBorder}
        branchFontWeight={branchFontWeight}
        className={className}
        color={color}
        depth={depth}
        density={density}
        disabled={disabled}
        dividers={dividers}
        hovered={hovered}
        iconGap={iconGap}
        // eslint-disable-next-line i18next/no-literal-string
        indicatorGap="xsmall"
        indicatorSize={iconSize}
        labelBackgroundOnly={hasLabelBackgroundOnly}
        selected={selected}
      >
        {innerAccordion}
      </TreeStyle>
    </TreeContext.Provider>
  )
}

export const Tree = styled(TreeLayout)<TreeProps>``
