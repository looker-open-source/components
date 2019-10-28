import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

export const ButtonOutline = styled(ButtonBase)`
  background: ${({ theme, color = 'primary' }) =>
    theme.colors.semanticColors[color].white};
  border: 1px solid
    ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].borderColor};
  color: ${({ theme, color = 'primary' }) =>
    theme.colors.semanticColors[color].main};

  &:hover,
  &:focus,
  &.hover {
    background: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].white};
    border-color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].main};
    color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].darker};
  }

  &:active,
  &.active {
    background: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].main};
    border-color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].main};
    color: ${({ theme, color = 'primary' }) =>
      theme.colors.semanticColors[color].text};
  }

  &[disabled] {
    &:hover,
    &:active,
    &:focus {
      background-color: ${({ theme, color = 'primary' }) =>
        theme.colors.semanticColors[color].white};
      border-color: ${({ theme, color = 'primary' }) =>
        theme.colors.semanticColors[color].borderColor};
      color: ${({ theme, color = 'primary' }) =>
        theme.colors.semanticColors[color].main};
    }
  }
`
