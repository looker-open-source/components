import {
  CompatibleHTMLProps,
  radii,
  RadiusSizes,
  reset,
  SemanticColors,
  space,
  SpaceProps,
} from 'looker-design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled, { css } from 'styled-components'
import {
  minWidth,
  MinWidthProps,
  maxWidth,
  MaxWidthProps,
  WidthProps,
  width,
} from 'styled-system'
import { buttonSize, ButtonSizeProps } from './size'
import { ButtonIcon, buttonIcon, ButtonIconProps } from './icon'

export interface CustomizableButtonAttributes {
  borderRadius: RadiusSizes
}

export const CustomizableButtonAttributes: CustomizableButtonAttributes = {
  borderRadius: 'medium',
}

type ButtonColors = keyof SemanticColors

export interface ButtonProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'>,
    ButtonIconProps,
    ButtonSizeProps,
    MaxWidthProps,
    MinWidthProps,
    WidthProps,
    SpaceProps {
  type?: 'button' | 'submit' | 'reset'
  forwardedAs?: 'a'

  /**
   * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "primary"
   */
  color?: ButtonColors

  className?: string
}

const ButtonJSX = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { children, className, iconBefore, iconAfter, ...restProps } = props

    return (
      <button className={className} ref={ref} {...restProps}>
        {iconBefore && <ButtonIcon name={iconBefore} />}
        {children}
        {iconAfter && <ButtonIcon name={iconAfter} />}
      </button>
    )
  }
)

ButtonJSX.displayName = 'ButtonJSX'

export const buttonCSS = css`
  ${reset}
  ${maxWidth}
  ${minWidth}
  ${width}

  align-items: center;
  border-radius: ${radii[CustomizableButtonAttributes.borderRadius]};
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

export const ButtonBase = styled(ButtonJSX)<ButtonProps>`
  ${buttonCSS}
`

ButtonBase.defaultProps = { size: 'medium' }
