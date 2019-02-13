import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import {
  OverlayBubble,
  OverlayBubbleStyleProps,
  OverlayContentProps,
  OverlayHover,
  OverlayInteractiveProps,
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
      <OverlayBubble {...props} {...CustomizableRichTooltipAttributes.bubble}>
        {content}
      </OverlayBubble>
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
  bubble: OverlayBubbleStyleProps
}

export const CustomizableRichTooltipAttributes: CustomizableRichTooltipAttributes = {
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
