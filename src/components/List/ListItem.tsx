import * as React from 'react'
import classNames from 'classnames'
import * as styles from './ListItem.scss'

export interface ListItemProps {
  className?: string | undefined
}

type PropertyBag = {
  [key: string]: any
}

/**

*/

export const ListItem: React.SFC<ListItemProps> = ({className, ...args}) => {
  const styleableProps: PropertyBag = {
    [styles.lensListItem]: className == 'lens-list-item',
  }

  return (
    <li  className={classNames(styles.lensListItem, className, styleableProps)} {...args}>
      {args.children}
    </li>
  )
}
