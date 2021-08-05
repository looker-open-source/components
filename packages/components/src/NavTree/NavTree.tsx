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
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'
import { ArrowRight } from '@styled-icons/material/ArrowRight'
import styled from 'styled-components'
import React, {
  cloneElement,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useContext,
  useState,
} from 'react'
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
  useWrapEvent,
} from '../utils'
import { List } from '../List'
import {
  createListItemPartitions,
  listItemBackgroundColor,
} from '../ListItem/utils'
import { generateIndent } from '../Tree/utils'
import { WindowedTreeContext } from '../Tree/WindowedTreeNode'
import { NavTreeItemProps } from './types'

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
  onFocus: propsOnFocus,
  onKeyUp,
  onOpen,
  onMouseEnter,
  onMouseLeave,
  toggleOpen: propsToggleOpen,
  ...restProps
}: NavTreeProps) => {
  const isIndicatorToggleOnly = !!restProps.href
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

  const startingDepth = 0
  const depth = treeContext.depth ? treeContext.depth : startingDepth

  const density = collectionDensity || propsDensity || treeContext.density || 0

  const [inside, outside] = createListItemPartitions({
    ...treeItemInnerProps,
    children: label,
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
    indicatorIcons: {
      close: <ArrowRight aria-label={`${indicatorLabel} Close`} />,
      open: <ArrowDropDown aria-label={`${indicatorLabel} Open`} />,
    },
    indicatorPosition: 'left',
    label: inside,
    onBlur,
    onFocus: useWrapEvent(() => setHovered(true), propsOnFocus),
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

  return (
    <HoverDisclosureContext.Provider value={{ visible: hovered }}>
      <TreeContext.Provider
        value={{
          color: statefulProps.color,
          density,
          depth: depth + 1,
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
              {...statefulProps}
            >
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
                onFocus={onFocus}
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

type IndicatorToggleModeProps = {
  href: string
  /**
   * Passed down to the indicator icon's label prop
   */
  indicatorLabel: string
}
type DisclosureToggleModeProps = {
  href?: never
  indicatorLabel?: never
}

export type NavTreeProps = Omit<NavTreeItemProps, 'itemRole' | 'parentIcon'> &
  ControlledLoosely &
  GenericClickProps<HTMLElement> &
  Pick<TreeProps, 'label'> &
  (IndicatorToggleModeProps | DisclosureToggleModeProps)

export const NavTree = styled((props: NavTreeProps) => {
  const { density: contextDensity } = useContext(TreeContext)
  const density = props.density || contextDensity
  const { iconGap, px } = listItemDimensions(density)

  return <NavTreeStyle {...props} iconGap={iconGap} px={px} truncate />
})``
