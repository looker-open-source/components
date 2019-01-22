import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { Overlay, OverlayInteractiveProps } from './Overlay'
import { overlayBubbleWithContent } from './popover_utils'
import { CustomizableTooltipAttributes } from './Tooltip'

export interface RichTooltipProps extends OverlayInteractiveProps {
  content: React.ReactNode
}

export const RichTooltip: React.SFC<RichTooltipProps> = ({
  content,
  children,
  ...overlayProps
}) => (
  <Overlay
    trigger="hover"
    overlayContentFactory={overlayBubbleWithContent(
      content,
      CustomizableRichTooltipAttributes.bubble
    )}
    {...overlayProps}
  >
    {children}
  </Overlay>
)

export const CustomizableRichTooltipAttributes: CustomizableTooltipAttributes = {
  bubble: {
    animation: `${fadeIn} 0.2s linear`,
    backgroundColor: palette.white,
    border: '1px solid',
    borderColor: palette.charcoal200,
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal900,
  },
}
