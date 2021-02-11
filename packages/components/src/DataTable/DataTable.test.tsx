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

import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { Link } from '../Link'
import { IconButton } from '../Button/IconButton'
import { Tooltip } from '../Tooltip'
import { Status } from '../Status'
import { doDataTableSort } from './utils'
import {
  DataTable,
  DataTableAction,
  DataTableCell,
  DataTableColumns,
  DataTableItem,
} from '.'

const columns: DataTableColumns = [
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
  {
    canSort: true,
    id: 'status',
    title: 'Status',
    type: 'string',
  },
]

const data = [
  {
    id: 1,
    name: 'Richard Garfield',
    status: 'Available',
    type: 'Game Designer',
  },
  {
    id: 2,
    name: 'John Carmack',
    status: 'Out of Stock',
    type: 'Programmer',
  },
  {
    id: 3,
    name: (
      <a href="https://components.looker.com/" target="_blank" rel="noreferrer">
        Gouda
      </a>
    ),
    status: 'Low Stock',
    type: 'semi-hard, artisan, brined, processed',
  },
  {
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
    status: 'Available',
    type: 'semi-soft, processed',
  },
  {
    id: 5,
    name: 'Mozzarella',
    status: 'Available',
    type: 'fresh',
  },
]

const bestCheeseDiv = <div>Pepper Jack</div>

const items = data.map(({ id, name, status, type }) => {
  const availableActions = (
    <>
      <DataTableAction>View Profile</DataTableAction>
    </>
  )

  return (
    <DataTableItem key={id} id={String(id)} actions={availableActions}>
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
      <DataTableCell>
        <Tooltip content={status}>
          <Status
            intent={
              status === 'Out of Stock'
                ? 'critical'
                : status === 'Low Stock'
                ? 'warn'
                : 'positive'
            }
            label={status}
            size="xsmall"
          />
        </Tooltip>
      </DataTableCell>
      <DataTableCell>{type}</DataTableCell>
    </DataTableItem>
  )
})

const itemsActionPrimary = data.map(({ id, name, type }) => {
  const actionPrimary = (
    <IconButton
      icon="Trash"
      label="Trash It"
      onClick={() => alert('Trash it')}
    />
  )

  return (
    <DataTableItem key={id} id={String(id)} actionPrimary={actionPrimary}>
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
      <DataTableCell>{status}</DataTableCell>
      <DataTableCell>{type}</DataTableCell>
    </DataTableItem>
  )
})

