import * as React from 'react'
import { Popper } from 'react-popper'
import { CustomizableModalAttributes } from '../Modal'
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
    <Popper
      positionFixed
      innerRef={setSurfaceRef}
      placement={props.placement}
      referenceElement={triggerRef}
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
}
