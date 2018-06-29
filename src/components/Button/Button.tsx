import * as React from 'react'
import sc, { StyledComponentClass } from 'styled-components'
import { rem } from 'polished'
import { brandFont } from '../../styles/typography'

export interface ButtonProps {}

export const Button = sc<ButtonProps, 'button'>('button')`
  --background-color: ${(props) => props.theme.colors.action };
  --color: ${(props) => props.theme.colors.text };
  --border-color: var(--background-color);

  background-color: var(--background-color);
  border: ${rem(1)} solid var(--border-color);
  border-radius: ${rem(6)};
  color: var(--color);
  cursor: pointer;
  display: inline-block;
  font-family: ${brandFont};
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  padding: ${rem(6)} ${rem(16)};
  white-space: nowrap;
  vertical-align: middle;

  &:hover {
    --background-color: ${props => props.theme.colors.interact};
  }

  &:active {
    --background-color: ${props => props.theme.colors.activate};
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
