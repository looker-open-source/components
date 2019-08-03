import React, { useRef, useState } from 'react'
import { PopperProps } from 'react-popper'

export interface ManagedHoverOverlayProps {
  canClose: OverlayHoverManagerProps['canClose']
  close: () => void
  isOpen: boolean
  setSurfaceRef: NonNullable<PopperProps['innerRef']>
  triggerRef: React.RefObject<HTMLElement>
  onMouseOut: (event: React.MouseEvent) => void
}

export interface OverlayHoverManagerProps {
  isOpen?: boolean
  /**
   * Render Prop to render the controlled hover popper.
   * @required
   */
  children: (props: ManagedHoverOverlayProps) => React.ReactNode
  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean
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

export const OverlayHoverManager: React.FC<OverlayHoverManagerProps> = ({
  isOpen: initializeOpen = false,
  canClose,
  children,
  wrappedComponent,
}) => {
  const [isOpen, setIsOpen] = useState(initializeOpen)
  const surfaceRef = useRef<HTMLElement | null>(null)
  const triggerRef = useRef<HTMLElement>(null)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    if (canClose && !canClose()) return
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

  const eventHandlers = {
    onBlur: handleClose,
    onFocus: handleOpen,
    onMouseOut: handleMouseOut,
    onMouseOver: handleOpen,
  }

  const managedHoverOverlayProps = {
    canClose,
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
      {children(managedHoverOverlayProps)}
      {wrappedComponent(eventHandlers, triggerRef)}
    </>
  )
}
