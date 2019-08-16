import { Placement } from 'popper.js'
import React, { useRef, useState } from 'react'
import { Popper } from 'react-popper'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalContext, ModalSurfaceStyleProps } from '../Modal'
import { OverlaySurface, SurfaceStyleProps } from '../Overlay/OverlaySurface'

export interface RichTooltipProps {
  /**
   * Display and arrow that points to the trigger element on popovers
   * @default true
   */
  arrow?: boolean

  /**
   * Render Prop to render the controlled hover popper.
   * @required
   */
  content: React.ReactNode

  /**
   * Component to wrap. The HOC will listen for mouse events on this
   * component, maintain the state of isOpen accordingly, and pass that state into
   * the modal renderProp.
   */
  children: (
    eventsHandlers: {
      onBlur: () => void
      onFocus: () => void
      onMouseOut: (event: React.MouseEvent) => void
      onMouseOver: () => void
    },
    ref: React.RefObject<HTMLElement>
  ) => React.ReactNode

  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean

  isOpen?: boolean
  placement?: Placement
  surfaceStyle?: SurfaceStyleProps
}

export const RichTooltip: React.FC<RichTooltipProps> = ({
  arrow = true,
  canClose,
  children,
  content,
  isOpen: initializeOpen = false,
  surfaceStyle,
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
            surfaceRef={ref}
            style={style}
            zIndex={CustomizableRichTooltipAttributes.zIndex}
            {...CustomizableRichTooltipAttributes.surface}
            {...surfaceStyle}
          >
            {content}
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

export interface CustomizableRichTooltipAttributes
  extends CustomizableAttributes {
  surface: ModalSurfaceStyleProps
}

export const CustomizableRichTooltipAttributes: CustomizableRichTooltipAttributes = {
  surface: {
    animation: `${fadeIn} 0.2s linear`,
    backgroundColor: palette.white,
    border: '1px solid',
    borderColor: palette.charcoal200,
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal900,
  },
  zIndex: 0,
}
