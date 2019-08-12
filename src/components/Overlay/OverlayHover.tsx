import { Placement } from 'popper.js'
import * as React from 'react'
import { Popper } from 'react-popper'
import { ManagedHoverOverlayProps, OverlayChildrenProps } from './'

export interface OverlayHoverProps extends Partial<ManagedHoverOverlayProps> {
  children: (props: OverlayChildrenProps) => React.ReactNode
  placement?: Placement
}

export const OverlayHover: React.FC<OverlayHoverProps> = ({
  children,
  isOpen,
  onMouseOut,
  placement: outerPlacement,
  setSurfaceRef,
  triggerRef,
}) => {
  if (!isOpen) return null

  const referenceElement =
    triggerRef && triggerRef.current ? triggerRef.current : undefined

  return (
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
}
