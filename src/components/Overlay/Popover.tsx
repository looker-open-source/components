import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import {
  Overlay,
  OverlayBubble,
  OverlayBubbleStyleProps,
  OverlayContentProps,
  OverlayInteractiveProps,
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
      <OverlayBubble
        lockWindow={true}
        {...props}
        {...CustomizablePopoverAttributes.bubble}
      >
        {content}
      </OverlayBubble>
    )
  }

  return (
    <Overlay
      render={surface}
      backdropStyles={CustomizablePopoverAttributes.backdrop}
      {...overlayProps}
    >
      {children}
    </Overlay>
  )
}

export interface CustomizablePopoverAttributes extends CustomizableAttributes {
  // backdrop?: BackdropStyles
  bubble: OverlayBubbleStyleProps
}

export const CustomizablePopoverAttributes: CustomizablePopoverAttributes = {
  // backdrop: {},
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
