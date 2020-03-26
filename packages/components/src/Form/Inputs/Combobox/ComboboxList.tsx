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
import { PopoverContent, usePopover } from '../../../Popover'
import { ComboboxContext, ComboboxMultiContext } from './ComboboxContext'
import { useBlur } from './utils/useBlur'
import { useKeyDown } from './utils/useKeyDown'
import { ComboboxActionType } from './utils/state'

export interface ComboboxListProps
  extends SpaceProps,
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
      isMulti,
      ...props
    }: ComboboxListInternalProps,
    forwardedRef: Ref<HTMLUListElement>
  ) => {
    const context = useContext(ComboboxContext)
    const contextMulti = useContext(ComboboxMultiContext)
    const contextToUse = isMulti ? contextMulti : context
    const {
      persistSelectionRef,
      transition,
      wrapperElement,
      isVisible,
      optionsRef,
      popoverRef,
      setListScrollPosition,
      setListClientRect,
    } = contextToUse

    if (persistSelection) {
      if (persistSelectionRef) persistSelectionRef.current = true
    }
    if (persistSelection) {
      if (persistSelectionRef) persistSelectionRef.current = true
    }

    // WEIRD? Reset the options ref every render so that they are always
    // accurate and ready for keyboard navigation handlers. Using layout
    // effect to schedule this effect before the ComboboxOptions push into
    // the array
    useLayoutEffect(() => {
      if (optionsRef) optionsRef.current = []
      return () => {
        if (optionsRef) optionsRef.current = []
      }
      // Without isVisible in the dependency array,
      // updated options won't go into the optionsRef array
    }, [optionsRef, isVisible])

    const handleKeyDown = useKeyDown()
    const handleBlur = useBlur()
    const width = wrapperElement
      ? wrapperElement.getBoundingClientRect().width
      : 'auto'

    const content = (
      <PopoverContent
        width={width}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        ref={popoverRef}
        p="none"
      >
        <ul
          {...props}
          ref={forwardedRef}
          role="listbox"
          tabIndex={-1}
          data-testid="combobox-list"
        />
      </PopoverContent>
    )

    const setOpen = (isOpen: boolean) => {
      if (!isOpen) {
        transition && transition(ComboboxActionType.BLUR)
      }
    }

    const { popover, contentContainerRef } = usePopover({
      arrow: false,
      content,
      focusTrap: false,
      isOpen: isVisible,
      placement: 'bottom',
      setOpen,
      triggerElement: wrapperElement,
      triggerToggle: false,
    })

    useEffect(() => {
      // track scroll position and menu dom rectangle, and bubble up to context.
      // used in InputTimeSelect for managing very long lists

      const setListClientRectOnce = once((containerElement: Element) => {
        setListClientRect &&
          setListClientRect(containerElement.getBoundingClientRect())
      })

      const scrollListener = () => {
        if (contentContainerRef) {
          setListClientRectOnce(contentContainerRef)
          setListScrollPosition &&
            setListScrollPosition(contentContainerRef.scrollTop)
        }
      }

      contentContainerRef &&
        contentContainerRef.addEventListener('scroll', scrollListener)

      return () => {
        contentContainerRef &&
          contentContainerRef.removeEventListener('scroll', scrollListener)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentContainerRef])

    return popover || null
  }
)

ComboboxListInternal.displayName = 'ComboboxListInternal'

const comboboxListStyles = css<ComboboxListInternalProps>`
  ${reset}
  ${typography}
  ${space}
  list-style-type: none;
  margin: 0;
  padding: ${({ isMulti, theme }) => (isMulti ? theme.space.xsmall : 0)} 0;
  max-height: 30rem;
`

export const ComboboxList = styled(ComboboxListInternal).attrs({
  isMulti: false,
})`
  ${comboboxListStyles}
`

export const ComboboxMultiList = styled(ComboboxListInternal).attrs({
  isMulti: true,
})`
  ${comboboxListStyles}
`

ComboboxList.defaultProps = {
  py: 'xsmall',
}
