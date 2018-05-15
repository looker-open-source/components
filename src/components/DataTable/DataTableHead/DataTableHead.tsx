import * as React from 'react'
import classNames from 'classnames'
import * as styles from './DataTableHead.scss'

export interface DataTableHeadProps {
  className?: string | undefined
}

type PropertyBag = {
  [key: string]: any
}

/**

*/

export const DataTableHead: React.SFC<DataTableHeadProps> = ({className, ...args}) => {
  const styleableProps: PropertyBag = {

  }

  return (
    <thead className={classNames(styles.lensDataTableHead, className, styleableProps)} {...args}>
      {args.children}
    </thead>
  )
}
