import * as React from 'react'
const classNames = require('classnames')
import * as styles from './Card.scss'
import { Link } from '../Link/Link'

export interface CardProps {
  raised?: boolean,
  url?: string,
  className?: string
}


type PropertyBag = {
  [key: string]: any
}
/** Cards provide scannable organized groups of content that is limited to one concept or thought per a card. */
export const Card: React.SFC<CardProps> = ({className, raised,url, ...args}) => {

  const cardURL = (url != undefined && url.length > 0) ? url : false

  const styleableProps: PropertyBag = {
    [styles.isRaised]: !!raised
  }

  return (
    <div className={classNames(styles.card, className, styleableProps,)} {...args} >
      {cardURL ?
        <Link href={cardURL} className="card-link">{args.children}</Link>
        :
        args.children
      }

    </div>
  )
}

