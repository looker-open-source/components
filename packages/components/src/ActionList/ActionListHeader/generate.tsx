import React from 'react'
import { ActionListColumns } from '../ActionList'
import { ActionListHeaderColumn } from './ActionListHeaderColumn'
import { ActionListHeader } from './ActionListHeader'

export const generateActionListHeaderColumns = (columns: ActionListColumns) =>
  columns.map(({ children, id }) => (
    <ActionListHeaderColumn key={id} id={id}>
      {children}
    </ActionListHeaderColumn>
  ))

export const generateActionListHeader = (columns: ActionListColumns) => (
  <ActionListHeader>
    {generateActionListHeaderColumns(columns)}
  </ActionListHeader>
)
