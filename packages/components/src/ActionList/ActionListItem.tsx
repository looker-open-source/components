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
import React, { FC, ReactNode, useContext, useRef, useEffect } from 'react'
import { IconButton } from '../Button'
import { Menu, MenuDisclosure, MenuList } from '../Menu'
import { ActionListRow } from './ActionListRow'
import { ActionListContext } from './ActionListContext'

export interface ActionListItemProps
  extends CompatibleHTMLProps<HTMLDivElement> {
  actions?: ReactNode
  id: string
  disabled?: boolean
}

const ActionListItemInternal: FC<ActionListItemProps> = ({
  actions,
  children,
  className,
  disabled,
  id,
  onClick,
}) => {
  const actionListItemRef = useRef<HTMLDivElement>(null)
  const {
    allItems,
    canSelect,
    itemsSelected,
    onSelect,
    onClickRowSelect,
    setAllItems,
  } = useContext(ActionListContext)

  useEffect(() => {
    setAllItems &&
      !disabled &&
      !allItems.includes(id) &&
      setAllItems([...allItems, id])
  }, [allItems, disabled, id, setAllItems])

  const handleOnSelect = () => onClickRowSelect && onSelect && onSelect(id)

  const handleClick = disabled
    ? undefined
    : onClickRowSelect
    ? handleOnSelect
    : onClick || undefined

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const isEventFromChild = event.currentTarget !== event.target
    if (event.keyCode === 13 && !isEventFromChild) {
      event.currentTarget.click()
    }
  }

  const itemActions = actions && (
    <div onClick={handleMenuClick}>
      <Menu hoverDisclosureRef={actionListItemRef}>
        <MenuDisclosure>
          <IconButton icon="DotsVert" label="Actions" size="medium" />
        </MenuDisclosure>
        <MenuList>{actions}</MenuList>
      </Menu>
    </div>
  )

  const onChange = onSelect ? () => onSelect(id) : undefined

  return (
    <ActionListRow
      className={className}
      secondary={itemActions}
      ref={actionListItemRef}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      hasCheckbox={canSelect}
      onChange={onChange}
      checked={itemsSelected.includes(id)}
      disabled={disabled}
      supportsRaised={!onClickRowSelect}
    >
      {children}
    </ActionListRow>
  )
}

export const ActionListItem = styled(ActionListItemInternal)`
  border-bottom: solid 1px ${(props) => props.theme.colors.palette.charcoal200};
  display: flex;
`
