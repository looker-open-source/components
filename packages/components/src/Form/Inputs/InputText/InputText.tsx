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
} from 'looker-design-tokens'
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
    Omit<LayoutProps, 'size'>,
    PsuedoProps,
    SpaceProps,
    Omit<InputProps, 'type'> {
  /**
   *
   * @default 'text'
   */
  type?: 'number' | 'password' | 'text' | 'search'
}

interface InternalInputTextProps extends InputTextProps, TypographyProps {}

export const InputText = styled.input.attrs((props: InputTextProps) => ({
  background: props.validationType === 'error' && 'palette.red000',
  px: props.px || props.p || CustomizableInputTextAttributes.px,
  py: props.py || props.p || CustomizableInputTextAttributes.py,
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
  type: 'text',
}
