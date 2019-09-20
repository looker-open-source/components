import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { CustomizableAttributes } from '@looker/design-tokens'
import { Box, BoxProps } from '../../Box'

export const CustomizableLabelAttributes: CustomizableAttributes = {
  color: 'palette.charcoal800',
  fontSize: 'small',
  fontWeight: 'semiBold',
}

export interface LabelProps extends Omit<BoxProps<HTMLLabelElement>, 'as'> {
  htmlFor?: string
}

type ComponentType = FunctionComponent<LabelProps>
type StyledComponentType = StyledComponent<ComponentType, LabelProps>

const LabelInternal: ComponentType = props => (
  <Box
    as="label"
    color={CustomizableLabelAttributes.color}
    fontSize={CustomizableLabelAttributes.fontSize}
    fontWeight={CustomizableLabelAttributes.fontWeight}
    mr="xsmall"
    {...props}
  >
    {props.children}
  </Box>
)

const LabelFactory = React.forwardRef<StyledComponentType, LabelProps>(
  (props: LabelProps, ref: Ref<StyledComponentType>) => (
    <LabelInternal ref={ref} {...props} />
  )
)

/** @component */
export const Label = styled<ComponentType>(LabelFactory)``
