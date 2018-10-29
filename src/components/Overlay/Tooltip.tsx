import * as React from 'react'
import { withTheme } from 'styled-components'
import { Theme } from '../../style'
import { Span } from '../Text'
import { Overlay, OverlayInteractiveProps } from './Overlay'
import { overlayBubbleWithContent } from './popover_utils'

export interface TooltipProps extends OverlayInteractiveProps {
  content: string
  theme: Theme
}

const InternalTooltip: React.SFC<TooltipProps> = ({
  content,
  theme,
  children,
  ...overlayProps
}) => (
  <Overlay
    trigger="hover"
    overlayContentFactory={overlayBubbleWithContent(
      <Span size="6" variant="inverted">
        {content}
      </Span>,
      theme.components.Tooltip.bubble
    )}
    {...overlayProps}
  >
    {children}
  </Overlay>
)

export const Tooltip = withTheme(InternalTooltip)
