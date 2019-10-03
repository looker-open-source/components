import {
  border,
  boxShadow,
  color,
  position,
  layout,
  space,
  typography,
  BorderProps,
  BoxShadowProps,
  ColorProps,
  PositionProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import { css } from 'styled-components'
import { cursor, CursorProps } from './cursor'
import { reset } from './reset'

export interface BoxBaseProps
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    CursorProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {}

export const boxBaseCSS = css`
  ${reset}

  /**
   * Rules here should provide convenience styling for Box derived components.
   * Generally anything here could be overwritten by explicit values set via
   * Box's prop values. For example a function here that sets 'cursor: pointer'
   * would be overwritten by an explicit <Box cursor='copy'/>.
   */
  ${cursor}

  /**
   * Style Utilities that extend Box's props. Most of these come from
   * styled-system but some are Lens specific.
   *
   * These should be last to override rules with lower priority.
   */
  ${layout}
  ${position}
  ${border}
  ${boxShadow}
  ${color}
  ${cursor}
  ${position}
  ${space}
  ${typography}
`
