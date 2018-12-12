import * as React from 'react'
import { withTheme } from '../../style'
import { ThemedProps } from '../../types'
import { Overlay, OverlayInteractiveProps } from './Overlay'
import { overlayBubbleWithContent } from './popover_utils'

export interface PopoverProps extends OverlayInteractiveProps {
  content: React.ReactNode
}

const InternalPopover: React.SFC<ThemedProps<PopoverProps>> = ({
  content,
  theme,
  children,
  ...overlayProps
}) => (
  <Overlay
    trigger="click"
    overlayContentFactory={overlayBubbleWithContent(
      content,
      theme.components.Popover.bubble
    )}
    backdropStyles={theme.components.Popover.backdrop}
    {...overlayProps}
  >
    {children}
  </Overlay>
)

export const Popover = withTheme(InternalPopover)
