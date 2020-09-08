/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import {
  CompatibleHTMLProps,
  layout,
  LayoutProps,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import React, {
  forwardRef,
  Ref,
  useContext,
  useLayoutEffect,
  useEffect,
} from 'react'
import styled, { css } from 'styled-components'
import once from 'lodash/once'
import throttle from 'lodash/throttle'
import { usePopover } from '../../../Popover'
import { ComboboxOptionIndicatorProps } from './ComboboxOptionIndicator'
import { ComboboxContext, ComboboxMultiContext } from './ComboboxContext'
import { useBlur } from './utils/useBlur'
import { useKeyDown } from './utils/useKeyDown'
import { useListWidths } from './utils/useListWidths'

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
  windowedOptions?: boolean
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
      windowedOptions = false,
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
      windowedOptionsPropRef,
      indicatorPropRef,
      wrapperElement,
      isVisible,
      optionsRef,
      listRef,
      setListScrollPosition,
      setListClientRect,
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
    useLayoutEffect(() => {
      if (windowedOptionsPropRef)
        windowedOptionsPropRef.current = windowedOptions
      if (optionsRef) optionsRef.current = []
      return () => {
        if (optionsRef) optionsRef.current = []
      }
      // Without isVisible in the dependency array,
      // updated options won't go into the optionsRef array
    }, [optionsRef, isVisible, windowedOptions, windowedOptionsPropRef])

    const handleKeyDown = useKeyDown()
    const handleBlur = isMulti
      ? useBlur(ComboboxMultiContext)
      : useBlur(ComboboxContext)

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
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        ref={ref}
        role="listbox"
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

    useEffect(() => {
      // track scroll position and menu dom rectangle, and bubble up to context.
      // used in InputTimeSelect for managing very long lists

      const setListClientRectOnce = once((containerElement: Element) => {
        setListClientRect &&
          setListClientRect(containerElement.getBoundingClientRect())
      })

      const scrollListener = throttle(() => {
        if (contentContainer) {
          setListClientRectOnce(contentContainer)
          setListScrollPosition &&
            setListScrollPosition(contentContainer.scrollTop)
        }
      }, 50)

      const resizeListener = throttle(() => {
        if (contentContainer && setListClientRect) {
          setListClientRect(contentContainer.getBoundingClientRect())
        }
      }, 50)

      if (contentContainer) {
        contentContainer.addEventListener('scroll', scrollListener)
        scrollListener()
        window.addEventListener('resize', resizeListener)
      }

      return () => {
        contentContainer &&
          contentContainer.removeEventListener('scroll', scrollListener)
        window.removeEventListener('resize', resizeListener)

        setListScrollPosition && setListScrollPosition(0)
        setListClientRect && setListClientRect(undefined)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentContainer])

    return popover || null
  }
)

ComboboxListInternal.displayName = 'ComboboxListInternal'

const ComboboxUl = styled.ul<ComboboxListProps>`
  ${reset}
  ${typography}
  ${space}
  list-style-type: none;
  margin: 0;
  max-height: 30rem;
  outline: none;
  ${layout}
`

const isMultiPadding = css<ComboboxListInternalProps>`
  padding: ${({ isMulti, theme }) => (isMulti ? theme.space.xsmall : 0)} 0;
`

export const ComboboxList = styled(ComboboxListInternal).attrs({
  isMulti: false,
})`
  ${isMultiPadding}
`

export const ComboboxMultiList = styled(ComboboxListInternal).attrs({
  isMulti: true,
})`
  ${isMultiPadding}
`
