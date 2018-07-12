import * as React from 'react'
const classNames = require('classnames')
import { Link } from '../Link/Link'
import * as styles from './Card.scss'

export interface CardProps {
  raised?: boolean
  url?: string
  className?: string
}

interface PropertyBag {
  [key: string]: any
}

function linkOrChildren(url: string | undefined, children: React.ReactNode) {
  if (url) {
    return (
      <Link href={url} className="card-link">
        {children}
      </Link>
    )
  }
  return children
}

/** Cards provide scannable organized groups of content that is limited to one concept or thought per a card. */
export const Card: React.SFC<CardProps> = ({
  className,
  raised,
  url,
  ...args
}) => {
  const styleableProps: PropertyBag = {
    [styles.isRaised]: !!raised
  }

  return (
    <div
      className={classNames(styles.card, className, styleableProps)}
      {...args}
    >
      {linkOrChildren(url, args.children)}
    </div>
  )
}
