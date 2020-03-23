import React from 'react'
import { ActionListColumns } from '../ActionList'
import { ActionListHeaderColumn } from './ActionListHeaderColumn'
import { ActionListHeader } from './ActionListHeader'

export const generateActionListHeaderColumns = (columns: ActionListColumns) =>
  columns.map(({ id, title }) => (
    <ActionListHeaderColumn key={id} id={id}>
      {title}
    </ActionListHeaderColumn>
  ))

export const generateActionListHeader = (columns: ActionListColumns) => (
  <ActionListHeader>
    {generateActionListHeaderColumns(columns)}
  </ActionListHeader>
)
