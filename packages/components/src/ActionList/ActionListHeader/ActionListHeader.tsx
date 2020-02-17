import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface ActionListHeaderProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps {}

export const ActionListHeader = styled.div<ActionListHeaderProps>`
  ${color}
  ${border}
  ${flexbox}
  ${space}
  ${typography}

  display: flex;
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
