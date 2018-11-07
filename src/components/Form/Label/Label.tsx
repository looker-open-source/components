import * as React from 'react'
import { Theme, withTheme } from '../../../style'
import { Box, BoxProps } from '../../Box'

export interface LabelProps extends BoxProps<HTMLLabelElement> {
  htmlFor?: string
  theme?: Theme
}

const InternalLabel: React.SFC<LabelProps> = ({ ...props }) => {
  return (
    <Box
      is="label"
      {...props}
      mr="small"
      fontWeight={props.theme!.components.Label.fontWeight}
      color={props.theme!.components.Label.color}
      fontSize={props.theme!.components.Label.fontSize}
    >
      {props.children}
    </Box>
  )
}

export const Label = withTheme(InternalLabel)
