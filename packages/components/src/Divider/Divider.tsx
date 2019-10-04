import {
  CompatibleHTMLProps,
  position,
  PositionProps,
  reset,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import styled, { css } from 'styled-components'

export interface DividerProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    PositionProps,
    SpaceProps {
  size?: string | number
  customColor?: string
  appearance?: 'light' | 'dark' | 'onDark'
}

const dividerAppearance = (props: DividerProps) => {
  switch (props.appearance) {
    case 'light':
      return css`
        background: ${props => props.theme.colors.palette.charcoal200};
      `
    case 'dark':
      return css`
        background: ${props => props.theme.colors.palette.charcoal400};
      `
    case 'onDark':
      return css`
        background: ${props => props.theme.colors.palette.charcoal500};
      `
    default:
      return false
  }
}

export const Divider = styled.div<DividerProps>`
  ${reset}
  ${position}
  ${space}
  ${dividerAppearance};
`
