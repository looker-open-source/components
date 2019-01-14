import * as React from 'react'
import { Box, BoxProps } from '../../Box'
import { CustomizableInputTextAttributes } from '../../Form'

export interface SwatchProps extends BoxProps<HTMLDivElement> {
  /**
   * The background color to display on the swatch.
   */
  color?: string
  /**
   * Swatch height.
   */
  height?: string
  /**
   * Swatch width.
   */
  width?: string
}

export const Swatch: React.SFC<SwatchProps> = ({
  color,
  width,
  height,
  ...props
}) => {
  return (
    <Box
      border="1px solid"
      borderColor="palette.charcoal300"
      borderRadius={CustomizableInputTextAttributes.borderRadius}
      bg={color || 'white'}
      width={width || '28px'}
      height={height || '28px'}
      {...props}
    />
  )
}
