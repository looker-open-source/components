import * as React from 'react'
import {
  ResponsiveAlignItemsValue,
  ResponsiveFlexDirectionValue,
  ResponsiveJustifyContentValue,
} from '@looker/design-tokens'
import { BoxProps } from '../../Box'
import { Flex } from '../../Flex'

export type FormControlDirections = 'left' | 'right' | 'top' | 'bottom'

export interface FormControlProps extends BoxProps<HTMLDivElement> {
  alignLabel?: FormControlDirections
}

export const FormControl: React.FC<FormControlProps> = ({
  alignLabel,
  ...props
}) => {
  interface FlexAlignment {
    alignItems?: ResponsiveAlignItemsValue
    flexDirection?: ResponsiveFlexDirectionValue
    justifyContent?: ResponsiveJustifyContentValue
  }
  const flexAlignment: FlexAlignment = {}
  const setFlexAlignment = () => {
    switch (alignLabel) {
      case 'left':
        flexAlignment.flexDirection = 'row'
        flexAlignment.alignItems = 'baseline'
        break
      case 'right':
        flexAlignment.flexDirection = 'row-reverse'
        flexAlignment.justifyContent = 'flex-end'
        flexAlignment.alignItems = 'baseline'
        break
      case 'bottom':
        flexAlignment.flexDirection = 'column-reverse'
        flexAlignment.justifyContent = 'flex-end'
        break
      case 'top':
      default:
        flexAlignment.flexDirection = 'column'
        break
    }
    return flexAlignment
  }
  return (
    <Flex {...setFlexAlignment()} {...props}>
      {props.children}
    </Flex>
  )
}
