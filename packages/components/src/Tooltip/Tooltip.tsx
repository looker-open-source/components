import { CustomizableAttributes } from 'looker-design-tokens'
import { TextAlignProperty } from 'csstype'
import { Placement } from 'popper.js'
import React, { useRef, useState, RefObject, FC, ReactNode } from 'react'
import { Popper } from 'react-popper'
import { ModalContext } from '../Modal'
import { OverlaySurface } from '../Overlay/OverlaySurface'
import { Paragraph } from '../Text'

interface EventHandlers {
  onBlur: () => void
  onFocus: () => void
  onMouseOut: (event: React.MouseEvent) => void
  onMouseOver: () => void
}

export interface UseTooltipProps {
  /**
   * Display and arrow that points to the trigger element on popovers
   * @default true
   */
  arrow?: boolean

  /**
   * Specify a callback to be called before trying to close the Modal. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Modal is closed
   */
  canClose?: () => boolean

  isOpen?: boolean
  placement?: Placement

  content?: ReactNode

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

  /**
   * The trigger element ref to use (if absent, one will be created and returned)
   */
  triggerRef?: RefObject<HTMLElement>

  /**
   * If true, the useTooltip hook will return nothing
   */
  disabled?: boolean
}

export const CustomizableTooltipAttributes: CustomizableAttributes = {}

export interface TooltipProps extends UseTooltipProps {
  content: string
  /**
   * Component to wrap. The HOC will listen for mouse events on this component, maintain the
   * state of isOpen accordingly, and pass that state into the children or "trigger" element
   */
  children: (eventsHandlers: EventHandlers, ref: RefObject<any>) => ReactNode
}
export function useTooltip({
  arrow = true,
  canClose,
  content,
  isOpen: initializeOpen = false,
  maxWidth = '16rem',
  width = 'auto',
  textAlign = 'center',
  disabled,
  ...props
}: UseTooltipProps) {
  const [isOpen, setIsOpen] = useState(initializeOpen)
  const surfaceRef = useRef<HTMLElement | null>(null)
  const newTriggerRef = useRef<HTMLElement>(null)
  const triggerRef = props.triggerRef || newTriggerRef

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

  const popper =
    isOpen && content && !disabled ? (
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
    ) : null

  return {
    eventHandlers,
    ref: triggerRef,
    tooltip: popper,
  }
}

export const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  const { eventHandlers, tooltip, ref } = useTooltip(props)
  return (
    <>
      {tooltip}
      {children(eventHandlers, ref)}
    </>
  )
}
