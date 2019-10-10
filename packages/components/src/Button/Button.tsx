import {
  CompatibleHTMLProps,
  SpaceProps,
  space,
  reset,
} from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled, { css } from 'styled-components'
import { buttonSize, ButtonSizeProps } from './size'
import { buttonVariant, ButtonVariantProps } from './variant'
import { buttonIcon, ButtonIconProps, ButtonIcon } from './icon'

export interface ButtonProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'>,
    ButtonIconProps,
    ButtonSizeProps,
    ButtonVariantProps,
    SpaceProps {
  type?: 'button' | 'submit' | 'reset'
  forwardedAs?: 'a'
}

const ButtonComponent = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { children, iconBefore, iconAfter } = props
    return (
      <ButtonBase ref={ref} size="medium" {...props}>
        {iconBefore && <ButtonIcon name={iconBefore} />}
        {children}
        {iconAfter && <ButtonIcon name={iconAfter} />}
      </ButtonBase>
    )
  }
)

ButtonComponent.displayName = 'ButtonComponent'

export const buttonCSS = css`
  align-items: center;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  outline: none;
  transition: border 80ms;
  vertical-align: middle;
  white-space: nowrap;

  &[disabled] {
    cursor: default;
    filter: grayscale(0.3);
    opacity: 0.25;
  }
`

const ButtonBase = styled.button<ButtonProps>`
  ${reset}

  ${buttonCSS}
  ${buttonSize}
  ${buttonVariant}
  ${buttonIcon}

  ${space}
`

export const Button = styled(ButtonComponent)``
