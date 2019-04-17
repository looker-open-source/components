import * as React from 'react'
import { SpacingSizes, styled } from '../../../style'
import { CustomizableAttributes } from '../../../types/attributes'
import { Box, BoxProps } from '../../Box'

const InternalLegend: React.FC<BoxProps<HTMLLegendElement>> = ({
  ...props
}) => (
  <Box
    is="legend"
    color={CustomizableLegendAttributes.color}
    fontSize={CustomizableLegendAttributes.fontSize}
    fontWeight={CustomizableLegendAttributes.fontWeight}
    pb={CustomizableLegendAttributes.bottomPadding}
    {...props}
  />
)

export const Legend = styled(InternalLegend)``

export interface CustomizableLegendAttributes extends CustomizableAttributes {
  bottomPadding: SpacingSizes
}

export const CustomizableLegendAttributes: CustomizableLegendAttributes = {
  bottomPadding: 'xsmall',
  color: 'palette.charcoal800',
  fontSize: 'xxxlarge',
  fontWeight: 'light',
}
