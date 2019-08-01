import { Placement } from 'popper.js'
import * as React from 'react'
import { Popper } from 'react-popper'
import { ManagedHoverModalProps_ } from '../Modal/ModalHoverManager'
import { ModalPortal } from '../Modal/ModalPortal'
import { OverlayChildrenProps } from './Overlay'

export interface OverlayHoverProps extends Partial<ManagedHoverModalProps_> {
  children: (props: OverlayChildrenProps) => React.ReactNode
  isOpen?: boolean
  placement?: Placement
  portalRef?: React.RefObject<HTMLElement>
  triggerRef?: React.RefObject<HTMLElement>
}

export const OverlayHover: React.FC<OverlayHoverProps> = ({
  children,
  isOpen,
  onMouseOut,
  placement: outerPlacement,
  portalRef,
  setSurfaceRef,
  triggerRef,
}) => {
  if (!isOpen) return null

  const referenceElement =
    triggerRef && triggerRef.current ? triggerRef.current : undefined

  const popper = (
    <Popper
      positionFixed
      innerRef={setSurfaceRef}
      placement={outerPlacement}
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
      {({ ref, style, arrowProps, placement: innerPlacement }) =>
        children({
          arrowProps,
          eventHandlers: { onMouseOut },
          placement: innerPlacement,
          ref,
          style,
        })
      }
    </Popper>
  )

  return <ModalPortal portalRef={portalRef}>{popper}</ModalPortal>
}
