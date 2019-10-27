import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { ButtonBase, ButtonBaseProps } from './ButtonBase'
import { ButtonTransparent } from './ButtonTransparent'
import { ButtonOutline } from './ButtonOutline'

export const ButtonDefault = styled(ButtonBase)`
  &:focus {
    box-shadow: 0 0 0 0.15rem
      ${({ theme, color = 'primary' }) =>
        rgba(theme.colors.semanticColors[color].main, 0.25)};
  }
  background: ${({ theme, color = 'primary' }) =>
    theme.colors.semanticColors[color].main};
  border: 1px solid
    ${({ theme, color = 'primary' }) => theme.colors.semanticColors[color].main};
  color: ${({ theme, color = 'primary' }) =>
    theme.colors.semanticColors[color].text};

  &:active,
  &.active {
    background: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].darker};
    border-color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].darker};
  }
  &:hover,
  &:focus,
  &.hover {
    background: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].dark};
    border-color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].dark};
  }
  &[disabled] {
    &:hover,
    &:active,
    &:focus {
      background-color: ${({ theme, color = 'primary' }) =>
        theme.colors.semanticColors[color].main};
      border-color: ${({ theme, color = 'primary' }) =>
        theme.colors.semanticColors[color].borderColor};
    }
  }
`

// proxy should be removed when variant is completely removed from code base.
export interface ButtonProps extends ButtonBaseProps {
  variant?: 'default' | 'transparent' | 'outline'
}

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { variant, ...restProps } = props
    switch (variant || 'default') {
      case 'transparent':
        // eslint-disable-next-line no-console
        console.warn(
          'WARNING: variant Transparent is deprecated. Use the component <ButtonTransparent> instead.'
        )
        return <ButtonTransparent ref={ref} {...restProps} />
      case 'outline':
        // eslint-disable-next-line no-console
        console.warn(
          'WARNING: variant Outline is deprecated. Use the component <ButtonOutline> instead.'
        )
        return <ButtonOutline ref={ref} {...restProps} />
      case 'default':
      default:
        return <ButtonDefault ref={ref} {...restProps} />
    }
  }
)

Button.displayName = 'Button'
