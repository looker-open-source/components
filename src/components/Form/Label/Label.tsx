import * as React from 'react'
import { fontWeights } from '../../../style/font_weights'
import { CustomizableAttributes } from '../../../types/attributes'
import { Box, BoxProps } from '../../Box'

export interface LabelProps extends BoxProps<HTMLLabelElement> {
  htmlFor?: string
}

export const Label: React.SFC<LabelProps> = ({ ...props }) => (
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

export const CustomizableLabelAttributes: CustomizableAttributes = {
  color: 'palette.charcoal800',
  fontSize: 'small',
  fontWeight: fontWeights.semiBold,
}
