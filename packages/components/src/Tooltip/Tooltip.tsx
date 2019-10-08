import { CustomizableAttributes } from '@looker/design-tokens'
import { TextAlignProperty } from 'csstype'
import { Placement } from 'popper.js'
import React, { useRef, useState } from 'react'
import { Popper } from 'react-popper'
import { ModalContext } from '../Modal'
import { OverlaySurface } from '../Overlay/OverlaySurface'
import { Paragraph } from '../Text'

export interface TooltipProps {
  /**
   * Display and arrow that points to the trigger element on popovers
   * @default true
   */
  arrow?: boolean

  /**
   * Component to wrap. The HOC will listen for mouse events on this component, maintain the
   * state of isOpen accordingly, and pass that state into the children or "trigger" element
   */
  children: (
    eventsHandlers: {
      onBlur: () => void
      onFocus: () => void
      onMouseOut: (event: React.MouseEvent) => void
      onMouseOver: () => void
    },
    ref: React.RefObject<any>
  ) => React.ReactNode

  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean

  isOpen?: boolean
  placement?: Placement

  content: string

  /**
   * Specify the maximum width before wrapping text.
   * @default 16rem
   */
  maxWidth?: string
  /**
   * Specify a fixed content width.
   * @default auto
   */
  width?: string
  /**
   * Specify the text aligment within tooltips.
   * @default center
   */
  textAlign?: TextAlignProperty
}

export const CustomizableTooltipAttributes: CustomizableAttributes = {}

export const Tooltip: React.FC<TooltipProps> = ({
  arrow = true,
  canClose,
  children,
  content,
  isOpen: initializeOpen = false,
  maxWidth = '16rem',
  width = 'auto',
  textAlign = 'center',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(initializeOpen)
  const surfaceRef = useRef<HTMLElement | null>(null)
  const triggerRef = useRef<HTMLElement>(null)

  const handleOpen = () => setIsOpen(true)
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

  const setSurfaceRef = (ref: HTMLElement | null) => {
    surfaceRef.current = ref
  }

  const referenceElement =
    triggerRef && triggerRef.current ? triggerRef.current : undefined

  const contentFormatted = (
    <Paragraph
      style={{ hyphens: 'auto', overflowWrap: 'anywhere' }}
      fontSize="xsmall"
      maxWidth={maxWidth}
      width={width}
      p="xsmall"
      m="none"
      textAlign={textAlign}
    >
      {content}
    </Paragraph>
  )

  const popper = isOpen && (
    <ModalContext.Provider value={{ closeModal: handleClose }}>
      <Popper
        positionFixed
        innerRef={setSurfaceRef}
        placement={props.placement}
        modifiers={{
          flip: {
            behavior: 'flip',
            enabled: true,
            flipVariations: true,
            flipVariationsByContent: true,
          },
          preventOverflow: {
            boundariesElement: 'viewport',
            escapeWithReference: true,
            padding: 0,
          },
        }}
        referenceElement={referenceElement}
      >
        {({ ref, style, placement, arrowProps }) => (
          <OverlaySurface
            arrow={arrow}
            arrowProps={arrowProps}
            eventHandlers={{ onMouseOut: handleMouseOut }}
            placement={placement}
            ref={ref}
            style={style}
            zIndex={CustomizableTooltipAttributes.zIndex}
            backgroundColor="palette.charcoal600"
            borderRadius="medium"
            boxShadow={3}
            color="palette.charcoal000"
          >
            {contentFormatted}
          </OverlaySurface>
        )}
      </Popper>
    </ModalContext.Provider>
  )

  return (
    <>
      {popper}
      {children(eventHandlers, triggerRef)}
    </>
  )
}
