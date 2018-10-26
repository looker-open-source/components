import { Placement } from 'popper.js'
import * as React from 'react'
import { Overlay } from './Overlay'
import { popoverContent } from './popover_utils'

export interface RichTooltipProps {
  content: React.ReactNode
  placement?: Placement
}

export const RichTooltip: React.SFC<RichTooltipProps> = ({
  content,
  placement,
  children,
}) => (
  <Overlay
    placement={placement}
    trigger="hover"
    overlayContentFactory={popoverContent(content)}
  >
    {children}
  </Overlay>
)
