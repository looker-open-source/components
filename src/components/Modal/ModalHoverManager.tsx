import { Placement } from 'popper.js'
import React, { useRef, useState } from 'react'
import { PopperProps } from 'react-popper'

export interface ManagedHoverModalProps {
  close: () => void
  isOpen: boolean
  setSurfaceRef: NonNullable<PopperProps['innerRef']>
  triggerRef: React.RefObject<HTMLElement>
  onMouseOut: (event: React.MouseEvent) => void
}

export interface ModalHoverManagerProps {
  __initializeOpenForLensTests?: boolean
  /**
   * Render Prop to render the controlled hover popper.
   * @required
   */
  children: (props: ManagedHoverModalProps) => React.ReactNode
  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean
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

export const ModalHoverManager: React.FC<ModalHoverManagerProps> = ({
  __initializeOpenForLensTests,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(__initializeOpenForLensTests || false)
  const surfaceRef = useRef<HTMLElement | null>(null)
  const triggerRef = useRef<HTMLElement>(null)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    if (props.canClose && !props.canClose()) return
    setIsOpen(false)
  }

  const handleMouseOut = (event: React.MouseEvent) => {
    if (!isOpen) return

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

  const { children, wrappedComponent, ...otherProps } = props

  const eventHandlers = {
    onBlur: handleClose,
    onFocus: handleOpen,
    onMouseOut: handleMouseOut,
    onMouseOver: handleOpen,
  }

  const managedHoverModalProps = {
    ...otherProps,
    close: handleClose,
    isOpen,
    onMouseOut: handleMouseOut,
    setSurfaceRef: (ref: HTMLElement | null) => {
      surfaceRef.current = ref
    },
    triggerRef,
  }

  return (
    <>
      {children(managedHoverModalProps)}
      {wrappedComponent(eventHandlers, triggerRef)}
    </>
  )
}
