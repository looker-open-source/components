import { createContext } from 'react'
import { ActionListColumns } from './ActionList'

export interface ActionListContextProps {
  columns?: ActionListColumns
  doSort?: (id: string, sortDirection: 'asc' | 'desc') => void
}

export const ActionListContext = createContext<ActionListContextProps>({})
