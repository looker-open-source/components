/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import type { ReactNode } from 'react'
import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import { MoreVert } from '@styled-icons/material/MoreVert'
import { IconButton } from '../../Button'
import { Menu } from '../../Menu'
import { useTranslation } from '../../utils'
import { DataTableContext } from '../DataTableContext'
import { DataTableRow } from './DataTableRow'
import { ItemTarget, ItemTargetGroup } from './ItemTarget'

export interface DataTableItemProps
  extends CompatibleHTMLProps<HTMLDivElement> {
  /**
   *  The available actions for this item
   */
  actions?: ReactNode
  /**
   *  Sets the tooltip text and a hidden text label for the actions button (accessible to assistive technology)
   *  If unprovided by the user, a default string will be used instead
   * I18n recommended: content that is user visible should be treated for i18n
   *  @default Options
   */
  actionsTooltip?: string
  /**
   *  The id of this item
   */
  id: string
  /**
   * A boolean indicating whether this item is selectable or not (the item will appear greyed out if true)
   */
  disabled?: boolean
  /**
   * I18n recommended: content that is user visible should be treated for i18n
   */
  children: JSX.Element | JSX.Element[]
  /*
   * A ReactNode (IconButton) that will be placed as a primary action on the right side of the row
   */
  actionPrimary?: ReactNode
}

const DataTableItemLayout = (props: DataTableItemProps) => {
  const { t } = useTranslation('DataTableItem')
  const actionsTooltipText = t('Options')
  const {
    actions,
    actionsTooltip = actionsTooltipText,
    children,
    className,
    disabled,
    id,
    onClick,
    actionPrimary,
  } = props
  const ref = useRef<HTMLTableRowElement>(null)
  const { select } = useContext(DataTableContext)

  const handleClick = disabled ? undefined : onClick || undefined

  const ItemActions = (actionPrimary || actions) && (
    <ItemTargetGroup>
      {actionPrimary && <ItemTarget>{actionPrimary}</ItemTarget>}
      {actions && (
        <ItemTarget>
          <Menu content={actions}>
            <IconButton
              icon={<MoreVert />}
              label={actionsTooltip}
              size="small"
              tabIndex={-1}
            />
          </Menu>
        </ItemTarget>
      )}
    </ItemTargetGroup>
  )

  const onChange = select ? () => select.onSelect(id) : undefined

  const checked = select && select.selectedItems.includes(id)
  return (
    <DataTableRow
      checked={checked}
      className={className}
      disabled={disabled}
      hasCheckbox={!!select}
      id={id}
      onChange={onChange}
      onClick={handleClick}
      ref={ref}
      secondary={ItemActions}
      tabIndex={0}
    >
      {children}
    </DataTableRow>
  )
}

export const DataTableItem = styled(DataTableItemLayout)``
