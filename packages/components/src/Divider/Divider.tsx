import {
  border,
  BorderProps,
  CompatibleHTMLProps,
  color,
  position,
  PositionProps,
  reset,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import styled from 'styled-components'
import { variant } from 'styled-system'

export interface DividerProps
  extends CompatibleHTMLProps<HTMLHRElement>,
    PositionProps,
    BorderProps,
    SpaceProps {
  size?: string | number
  customColor?: string
  appearance?: 'default' | 'light' | 'dark' | 'onDark'
}

const appearanceVariant = variant({
  prop: 'appearance',
  variants: {
    dark: {
      bg: 'palette.charcoal400',
    },
    default: {
      bg: 'palette.charcoal300',
    },
    light: {
      bg: 'palette.charcoal200',
    },
    onDark: {
      bg: 'palette.charcoal500',
    },
  },
})

export const Divider = styled.hr.attrs((props: DividerProps) => ({
  bg: props.customColor,
}))<DividerProps>`
  ${reset}
  ${position}
  ${border}
  ${space}

  height: ${props => props.size};
  ${props => (props.customColor ? color : appearanceVariant)}
`

Divider.defaultProps = { appearance: 'default', size: '1px' }
