import styled from 'styled-components'
import { rgba } from 'polished'
import { ButtonBase } from './ButtonBase'

export const Button = styled(ButtonBase)`
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
