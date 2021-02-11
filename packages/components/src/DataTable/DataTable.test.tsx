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
import { fireEvent, screen } from '@testing-library/react'
import { Link } from '../Link'
import { IconButton } from '../Button/IconButton'
import {
  DataTable,
  DataTableAction,
  DataTableCell,
  DataTableColumns,
  DataTableItem,
} from '.'

const columns: DataTableColumns = [
  {
    hide: true,
    id: 'calories',
    title: 'Calories',
    type: 'number',
  },
  {
    canSort: true,
    id: 'id',
    title: 'ID',
    type: 'number',
  },
  {
    id: 'name',
    title: 'Name',
    type: 'string',
  },
  {
    id: 'role',
    title: 'Role',
    type: 'string',
  },
]

const data = [
  {
    calories: 101,
    id: 1,
    name: 'Richard Garfield',
    type: 'Game Designer',
  },
  {
    calories: 102,
    id: 2,
    name: 'John Carmack',
    type: 'Programmer',
  },
  {
    calories: 103,
    id: 3,
    name: (
      <a href="https://components.looker.com/" target="_blank" rel="noreferrer">
        Gouda
      </a>
    ),
    type: 'semi-hard, artisan, brined, processed',
  },
  {
    calories: 104,
    id: 4,
    name: (
      <Link
        href="https://components.looker.com/"
        target="_blank"
        rel="noreferrer"
      >
        American
      </Link>
    ),
    type: 'semi-soft, processed',
  },
]

const bestCheeseDiv = <div>Pepper Jack</div>

const items = data.map(({ calories, id, name, type }) => {
  const availableActions = (
    <>
      <DataTableAction>View Profile</DataTableAction>
    </>
  )

  return (
    <DataTableItem key={id} id={String(id)} actions={availableActions}>
      <DataTableCell>{calories}</DataTableCell>
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
      <DataTableCell>{type}</DataTableCell>
    </DataTableItem>
  )
})

const itemsActionPrimary = data.map(({ calories, id, name, type }) => {
  const actionPrimary = (
    <IconButton
      icon="Trash"
      label="Trash It"
      onClick={() => alert('Trash it')}
    />
  )

  return (
    <DataTableItem key={id} id={String(id)} actionPrimary={actionPrimary}>
      <DataTableCell>{calories}</DataTableCell>
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
      <DataTableCell>{type}</DataTableCell>
    </DataTableItem>
  )
})

const itemsActionsPrimaryAction = data.map(({ calories, id, name, type }) => {
  const availableActions = (
    <>
      <DataTableAction>View Profile</DataTableAction>
      <DataTableAction>edit Profile</DataTableAction>
      <DataTableAction>comment Profile</DataTableAction>
    </>
  )

  const ActionPrimary = (
    <IconButton
      icon="Trash"
      label="Trash It"
      onClick={() => alert('Trash it')}
    />
  )

  return (
    <DataTableItem
      key={id}
      id={String(id)}
      actions={availableActions}
      actionPrimary={ActionPrimary}
    >
      <DataTableCell>{calories}</DataTableCell>
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
      <DataTableCell>{type}</DataTableCell>
    </DataTableItem>
  )
})

const dataTableWithGeneratedHeader = (
  <DataTable caption="this is a table's caption" columns={columns}>
    {items}
  </DataTable>
)

const handleActionClick = jest.fn()
const handleListItemClick = jest.fn()
const clickableItems = data.map(({ calories, id, name, type }) => {
  const availableActions = (
    <>
      <DataTableAction onClick={handleActionClick}>
        View Profile
      </DataTableAction>
    </>
  )

  return (
    <DataTableItem
      id={String(id)}
      key={id}
      actions={availableActions}
      actionsTooltip="My Actions Button"
      onClick={handleListItemClick}
    >
      <DataTableCell>{calories}</DataTableCell>
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
      <DataTableCell>{type}</DataTableCell>
    </DataTableItem>
  )
})

const dataTableWithClickableRows = (
  <DataTable caption="this is a table's caption" columns={columns}>
    {clickableItems}
  </DataTable>
)

const onSelect = jest.fn()
const onSelectAll = jest.fn()
const defaultSelectConfig = {
  onSelect,
  onSelectAll,
  pageItems: ['1', '2'],
  selectedItems: [],
}

