/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import styled from 'styled-components'
import React, { FC, ReactNode, useContext, useRef } from 'react'
import { IconButton } from '../../Button'
import { Menu, MenuDisclosure, MenuList } from '../../Menu'
import { DataTableContext } from '../DataTableContext'
import { DataTableRow } from './DataTableRow'

export interface DataTableItemProps
  extends CompatibleHTMLProps<HTMLDivElement> {
  /**
   *  The available actions for this item
   */
  actions?: ReactNode
  /**
   *  Sets the tooltip text and a hidden text label for the actions button (accessible to assistive technology)
   *  If unprovided by the user, a default string will be used instead
   *  @default 'Options'
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

  children: JSX.Element | JSX.Element[]
  primaryAction?: ReactNode
}

const DataTableItemLayout: FC<DataTableItemProps> = ({
  actions,
  actionsTooltip = 'Options',
  children,
  className,
  disabled,
  id,
  onClick,
  primaryAction,
}) => {
  const ref = useRef<HTMLTableRowElement>(null)
  const { select } = useContext(DataTableContext)

  const handleOnSelect = () => select && select.onSelect(id)

  const handleClick = disabled
    ? undefined
    : select && select.onClickRowSelect
    ? handleOnSelect
    : onClick || undefined

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const isEventFromChild = event.currentTarget !== event.target
    if (event.keyCode === 13 && !isEventFromChild) {
      event.currentTarget.click()
    }
  }

  const itemActions = (
    <ItemActionsLayout>
      {primaryAction && <>{primaryAction}</>}
      {actions && (
        <Menu>
          <MenuDisclosure tooltip={actionsTooltip}>
            <IconButton icon="DotsVert" size="small" label={actionsTooltip} />
          </MenuDisclosure>
          <MenuList>{actions}</MenuList>
        </Menu>
      )}
    </ItemActionsLayout>
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
      onKeyDown={handleKeyDown}
      ref={ref}
      secondary={itemActions}
      tabIndex={0}
    >
      {children}
    </DataTableRow>
  )
}

const ItemActionsLayout = styled.div`
  align-items: center;
  display: table;
  padding: ${({ theme }) => theme.space.xxsmall};
`

export const DataTableItem = styled(DataTableItemLayout)``
