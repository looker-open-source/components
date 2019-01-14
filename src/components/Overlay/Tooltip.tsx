import { TextAlignProperty } from 'csstype'
import * as React from 'react'
import { palette, shadows } from '../../style'

import { CustomizableAttributes } from '../../types/attributes'
import { Box } from '../Box'
import { Overlay, overlayBubbleWithContent, OverlayInteractiveProps } from './'
import { OverlayBubbleStyleProps } from './OverlayBubble'

export interface TooltipProps extends OverlayInteractiveProps {
  /**
   * Text to display in the tooltip
   * @required
   */
  content: string
  /**
   * Specify the maximum width before wrapping text.
   * @default 16rem
   */
  maxWidth?: string
  /**
   * Specify the text aligment within tooltips.
   * @default center
   */
  textAlign?: TextAlignProperty
}

export const Tooltip: React.SFC<TooltipProps> = ({
  content,
  children,
  textAlign = 'center' as TextAlignProperty,
  maxWidth = '16rem',
  ...overlayProps
}) => {
  const contentFormatted = (
    <Box
      fontSize="xsmall"
      is="p"
      maxWidth={maxWidth}
      p="xsmall"
      textAlign={textAlign}
    >
      {content}
    </Box>
  )

  return (
    <Overlay
      trigger="hover"
      overlayContentFactory={overlayBubbleWithContent(
        contentFormatted,
        CustomizableTooltipAttributes.bubble
      )}
      {...overlayProps}
    >
      {children}
    </Overlay>
  )
}

export interface CustomizableTooltipAttributes extends CustomizableAttributes {
  bubble: OverlayBubbleStyleProps
}

export const CustomizableTooltipAttributes: CustomizableTooltipAttributes = {
  bubble: {
    backgroundColor: palette.charcoal600,
    border: 'none',
    borderColor: 'none',
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal000,
  },
}
