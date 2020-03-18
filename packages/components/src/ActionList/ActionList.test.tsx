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
    children: 'ID',
    id: 'id',
    primaryKey: true,
    type: 'number',
    widthPercent: 10,
  },
  {
    children: 'Name',
    id: 'name',
    type: 'string',
    widthPercent: 45,
  },
  {
    children: 'Role',
    id: 'role',
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
    <ActionListItem key={id} actions={availableActions}>
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

describe('<ActionList /> : General Layout', () => {
  let rafSpy: jest.SpyInstance<number, [FrameRequestCallback]>

  beforeEach(() => {
    rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => cb())
  })

  afterEach(() => {
    rafSpy.mockRestore()
  })

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

    fireEvent.click(listItemButton)
    expect(queryByText('View Profile')).not.toBeInTheDocument()
  })
})

describe('<ActionList /> : Sorting', () => {
  let rafSpy: jest.SpyInstance<number, [FrameRequestCallback]>

  beforeEach(() => {
    rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => cb())
  })

  afterEach(() => {
    rafSpy.mockRestore()
  })

  // const TestSortableActionList = () => {
  //   const [testData, setTestData] = useState(data)
  //   const [testColumns, setTestColumns] = useState(columns)

  //   return createSortableActionList(
  //     testData,
  //     setTestData,
  //     testColumns,
  //     setTestColumns
  //   )
  // }

  // test('Preserves all list items on header click', () => {
  //   const { getByText } = renderWithTheme(
  //     <ActionList columns={columns}>{items}</ActionList>
  //   )
  // })
})
