import * as React from 'react'
const classNames = require('classnames')
import * as styles from './DataTableBody.scss'

export interface DataTableBodyProps {
  align?: 'top' | 'middle' | 'bottom' | undefined
  textAlign?: 'left' | 'center' | 'right' | undefined
  className?: string | undefined
}

type PropertyBag = {
  [key: string]: any
}

/**

*/

export const DataTableBody: React.SFC<DataTableBodyProps> = ({className, align, textAlign, ...args}) => {
  const styleableProps: PropertyBag = {
    [styles.alignMiddle]: align == 'middle',
    [styles.alignBottom]: align == 'bottom',
    [styles.textAlignLeft]: textAlign == 'left',
    [styles.textAlignRight]: textAlign == 'right',
    [styles.textAlignCenter]: textAlign == 'center'


  }

  return (
    <tbody className={classNames(styles.lensDataTableBody, className, styleableProps)} {...args}>
      {args.children}
    </tbody>
  )
}
