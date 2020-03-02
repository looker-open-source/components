/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import React, { FC } from 'react'
import {
  ActionList,
  ActionListColumns,
  ActionListItem,
  ActionListItemColumn,
  ActionListItemAction,
  ActionListItemActions,
  ActionListRowContainer,
  ActionListRowOptionsContainer,
  ActionListHeader,
  ActionListHeaderColumn,
} from '../../../components/src/ActionList'

const data = [
  {
    groupName: 'GLoogker',
    id: 1,
    members: 131,
    roles: 'Engineering',
  },
  {
    groupName: 'FaceLook',
    id: 2,
    members: 180,
    roles: 'Legal',
  },
  { groupName: 'Lookersoft', id: 3, members: 96, roles: 'Human Resources' },
  {
    groupName: 'NetfLooks',
    id: 4,
    members: 43,
    roles: 'Business Development',
  },
  {
    groupName: 'Apple (but Looker)',
    id: 5,
    members: 46,
    roles: 'Services',
  },
]

const columns: ActionListColumns = [
  {
    children: data.map(datum => datum.id),
    id: 'id',
    primaryKey: true,
    type: 'number',
    widthPercent: 10,
  },
  {
    children: data.map(datum => datum.groupName),
    id: 'groupName',
    type: 'string',
    widthPercent: 30,
  },
  {
    children: data.map(datum => datum.roles),
    id: 'roles',
    type: 'string',
    widthPercent: 30,
  },
  {
    children: data.map(datum => datum.members),
    id: 'members',
    type: 'number',
    widthPercent: 30,
  },
]

export const ActionListDemo: FC = () => {
  return (
    <ActionList columns={columns}>
      <ActionListHeader>
        <ActionListRowContainer>
          <ActionListHeaderColumn>ID</ActionListHeaderColumn>
          <ActionListHeaderColumn>Group Name</ActionListHeaderColumn>
          <ActionListHeaderColumn>Roles</ActionListHeaderColumn>
          <ActionListHeaderColumn>Members</ActionListHeaderColumn>
        </ActionListRowContainer>
        <ActionListRowOptionsContainer />
      </ActionListHeader>
      {data.map(({ id, groupName, roles, members }) => (
        <ActionListItem key={id} onClick={() => alert(`Row clicked`)}>
          <ActionListRowContainer>
            <ActionListItemColumn>{id}</ActionListItemColumn>
            <ActionListItemColumn>
              <div>{groupName}</div>
              <a href="https://google.com">Website</a>
            </ActionListItemColumn>
            <ActionListItemColumn>{roles}</ActionListItemColumn>
            <ActionListItemColumn>{members}</ActionListItemColumn>
          </ActionListRowContainer>
          <ActionListRowOptionsContainer>
            <ActionListItemActions>
              <ActionListItemAction
                icon="Group"
                onClick={() => alert('Edited!')}
              >
                Edit
              </ActionListItemAction>
              <ActionListItemAction
                icon="Edit"
                onClick={() => alert('Renamed!')}
              >
                Rename
              </ActionListItemAction>
              <ActionListItemAction
                icon="CircleRemove"
                onClick={() => alert('Removed!')}
              >
                Remove
              </ActionListItemAction>
            </ActionListItemActions>
          </ActionListRowOptionsContainer>
        </ActionListItem>
      ))}
    </ActionList>
  )
}
