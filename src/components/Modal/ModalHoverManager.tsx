import { Placement } from 'popper.js'
import React, { useEffect, useRef, useState } from 'react'
import { PopperProps } from 'react-popper'
import { ManagedModalProps } from '../Modal'

export interface ManagedHoverModalProps {
  setSurfaceRef: NonNullable<PopperProps['innerRef']>
  onMouseOut: (event: React.MouseEvent) => void
}

export interface ModalHoverManagerProps extends ManagedModalProps {
  /**
   * Render Prop to render the Modal.
   * @required
   */
  children: (
    modalProps: ManagedHoverModalProps & ManagedModalProps,
    isOpen: boolean,
    triggerRef: React.RefObject<HTMLElement>,
    close: () => void
  ) => React.ReactNode
  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean
  isOpen?: boolean
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: Placement
  /**
   * Component to wrap. The ModalHoverManager HOC will listen for mouse events on this
   * component, maintain the state of isOpen accordingly, and pass that state into
   * the modal renderProp.
   */
  wrappedComponent: (
    eventsHandlers: {
      onBlur: () => void
      onFocus: () => void
      onMouseOut: (event: React.MouseEvent) => void
      onMouseOver: () => void
    },
    ref: React.RefObject<HTMLElement>
  ) => React.ReactNode
}

export const ModalHoverManager: React.FC<ModalHoverManagerProps> = props => {
  const [isOpenState, setIsOpen] = useState(false)
  const surfaceRef = useRef<HTMLElement | null>(null)
  const triggerRef = useRef<HTMLElement>(null)

  // This faithfully implements the componentDidMount behavior of the
  // React.Component implementation, although it is a bit nonsensical.
  useEffect(() => {
    if (props.isOpen) handleOpen()
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    if (props.canClose && !props.canClose()) return
    setIsOpen(false)
  }

  const handleMouseOut = (event: React.MouseEvent) => {
    if (!isOpenState) return

    const related = event.relatedTarget

    if (
      triggerRef.current &&
      (triggerRef.current === related ||
        triggerRef.current.contains(related as Node))
    ) {
      return
    }

    if (
      surfaceRef.current &&
      (surfaceRef.current === related ||
        surfaceRef.current.contains(related as Node))
    ) {
      return
    }

    handleClose()
  }

  const { children, isOpen, wrappedComponent, ...otherProps } = props

  const eventHandlers = {
    onBlur: handleClose,
    onFocus: handleOpen,
    onMouseOut: handleMouseOut,
    onMouseOver: handleOpen,
  }

  const modalProps = {
    ...otherProps,
    onMouseOut: handleMouseOut,
    setSurfaceRef: (ref: HTMLElement | null) => {
      surfaceRef.current = ref
    },
  }

  return (
    <>
      {children(modalProps, isOpenState, triggerRef, handleClose)}
      {wrappedComponent(eventHandlers, triggerRef)}
    </>
  )
}
