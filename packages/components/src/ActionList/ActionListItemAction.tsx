import { CompatibleHTMLProps } from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import React, { ReactNode } from 'react'
import { MenuItem } from '../Menu/'

export interface ActionListItemActionProps
  extends CompatibleHTMLProps<HTMLElement> {
  children?: ReactNode
  detail?: ReactNode
  icon?: IconNames
  role?: 'button' | 'link'
}

/**
 * MenuItem may undergo a refactor soon. Creating a proxy in the form of ActionListItemAction
 * allows us to adapt to any changes to MenuItem or its interface.
 * */
export const ActionListItemAction = (props: ActionListItemActionProps) => (
  <MenuItem {...props} />
)
