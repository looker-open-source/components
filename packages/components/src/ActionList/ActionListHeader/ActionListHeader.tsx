import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface ActionListHeaderProps
  extends BorderProps,
    ColorProps,
    SpaceProps {}

export const ActionListHeader = styled.div<ActionListHeaderProps>`
  ${color}
  ${border}
  ${space}
`

ActionListHeader.defaultProps = {
  backgroundColor: 'palette.white',
  borderBottom: 'solid 1px',
  borderColor: 'palette.charcoal200',
  p: 'small',
}
