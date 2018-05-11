import * as React from 'react'
import classNames from 'classnames'
import * as styles from './Card.scss'
import { Link } from '../Link/Link'

export interface CardProps {
  raised?: boolean,
  stacked? : boolean,
  url?: string,
  className?: undefined
}


type PropertyBag = {
  [key: string]: any
}

export const Card: React.SFC<CardProps> = ({className, raised, stacked, url, ...args}) => {

  const cardURL = (url != undefined && url.length > 0) ? url : false

  const styleableProps: PropertyBag = {
    [styles.isRaised]: !!raised,
    [styles.isStacked] : !!stacked
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

