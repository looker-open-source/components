import React, { forwardRef, Ref } from 'react'
import { Box, BoxProps } from '../../../../Layout'
import { CustomizableInputTextAttributes } from '../../../'

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
  (props: SwatchProps, ref: Ref<HTMLDivElement>) => {
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

Swatch.displayName = 'Swatch'
