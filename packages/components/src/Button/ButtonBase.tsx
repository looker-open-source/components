import {
  CompatibleHTMLProps,
  space,
  SpaceProps,
  reset,
  SemanticColors,
} from 'looker-design-tokens'
import styled, { css } from 'styled-components'
import React, { forwardRef, Ref } from 'react'
import { buttonSize, ButtonSizeProps } from './size'
import { ButtonIcon, buttonIcon, ButtonIconProps } from './icon'

type ButtonColors = keyof SemanticColors

export interface ButtonProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'>,
    ButtonIconProps,
    ButtonSizeProps,
    SpaceProps {
  type?: 'button' | 'submit' | 'reset'
  forwardedAs?: 'a'

  /**
   * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "primary"
   */
  color?: ButtonColors
}

export const buttonCSS = css`
  ${reset}

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

  ${buttonSize}
  ${buttonIcon}

  ${space}
`

const ButtonStyle = styled.button<ButtonProps>`
  ${buttonCSS}
`

export const ButtonBase = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { children, iconBefore, iconAfter, ...restProps } = props

    return (
      <ButtonStyle ref={ref} size="medium" {...restProps}>
        {iconBefore && <ButtonIcon name={iconBefore} />}
        {children}
        {iconAfter && <ButtonIcon name={iconAfter} />}
      </ButtonStyle>
    )
  }
)

ButtonBase.displayName = 'ButtonBase'
