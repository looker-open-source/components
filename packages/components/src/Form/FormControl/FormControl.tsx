import * as CSS from 'csstype'
import React from 'react'
import { ResponsiveValue } from 'styled-system'
import { BoxProps } from '../../Layout/Box'
import { Flex } from '../../Layout/Flex'

type ResponsiveAlignItemsValue = ResponsiveValue<CSS.AlignItemsProperty>
type ResponsiveFlexDirectionValue = ResponsiveValue<CSS.FlexDirectionProperty>
type ResponsiveJustifyContentValue = ResponsiveValue<CSS.JustifyContentProperty>

type FormControlDirections = 'left' | 'right' | 'top' | 'bottom'

export interface FormControlProps extends Omit<BoxProps<HTMLDivElement>, 'as'> {
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
