import { Placement } from 'popper.js'
import * as React from 'react'
import { withTheme } from 'styled-components'
import { Theme } from '../../style'
import { Overlay } from './Overlay'
import { overlayBubbleWithContent } from './popover_utils'

export interface RichTooltipProps {
  content: React.ReactNode
  theme: Theme
  placement?: Placement
}

const InternalRichTooltip: React.SFC<RichTooltipProps> = ({
  content,
  placement,
  theme,
  children,
}) => (
  <Overlay
    placement={placement}
    trigger="hover"
    overlayContentFactory={overlayBubbleWithContent(
      content,
      theme.components.RichTooltip.bubble
    )}
  >
    {children}
  </Overlay>
)

export const RichTooltip = withTheme(InternalRichTooltip)
