import pick from 'lodash/pick'
import omit from 'lodash/omit'
import {
  border,
  BorderProps,
  typography,
  layout,
  LayoutProps,
  CustomizableAttributes,
  pseudoClasses,
  PseudoProps,
  space,
  SpaceProps,
  TypographyProps,
  reset,
  color,
} from 'looker-design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { InputProps, inputPropKeys } from '../InputProps'

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
    PseudoProps,
    SpaceProps,
    TypographyProps,
    Omit<InputProps, 'type'> {
  /**
   *
   * @default 'text'
   */
  type?: 'number' | 'password' | 'text' | 'search'
}

const InputComponent = forwardRef(
  (props: InputTextProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        {...pick(omit(props, 'height', 'width'), inputPropKeys)}
        className={props.className}
        ref={ref}
      />
    )
  }
)
InputComponent.displayName = 'InputComponent'

export const InputText = styled(InputComponent).attrs(
  (props: InputTextProps) => ({
    background: props.validationType === 'error' && 'palette.red000',
    px: props.px || props.p || CustomizableInputTextAttributes.px,
    py: props.py || props.p || CustomizableInputTextAttributes.py,
  })
)<InputTextProps>`
  ${reset}
  ${border}
  ${color}
  ${layout}
  ${space}
  ${typography}
  ${pseudoClasses}
`

InputText.defaultProps = {
  border: 'solid 1px',
  borderColor: 'palette.charcoal300',
  borderRadius: CustomizableInputTextAttributes.borderRadius,
  fontSize: CustomizableInputTextAttributes.fontSize,
  height: CustomizableInputTextAttributes.height,
  type: 'text',
}
