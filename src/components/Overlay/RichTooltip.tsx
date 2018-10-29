import * as React from 'react'
import { withTheme } from 'styled-components'
import { Theme } from '../../style'
import { Overlay, OverlayInteractiveProps } from './Overlay'
import { overlayBubbleWithContent } from './popover_utils'

export interface RichTooltipProps extends OverlayInteractiveProps {
  content: React.ReactNode
  theme: Theme
}

const InternalRichTooltip: React.SFC<RichTooltipProps> = ({
  content,
  theme,
  children,
  ...overlayProps
}) => (
  <Overlay
    trigger="hover"
    overlayContentFactory={overlayBubbleWithContent(
      content,
      theme.components.RichTooltip.bubble
    )}
    {...overlayProps}
  >
    {children}
  </Overlay>
)

export const RichTooltip = withTheme(InternalRichTooltip)
