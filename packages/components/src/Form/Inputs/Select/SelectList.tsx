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
import { SelectContext } from './SelectContext'
import { useKeyDown, useBlur } from './helpers'
import { SelectActionType } from './state'

export interface SelectListProps
  extends SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLUListElement> {
  /**
   * Defaults to false. When true and the list is opened, if an option's value
   * matches the value in the input, it will automatically be highlighted and
   * be the starting point for any keyboard navigation of the list.
   *
   * This allows you to treat a Select more like a `<select>` than an
   * `<input/>`, but be mindful that the user is still able to put any
   * arbitrary value into the input, so if the only valid values for the input
   * are from the list, your app will need to do that validation on blur or
   * submit of the form.
   */
  persistSelection?: boolean
}

export const SelectListInternal = forwardRef(function SelectList(
  {
    // when true, and the list opens again, the option with a matching value will be
    // automatically highlighted.
    persistSelection = false,
    ...props
  }: SelectListProps,
  forwardedRef: Ref<HTMLUListElement>
) {
  const {
    persistSelectionRef,
    transition,
    inputElement,
    isVisible,
    optionsRef,
    popoverRef,
  } = useContext(SelectContext)

  if (persistSelection) {
    if (persistSelectionRef) persistSelectionRef.current = true
  }

  // WEIRD? Reset the options ref every render so that they are always
  // accurate and ready for keyboard navigation handlers. Using layout
  // effect to schedule this effect before the SelectOptions push into
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
      <ul {...props} ref={forwardedRef} role="listbox" />
    </PopoverContent>
  )

  const setOpen = (isOpen: boolean) => {
    if (isOpen) {
      transition && transition(SelectActionType.FOCUS)
    } else {
      transition && transition(SelectActionType.BLUR)
    }
  }

  const { popover } = usePopover({
    arrow: false,
    content,
    focusTrap: false,
    isOpen: isVisible,
    setOpen,
    triggerElement: inputElement,
    triggerToggle: false,
  })
  return popover || null
})

SelectListInternal.displayName = 'SelectListInternal'

export const SelectList = styled(SelectListInternal)`
  ${reset}
  ${typography}
  list-style-type: none;
  ${space}
`

SelectList.defaultProps = {
  py: 'xsmall',
}
