import * as React from 'react'
import { Popper } from 'react-popper'
import { ModalPortal } from '../Modal/ModalPortal'
import { OverlayProps } from './Overlay'

export interface OverlayHoverProps extends OverlayProps {
  setSurfaceRef?: (ref: HTMLElement | null) => void
  onMouseOut?: (event: React.MouseEvent) => void
}

export const OverlayHover: React.FC<OverlayHoverProps> = ({
  children,
  isOpen,
  setSurfaceRef,
  ...props
}) => {
  const triggerRef =
    props.triggerRef && props.triggerRef.current
      ? props.triggerRef.current
      : undefined

  return isOpen ? (
    <ModalPortal portalRef={props.portalRef}>
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
        referenceElement={triggerRef}
      >
        {({ ref, style, arrowProps, placement }) =>
          children({
            arrowProps,
            eventHandlers: { onMouseOut: props.onMouseOut },
            placement,
            ref,
            style,
          })
        }
      </Popper>
    </ModalPortal>
  ) : null
}
