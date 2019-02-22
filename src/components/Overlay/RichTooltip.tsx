import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalSurfaceStyleProps } from '../Modal'
import {
  OverlayContentProps,
  OverlayHover,
  OverlayInteractiveProps,
  OverlaySurface,
} from './'

export interface RichTooltipProps extends OverlayInteractiveProps {
  content: React.ReactNode
}

export const RichTooltip: React.SFC<RichTooltipProps> = ({
  content,
  children,
  ...overlayProps
}) => {
  const surface = (props: OverlayContentProps) => {
    return (
      <OverlaySurface {...props} {...CustomizableRichTooltipAttributes.surface}>
        {content}
      </OverlaySurface>
    )
  }

  return (
    <OverlayHover render={surface} {...overlayProps}>
      {children}
    </OverlayHover>
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
}
