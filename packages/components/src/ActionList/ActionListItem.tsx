import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import styled from 'styled-components'
import React, { ReactNode } from 'react'

export interface ActionListItemProps
  extends BorderProps,
    ColorProps,
    SpaceProps {
  children?: ReactNode
  className?: string
}

const ActionListItemInternal = (props: ActionListItemProps) => {
  return <div className={props.className}>{props.children}</div>
}

export const ActionListItem = styled(ActionListItemInternal)`
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
