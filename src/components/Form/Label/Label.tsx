import * as React from 'react'
import { Theme, withTheme } from '../../../style'
import { Box, BoxProps } from '../../Box'

export interface LabelProps extends BoxProps<HTMLLabelElement> {
  htmlFor?: string
  theme?: Theme
}

const InternalLabel: React.SFC<LabelProps> = ({ ...props }) => (
  <Box
    is="label"
    color={props.theme!.components.Label.color}
    fontSize={props.theme!.components.Label.fontSize}
    fontWeight={props.theme!.components.Label.fontWeight}
    mr="small"
    {...props}
  >
    {props.children}
  </Box>
)

export const Label = withTheme(InternalLabel)
