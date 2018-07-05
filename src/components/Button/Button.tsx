import * as React from 'react'
import styled, { StyledComponentClass } from '../../styled_components'
import { rem, rgba } from 'polished'
import { brandFont } from '../../styles/typography'
import { ThemeInterface } from '../../themes'

export enum ButtonSizes {
  ExtraSmall = "xsmall",
  Small = "small",
  Medium = "medium",
  Large = "large"
}

export enum ButtonVariants {
  Outline = 'outline',
  Transparent = 'transparent'
}

export interface ButtonProps {
  size: ButtonSizes
  variant: ButtonVariants
}

function buttonSize(size: string) {
  switch (size) {
    case ButtonSizes.ExtraSmall:
      return {
        fontSize: rem(12),
        lineHeight: rem(20),
        padding: `${rem(2)} ${rem(8)}`
      }
    case ButtonSizes.Small:
      return {
        fontSize: rem(14),
        lineHeight: rem(24),
        padding: `${rem(3)} ${rem(14)}`
      }
    case ButtonSizes.Large:
      return {
        fontSize: rem(22),
        lineHeight: rem(30),
        padding: `${rem(8)} ${rem(24)}`
      }
    case ButtonSizes.Medium:
    default:
      return {
        fontSize: rem(16),
        lineHeight: rem(24),
        padding: `${rem(6)} ${rem(16)}`
      }
  }
}

export const Button = styled<ButtonProps, 'button'>('button')`
  --background-color: ${props => props.variant ? 'transparent' : props.theme.colors.primary };
  --color: ${props => props.variant ? props.theme.colors.primary : props.theme.colors.primaryText };
  --border-color: ${props => props.variant == 'transparent' ? 'transparent' : props.theme.colors.primary };
  --hover-color: ${props => props.variant ? props.theme.colors.primaryLighter : props.theme.colors.primaryDark };
  --active-color: ${props => props.variant ? props.theme.colors.primaryLight : props.theme.colors.primaryDarker };
  --outline-color: ${props => rgba(props.theme.colors.primary, .25)};

  background-color: var(--background-color);
  border: ${rem(1)} solid var(--border-color);
  border-radius: ${rem(6)};
  color: var(--color);
  cursor: pointer;
  display: inline-flex;
  font-family: ${brandFont};
  font-size: ${props => buttonSize(props.size).fontSize};
  line-height: ${props => buttonSize(props.size).lineHeight};
  padding: ${props => buttonSize(props.size).padding};
  transition: border 180ms, background 180ms;
  vertical-align: middle;
  white-space: nowrap;
  outline: none;

  &:hover, &:focus {
    background-color: var(--hover-color);
  }

  &:focus {
    box-shadow: 0 0 0 .2em var(--outline-color);
  }

  &:active  {
    background-color: var(--active-color);
    box-shadow: none;
  }

  &[disabled] {
    filter: grayscale(.3);
    opacity: .25;
    cursor: default;

    &:hover, &:active, &:focus {
      background-color: var(--background-color);
    }
  }
`
