import {
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
    SpaceProps {
  size?: string | number
  customColor?: string
  appearance?: 'light' | 'dark' | 'onDark'
}

const appearanceVariant = variant({
  prop: 'appearance',
  variants: {
    dark: {
      bg: 'palette.charcoal400',
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
  ${space}

  height: ${props => props.size};
  ${color}
  ${appearanceVariant}
`

Divider.defaultProps = { customColor: 'palette.charcoal300', size: '1px' }
