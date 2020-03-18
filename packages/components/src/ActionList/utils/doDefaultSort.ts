import { ActionListColumns } from '../ActionList'

export const stringComparator = (stringA: string, stringB: string) => {
  const upperCasedStringA = stringA.toUpperCase()
  const upperCasedStringB = stringB.toUpperCase()

  if (upperCasedStringA < upperCasedStringB) return -1
  if (upperCasedStringA > upperCasedStringB) return 1
  return 0
}

export const doDefaultSort = (
  data: Record<string, string | number>[],
  columns: ActionListColumns,
  id: string,
  sortDirection: 'asc' | 'desc'
) => {
  const sortedData = [...data]
  const updatedColumns = [...columns]
  const targetColumn = updatedColumns.find(column => column.id === id)

  // The default sort behavior only allows for one column to appear sorted at a time
  // Using delete operator to clean out all sortDirection properties in our columns array
  columns.forEach(column => delete column.sortDirection)
  if (targetColumn) {
    if (targetColumn.type === 'number') {
      if (sortDirection === 'desc') {
        sortedData.sort((a, b) => (b[id] as number) - (a[id] as number))
      } else {
        sortedData.sort((a, b) => (a[id] as number) - (b[id] as number))
      }
    } else if (targetColumn.type === 'string') {
      if (sortDirection === 'desc') {
        sortedData.sort((a, b) =>
          stringComparator(b[id] as string, a[id] as string)
        )
      } else {
        sortedData.sort((a, b) =>
          stringComparator(a[id] as string, b[id] as string)
        )
      }
    }
    targetColumn.sortDirection = sortDirection
  }

  return {
    columns: updatedColumns,
    data: sortedData,
  }
}
