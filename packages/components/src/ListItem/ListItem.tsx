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
import type { Ref } from 'react'
import React, { forwardRef, useContext, useRef, useState } from 'react'
import {
  createSafeRel,
  HoverDisclosureContext,
  partitionAriaProps,
  undefinedCoalesce,
  useWrapEvent,
  useForkedRef,
} from '../utils'
import { IconPlaceholder } from '../Icon'
import { ListItemContext } from './ListItemContext'
import { ListItemContent } from './ListItemContent'
import { ListItemWrapper } from './ListItemWrapper'
import { createListItemPartitions, listItemLabelColor } from './utils'
import type { ListItemProps } from './types'

const ListItemInternal = forwardRef(
  (props: ListItemProps, ref: Ref<HTMLLIElement | HTMLDivElement>) => {
    const {
      children: _children,
      className,
      color: propsColor,
      density: propsDensity,
      description: _description,
      detail,
      disabled = false,
      hovered: propsHovered = false,
      href,
      icon,
      itemRole,
      onBlur,
      onClick,
      onKeyDown,
      onKeyUp,
      onMouseEnter,
      onMouseLeave,
      rel,
      ripple = true,
      role,
      selected,
      tabIndex = -1,
      target,
      truncate: _truncate,
      ...restProps
    } = props

    const {
      density: contextDensity,
      iconGutter,
      color: contextColor,
    } = useContext(ListItemContext)

    const density = propsDensity || contextDensity

    const color = undefinedCoalesce([propsColor, contextColor])

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

    const [ariaProps, wrapperProps] = partitionAriaProps(restProps)
    const [insideElements, outsideElements] = createListItemPartitions({
      ...props,
      color,
      density,
      detail,
      icon: icon || (iconGutter ? <IconPlaceholder /> : undefined),
    })

    const statefulProps = {
      color,
      disabled,
      hovered,
      ripple,
      selected,
    }

    const handleWrapperFocus = () => {
      setHovered(true)
    }

    const handleWrapperBlur = (event: React.FocusEvent<HTMLElement>) => {
      const nextFocusTarget = event.relatedTarget

      if (nextFocusTarget && !event.currentTarget.contains(nextFocusTarget)) {
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
          onBlur={handleWrapperBlur}
          onFocus={handleWrapperFocus}
          onMouseEnter={handleWrapperMouseEnter}
          onMouseLeave={handleWrapperMouseLeave}
          ref={actualRef}
          {...wrapperProps}
        >
          <ListItemContent
            itemRole={itemRole}
            aria-selected={selected}
            cursorPointer={!!(href || onClick)}
            href={href}
            onClick={disabled ? undefined : handleOnClick}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            density={density}
            rel={createSafeRel(rel, target)}
            role={role || 'listitem'}
            target={target}
            tabIndex={tabIndex}
            {...ariaProps}
            {...statefulProps}
          >
            {insideElements}
          </ListItemContent>
          {outsideElements}
        </ListItemWrapper>
      </HoverDisclosureContext.Provider>
    )
  }
)

export const ListItem = styled(ListItemInternal)<ListItemProps>``
