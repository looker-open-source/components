import * as React from 'react'
import { Theme, withTheme } from '../../style'
import { Overlay, OverlayInteractiveProps } from './Overlay'
import { overlayBubbleWithContent } from './popover_utils'

export interface PopoverProps extends OverlayInteractiveProps {
  content: React.ReactNode
  theme?: Theme
}

const InternalPopover: React.SFC<PopoverProps> = ({
  content,
  theme,
  children,
  ...overlayProps
}) => (
  <Overlay
    trigger="click"
    overlayContentFactory={overlayBubbleWithContent(
      content,
      theme!.components.Popover.bubble
    )}
    backdropStyles={theme!.components.Popover.backdrop}
    {...overlayProps}
  >
    {children}
  </Overlay>
)

export const Popover = withTheme(InternalPopover)
