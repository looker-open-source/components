import styled from 'styled-components'
import {
  border,
  BorderRadiusProps,
  CustomizableAttributes,
  FontSizeProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
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
  extends FontSizeProps,
    BorderRadiusProps,
    SpaceProps,
    LayoutProps,
    Omit<InputProps, 'type'> {}

export const InputText = styled.input.attrs((props: InputTextProps) => ({
  bg: props.validationType === 'error' ? 'palette.red000' : undefined,
  borderRadius: CustomizableInputTextAttributes.borderRadius,
  fontSize: CustomizableInputTextAttributes.fontSize,
  height: CustomizableInputTextAttributes.height,
  px: props.p || CustomizableInputTextAttributes.px,
  py: props.p || CustomizableInputTextAttributes.py,
  type: 'text',
}))<InputTextProps>`
  border: solid 1px;
  border-color: ${props => props.theme.colors.palette.charcoal300};
  ${border}
  ${typography}
  ${space}
  ${layout}
`
