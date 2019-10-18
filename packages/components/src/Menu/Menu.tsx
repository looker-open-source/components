import React, { cloneElement, useRef, useState, FC, Children } from 'react'

export interface MenuCloneProps {
  disabled?: boolean
  isOpen?: boolean
  setOpen?: (value: boolean) => void
  triggerRef?: React.RefObject<HTMLElement>
}

export interface MenuProps {
  children: JSX.Element[]
  /**
   * Disables the Menu, passed to child of MenuDisclosure
   */
  disabled?: boolean

  /**
   * Initial state of Menu
   * @default false
   */
  isOpen?: boolean
}

export function useMenu(disabled?: boolean, initialIsOpen = false) {
  const triggerRef = useRef<HTMLElement>(null)
  const [isOpen, setOpen] = useState(initialIsOpen)
  return { disabled, isOpen, setOpen, triggerRef }
}

/** @component */
export const Menu: FC<MenuProps> = ({ children, disabled, isOpen }) => {
  const menu = useMenu(disabled, isOpen)

  const cloned = Children.map(children, (child: JSX.Element) => {
    return cloneElement(child, menu)
  })
  return <>{cloned}</>
}
