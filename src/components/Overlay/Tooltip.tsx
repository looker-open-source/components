import { Placement } from 'popper.js'
import * as React from 'react'
import { withTheme } from 'styled-components'
import { Theme } from '../../style'
import { Overlay } from './Overlay'
import { overlayBubbleWithContent } from './popover_utils'

export interface TooltipProps {
  content: string
  theme: Theme
  placement?: Placement
}

const InternalTooltip: React.SFC<TooltipProps> = ({
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
      theme.components.Tooltip.bubble
    )}
  >
    {children}
  </Overlay>
)

export const Tooltip = withTheme(InternalTooltip)
