import * as React from 'react'
import styled, { StyledComponentClass } from '../../styled_components'
import { rem } from 'polished'
import { brandFont } from '../../styles/typography'
import { ThemeInterface } from '../../themes'

export enum ButtonSizes {
  ExtraSmall = "xsmall",
  Small = "small",
  Medium = "medium",
  Large = "large"
}

export interface ButtonProps {
  size: ButtonSizes
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
  --background-color: ${props => props.theme.colors.action };
  --color: ${props => props.theme.colors.text };
  --border-color: var(--background-color);

  background-color: var(--background-color);
  border: ${rem(1)} solid var(--border-color);
  border-radius: ${rem(6)};
  color: var(--color);
  cursor: pointer;
  display: inline-block;
  font-family: ${brandFont};
  font-size: ${props => buttonSize(props.size).fontSize};
  line-height: ${props => buttonSize(props.size).lineHeight};
  padding: ${props => buttonSize(props.size).padding};
  white-space: nowrap;
  vertical-align: middle;

  &:hover {
    --background-color: ${props => props.theme.colors.actionInteractive};
  }

  &:active {
    --background-color: ${props => props.theme.colors.actionActive};
  }

  &[disabled] {

    --background-color: ${props => props.theme.colors.disabled};
    --color: ${props => props.theme.colors.disabled};
    cursor: default;

    &:hover, &:active {
      --background-color: ${props => props.theme.colors.disabled};
      --color: ${props => props.theme.colors.disabled};
    }
  }
`
