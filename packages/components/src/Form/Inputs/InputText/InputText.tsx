import styled from 'styled-components'
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
} from '@looker/design-tokens'
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
  value?: string
}

export const InputText = styled.input.attrs((props: InputTextProps) => ({
  borderRadius: CustomizableInputTextAttributes.borderRadius,
  fontSize: CustomizableInputTextAttributes.fontSize,
  height: CustomizableInputTextAttributes.height,
  px: props.p || CustomizableInputTextAttributes.px,
  py: props.p || CustomizableInputTextAttributes.py,
  type: 'text',
}))<InputTextProps>`
  ${props =>
    props.validationType === 'error'
      ? `background: ${props.theme.colors.palette.red000};`
      : ''}
  border: solid 1px ${props => props.theme.colors.palette.charcoal300};
  ${border}
  ${layout}
  ${psuedoClasses}
  ${typography}
  ${space}
`
