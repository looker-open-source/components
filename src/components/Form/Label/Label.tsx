import * as React from 'react'
import { styled } from '../../../style'
import { CustomizableAttributes } from '../../../types/attributes'
import { Box, BoxProps } from '../../Box'

export interface LabelProps extends BoxProps<HTMLLabelElement> {
  htmlFor?: string
}

const InternalLabel: React.FC<LabelProps> = ({ ...props }) => (
  <Box
    is="label"
    color={CustomizableLabelAttributes.color}
    fontSize={CustomizableLabelAttributes.fontSize}
    fontWeight={CustomizableLabelAttributes.fontWeight}
    mr="xsmall"
    {...props}
  >
    {props.children}
  </Box>
)

export const Label = styled<LabelProps>(InternalLabel)``

export const CustomizableLabelAttributes: CustomizableAttributes = {
  color: 'palette.charcoal800',
  fontSize: 'small',
  fontWeight: 'semiBold',
}
