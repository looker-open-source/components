/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
import React, { forwardRef, Ref, useContext, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { PopoverContent, usePopover } from '../../../Popover'
import { ComboboxContext } from './ComboboxContext'
import { useKeyDown, useBlur } from './helpers'
import { ComboboxActionType } from './state'

export interface ComboboxListProps
  extends SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLUListElement> {
  /**
   * Defaults to false. When true and the list is opened, if an option's value
   * matches the value in the input, it will automatically be highlighted and
   * be the starting point for any keyboard navigation of the list.
   *
   * This allows you to treat a Combobox more like a `<select>` than an
   * `<input/>`, but be mindful that the user is still able to put any
   * arbitrary value into the input, so if the only valid values for the input
   * are from the list, your app will need to do that validation on blur or
   * submit of the form.
   */
  persistComboboxion?: boolean
}

export const ComboboxListInternal = forwardRef(function ComboboxList(
  {
    // when true, and the list opens again, the option with a matching value will be
    // automatically highlighted.
    persistComboboxion = false,
    ...props
  }: ComboboxListProps,
  forwardedRef: Ref<HTMLUListElement>
) {
  const {
    persistComboboxionRef,
    transition,
    inputElement,
    isVisible,
    optionsRef,
    popoverRef,
  } = useContext(ComboboxContext)

  if (persistComboboxion) {
    if (persistComboboxionRef) persistComboboxionRef.current = true
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
  const width = inputElement
    ? inputElement.getBoundingClientRect().width
    : 'auto'

  const content = (
    <PopoverContent
      width={width}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      ref={popoverRef}
      p="none"
    >
      <ul {...props} ref={forwardedRef} role="listbox" tabIndex={-1} />
    </PopoverContent>
  )

  const setOpen = (isOpen: boolean) => {
    if (!isOpen) {
      transition && transition(ComboboxActionType.BLUR)
    }
  }

  const { popover } = usePopover({
    arrow: false,
    content,
    focusTrap: false,
    isOpen: isVisible,
    placement: 'bottom',
    setOpen,
    triggerElement: inputElement,
    triggerToggle: false,
  })
  return popover || null
})

ComboboxListInternal.displayName = 'ComboboxListInternal'

export const ComboboxList = styled(ComboboxListInternal)`
  ${reset}
  ${typography}
  ${space}
  list-style-type: none;
`

ComboboxList.defaultProps = {
  py: 'xsmall',
}
