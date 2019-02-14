import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalSurfaceStyleProps } from '../Modal'
import {
  Overlay,
  OverlayContentProps,
  OverlayInteractiveProps,
  OverlaySurface,
} from './'

export interface PopoverProps extends OverlayInteractiveProps {
  content: React.ReactNode
}

export const Popover: React.SFC<PopoverProps> = ({
  content,
  children,
  ...overlayProps
}) => {
  const surface = (props: OverlayContentProps) => {
    return (
      <OverlaySurface
        lockWindow={true}
        {...props}
        {...CustomizablePopoverAttributes.surface}
      >
        {content}
      </OverlaySurface>
    )
  }

  return (
    <Overlay render={surface} {...overlayProps}>
      {children}
    </Overlay>
  )
}

export interface CustomizablePopoverAttributes extends CustomizableAttributes {
  surface: ModalSurfaceStyleProps
}

export const CustomizablePopoverAttributes: CustomizablePopoverAttributes = {
  surface: {
    animation: `${fadeIn} 0.2s linear`,
    backgroundColor: palette.white,
    border: '1px solid',
    borderColor: palette.charcoal200,
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal900,
  },
}
