import {
  reset,
  CompatibleHTMLProps,
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import { css } from 'styled-components'

export interface TableCellProps
  extends BorderProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLTableCellElement> {}

export const tableCellCSS = css`
  ${reset}
  ${border}
  ${color}
  ${layout}
  ${space}
  ${typography}
`

export const tableCellDefaults = {
  px: 'none',
  py: 'xsmall',
}
