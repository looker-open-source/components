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
    id: 1,
    name: 'Richard Garfield',
    type: 'Game Designer',
  },
  {
    id: 2,
    name: 'John Carmack',
    type: 'Programmer',
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
    <ActionListItem key={id} id={String(id)} actions={availableActions}>
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
      id={String(id)}
      key={id}
      actions={availableActions}
      actionsTooltip="My Actions Button"
      onClick={handleListItemClick}
    >
      <ActionListItemColumn>{id}</ActionListItemColumn>
      <ActionListItemColumn>{name}</ActionListItemColumn>
      <ActionListItemColumn>{type}</ActionListItemColumn>
    </ActionListItem>
  )
})
const actionListWithClickableRows = (
  <ActionList columns={columns}>{clickableItems}</ActionList>
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
    handleActionClick.mockClear()
    handleListItemClick.mockClear()
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

    test('Renders action menu on button click and handles action click', () => {
      const { getByText, queryByText } = renderWithTheme(
        actionListWithClickableRows
      )

      const listItemId = getByText('1')

      fireEvent(
        listItemId,
        new MouseEvent('mouseenter', {
          bubbles: true,
          cancelable: true,
        })
      )

      const listItemButton = getByText('My Actions Button')
      expect(queryByText('View Profile')).not.toBeInTheDocument()

      fireEvent.click(listItemButton)
      const viewProfileAction = getByText('View Profile')
      expect(viewProfileAction).toBeInTheDocument()

      expect(handleActionClick.mock.calls.length).toBe(0)
      fireEvent.click(viewProfileAction)
      expect(handleActionClick.mock.calls.length).toBe(1)

      expect(queryByText('View Profile')).not.toBeInTheDocument()
    })

    test('Handles item click', () => {
      const { getByText } = renderWithTheme(actionListWithClickableRows)

      const actionListItemColumn = getByText('1')

      expect(handleListItemClick).toHaveBeenCalledTimes(0)
      fireEvent.click(actionListItemColumn)
      expect(handleListItemClick).toHaveBeenCalledTimes(1)
    })

    xtest('Item has pointer cursor and shadow when hovering over ActionListItem', () => {
      /**
       * mouseEnter events off of the fireEvent jest-dom function do not (currently)
       * trigger hover styles (i.e. hover pseudo classes) on ActionListItems, which makes
       * writing this particularly challenging at the moment.
       */
    })
  })

  describe('Sorting', () => {
    const onSort = jest.fn()
    const actionListWithSort = (
      <ActionList columns={columns} onSort={onSort}>
        {items}
      </ActionList>
    )

    afterEach(() => {
      onSort.mockClear()
    })

    test('Calls onSort if canSort property is true', () => {
      const { getByText } = renderWithTheme(actionListWithSort)

      const idColumnHeader = getByText('ID')
      fireEvent.click(idColumnHeader)
      expect(onSort.mock.calls.length).toBe(1)
    })

    test('Does not call onSort if canSort property is false', () => {
      const { getByText } = renderWithTheme(actionListWithSort)

      const nameColumnHeader = getByText('Name')
      fireEvent.click(nameColumnHeader)
      expect(onSort.mock.calls.length).toBe(0)
    })
  })

  describe('Selecting', () => {
    const onSelect = jest.fn()
    const onSelectAll = jest.fn()
    const actionListWithSelect = (
      <ActionList
        columns={columns}
        select={{
          itemsSelected: [],
          itemsVisible: ['1', '2'],
          onSelect,
          onSelectAll,
        }}
      >
        {items}
      </ActionList>
    )
    const actionListWithOnClickRowSelect = (
      <ActionList
        columns={columns}
        select={{
          itemsSelected: [],
          itemsVisible: ['1', '2'],
          onClickRowSelect: true,
          onSelect,
          onSelectAll,
        }}
      >
        {items}
      </ActionList>
    )
    const actionListWithItemsSelected = (
      <ActionList
        columns={columns}
        select={{
          itemsSelected: ['1'],
          itemsVisible: ['1', '2'],
          onSelect,
          onSelectAll,
        }}
      >
        {items}
      </ActionList>
    )
    afterEach(() => {
      onSelect.mockClear()
    })

    test('Checkbox click calls onSelect', () => {
      const { getAllByRole } = renderWithTheme(actionListWithSelect)
      fireEvent.click(getAllByRole('checkbox')[1])
      expect(onSelect).toHaveBeenCalledTimes(1)
    })

    test('Row click calls onSelect when onClickRowSelect is true', () => {
      const { getByText } = renderWithTheme(actionListWithOnClickRowSelect)
      const nameCell = getByText('Richard Garfield')
      fireEvent.click(nameCell)
      expect(onSelect).toHaveBeenCalledTimes(1)
    })

    test('itemsSelected determines if a checkbox is checked', () => {
      const { getAllByRole } = renderWithTheme(actionListWithItemsSelected)
      const checkbox = getAllByRole('checkbox')[1]
      expect((checkbox as HTMLInputElement).checked).toEqual(true)
    })
  })

  // TODO
  describe('Selecting All', () => {
    const onSelect = jest.fn()
    const onSelectAll = jest.fn()
    const props = {
      canSelect: true,
      canSelectAll: true,
      columns,
      onSelect,
      onSelectAll,
    }

    const actionListWithSelectAll = <ActionList {...props}>{items}</ActionList>

    const actionListWithNoItemsSelected = (
      <ActionList {...props} itemsSelected={[]}>
        {items}
      </ActionList>
    )

    const actionListWithSomeItemsSelected = (
      <ActionList {...props} itemsSelected={['1']}>
        {items}
      </ActionList>
    )

    const actionListWithAllItemsSelected = (
      <ActionList {...props} itemsSelected={['1', '2']}>
        {items}
      </ActionList>
    )

    test('Renders header checkbox that triggers onSelectAll on click when canSelect and canSelectAll are true', () => {
      const { getAllByRole } = renderWithTheme(actionListWithSelectAll)

      const headerCheckbox = getAllByRole('checkbox')[0]
      fireEvent.click(headerCheckbox)
      expect(onSelectAll).toHaveBeenCalledTimes(1)
    })

    test('Header checkbox is unchecked when itemsSelected includes no row ids', () => {
      const { getAllByRole } = renderWithTheme(actionListWithNoItemsSelected)
      const headerCheckbox = getAllByRole('checkbox')[0] as HTMLInputElement
      expect(headerCheckbox.checked).toEqual(false)
    })

    test('Header checkbox is mixed when itemsSelected includes some row ids', () => {
      const { getByTitle } = renderWithTheme(actionListWithSomeItemsSelected)
      getByTitle('Check Mark Mixed')
    })

    test('Header checkbox is mixed when itemsSelected includes all row ids', () => {
      const { getAllByRole } = renderWithTheme(actionListWithAllItemsSelected)
      const headerCheckbox = getAllByRole('checkbox')[0] as HTMLInputElement
      expect(headerCheckbox.checked).toEqual(true)
    })
  })

  describe('Control Bar', () => {
    const onBulkActionClick = jest.fn()
    const onTotalClearAll = jest.fn()
    const onTotalSelectAll = jest.fn()

    afterEach(() => {
      onBulkActionClick.mockClear()
      onTotalClearAll.mockClear()
      onTotalSelectAll.mockClear()
    })

    const bulk = {
      actions: (
        <ActionListItemAction onClick={onBulkActionClick}>
          My Bulk Action
        </ActionListItemAction>
      ),
      onTotalClearAll,
      onTotalSelectAll,
      pageCount: 2,
      totalCount: 4,
    }

    test('Control bar is visible when bulk prop is provided and itemsSelected prop has length >0', () => {
      const { getByText } = renderWithTheme(
        <ActionList columns={columns} bulk={bulk} itemsSelected={['1']}>
          {items}
        </ActionList>
      )

      getByText('Bulk Actions')
      getByText('1 of 2 displayed items selected')
      getByText('Select all 4 results')
    })

    test('Control bar is not visible when bulk prop is not provided', () => {
      const { queryByText } = renderWithTheme(
        <ActionList columns={columns} itemsSelected={['1']}>
          {items}
        </ActionList>
      )

      expect(queryByText('Bulk Actions')).not.toBeInTheDocument()
    })

    test('Control bar is not visible when itemsSelected.length < 0', () => {
      const { queryByText } = renderWithTheme(
        <ActionList columns={columns} bulk={bulk} itemsSelected={[]}>
          {items}
        </ActionList>
      )

      expect(queryByText('Bulk Actions')).not.toBeInTheDocument()
    })

    test('Pressing "Select all X Results" button triggers onTotalSelectAll', () => {
      const { getByText } = renderWithTheme(
        <ActionList columns={columns} bulk={bulk} itemsSelected={['1']}>
          {items}
        </ActionList>
      )

      expect(onTotalSelectAll).toHaveBeenCalledTimes(0)
      fireEvent.click(getByText('Select all 4 results'))
      expect(onTotalSelectAll).toHaveBeenCalledTimes(1)
    })

    test('Pressing "Clear Selection" button triggers onTotalClearAll', () => {
      const { getByText } = renderWithTheme(
        <ActionList
          columns={columns}
          bulk={bulk}
          itemsSelected={['1', '2', '3', '4']}
        >
          {items}
        </ActionList>
      )

      expect(onTotalClearAll).toHaveBeenCalledTimes(0)
      fireEvent.click(getByText('Clear Selection'))
      expect(onTotalClearAll).toHaveBeenCalledTimes(1)
    })
  })
})
