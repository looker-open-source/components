// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
// End Typescript component boilerplate
const classNames = require('classnames')
import * as styles from './ListItem.scss'

export interface ListItemProps {
  className?: string | undefined
}

interface PropertyBag {
  [key: string]: any
}

/**
 * Renders a `<li>` tag inside a `<List>`
 */

export const ListItem: React.SFC<ListItemProps> = ({ className, ...args }) => {
  const styleableProps: PropertyBag = {
    [styles.lensListItem]: className === 'lens-list-item'
  }

  return (
    <li
      className={classNames(styles.lensListItem, className, styleableProps)}
      {...args}
    >
      {args.children}
    </li>
  )
}
