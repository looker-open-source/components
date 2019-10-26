import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

export const ButtonTransparent = styled(ButtonBase)`
  background: ${({ theme, color = 'primary' }) =>
    theme.colors.semanticColors[color].transparent};
  border: 1px solid
    ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].transparent};
  color: ${({ theme, color = 'primary' }) =>
    theme.colors.semanticColors[color].main};

  &:active,
  &.active {
    background: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].light};
    border-color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].light};
    color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].altText};
  }

  &:hover,
  &:focus,
  &.hover {
    background: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].lighter};
    border-color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].lighter};
    color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].altText};
  }

  &[disabled] {
    &:hover,
    &:active,
    &:focus {
      background-color: ${({ theme, color = 'primary' }) =>
        theme.colors.semanticColors[color].transparent};
      border-color: ${({ theme, color = 'primary' }) =>
        theme.colors.semanticColors[color].transparent};
      color: ${({ theme, color = 'primary' }) =>
        theme.colors.semanticColors[color].main};
    }
  }
`
