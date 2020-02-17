import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import styled from 'styled-components'
import { ReactNode } from 'react'

export interface ActionListItemProps
  extends BorderProps,
    ColorProps,
    SpaceProps {
  children?: ReactNode
}

export const ActionListItem = styled.div<ActionListItemProps>`
  ${border}
  ${space}
  ${color}

  display: flex;
`

ActionListItem.defaultProps = {
  backgroundColor: 'palette.white',
  borderBottom: 'solid 1px',
  borderColor: 'palette.charcoal200',
}
