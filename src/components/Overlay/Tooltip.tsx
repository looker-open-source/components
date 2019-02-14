import { TextAlignProperty } from 'csstype'
import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalSurfaceStyleProps } from '../Modal'
import { Paragraph } from '../Text'
import {
  OverlayContentProps,
  OverlayHover,
  OverlayInteractiveProps,
  OverlaySurface,
} from './'

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
  const surface = (props: OverlayContentProps) => {
    return (
      <OverlaySurface {...props} {...CustomizableTooltipAttributes.surface}>
        <Paragraph
          fontSize="xsmall"
          maxWidth={maxWidth}
          p="xsmall"
          m="none"
          textAlign={textAlign}
        >
          {content}
        </Paragraph>
      </OverlaySurface>
    )
  }

  return (
    <OverlayHover render={surface} {...overlayProps}>
      {children}
    </OverlayHover>
  )
}

export interface CustomizableTooltipAttributes extends CustomizableAttributes {
  surface: ModalSurfaceStyleProps
}

export const CustomizableTooltipAttributes: CustomizableTooltipAttributes = {
  surface: {
    animation: `${fadeIn} 0.2s linear`,
    backgroundColor: palette.charcoal600,
    border: 'none',
    borderColor: 'none',
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal000,
  },
}
