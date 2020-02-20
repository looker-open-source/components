import { CompatibleHTMLProps } from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import React, { ReactNode } from 'react'
import { MenuItem } from '../Menu/'

export interface ActionListItemActionProps
  extends CompatibleHTMLProps<HTMLElement> {
  children?: ReactNode
  detail?: ReactNode
  icon?: IconNames
  itemRole?: 'button' | 'link'
}

export const ActionListItemAction = (props: ActionListItemActionProps) => {
  const { children, detail, icon, itemRole, onClick } = props

  return (
    <MenuItem detail={detail} icon={icon} itemRole={itemRole} onClick={onClick}>
      {children}
    </MenuItem>
  )
}
