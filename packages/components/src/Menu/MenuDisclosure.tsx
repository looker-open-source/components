import React, { FC } from 'react'
import { Placement } from 'popper.js'
import { useTooltip } from '../Tooltip'
import { MenuCloneProps } from './Menu'

export interface MenuDisclosureProps extends MenuCloneProps {
  children: JSX.Element
  tooltip?: string
  tooltipPlacement?: Placement
}

type MouseEventCallback = (e: React.MouseEvent) => void

function wrapCallback(
  cbParent: MouseEventCallback,
  cbChild?: MouseEventCallback
) {
  return (e: React.MouseEvent) => {
    cbParent(e)
    cbChild && cbChild(e)
  }
}

export const MenuDisclosure: FC<MenuDisclosureProps> = ({
  children,
  disabled,
  isOpen,
  setOpen,
  tooltip,
  tooltipPlacement,
  triggerRef,
}) => {
  const { eventHandlers, tooltip: renderedTooltip, ref } = useTooltip({
    content: tooltip,
    disabled: isOpen,
    placement: tooltipPlacement || 'top',
    triggerRef,
  })

  const handleClick = () => setOpen && setOpen(!isOpen)

  const allCallbacks = { ...eventHandlers, onClick: handleClick }

  const cloned = React.Children.map(children, (child: JSX.Element) => {
    const childProps = child.props

    const wrappedCallbacks: { [key: string]: MouseEventCallback } = {}
    Object.keys(allCallbacks).forEach(cbName => {
      const cbParent = Reflect.get(allCallbacks, cbName)
      wrappedCallbacks[cbName] = wrapCallback(cbParent, childProps[cbName])
    })

    return React.cloneElement(child, {
      ...wrappedCallbacks,
      disabled,
      ref,
    })
  })

  return (
    <>
      {renderedTooltip}
      {cloned}
    </>
  )
}
