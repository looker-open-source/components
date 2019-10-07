import React, { forwardRef } from 'react'
import { Box, BoxProps } from '../../Layout/Box'
import { CustomizableInputTextAttributes } from '../../Form'

export interface SwatchProps extends BoxProps {
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

export const Swatch = forwardRef(
  (props: SwatchProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      color = 'white',
      width = '28px',
      height = '28px',
      ...boxProps
    } = props
    return (
      <Box
        ref={ref}
        border="1px solid"
        borderColor="palette.charcoal300"
        borderRadius={CustomizableInputTextAttributes.borderRadius}
        bg={color}
        width={width}
        height={height}
        {...boxProps}
      />
    )
  }
)