const itemsActionsPrimaryAction = data.map(({ id, name, type }) => {
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
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
      <DataTableCell>{status}</DataTableCell>
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
const clickableItems = data.map(({ id, name, type }) => {
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
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
      <DataTableCell>{status}</DataTableCell>
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

  xdescribe('General Layout', () => {
    test('Renders a generated header and list item', () => {
      const { getByText } = renderWithTheme(dataTableWithGeneratedHeader)

      expect(getByText('ID')).toBeInTheDocument()
      expect(getByText('Name')).toBeInTheDocument()
      expect(getByText('Role')).toBeInTheDocument()

      expect(getByText('1')).toBeInTheDocument()
      expect(getByText('Richard Garfield')).toBeInTheDocument()
      expect(getByText('Game Designer')).toBeInTheDocument()
    })

    test('Renders action menu on button click and handles action click', () => {
      const { getAllByText, getByText, queryByText } = renderWithTheme(
        dataTableWithClickableRows
      )

      const listItemId = getByText('1')

      fireEvent(
        listItemId,
        new MouseEvent('mouseenter', {
          bubbles: true,
          cancelable: true,
        })
      )

      const listItemButton = getAllByText('My Actions Button')[0]
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
      const { getByText } = renderWithTheme(dataTableWithClickableRows)

      const dataTableDataTableCell = getByText('1')

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

  describe('Sorting', () => {
    // afterEach(() => {
    //   onSort.mockClear()
    // })
    const DataTableWithOnSort = () => {
      const cleanColumns = columns.map((c) => ({ ...c }))
      const [cheeseData, setCheeseData] = useState(data)
      const [cheeseColumns, setCheeseColumns] = useState(cleanColumns)
      const onSort = (id: string, sortDirection: 'asc' | 'desc') => {
        const { columns: sortedColumns, data: sortedData } = doDataTableSort(
          cheeseData,
          cheeseColumns,
          id,
          sortDirection
        )
        setCheeseData(sortedData)
        setCheeseColumns(sortedColumns)
      }
      return (
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          onSort={onSort}
        >
          {items}
        </DataTable>
      )
    }

    // test('Calls onSort if canSort property is true', () => {
    //   const { getByText } = renderWithTheme(<DataTableWithOnSort />)

    //   const idColumnHeader = getByText('ID')
    //   fireEvent.click(idColumnHeader)
    //   expect(onSort).toHaveBeenCalled()
    // })

    // test('Does not call onSort if canSort property is false', () => {
    //   const { getByText } = renderWithTheme(<DataTableWithOnSort />)

    //   const nameColumnHeader = getByText('Name')
    //   fireEvent.click(nameColumnHeader)
    //   expect(onSort).not.toHaveBeenCalled()
    // })

    test('column has OnSort ', () => {
      renderWithTheme(<DataTableWithOnSort />)
      screen.debug(screen.getByText('Status').closest('th'))
      fireEvent.click(screen.getByText('Status').closest('th'))
      fireEvent.click(screen.getByText('Status').closest('th'))

      screen.debug(screen.getByText('Status').closest('th'))
    })
  })

  xdescribe('Selecting', () => {
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
      const { getAllByRole } = renderWithTheme(dataTableWithSelect)
      fireEvent.click(getAllByRole('checkbox')[1])
      expect(onSelect).toHaveBeenCalled()
    })

    test('selectedItems determines if a checkbox is checked', () => {
      const { getAllByRole } = renderWithTheme(dataTableWithSelectedItems)
      const checkbox = getAllByRole('checkbox')[1]
      expect(checkbox as HTMLInputElement).toBeChecked()
    })

    test('selectedItems not selected if clicked on a anchor', () => {
      const { getAllByRole, getByText } = renderWithTheme(dataTableWithSelect)

      const Anchor = getByText('Gouda')

      expect(Anchor).toBeInTheDocument()

      fireEvent.click(Anchor)

      const checkbox = getAllByRole('checkbox')[3]
      expect(checkbox as HTMLInputElement).not.toBeChecked()
    })

    test('selectedItems not selected if clicked on a link', () => {
      const { getAllByRole, getByText } = renderWithTheme(dataTableWithSelect)

      const link = getByText('American')

      expect(link).toBeInTheDocument()

      fireEvent.click(link)

      const checkbox = getAllByRole('checkbox')[4]
      expect(checkbox as HTMLInputElement).not.toBeChecked()
    })
  })

  xdescribe('Selecting All', () => {
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
      const { getAllByRole } = renderWithTheme(dataTableWithNoItemsSelected)
      const headerCheckbox = getAllByRole('checkbox')[0]
      fireEvent.click(headerCheckbox)
      expect(onSelectAll).toHaveBeenCalledTimes(1)
    })

    test('Header checkbox is unchecked when selectedItems includes no row ids', () => {
      const { getAllByRole } = renderWithTheme(dataTableWithNoItemsSelected)
      const headerCheckbox = getAllByRole('checkbox')[0] as HTMLInputElement
      expect(headerCheckbox).not.toBeChecked()
    })

    test('Header checkbox is mixed when selectedItems includes some row ids', () => {
      const { getByTitle } = renderWithTheme(dataTableWithSomeItemsSelected)
      getByTitle('Check Mark Mixed')
    })

    test('Header checkbox is mixed when selectedItems includes all row ids', () => {
      const { getAllByRole } = renderWithTheme(dataTableWithAllItemsSelected)
      const headerCheckbox = getAllByRole('checkbox')[0] as HTMLInputElement
      expect(headerCheckbox).toBeChecked()
    })
  })

  xdescribe('Control Bar', () => {
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
      const { getByText } = renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          bulk={bulk}
          select={{ ...defaultSelectConfig, selectedItems: ['1'] }}
        >
          {items}
        </DataTable>
      )

      getByText('Bulk Actions')
      getByText('1 of 2 displayed items selected')
      getByText('Select all 4 results')
    })

    test('Control bar is not visible when bulk prop is not provided', () => {
      const { queryByText } = renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          select={{ ...defaultSelectConfig, selectedItems: ['1'] }}
        >
          {items}
        </DataTable>
      )

      expect(queryByText('Bulk Actions')).not.toBeInTheDocument()
    })

    test('Control bar is not visible when selectedItems.length < 0', () => {
      const { queryByText } = renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          bulk={bulk}
          select={{ ...defaultSelectConfig, selectedItems: [] }}
        >
          {items}
        </DataTable>
      )

      expect(queryByText('Bulk Actions')).not.toBeInTheDocument()
    })

    test('Clicking the "Bulk Actions" button reveals elements passed via bulk prop', () => {
      const { getByText, queryByText } = renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          bulk={bulk}
          select={{ ...defaultSelectConfig, selectedItems: ['1'] }}
        >
          {items}
        </DataTable>
      )

      expect(queryByText('My Bulk Action')).not.toBeInTheDocument()
      fireEvent.click(getByText('Bulk Actions'))
      const bulkAction = getByText('My Bulk Action')

      expect(onBulkActionClick).toHaveBeenCalledTimes(0)
      fireEvent.click(bulkAction)
      expect(onBulkActionClick).toHaveBeenCalledTimes(1)

      expect(queryByText('My Bulk Action')).not.toBeInTheDocument()
    })

    test('Pressing "Select all X Results" button triggers onTotalSelectAll', () => {
      const { getByText } = renderWithTheme(
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
      fireEvent.click(getByText('Select all 4 results'))
      expect(onTotalSelectAll).toHaveBeenCalledTimes(1)
    })

    test('Pressing "Clear Selection" button triggers onTotalClearAll', () => {
      const { getByText } = renderWithTheme(
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
      fireEvent.click(getByText('Clear Selection'))
      expect(onTotalClearAll).toHaveBeenCalledTimes(1)
    })
  })

  xdescribe('Actions', () => {
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
      const { getAllByText } = renderWithTheme(dataTableWithActionPrimaryAction)

      expect(getAllByText('Trash It')[0]).toBeInTheDocument()
      expect(getAllByText('Trash It')[0].closest('button')).toBeInTheDocument()

      expect(getAllByText('Options')[0]).toBeInTheDocument()
      expect(getAllByText('Options')[0].closest('button')).toBeInTheDocument()
    })

    test('Displays Icon for Actions', () => {
      const { getAllByText } = renderWithTheme(dataTableWithActions)
      expect(getAllByText('Options')[0]).toBeInTheDocument()
      expect(getAllByText('Options')[0].closest('button')).toBeInTheDocument()
    })

    test('Displays Icon for PrimaryAction', () => {
      const { getAllByText } = renderWithTheme(dataTableWithPrimaryAction)
      expect(getAllByText('Trash It')[0]).toBeInTheDocument()
      expect(getAllByText('Trash It')[0].closest('button')).toBeInTheDocument()
    })
  })

  xdescribe('Accessibility', () => {
    const columns: DataTableColumns = [
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
      const { getByRole } = renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          select={defaultSelectConfig}
        >
          {items}
        </DataTable>
      )
      expect(getByRole('table')).toHaveAttribute(
        'aria-label',
        "this is a table's caption"
      )
    })

    test('Table has role=rowheader for first column elements', () => {
      const { getByText } = renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          select={defaultSelectConfig}
        >
          {items}
        </DataTable>
      )
      const name1 = getByText('Richard Garfield')
      const id1 = getByText('1')
      const name2 = getByText('John Carmack')
      const id2 = getByText('2')

      expect(name1).not.toHaveAttribute('role', 'rowheader')
      expect(id1).toHaveAttribute('role', 'rowheader')
      expect(name2).not.toHaveAttribute('role', 'rowheader')
      expect(id2).toHaveAttribute('role', 'rowheader')
    })

    test('Table has aria-sort', () => {
      const { getByText } = renderWithTheme(
        <DataTable
          caption="this is a table's caption"
          columns={columns}
          select={defaultSelectConfig}
        >
          {items}
        </DataTable>
      )
      const idTH = getByText('ID').closest('th')
      const nameTH = getByText('Name').closest('th')
      const roleTH = getByText('Role').closest('th')

      expect(idTH).toHaveAttribute('aria-sort', 'none')
      expect(nameTH).toHaveAttribute('aria-sort', 'ascending')
      expect(roleTH).toHaveAttribute('aria-sort', 'descending')
    })
  })

  test('Does not render children if state="loading"', () => {
    const { queryByText } = renderWithTheme(
      <DataTable
        caption="this is a table's caption"
        columns={[]}
        state="loading"
      >
        {bestCheeseDiv}
      </DataTable>
    )
    expect(queryByText('Pepper Jack')).not.toBeInTheDocument()
  })

  test('Does not render children if state="noResults"', () => {
    const { queryByText } = renderWithTheme(
      <DataTable
        caption="this is a table's caption"
        columns={[]}
        state="noResults"
      >
        {bestCheeseDiv}
      </DataTable>
    )
    expect(queryByText('Pepper Jack')).not.toBeInTheDocument()
  })

  test('Renders custom no results message when noResultsDisplay prop has a value', () => {
    const { getByText } = renderWithTheme(
      <DataTable
        caption="this is a table's caption"
        columns={[]}
        state="noResults"
        noResultsDisplay={'Cheddar'}
      >
        {bestCheeseDiv}
      </DataTable>
    )
    expect(getByText('Cheddar')).toBeInTheDocument()
  })
})
