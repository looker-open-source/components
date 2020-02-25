import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import { grid, GridProps } from 'styled-system'
import styled from 'styled-components'

export interface ActionListHeaderProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    SpaceProps,
    TypographyProps {}

export const ActionListHeader = styled.div<ActionListHeaderProps>`
  ${color}
  ${border}
  ${flexbox}
  ${grid}
  ${layout}
  ${space}
  ${typography}
`

ActionListHeader.defaultProps = {
  backgroundColor: 'palette.white',
  borderBottom: 'solid 1px',
  borderColor: 'palette.charcoal200',
  color: 'palette.charcoal900',
  display: 'flex',
  fontSize: 'xsmall',
  fontWeight: 'semiBold',
  py: 'small',
}
