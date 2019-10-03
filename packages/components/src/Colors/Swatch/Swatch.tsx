import React from 'react'
import { Box, BoxProps } from '../../Layout/Box'
import { CustomizableInputTextAttributes } from '../../Form'

export interface SwatchProps extends Omit<BoxProps<HTMLDivElement>, 'as'> {
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

const InternalSwatch: React.FC<SwatchProps> = ({
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

export const Swatch = React.forwardRef<HTMLElement, SwatchProps>(
  (props: SwatchProps, ref) => {
    return <InternalSwatch {...props} ref={ref} />
  }
)
