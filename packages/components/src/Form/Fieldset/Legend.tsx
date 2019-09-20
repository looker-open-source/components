import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { CustomizableAttributes, SpacingSizes } from '@looker/design-tokens'
import { Box, BoxProps } from '../../Box'

export const CustomizableLegendAttributes: CustomizableLegendAttributes = {
  bottomPadding: 'xsmall',
  color: 'palette.charcoal800',
  fontSize: 'xxxlarge',
  fontWeight: 'light',
}

export type LegendProps = BoxProps<HTMLLegendElement>
type ComponentType = FunctionComponent<LegendProps>
type StyledComponentType = StyledComponent<ComponentType, LegendProps>

const InternalLegend: React.FC<LegendProps> = props => (
  <Box
    // @ts-ignore
    as="legend"
    color={CustomizableLegendAttributes.color}
    fontSize={CustomizableLegendAttributes.fontSize}
    fontWeight={CustomizableLegendAttributes.fontWeight}
    pb={CustomizableLegendAttributes.bottomPadding}
    {...props}
  />
)

const LegendFactory = React.forwardRef<StyledComponentType, LegendProps>(
  (props: LegendProps, ref: Ref<StyledComponentType>) => (
    <InternalLegend ref={ref} {...props} />
  )
)

/** @component */
export const Legend = styled<ComponentType>(LegendFactory)``

export interface CustomizableLegendAttributes extends CustomizableAttributes {
  bottomPadding: SpacingSizes
}
