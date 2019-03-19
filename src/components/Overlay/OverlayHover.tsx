import * as React from 'react'
import { Popper } from 'react-popper'
import { CustomizableModalAttributes } from '../Modal'
import { OverlayProps } from './Overlay'

export interface OverlayHoverProps extends OverlayProps {
  setSurfaceRef?: (ref: null | HTMLElement) => void
  onMouseOut?: (event: React.MouseEvent) => void
}

export const OverlayHover: React.SFC<OverlayHoverProps> = ({
  children,
  isOpen,
  ...props
}) =>
  isOpen ? (
    <Popper
      positionFixed
      innerRef={props.setSurfaceRef}
      placement={props.placement}
      referenceElement={props.triggerRef ? props.triggerRef : undefined}
    >
      {({ ref, style, arrowProps, placement }) =>
        children({
          arrowProps,
          eventHandlers: { onMouseOut: props.onMouseOut },
          placement,
          ref,
          style: {
            ...style,
            zIndex: CustomizableModalAttributes.zIndex,
          },
        })
      }
    </Popper>
  ) : null
