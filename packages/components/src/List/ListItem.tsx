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
  forwardRef,
  Ref,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  HoverDisclosureContext,
  undefinedCoalesce,
  useFocusVisible,
  useWrapEvent,
  getNextFocusTarget,
  useForkedRef,
} from '../utils'
import { IconPlaceholder } from '../Icon'
import { ListItemContext } from './ListItemContext'
import { ListItemLabel } from './ListItemLabel'
import { ListItemWrapper } from './ListItemWrapper'
import { listItemLabelColor } from './utils/listItemColor'
import {
  createSafeRel,
  listItemDimensions,
  partitionAriaProps,
  useListItemPartitions,
} from './utils'
import { ListItemProps } from './types'

const ListItemInternal = forwardRef(
  (props: ListItemProps, ref: Ref<HTMLLIElement | HTMLDivElement>) => {
    const {
      children,
      className,
      color: propsColor,
      density: propsDensity,
      description,
      detail,
      disabled = false,
      hovered: propsHovered = false,
      href,
      icon,
      itemRole,
      onBlur,
      onClick,
      onClickWhitespace,
      onKeyDown,
      onKeyUp,
      onMouseEnter,
      onMouseLeave,
      rel,
      renderAsDiv = false,
      role,
      selected,
      tabIndex = -1,
      target,
      truncate,
      ...restProps
    } = props

    const {
      density: contextDensity,
      iconGutter,
      color: contextColor,
    } = useContext(ListItemContext)

    const itemDimensions = listItemDimensions(propsDensity || contextDensity)

    const color = undefinedCoalesce([propsColor, contextColor])

    const { focusVisible, ...focusVisibleHandlers } = useFocusVisible({
      onBlur,
      onKeyUp,
    })
    const [hovered, setHovered] = useState(propsHovered)

    const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
      if (itemRole !== 'none' && onClick) {
        onClick(event)
      }
    }
    if (disabled && itemRole === 'link') {
      // eslint-disable-next-line no-console
      console.warn(
        'itemRole="link" and disabled cannot be combined - use itemRole="button" if you need to offer a disabled ListItem'
      )
    }

    if (itemRole === 'none' && onClick) {
      // eslint-disable-next-line no-console
      console.warn(
        'itemRole="none" and onClick cannot be combined - if itemRole="none" is a necessity, assign click behavior directly to ListItem\'s children'
      )
    }

    const wrapperRef = useRef<HTMLLIElement | HTMLDivElement>(null)
    const actualRef = useForkedRef(wrapperRef, ref)
    useEffect(() => {
      const focusableElements =
        wrapperRef?.current?.querySelectorAll('a, button, input')

      if (focusableElements) {
        focusableElements.forEach((activeElement) => {
          activeElement.setAttribute('tabIndex', '-1')
        })
      }
    })

    const [ariaProps, wrapperProps] = partitionAriaProps(restProps)
    const [insideElements, outsideElements] = useListItemPartitions({
      ...props,
      color,
      icon: icon || (iconGutter ? <IconPlaceholder /> : undefined),
    })

    const statefulProps = {
      color,
      disabled,
      hovered,
      selected,
    }

    const handleOnClickWhitespace = (event: React.MouseEvent<HTMLElement>) => {
      if (event.currentTarget === event.target) {
        onClickWhitespace && onClickWhitespace(event)
      }
    }

    const handleWrapperFocus = () => {
      setHovered(true)
    }

    const handleWrapperBlur = (event: React.FocusEvent<HTMLElement>) => {
      const nextFocusTarget = getNextFocusTarget(event)

      if (
        nextFocusTarget &&
        !event.currentTarget.contains(nextFocusTarget as Node)
      ) {
        setHovered(false)
      }
    }

    const handleWrapperMouseEnter = useWrapEvent(
      () => setHovered(true),
      onMouseEnter
    )

    const handleWrapperMouseLeave = useWrapEvent(
      () => setHovered(false),
      onMouseLeave
    )

    return (
      <HoverDisclosureContext.Provider value={{ visible: hovered }}>
        <ListItemWrapper
          className={className}
          color={listItemLabelColor(color, disabled)}
          cursorPointer={!!onClickWhitespace}
          description={description}
          disabled={disabled}
          onBlur={handleWrapperBlur}
          onClick={handleOnClickWhitespace}
          onFocus={handleWrapperFocus}
          onMouseEnter={handleWrapperMouseEnter}
          onMouseLeave={handleWrapperMouseLeave}
          ref={actualRef}
          renderAsDiv={renderAsDiv}
          {...itemDimensions}
          {...wrapperProps}
        >
          <ListItemLabel
            itemRole={itemRole}
            aria-selected={selected}
            className={className}
            cursorPointer={!!(href || onClick)}
            focusVisible={focusVisible}
            height={itemDimensions.height}
            href={href}
            onClick={disabled ? undefined : handleOnClick}
            onKeyDown={onKeyDown}
            px={itemDimensions.px}
            py={itemRole === 'none' ? 'none' : itemDimensions.py}
            rel={createSafeRel(rel, target)}
            role={role || 'listitem'}
            target={target}
            tabIndex={tabIndex}
            {...ariaProps}
            {...focusVisibleHandlers}
            {...statefulProps}
          >
            {insideElements}
          </ListItemLabel>
          {outsideElements}
        </ListItemWrapper>
      </HoverDisclosureContext.Provider>
    )
  }
)

ListItemInternal.displayName = 'ListItemInternal'

export const ListItem = styled(ListItemInternal)<ListItemProps>``
