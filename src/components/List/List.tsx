import * as React from 'react'
const classNames = require('classnames')
import * as styles from './List.scss'

export interface ListProps {
  type?: 'bullet' | 'number' | 'letter'
  nomarker?: boolean
  className?: string
}

interface PropertyBag {
  [key: string]: any
}

/**
 * List are stacked groups of related content that can be useful in many contexts.
 */

export const List: React.SFC<ListProps> = ({
  className,
  type,
  nomarker,
  ...args
}) => {
  const styleableProps: PropertyBag = {
    [styles.lensList]: className === 'lens-list',
    [styles.isBullet]: type === 'bullet',
    [styles.isNumber]: type === 'number',
    [styles.isLetter]: type === 'letter',
    [styles.noMarker]: !!nomarker
  }

  let Tag
  switch (type) {
    case 'bullet':
      Tag = 'ul'
      break
    case 'number':
      Tag = 'ol'
      break
    case 'letter':
      Tag = 'ol'
      break
    default:
      Tag = 'ul'
  }

  return (
    <Tag
      className={classNames(styles.lensList, className, styleableProps)}
      {...args}
    >
      {args.children}
    </Tag>
  )
}
