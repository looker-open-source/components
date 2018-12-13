import * as React from 'react'
import { Theme, withTheme } from '../../style'

import { Box } from '../Box'
import { Overlay, overlayBubbleWithContent, OverlayInteractiveProps } from './'

export interface TooltipProps extends OverlayInteractiveProps {
  /**
   * Text to display in the tooltip
   * @required
   */
  content: string
  theme?: Theme
  /**
   * Specify the maximum width before wrapping text.
   * @default 16rem
   */
  maxWidth?: string
}

const InternalTooltip: React.SFC<TooltipProps> = ({
  content,
  theme,
  children,
  maxWidth = '16rem',
  ...overlayProps
}) => {
  const contentFormatted = (
    <Box
      fontSize="xsmall"
      is="p"
      maxWidth={maxWidth}
      p="xsmall"
      textAlign="center"
    >
      {content}
    </Box>
  )

  return (
    <Overlay
      trigger="hover"
      overlayContentFactory={overlayBubbleWithContent(
        contentFormatted,
        theme!.components.Tooltip.bubble
      )}
      {...overlayProps}
    >
      {children}
    </Overlay>
  )
}

export const Tooltip = withTheme(InternalTooltip)
