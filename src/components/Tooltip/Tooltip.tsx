import { TextAlignProperty } from 'csstype'
import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalSurfaceStyleProps } from '../Modal'
import { Paragraph } from '../Text'

import { RichTooltip, RichTooltipProps } from './RichTooltip'

// Omit<T, K> is built in to TypeScript 3.5, delete next line when we upgrade
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface TooltipProps extends Omit<RichTooltipProps, 'content'> {
  content: string

  /**
   * Specify the maximum width before wrapping text.
   * @default 16rem
   */
  maxWidth?: string
  /**
   * Specify a fixed content width.
   * @default auto
   */
  width?: string
  /**
   * Specify the text aligment within tooltips.
   * @default center
   */
  textAlign?: TextAlignProperty
}

export const Tooltip: React.FC<TooltipProps> = ({
  maxWidth,
  width,
  textAlign,
  content,
  ...props
}) => {
  const contentFormatted = (
    <Paragraph
      style={{ overflowWrap: 'anywhere', hyphens: 'auto' }}
      fontSize="xsmall"
      maxWidth={maxWidth || '16rem'}
      width={width || 'auto'}
      p="xsmall"
      m="none"
      textAlign={textAlign || 'center'}
    >
      {content}
    </Paragraph>
  )

  return (
    <RichTooltip
      {...props}
      content={contentFormatted}
      surfaceStyle={{
        ...CustomizableTooltipAttributes.surface,
      }}
    />
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
