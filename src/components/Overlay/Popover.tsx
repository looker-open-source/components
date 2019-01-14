import * as React from 'react'
import { shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { BackdropStyle, Overlay, OverlayInteractiveProps } from './Overlay'
import { OverlayBubbleStyleProps } from './OverlayBubble'
import { overlayBubbleWithContent } from './popover_utils'

export interface PopoverProps extends OverlayInteractiveProps {
  content: React.ReactNode
}

export const Popover: React.SFC<PopoverProps> = ({
  content,
  children,
  ...overlayProps
}) => (
  <Overlay
    trigger="click"
    overlayContentFactory={overlayBubbleWithContent(
      content,
      CustomizablePopoverAttributes.bubble
    )}
    backdropStyles={CustomizablePopoverAttributes.backdrop}
    {...overlayProps}
  >
    {children}
  </Overlay>
)

export interface CustomizablePopoverAttributes extends CustomizableAttributes {
  backdrop: BackdropStyle
  bubble: OverlayBubbleStyleProps
}

export const CustomizablePopoverAttributes: CustomizablePopoverAttributes = {
  backdrop: {},
  bubble: {
    backgroundColor: 'palette.white',
    border: '1px solid',
    borderColor: 'palette.charcoal200',
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: 'palette.charcoal900',
  },
}
