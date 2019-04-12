import * as React from 'react'
import { SpacingSizes } from '../../../style'
import { CustomizableAttributes } from '../../../types/attributes'
import { Box, BoxProps } from '../../Box'

export const Legend: React.FC<BoxProps<HTMLLegendElement>> = ({ ...props }) => (
  <Box
    is="legend"
    color={CustomizableLegendAttributes.color}
    fontSize={CustomizableLegendAttributes.fontSize}
    fontWeight={CustomizableLegendAttributes.fontWeight}
    pb={CustomizableLegendAttributes.bottomPadding}
    {...props}
  />
)

export interface CustomizableLegendAttributes extends CustomizableAttributes {
  bottomPadding: SpacingSizes
}

export const CustomizableLegendAttributes: CustomizableLegendAttributes = {
  bottomPadding: 'xsmall',
  color: 'palette.charcoal800',
  fontSize: 'xxxlarge',
  fontWeight: 'light',
}
