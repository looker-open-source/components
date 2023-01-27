/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { PopoverContent, usePopover } from '@looker/components'
import debounce from 'lodash/debounce'
import React from 'react'

type TreePopupProps = React.PropsWithChildren<{
  anchorElement: HTMLElement | null
  isOpen: boolean
  setOpen: (value: boolean) => void
}>

interface PopupStyle {
  minWidth?: string
  left?: string
  top?: string
}

export const TreeSelectPopup = ({
  anchorElement,
  isOpen,
  setOpen,
  children,
}: TreePopupProps) => {
  const [popupStyle, setPopupStyle] = React.useState<PopupStyle>()

  React.useEffect(() => {
    const onResize = debounce(() => {
      setPopupStyle(getPopupStyle(anchorElement))
    }, 200)
    window.addEventListener('resize', onResize)
    setPopupStyle(getPopupStyle(anchorElement))
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [anchorElement])

  const { popover } = usePopover({
    content: <PopoverContent style={popupStyle}>{children}</PopoverContent>,
    focusTrap: false,
    isOpen,
    setOpen,
    triggerElement: anchorElement,
    triggerToggle: false,
  })

  return popover || null
}

const getPopupStyle = (anchor: HTMLElement | null) => {
  if (!anchor) return {}
  // getBoundingClientRect used only once per user interaction
  // and won't affect performance badly.
  //
  // getBoundingClientRect required to properly position
  // popup below anchor input. Other css solution
  // (where popup lives withing the same container
  // with anchor input) will still require getBoundingClientRect
  // to make sure popup won't go out of window size.
  const rect = anchor.getBoundingClientRect()
  return {
    minWidth: rect.width + 'px',
    left: rect.left + 'px',
    top: rect.top + rect.height + 'px',
  }
}
