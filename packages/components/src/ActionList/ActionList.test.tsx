import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import {
  ActionList,
  ActionListHeader,
  ActionListHeaderColumn,
  ActionListItem,
  ActionListItemColumn,
  ActionListItemActions,
  ActionListItemAction,
  ActionListRowContainer,
  ActionListRowOptionsContainer,
  ActionListColumns,
} from '.'

const columns: ActionListColumns = [
  {
    children: 'test',
    id: 'id',
    primaryKey: true,
    type: 'number',
    widthPercent: 10,
  },
  {
    children: 'test',
    id: 'name',
    type: 'string',
    widthPercent: 45,
  },
  {
    children: 'test',
    id: 'role',
    type: 'string',
    widthPercent: 45,
  },
]

const actionListWithoutClickHandlers = (
  <ActionList columns={columns}>
    <ActionListHeader>
      <ActionListRowContainer>
        <ActionListHeaderColumn>ID</ActionListHeaderColumn>
        <ActionListHeaderColumn>Name</ActionListHeaderColumn>
        <ActionListHeaderColumn>Role</ActionListHeaderColumn>
      </ActionListRowContainer>
      <ActionListRowOptionsContainer />
    </ActionListHeader>
    <ActionListItem>
      <ActionListRowContainer>
        <ActionListItemColumn>1</ActionListItemColumn>
        <ActionListItemColumn>Richard Garfield</ActionListItemColumn>
        <ActionListItemColumn>Game Designer</ActionListItemColumn>
      </ActionListRowContainer>
      <ActionListRowOptionsContainer>
        <ActionListItemActions>
          <ActionListItemAction icon="Group">Some Action</ActionListItemAction>
        </ActionListItemActions>
      </ActionListRowOptionsContainer>
    </ActionListItem>
  </ActionList>
)

describe('<ActionList />: General Layout', () => {
  test('Renders a header row and a list item row', () => {
    const { getByText } = renderWithTheme(actionListWithoutClickHandlers)

    const idHeaderColumn = getByText('ID')
    expect(idHeaderColumn).toBeInTheDocument()

    const nameHeaderColumn = getByText('Name')
    expect(nameHeaderColumn).toBeInTheDocument()

    const roleHeaderColumn = getByText('Role')
    expect(roleHeaderColumn).toBeInTheDocument()

    const idListItemColumn = getByText('1')
    expect(idListItemColumn).toBeInTheDocument()

    const nameListItemColumn = getByText('Richard Garfield')
    expect(nameListItemColumn).toBeInTheDocument()

    const roleListItemColumn = getByText('Game Designer')
    expect(roleListItemColumn).toBeInTheDocument()
  })

  test('Shows and hides Actions menu on button click', () => {
    const { getByRole, getByText, queryByText } = renderWithTheme(
      <ActionList columns={columns}>
        <ActionListHeader>
          <ActionListRowContainer>
            <ActionListHeaderColumn>ID</ActionListHeaderColumn>
            <ActionListHeaderColumn>Name</ActionListHeaderColumn>
            <ActionListHeaderColumn>Role</ActionListHeaderColumn>
          </ActionListRowContainer>
          <ActionListRowOptionsContainer />
        </ActionListHeader>
        <ActionListItem>
          <ActionListRowContainer>
            <ActionListItemColumn>1</ActionListItemColumn>
            <ActionListItemColumn>Richard Garfield</ActionListItemColumn>
            <ActionListItemColumn>Game Designer</ActionListItemColumn>
          </ActionListRowContainer>
          <ActionListRowOptionsContainer>
            <ActionListItemActions>
              <ActionListItemAction icon="Group">
                Some Action
              </ActionListItemAction>
            </ActionListItemActions>
          </ActionListRowOptionsContainer>
        </ActionListItem>
      </ActionList>
    )

    const listItemButton = getByRole('button')

    expect(queryByText('Some Action')).not.toBeInTheDocument()

    fireEvent.click(listItemButton)

    expect(getByText('Some Action')).toBeInTheDocument()

    fireEvent.click(listItemButton)

    expect(queryByText('Some Action')).not.toBeInTheDocument()
  })

  test('Handles click on row and handles click on Action', () => {
    const handleListItemClick = jest.fn()
    const handleActionClick = jest.fn()

    const { getByText, getByRole } = renderWithTheme(
      <ActionList columns={columns}>
        <ActionListHeader>
          <ActionListRowContainer>
            <ActionListHeaderColumn>ID</ActionListHeaderColumn>
            <ActionListHeaderColumn>Name</ActionListHeaderColumn>
            <ActionListHeaderColumn>Role</ActionListHeaderColumn>
          </ActionListRowContainer>
          <ActionListRowOptionsContainer />
        </ActionListHeader>
        <ActionListItem onClick={handleListItemClick}>
          <ActionListRowContainer>
            <ActionListItemColumn>1</ActionListItemColumn>
            <ActionListItemColumn>Richard Garfield</ActionListItemColumn>
            <ActionListItemColumn>Game Designer</ActionListItemColumn>
          </ActionListRowContainer>
          <ActionListRowOptionsContainer>
            <ActionListItemActions>
              <ActionListItemAction icon="Group" onClick={handleActionClick}>
                Some Action
              </ActionListItemAction>
            </ActionListItemActions>
          </ActionListRowOptionsContainer>
        </ActionListItem>
      </ActionList>
    )

    const nameListItemColumn = getByText('Richard Garfield')

    expect(handleListItemClick.mock.calls.length).toBe(0)
    fireEvent.click(nameListItemColumn)
    expect(handleListItemClick.mock.calls.length).toBe(1)

    const listItemButton = getByRole('button')
    fireEvent.click(listItemButton)
    expect(handleListItemClick.mock.calls.length).toBe(1)

    expect(handleActionClick.mock.calls.length).toBe(0)
    fireEvent.click(getByText('Some Action'))
    expect(handleActionClick.mock.calls.length).toBe(1)
  })
})
