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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import type {
  CompatibleHTMLProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import {
  layout,
  reset,
  space,
  shouldForwardProp,
  typography,
} from '@looker/design-tokens'
import type { Ref } from 'react'
import React, { forwardRef, useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import once from 'lodash/once'
import throttle from 'lodash/throttle'
import { usePopover } from '../../../../Popover'
import { listPadding } from '../../../../List/utils'
import { useResize, useSafeLayoutEffect } from '../../../../utils'
import type { ComboboxOptionIndicatorProps } from '../types'
import { ComboboxContext, ComboboxMultiContext } from '../ComboboxContext'
import { useBlur } from '../utils/useBlur'
import { useKeyDown } from '../utils/useKeyDown'
import { useListWidths } from '../utils/useListWidths'

export interface ComboboxListProps
  extends Pick<ComboboxOptionIndicatorProps, 'indicator'>,
    SpaceProps,
    LayoutProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLUListElement> {
  /**
   * When true and the list is opened, if an option's value
   * matches the value in the input, it will automatically be highlighted and
   * be the starting point for any keyboard navigation of the list.
   *
   * This allows you to treat a Combobox more like a `<select>` than an
   * `<input/>`, but be mindful that the user is still able to put any
   * arbitrary value into the input, so if the only valid values for the input
   * are from the list, your app will need to do that validation on blur or
   * submit of the form.
   * @default false
   */
  persistSelection?: boolean
  /**
   * Close after an option is selected
   * @default true
   */
  closeOnSelect?: boolean
  /**
   * Render only the options visible in the scroll window
   * Requires manually updating ComboboxContext.optionsRef with complete
   * list of options in order for keyboard navigation to work properly
   * @default false
   */
  windowing?: boolean
  /**
   * Whether to honor the first click outside the popover
   * @default false
   */
  cancelClickOutside?: boolean
}

interface ComboboxListInternalProps extends ComboboxListProps {
  isMulti: boolean
}

const ComboboxListInternal = forwardRef(
  (
    {
      // when true, and the list opens again, the option with a matching value will be
      // automatically highlighted.
      persistSelection = false,
      // closes the list after an option is selected
      closeOnSelect = true,
      // disables the optionsRef behavior, to be handled externally (support keyboard nav in long lists)
      windowing = false,
      // passed to usePopover – when false, allows first outside click to be honored
      // generally should be false except for when closely mimicking native browser select
      cancelClickOutside = false,
      indicator,
      isMulti,

      minWidth,
      width,

      ...props
    }: ComboboxListInternalProps,
    ref: Ref<HTMLUListElement>
  ) => {
    const context = useContext(ComboboxContext)
    const contextMulti = useContext(ComboboxMultiContext)
    const contextToUse = isMulti ? contextMulti : context
    const {
      persistSelectionPropRef,
      closeOnSelectPropRef,
      windowingPropRef,
      indicatorPropRef,
      wrapperElement,
      isVisible,
      optionsRef,
      listRef,
      setListScrollPosition,
      setListClientRect,
      isScrollingRef,
      id,
    } = contextToUse

    // Update context prop refs
    if (persistSelectionPropRef)
      persistSelectionPropRef.current = persistSelection
    if (closeOnSelectPropRef) closeOnSelectPropRef.current = closeOnSelect
    if (indicatorPropRef) indicatorPropRef.current = indicator

    // WEIRD? Reset the options ref every render so that they are always
    // accurate and ready for keyboard navigation handlers. Using layout
    // effect to schedule this effect before the ComboboxOptions push into
    // the array
    useSafeLayoutEffect(() => {
      if (windowingPropRef) windowingPropRef.current = windowing
      if (optionsRef) optionsRef.current = []
      return () => {
        if (optionsRef) optionsRef.current = []
      }
      // Without isVisible in the dependency array,
      // updated options won't go into the optionsRef array
    }, [optionsRef, isVisible, windowing, windowingPropRef])

    const handleKeyDown = useKeyDown()
    const useBlurSingle = useBlur(ComboboxContext)
    const useBlurMulti = useBlur(ComboboxMultiContext)
    const handleBlur = isMulti ? useBlurMulti : useBlurSingle

    // This hook minimizes the use of getBoundingClientRect for performance reasons
    const widthProps = useListWidths({
      isVisible,
      minWidth,
      width,
      wrapperElement,
    })

    const content = (
      <ComboboxUl
        {...props}
        {...widthProps}
        isMulti={isMulti}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        ref={ref}
        role="listbox"
        id={`listbox-${id}`}
        tabIndex={-1}
      />
    )

    const setOpen = (isOpen: boolean) => {
      if (!isOpen) {
        // Without passing an event, this just handles state change required when closing the list
        handleBlur()
      }
    }

    const { popover, contentContainer, popperInstanceRef } = usePopover({
      ariaLabel: props['aria-label'],
      cancelClickOutside,
      content,
      focusTrap: false,
      isOpen: isVisible,
      placement: 'bottom-start',
      setOpen,
      triggerElement: wrapperElement,
      triggerToggle: false,
    })
    if (popperInstanceRef.current && listRef) {
      // Using the outermost popover element ensures the check in useBlur
      // will not fail to detect a scroll-bar click-drag
      listRef.current = popperInstanceRef.current.state.elements.popper
    }

    // For isMulti, we update the popover position when values are added/removed
    // since it may affect the height of the field
    const valueLength = isMulti ? contextMulti.data.options.length : 1
    useEffect(() => {
      popperInstanceRef.current && popperInstanceRef.current.update()
    }, [popperInstanceRef, valueLength])

    const resizeListener = useCallback(() => {
      setListClientRect?.(contentContainer?.getBoundingClientRect())
    }, [setListClientRect, contentContainer])

    useResize(contentContainer, resizeListener)

    useEffect(() => {
      // track scroll position and menu dom rectangle, and bubble up to context.
      // used in InputTimeSelect for managing very long lists

      const setListClientRectOnce = once((containerElement: Element) => {
        setListClientRect &&
          setListClientRect(containerElement.getBoundingClientRect())
      })

      const updateScrollState = (containerElement: Element) => {
        setListClientRectOnce(containerElement)
        setListScrollPosition?.(containerElement.scrollTop)
      }

      const timeoutValue = 50
      let t: ReturnType<typeof setTimeout>
      const scrollListener = throttle(() => {
        if (contentContainer) {
          updateScrollState(contentContainer)
          // Solves issue where scrolling (regular or due to keyboard navigating)
          // while the mouse is over the list triggers unintentional mouseenter
          // causing the wrong option to get highlighted, and, if windowing is on
          // and this option leaves the window, it gets pulled back in via
          // scrollIntoView()
          if (isScrollingRef) isScrollingRef.current = true
          clearTimeout(t)
          t = setTimeout(() => {
            if (isScrollingRef) isScrollingRef.current = false
          }, timeoutValue + 1)
        }
      }, timeoutValue)

      if (contentContainer) {
        contentContainer.addEventListener('scroll', scrollListener)
        updateScrollState(contentContainer)
      }

      return () => {
        contentContainer &&
          contentContainer.removeEventListener('scroll', scrollListener)

        setListScrollPosition && setListScrollPosition(0)
        setListClientRect && setListClientRect(undefined)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentContainer])

    return popover || null
  }
)

export const ComboboxUl = styled.ul.withConfig({
  shouldForwardProp,
})<ComboboxListInternalProps>`
  ${reset}
  ${typography}
  ${space}
  list-style-type: none;
  margin: 0;
  max-height: 30rem;
  outline: none;
  position: relative;
  ${layout}

  ${listPadding}
`

export const ComboboxList = (props: ComboboxListProps) => (
  <ComboboxListInternal {...props} isMulti={false} />
)

export const ComboboxMultiList = (props: ComboboxListProps) => (
  <ComboboxListInternal {...props} isMulti />
)
