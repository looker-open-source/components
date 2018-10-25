import * as React from 'react'
import { Overlay, OverlayProps } from './Overlay'
import { popoverContent } from './popover_utils'

export interface RichTooltipProps extends OverlayProps {
  content: React.ReactNode
}

export const RichTooltip: React.SFC<RichTooltipProps> = ({
  content,
  trigger,
  ...props
}) => (
  <Overlay
    {...props}
    trigger="hover"
    overlayContentFactory={popoverContent(content)}
  >
    {props.children}
  </Overlay>
)
