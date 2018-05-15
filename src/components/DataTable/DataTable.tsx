import * as React from 'react'
import classNames from 'classnames'
import * as styles from './DataTable.scss'

export interface DataTableProps {
  className?: string | undefined
}

type PropertyBag = {
  [key: string]: any
}

/**

*/

export const DataTable: React.SFC<DataTableProps> = ({className, ...args}) => {
  const styleableProps: PropertyBag = {

  }

  return (
    <table className={classNames(styles.lensDataTable, className, styleableProps)} {...args}>
      {args.children}
    </table>
  )
}
