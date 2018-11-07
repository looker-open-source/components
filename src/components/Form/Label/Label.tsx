import * as React from 'react'
import { Theme, withTheme } from '../../../style'
import { Box, BoxProps } from '../../Box'

export interface LabelProps extends BoxProps<HTMLLabelElement> {
  htmlFor?: string
  theme?: Theme
  weight?: 'normal' | 'bold'
}

const InternalLabel: React.SFC<LabelProps> = ({ ...props }) => {
  const weight = props.weight || 'bold'

  return (
    <Box
      is="label"
      color={props.theme!.components.Label.color}
      fontSize={props.theme!.components.Label.fontSize}
      fontWeight={
        weight === 'bold'
          ? props.theme!.components.Label.fontWeightBold
          : props.theme!.components.Label.fontWeightNormal
      }
      mr="small"
      {...props}
    >
      {props.children}
    </Box>
  )
}

export const Label = withTheme(InternalLabel)
