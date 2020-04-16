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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import {
  ActionList,
  ActionListColumns,
  ActionListItem,
  ActionListItemAction,
  ActionListItemColumn,
  ActionListHeaderColumn,
} from '.'

const columns: ActionListColumns = [
  {
    canSort: true,
    id: 'id',
    primaryKey: true,
    title: 'ID',
    type: 'number',
    widthPercent: 10,
  },
  {
    id: 'name',
    title: 'Name',
    type: 'string',
    widthPercent: 45,
  },
  {
    id: 'role',
    title: 'Role',
    type: 'string',
    widthPercent: 45,
  },
]

const data = [
  {
    id: '1',
    name: 'Richard Garfield',
    type: 'Game Designer',
  },
]

const header = (
  <>
    <ActionListHeaderColumn id="id">Foo</ActionListHeaderColumn>
    <ActionListHeaderColumn id="name">Bar</ActionListHeaderColumn>
    <ActionListHeaderColumn id="type">FooBar</ActionListHeaderColumn>
  </>
)

const items = data.map(({ id, name, type }) => {
  const availableActions = (
    <>
      <ActionListItemAction>View Profile</ActionListItemAction>
    </>
  )

  return (
    <ActionListItem key={id} id={id} actions={availableActions}>
      <ActionListItemColumn>{id}</ActionListItemColumn>
      <ActionListItemColumn>{name}</ActionListItemColumn>
      <ActionListItemColumn>{type}</ActionListItemColumn>
    </ActionListItem>
  )
})

const actionListWithGeneratedHeader = (
  <ActionList columns={columns}>{items}</ActionList>
)

const actionListWithProvidedHeader = (
  <ActionList columns={columns} header={header}>
    {items}
  </ActionList>
)

const actionListWithNoHeader = (
  <ActionList columns={columns} header={false}>
    {items}
  </ActionList>
)

describe('ActionList', () => {
  let rafSpy: jest.SpyInstance<number, [FrameRequestCallback]>

  beforeEach(() => {
    rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => cb())
  })

  afterEach(() => {
    rafSpy.mockRestore()
  })

  describe('General Layout', () => {
    test('Renders a generated header and list item', () => {
      const { getByText } = renderWithTheme(actionListWithGeneratedHeader)

      expect(getByText('ID')).toBeInTheDocument()
      expect(getByText('Name')).toBeInTheDocument()
      expect(getByText('Role')).toBeInTheDocument()

      expect(getByText('1')).toBeInTheDocument()
      expect(getByText('Richard Garfield')).toBeInTheDocument()
      expect(getByText('Game Designer')).toBeInTheDocument()
    })

    test('Renders a provided header and list item', () => {
      const { getByText, queryByText } = renderWithTheme(
        actionListWithProvidedHeader
      )

      expect(queryByText('ID')).not.toBeInTheDocument()
      expect(queryByText('Name')).not.toBeInTheDocument()
      expect(queryByText('Role')).not.toBeInTheDocument()

      expect(getByText('Foo')).toBeInTheDocument()
      expect(getByText('Bar')).toBeInTheDocument()
      expect(getByText('FooBar')).toBeInTheDocument()

      expect(getByText('1')).toBeInTheDocument()
      expect(getByText('Richard Garfield')).toBeInTheDocument()
      expect(getByText('Game Designer')).toBeInTheDocument()
    })

    test('Renders no header if header prop value is false', () => {
      const { getByText, queryByText } = renderWithTheme(actionListWithNoHeader)

      expect(queryByText('ID')).not.toBeInTheDocument()
      expect(queryByText('Name')).not.toBeInTheDocument()
      expect(queryByText('Role')).not.toBeInTheDocument()

      expect(getByText('1')).toBeInTheDocument()
      expect(getByText('Richard Garfield')).toBeInTheDocument()
      expect(getByText('Game Designer')).toBeInTheDocument()
    })

    test('Renders action menu on button click and handles clicks on list item and action', () => {
      const handleActionClick = jest.fn()
      const handleListItemClick = jest.fn()

      const clickableItems = data.map(({ id, name, type }) => {
        const availableActions = (
          <>
            <ActionListItemAction onClick={handleActionClick}>
              View Profile
            </ActionListItemAction>
          </>
        )

        return (
          <ActionListItem
            id={id}
            key={id}
            actions={availableActions}
            onClick={handleListItemClick}
          >
            <ActionListItemColumn>{id}</ActionListItemColumn>
            <ActionListItemColumn>{name}</ActionListItemColumn>
            <ActionListItemColumn>{type}</ActionListItemColumn>
          </ActionListItem>
        )
      })

      const { getByRole, getByText, queryByText } = renderWithTheme(
        <ActionList columns={columns}>{clickableItems}</ActionList>
      )

      const listItemId = getByText('1')

      expect(handleListItemClick.mock.calls.length).toBe(0)
      fireEvent.click(listItemId)
      expect(handleListItemClick.mock.calls.length).toBe(1)

      fireEvent(
        listItemId,
        new MouseEvent('mouseenter', {
          bubbles: true,
          cancelable: true,
        })
      )

      const listItemButton = getByRole('button')
      expect(queryByText('View Profile')).not.toBeInTheDocument()

      fireEvent.click(listItemButton)
      const viewProfileAction = getByText('View Profile')
      expect(viewProfileAction).toBeInTheDocument()

      expect(handleActionClick.mock.calls.length).toBe(0)
      fireEvent.click(viewProfileAction)
      expect(handleActionClick.mock.calls.length).toBe(1)

      expect(queryByText('View Profile')).not.toBeInTheDocument()
    })
  })

  describe('Sorting', () => {
    const onSort = jest.fn()
    const actionListWithSort = (
      <ActionList columns={columns} onSort={onSort}>
        {items}
      </ActionList>
    )

    test('Calls onSort if canSort property is true', () => {
      const { getByText } = renderWithTheme(actionListWithSort)

      const idColumnHeader = getByText('ID')
      fireEvent.click(idColumnHeader)
      expect(onSort.mock.calls.length).toBe(1)

      onSort.mockClear()
    })

    test('Does not call onSort if canSort property is false', () => {
      const { getByText } = renderWithTheme(actionListWithSort)

      const nameColumnHeader = getByText('Name')
      fireEvent.click(nameColumnHeader)
      expect(onSort.mock.calls.length).toBe(0)

      onSort.mockClear()
    })
  })

  describe('Selecting', () => {
    const onSelect = jest.fn()
    const actionListWithSelect = (
      <ActionList columns={columns} canSelect onSelect={onSelect}>
        {items}
      </ActionList>
    )
    test('Checkboxes present when canSelect is true', () => {
      const { getByRole } = renderWithTheme(actionListWithSelect)
      const checkbox = getByRole('checkbox')
      fireEvent.click(checkbox)
    })
  })
})
