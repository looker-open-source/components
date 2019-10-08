import {
  border,
  BorderProps,
  typography,
  layout,
  LayoutProps,
  CustomizableAttributes,
  psuedoClasses,
  PsuedoProps,
  space,
  SpaceProps,
  TypographyProps,
  reset,
  color,
} from '@looker/design-tokens'
import styled from 'styled-components'
import { InputProps } from '../InputProps'

export const CustomizableInputTextAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '28px',
  px: 'xsmall',
  py: 'none',
}

export interface InputTextProps
  extends BorderProps,
    LayoutProps,
    PsuedoProps,
    SpaceProps,
    Omit<InputProps, 'type'> {
  type?: 'text' | 'search'
}

interface InternalInputTextProps extends InputTextProps, TypographyProps {}

export const InputText = styled.input.attrs((props: InputTextProps) => ({
  background: props.validationType === 'error' && 'palette.red000',
}))<InternalInputTextProps>`
  ${reset}
  ${border}
  ${color}
  ${layout}
  ${space}
  ${typography}
  ${psuedoClasses}
`

InputText.defaultProps = {
  border: 'solid 1px',
  borderColor: 'palette.charcoal300',
  borderRadius: CustomizableInputTextAttributes.borderRadius,
  fontSize: CustomizableInputTextAttributes.fontSize,
  height: CustomizableInputTextAttributes.height,
  px: CustomizableInputTextAttributes.px,
  py: CustomizableInputTextAttributes.py,
  type: 'text',
}
