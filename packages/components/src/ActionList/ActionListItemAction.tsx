import { IconNames } from '@looker/icons'
import React, { ReactNode } from 'react'
import { MenuItem } from '../Menu/'

export interface ActionListItemActionProps {
  children?: ReactNode
  detail?: ReactNode
  icon?: IconNames
  /*
    @default 'button'
  */
  itemRole?: 'button' | 'link'
}

export const ActionListItemAction = (props: ActionListItemActionProps) => {
  return <MenuItem {...props} itemRole="button" p={0}></MenuItem>
}
