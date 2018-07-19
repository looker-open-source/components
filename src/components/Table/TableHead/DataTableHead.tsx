import * as React from 'react'
const classNames = require('classnames')
import * as styles from './DataTableHead.scss'

export interface DataTableHeadProps {
  className?: string | undefined
}

interface PropertyBag {
  [key: string]: any
}

/**
 * Defines the table header for a `<Table />`
 */
export const DataTableHead: React.SFC<DataTableHeadProps> = ({
  className,
  ...args
}) => {
  const styleableProps: PropertyBag = {}

  return (
    <thead
      className={classNames(
        styles.lensDataTableHead,
        className,
        styleableProps
      )}
      {...args}
    >
      {args.children}
    </thead>
  )
}
