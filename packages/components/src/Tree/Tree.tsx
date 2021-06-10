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
  FC,
  KeyboardEvent,
  MouseEvent,
  useContext,
  useRef,
  useState,
} from 'react'
import { Accordion } from '../Accordion'
import { undefinedCoalesce, useWrapEvent } from '../utils'
import { List, ListItemProps } from '../List'
import { ListItemContext } from '../List/ListItemContext'
import { listItemDimensions, getDetailOptions } from '../List/utils'
import { TreeContext } from './TreeContext'
import { indicatorDefaults } from './utils'
import { TreeItemInner, TreeItemInnerDetail, TreeStyle } from './TreeStyle'
import { treeItemInnerPropKeys, TreeProps } from './types'

/**
 * TODO: When labelToggle is introduced the aria-* attributes should land on the nested ListItem's
 * label container (i.e. the focusable element).
 */
const TreeLayout: FC<TreeProps> = ({
  assumeIconAlignment,
  branchFontWeight,
  border: propsBorder,
  children,
  className,
  dividers,
  forceLabelPadding,
  itemRole,
  label: propsLabel,
  labelBackgroundOnly: propsLabelBackgroundOnly,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  ...restProps
}) => {
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
    disabled,
    icon,
    selected,
    ...restTreeItemInnerProps
  } = treeItemInnerProps

  const detailRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const { color: listColor } = useContext(ListItemContext)
  const treeContext = useContext(TreeContext)

  const hasBorder = undefinedCoalesce([propsBorder, treeContext.border])
  const color = undefinedCoalesce([propsColor, treeContext.color, listColor])

  const hasLabelBackgroundOnly = undefinedCoalesce([
    propsLabelBackgroundOnly,
    treeContext.labelBackgroundOnly,
  ])
  const startingDepth = 0
  const depth = treeContext.depth ? treeContext.depth : startingDepth

  const density = propsDensity || treeContext.density
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
    >
      {propsLabel}
    </TreeItemInner>
  )

  const indicatorColor = disabled ? 'text1' : 'text5'
  const {
    indicatorGap: defaultGap,
    indicatorIcons,
    indicatorPosition,
  } = indicatorDefaults
  const innerAccordion = (
    <Accordion
      renderAsLi
      aria-selected={selected}
      content={
        <List disableKeyboardNav role="group" windowing={false}>
          {children}
        </List>
      }
      color={indicatorColor}
      indicatorGap={assumeIconAlignment ? iconGap : defaultGap}
      indicatorIcons={indicatorIcons}
      indicatorPosition={indicatorPosition}
      indicatorSize={iconSize}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      py="none"
      role="treeitem"
      tabIndex={-1}
      {...restProps}
    >
      {label}
    </Accordion>
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
        disabled={disabled}
        dividers={dividers}
        hovered={hovered}
        iconGap={iconGap}
        indicatorGap={defaultGap}
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
