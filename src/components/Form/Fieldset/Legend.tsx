import * as React from 'react'
import { SpacingSizes, styled } from '../../../style'
import { CustomizableAttributes } from '../../../types/attributes'
import { Box, BoxProps } from '../../Box'

export type LegendProps = BoxProps<HTMLLegendElement>

const InternalLegend: React.FC<LegendProps> = props => (
  <Box
    is="legend"
    color={CustomizableLegendAttributes.color}
    fontSize={CustomizableLegendAttributes.fontSize}
    fontWeight={CustomizableLegendAttributes.fontWeight}
    pb={CustomizableLegendAttributes.bottomPadding}
    {...props}
  />
)

const LegendFactory = React.forwardRef((props: LegendProps, ref) => (
  <InternalLegend innerRef={ref as React.RefObject<HTMLElement>} {...props} />
))

export const Legend = styled(LegendFactory)``

export interface CustomizableLegendAttributes extends CustomizableAttributes {
  bottomPadding: SpacingSizes
}

export const CustomizableLegendAttributes: CustomizableLegendAttributes = {
  bottomPadding: 'xsmall',
  color: 'palette.charcoal800',
  fontSize: 'xxxlarge',
  fontWeight: 'light',
}
