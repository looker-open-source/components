import * as React from 'react'
import styled, { StyledComponentClass, css } from '../../styled_components'
import { rem, rgba } from 'polished'
import { brandFont } from '../../styles/typography'
import { ThemeInterface } from '../../themes'
import { themeColors } from '../../themes/theme_colors';

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

export enum ButtonStates {
  Active = 'active',
  Hover = 'hover'
}

export interface ButtonProps {
  size: ButtonSizes
  variant: ButtonVariants
  state: ButtonStates
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
  --primary: ${props => props.theme.colors.primary };
  --hover: ${props => props.theme.colors.primaryDark };
  --active: ${props => props.theme.colors.primaryDarker };
  --variantLight: ${props => props.theme.colors.primaryLight };
  --variantLighter: ${props => props.theme.colors.primaryLighter };
  --textColor: ${props => props.theme.colors.primaryText };
  --accessibilityOutline ${props => rgba(props.theme.colors.primary, .25)};


  background-color: var(--primary);
  border: ${rem(1)} solid var(--primary);
  border-radius: ${rem(6)};
  color: var(--textColor);
  cursor: pointer;
  display: inline-flex;
  font-family: ${brandFont};
  font-size: ${props => buttonSize(props.size).fontSize};
  line-height: ${props => buttonSize(props.size).lineHeight};
  outline: none;
  padding: ${props => buttonSize(props.size).padding};
  transition: border 180ms, background 180ms, text 180ms;
  vertical-align: middle;
  white-space: nowrap;


  &:hover, &:focus {
    background-color: var(--hover);
  }

  &:focus {
    box-shadow: 0 0 0 .15em var(--accessibilityOutline);
  }

  &:active  {
    background-color: var(--active);
    box-shadow: none;
  }

  &[disabled] {
    filter: grayscale(.3);
    opacity: .25;
    cursor: default;

    &:hover, &:active, &:focus {
      background-color: var(--primary);
    }
  }

  ${props => (props.variant === 'outline') && css`
    background: transparent;
    border-color: var(--primary);
    color: var(--primary);

    &:hover, &:focus {
      background: var(--variantLighter);
    }

    &:active {
      background: var(--variantLight);
      color: var(--hover);
    }
  `};

  ${props => (props.variant === 'transparent') && css`
    background: transparent;
    border: transparent;
    color: var(--primary);

    &:hover, &:focus {
      color: var(--hover);
      background: transparent;
    }

    &:active {
      background: var(--variantLighter);
    }
  `};
`
