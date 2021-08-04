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

import { SpacingSizes } from '@looker/design-tokens'
import styled from 'styled-components'
import React, { cloneElement, FocusEvent, useContext, useState } from 'react'
import { GenericClickProps } from '../utils/useClickable'
import {
  ControlledLoosely,
  ControlledOrUncontrolled,
} from '../Accordion2/controlTypes'
import { AccordionIndicator } from '../Accordion2/AccordionIndicator'
import { TreeProps, treeItemInnerPropKeys } from '../Tree'
import {
  ListItemDetail,
  listItemDimensions,
  ListItemContext,
  ListItemProps,
  ListItemContent,
} from '../ListItem'
import { TreeContext } from '../Tree/TreeContext'
import { useAccordion2 } from '../Accordion2'
import {
  createSafeRel,
  getNextFocusTarget,
  HoverDisclosureContext,
  partitionAriaProps,
  undefinedCoalesce,
  useWrapEvent,
} from '../utils'
import { List } from '../List'
import {
  createListItemPartitions,
  listItemBackgroundColor,
} from '../ListItem/utils'
import { generateIndent, indicatorDefaults } from '../Tree/utils'
import { WindowedTreeContext } from '../Tree/WindowedTreeNode'
import { TreeItemLabel } from '../Tree/TreeItemLabel'
import { NavTreeItemProps } from './types'

/**
 * Replicated Tree code
 * TODO: When labelToggle is introduced the aria-* attributes should land on the nested ListItem's
 * label container (i.e. the focusable element).
 */
const NavTreeLayout = ({
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
  onClick,
  onClose,
  onFocus: propsOnFocus,
  onKeyUp,
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
    onClick: onIndicatorClick,
    onKeyUp: onIndicatorKeyUp,
    ...disclosureDomProps
  } = disclosureProps

  // These additional props on indicator produce the "indicator toggle only" behavior
  const renderedIndicator = cloneElement(indicator, {
    onClick: onIndicatorClick,
    onKeyUp: onIndicatorKeyUp,
    tabIndex: -1,
  })

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
            <NavTreeDisclosure
              as="li"
              depth={depth}
              density={density}
              onBlur={handleWrapperBlur}
              onMouseEnter={handleWrapperMouseEnter}
              onMouseLeave={handleWrapperMouseLeave}
              role="treeitem"
              {...statefulProps}
            >
              {renderedIndicator}
              <NavTreeItemContent
                aria-selected={selected}
                href={href}
                itemRole={itemRole}
                /**
                 * useAccordion2 would normally just wrap props' onClick and onKeyup
                 * with open state toggling, but because we only want the indicator to handle
                 * open state toggling, we do not pass onClick and onKeyUp
                 * into useAccordion2 and receive them via disclosureProps, so intead we directly assign them here
                 */
                onClick={onClick}
                onFocus={onFocus}
                onKeyUp={onKeyUp}
                rel={createSafeRel(rel, target)}
                target={target}
                {...ariaProps}
                {...disclosureDomProps}
              >
                {/**
                 * @TODO: Delete labelBackgroundOnly behavior once FieldItem component is completed
                 */}
                {hasLabelBackgroundOnly ? (
                  <TreeItemLabel {...statefulProps}>
                    {disclosureLabel}
                  </TreeItemLabel>
                ) : (
                  disclosureLabel
                )}
              </NavTreeItemContent>
              {outside}
            </NavTreeDisclosure>
          )}
          {accordionIsOpen && <div {...contentDomProps} />}
        </div>
      </TreeContext.Provider>
    </HoverDisclosureContext.Provider>
  )
}

const NavTreeItemContent = styled(ListItemContent)`
  display: flex;
  padding-left: 0;
  padding-right: 0;
`

export const NavTreeDisclosure = styled.div`
  ${generateIndent}
  ${listItemBackgroundColor}

  color: ${({ theme }) => theme.colors.text5};
  display: flex;
`

/**
 * NavTree style overrides
 */
const NavTreeStyle = styled(NavTreeLayout).withConfig<
  {
    iconGap: SpacingSizes
    px: SpacingSizes
  } & TreeProps
>({
  shouldForwardProp: (prop) => !['iconGap', 'px'].includes(prop),
})`
  ${AccordionIndicator} {
    ${({ icon, iconGap, theme }) =>
      !icon && `margin-right: ${theme.space[iconGap]}`}
  }

  ${ListItemDetail} {
    padding-right: ${({ px, theme }) => theme.space[px]};
  }
`

export type NavTreeProps = Omit<NavTreeItemProps, 'parentIcon'> &
  ControlledLoosely &
  GenericClickProps<HTMLElement> &
  Pick<TreeProps, 'itemRole' | 'label'>

export const NavTree = styled((props: NavTreeProps) => {
  const { density: contextDensity } = useContext(TreeContext)
  const density = props.density || contextDensity
  const { iconGap, px } = listItemDimensions(density)

  return <NavTreeStyle {...props} iconGap={iconGap} px={px} truncate />
})``
