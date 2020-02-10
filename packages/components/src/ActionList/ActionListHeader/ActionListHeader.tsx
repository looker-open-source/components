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
    SpaceProps {
  // TODO: Figure out what actual props needs to be passed in
  pizza?: string
}

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
