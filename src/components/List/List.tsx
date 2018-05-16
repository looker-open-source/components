import * as React from 'react'
import classNames from 'classnames'
import * as styles from './List.scss'

export interface ListProps {
  type?: 'bullet' | 'number' | undefined,
  className?: string | undefined
}

type PropertyBag = {
  [key: string]: any
}

/**

*/

export const List: React.SFC<ListProps> = ({className, type,...args}) => {
  const styleableProps: PropertyBag = {
    [styles.lensList]: className == 'lens-list',
  }

  let Tag = undefined
  switch (type) {
    case 'bullet':
      Tag = 'ul'
      break
    case 'number':
      Tag = 'ol'
      break
    default:
      Tag = 'ul'
  }

  return (
    <Tag  className={classNames(styles.lensList, className, styleableProps)} {...args}>
      {args.children}
    </Tag>
  )
}
