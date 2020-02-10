import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface ActionListHeaderProps
  extends BorderProps,
    ColorProps,
    SpaceProps,
    TypographyProps {}

export const ActionListHeader = styled.div<ActionListHeaderProps>`
  ${color}
  ${border}
  ${space}
  ${typography}
`

ActionListHeader.defaultProps = {
  backgroundColor: 'palette.white',
  borderBottom: 'solid 1px',
  borderColor: 'palette.charcoal200',
  color: 'palette.charcoal900',
  fontSize: 'xsmall',
  fontWeight: 'semiBold',
  py: 'small',
}
