import styled from 'styled-components'
import {
  border,
  typography,
  layout,
  CustomizableAttributes,
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
export interface InputTextProps extends SpaceProps, Omit<InputProps, 'type'> {}

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
  ${typography}
  ${space}
`
