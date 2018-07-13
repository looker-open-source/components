import * as React from 'react'
const classNames = require('classnames')
import * as styles from './DataTable.scss'

export interface DataTableProps {
  className?: string | undefined
}

interface PropertyBag {
  [key: string]: any
}

/**
 * Used to display tabular data.
 */
export const DataTable: React.SFC<DataTableProps> = ({
  className,
  ...args
}) => {
  const styleableProps: PropertyBag = {}

  return (
    <table
      className={classNames(styles.lensDataTable, className, styleableProps)}
      {...args}
    >
      {args.children}
    </table>
  )
}