describe('DataTable', () => {
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
    onSelect.mockClear()
    onSelectAll.mockClear()
  })

  describe('General Layout', () => {
    test('Renders a generated header and list item', () => {
      renderWithTheme(dataTableWithGeneratedHeader)

      expect(screen.getByText('ID')).toBeInTheDocument()
      expect(screen.getByText('Name')).toBeInTheDocument()
      expect(screen.getByText('Role')).toBeInTheDocument()

      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('Richard Garfield')).toBeInTheDocument()
      expect(screen.getByText('Game Designer')).toBeInTheDocument()
    })

    test('Renders action menu on button click and handles action click', () => {
      renderWithTheme(dataTableWithClickableRows)

      const listItemId = screen.getByText('1')

      fireEvent(
        listItemId,
        new MouseEvent('mouseenter', {
          bubbles: true,
          cancelable: true,
        })
      )

      const listItemButton = screen.getAllByText('My Actions Button')[0]
      expect(screen.queryByText('View Profile')).not.toBeInTheDocument()

      fireEvent.click(listItemButton)
      const viewProfileAction = screen.getByText('View Profile')
      expect(viewProfileAction).toBeInTheDocument()

      expect(handleActionClick.mock.calls.length).toBe(0)
      fireEvent.click(viewProfileAction)
      expect(handleActionClick.mock.calls.length).toBe(1)

      expect(screen.queryByText('View Profile')).not.toBeInTheDocument()
    })

    test('Handles item click', () => {
      renderWithTheme(dataTableWithClickableRows)

      const dataTableDataTableCell = screen.getByText('1')

      expect(handleListItemClick).toHaveBeenCalledTimes(0)
      fireEvent.click(dataTableDataTableCell)
      expect(handleListItemClick).toHaveBeenCalledTimes(1)
    })

    xtest('Item has pointer cursor and shadow when hovering over DataTableItem', () => {
      /**
       * mouseEnter events off of the fireEvent jest-dom function do not (currently)
       * trigger hover styles (i.e. hover pseudo classes) on DataTableItems, which makes
       * writing this particularly challenging at the moment.
       */
    })
  })

  describe('Selecting', () => {
    const dataTableWithSelect = (
      <DataTable
        caption="this is a table's caption"
        columns={columns}
        select={defaultSelectConfig}
      >
        {items}
      </DataTable>
    )

    const dataTableWithSelectedItems = (
      <DataTable
        caption="this is a table's caption"
        columns={columns}
        select={{
          ...defaultSelectConfig,
          selectedItems: ['1'],
        }}
      >
        {items}
      </DataTable>
    )

    test('Checkbox click calls onSelect', () => {
      renderWithTheme(dataTableWithSelect)
      fireEvent.click(screen.getAllByRole('checkbox')[1])
      expect(onSelect).toHaveBeenCalled()
    })

    test('selectedItems determines if a checkbox is checked', () => {
      renderWithTheme(dataTableWithSelectedItems)
      const checkbox = screen.getAllByRole('checkbox')[1]
      expect(checkbox as HTMLInputElement).toBeChecked()
    })

    test('selectedItems not selected if clicked on a anchor', () => {
      renderWithTheme(dataTableWithSelect)

      const Anchor = screen.getByText('Gouda')

      expect(Anchor).toBeInTheDocument()

      fireEvent.click(Anchor)

      const checkbox = screen.getAllByRole('checkbox')[3]
      expect(checkbox as HTMLInputElement).not.toBeChecked()
    })

    test('selectedItems not selected if clicked on a link', () => {
      renderWithTheme(dataTableWithSelect)

      const link = screen.getByText('American')

      expect(link).toBeInTheDocument()

      fireEvent.click(link)

      const checkbox = screen.getAllByRole('checkbox')[4]
      expect(checkbox as HTMLInputElement).not.toBeChecked()
    })
  })

  describe('Selecting All', () => {
    const dataTableWithNoItemsSelected = (
      <DataTable
        caption="this is a table's caption"
        columns={columns}
        select={defaultSelectConfig}
      >
        {items}
      </DataTable>
    )

    const dataTableWithSomeItemsSelected = (
      <DataTable
        caption="this is a table's caption"
        columns={columns}
        select={{
          ...defaultSelectConfig,
          selectedItems: ['2'],
        }}
      >
        {items}
      </DataTable>
    )

    const dataTableWithAllItemsSelected = (
      <DataTable
        caption="this is a table's caption"
        columns={columns}
        select={{
          ...defaultSelectConfig,
          selectedItems: ['1', '2'],
        }}
      >
        {items}
      </DataTable>
    )

    afterEach(() => {
      onSelect.mockClear()
      onSelectAll.mockClear()
    })

    test('Renders header checkbox that triggers onSelectAll on click when select prop receives a valid object', () => {
      renderWithTheme(dataTableWithNoItemsSelected)
      const headerCheckbox = screen.getAllByRole('checkbox')[0]
      fireEvent.click(headerCheckbox)
      expect(onSelectAll).toHaveBeenCalledTimes(1)
    })

    test('Header checkbox is unchecked when selectedItems includes no row ids', () => {
      renderWithTheme(dataTableWithNoItemsSelected)
      const headerCheckbox = screen.getAllByRole(
        'checkbox'
      )[0] as HTMLInputElement
      expect(headerCheckbox).not.toBeChecked()
    })

    test('Header checkbox is mixed when selectedItems includes some row ids', () => {
      renderWithTheme(dataTableWithSomeItemsSelected)
      screen.getByTitle('Check Mark Mixed')
    })

    test('Header checkbox is mixed when selectedItems includes all row ids', () => {
      renderWithTheme(dataTableWithAllItemsSelected)
      const headerCheckbox = screen.getAllByRole(
        'checkbox'
      )[0] as HTMLInputElement
      expect(headerCheckbox).toBeChecked()
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
        <DataTableAction onClick={onBulkActionClick}>
          My Bulk Action
        </DataTableAction>
      ),
      onTotalClearAll,
      onTotalSelectAll,
      pageCount: 2,
      totalCount: 4,
    }

    test('Control bar is visible when bulk prop is provided and selectedItems prop has length > 0', () => {
      renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          bulk={bulk}
          select={{ ...defaultSelectConfig, selectedItems: ['1'] }}
        >
          {items}
        </DataTable>
      )

      screen.getByText('Bulk Actions')
      screen.getByText('1 of 2 displayed items selected')
      screen.getByText('Select all 4 results')
    })

    test('Control bar is not visible when bulk prop is not provided', () => {
      renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          select={{ ...defaultSelectConfig, selectedItems: ['1'] }}
        >
          {items}
        </DataTable>
      )

      expect(screen.queryByText('Bulk Actions')).not.toBeInTheDocument()
    })

    test('Control bar is not visible when selectedItems.length < 0', () => {
      renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          bulk={bulk}
          select={{ ...defaultSelectConfig, selectedItems: [] }}
        >
          {items}
        </DataTable>
      )

      expect(screen.queryByText('Bulk Actions')).not.toBeInTheDocument()
    })

    test('Clicking the "Bulk Actions" button reveals elements passed via bulk prop', () => {
      renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          bulk={bulk}
          select={{ ...defaultSelectConfig, selectedItems: ['1'] }}
        >
          {items}
        </DataTable>
      )

      expect(screen.queryByText('My Bulk Action')).not.toBeInTheDocument()
      fireEvent.click(screen.getByText('Bulk Actions'))
      const bulkAction = screen.getByText('My Bulk Action')

      expect(onBulkActionClick).toHaveBeenCalledTimes(0)
      fireEvent.click(bulkAction)
      expect(onBulkActionClick).toHaveBeenCalledTimes(1)

      expect(screen.queryByText('My Bulk Action')).not.toBeInTheDocument()
    })

    test('Pressing "Select all X Results" button triggers onTotalSelectAll', () => {
      renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          bulk={bulk}
          select={{ ...defaultSelectConfig, selectedItems: ['1'] }}
        >
          {items}
        </DataTable>
      )

      expect(onTotalSelectAll).toHaveBeenCalledTimes(0)
      fireEvent.click(screen.getByText('Select all 4 results'))
      expect(onTotalSelectAll).toHaveBeenCalledTimes(1)
    })

    test('Pressing "Clear Selection" button triggers onTotalClearAll', () => {
      renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          bulk={bulk}
          select={{
            ...defaultSelectConfig,
            selectedItems: ['1', '2', '3', '4'],
          }}
        >
          {items}
        </DataTable>
      )

      expect(onTotalClearAll).toHaveBeenCalledTimes(0)
      fireEvent.click(screen.getByText('Clear Selection'))
      expect(onTotalClearAll).toHaveBeenCalledTimes(1)
    })
  })

  describe('Actions', () => {
    const dataTableWithActions = (
      <DataTable
        caption="this is a table's caption"
        columns={columns}
        select={defaultSelectConfig}
      >
        {items}
      </DataTable>
    )

    const dataTableWithPrimaryAction = (
      <DataTable
        caption="this is a table's caption"
        columns={columns}
        select={defaultSelectConfig}
      >
        {itemsActionPrimary}
      </DataTable>
    )

    const dataTableWithActionPrimaryAction = (
      <DataTable
        caption="this is a table's caption"
        columns={columns}
        select={defaultSelectConfig}
      >
        {itemsActionsPrimaryAction}
      </DataTable>
    )

    test('Displays Icon for Actions and PrimaryAction', () => {
      renderWithTheme(dataTableWithActionPrimaryAction)

      expect(screen.getAllByText('Trash It')[0]).toBeInTheDocument()
      expect(
        screen.getAllByText('Trash It')[0].closest('button')
      ).toBeInTheDocument()

      expect(screen.getAllByText('Options')[0]).toBeInTheDocument()
      expect(
        screen.getAllByText('Options')[0].closest('button')
      ).toBeInTheDocument()
    })

    test('Displays Icon for Actions', () => {
      renderWithTheme(dataTableWithActions)
      expect(screen.getAllByText('Options')[0]).toBeInTheDocument()
      expect(
        screen.getAllByText('Options')[0].closest('button')
      ).toBeInTheDocument()
    })

    test('Displays Icon for PrimaryAction', () => {
      renderWithTheme(dataTableWithPrimaryAction)
      expect(screen.getAllByText('Trash It')[0]).toBeInTheDocument()
      expect(
        screen.getAllByText('Trash It')[0].closest('button')
      ).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    const columns: DataTableColumns = [
      {
        id: 'calories',
        title: 'Calories',
        type: 'number',
      },
      {
        canSort: true,
        id: 'id',
        title: 'ID',
        type: 'number',
      },
      {
        canSort: true,
        id: 'name',
        sortDirection: 'asc',
        title: 'Name',
        type: 'string',
      },
      {
        canSort: true,
        id: 'role',
        sortDirection: 'desc',
        title: 'Role',
        type: 'string',
      },
    ]
    test('Table has aria-label', () => {
      renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          select={defaultSelectConfig}
        >
          {items}
        </DataTable>
      )
      expect(screen.getByRole('table')).toHaveAttribute(
        'aria-label',
        "this is a table's caption"
      )
    })

    test('Table has role=rowheader for first column elements', () => {
      renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          select={defaultSelectConfig}
        >
          {items}
        </DataTable>
      )
      const calories1 = screen.getByText('101')
      const id1 = screen.getByText('1')
      const calories2 = screen.getByText('102')
      const id2 = screen.getByText('2')
      expect(calories1).toHaveAttribute('role', 'rowheader')
      expect(id1).not.toHaveAttribute('role', 'rowheader')
      expect(calories2).toHaveAttribute('role', 'rowheader')
      expect(id2).not.toHaveAttribute('role', 'rowheader')
    })

    test('Table has aria-sort', () => {
      renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          select={defaultSelectConfig}
        >
          {items}
        </DataTable>
      )
      const idTH = screen.getByText('ID').closest('th')
      const nameTH = screen.getByText('Name').closest('th')
      const roleTH = screen.getByText('Role').closest('th')

      expect(idTH).toHaveAttribute('aria-sort', 'none')
      expect(nameTH).toHaveAttribute('aria-sort', 'ascending')
      expect(roleTH).toHaveAttribute('aria-sort', 'descending')
    })
  })

  describe('Sorting', () => {
    const onSort = jest.fn()
    const dataTableWithSort = (
      <DataTable
        caption="this is a table's caption"
        columns={columns}
        onSort={onSort}
      >
        {items}
      </DataTable>
    )

    afterEach(() => {
      onSort.mockClear()
    })

    test('Calls onSort if canSort property is true', () => {
      renderWithTheme(dataTableWithSort)

      const idColumnHeader = screen.getByText('ID')
      fireEvent.click(idColumnHeader)
      expect(onSort.mock.calls.length).toBe(1)
    })

    test('Does not call onSort if canSort property is false', () => {
      renderWithTheme(dataTableWithSort)

      const nameColumnHeader = screen.getByText('Name')
      fireEvent.click(nameColumnHeader)
      expect(onSort.mock.calls.length).toBe(0)
    })
  })

  test('Does not render children if state="loading"', () => {
    renderWithTheme(
      <DataTable
        caption="this is a table's caption"
        columns={[]}
        state="loading"
      >
        {bestCheeseDiv}
      </DataTable>
    )
    expect(screen.queryByText('Pepper Jack')).not.toBeInTheDocument()
  })

  test('Does not render children if state="noResults"', () => {
    renderWithTheme(
      <DataTable
        caption="this is a table's caption"
        columns={[]}
        state="noResults"
      >
        {bestCheeseDiv}
      </DataTable>
    )
    expect(screen.queryByText('Pepper Jack')).not.toBeInTheDocument()
  })

  test('Renders custom no results message when noResultsDisplay prop has a value', () => {
    renderWithTheme(
      <DataTable
        caption="this is a table's caption"
        columns={[]}
        state="noResults"
        noResultsDisplay={'Cheddar'}
      >
        {bestCheeseDiv}
      </DataTable>
    )
    expect(screen.getByText('Cheddar')).toBeInTheDocument()
  })

  test('Hides column is hide prop is true', () => {
    renderWithTheme(dataTableWithGeneratedHeader)
    expect(screen.queryByText('Calories')).not.toBeInTheDocument()
  })
})
