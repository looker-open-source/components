import * as React from 'react'
import classNames from 'classnames'
import * as styles from './Card.scss'


export interface CardProps {
  raised?: boolean,
  stacked? : boolean,
  className?: undefined
}


type PropertyBag = {
  [key: string]: any
}

export const Card: React.SFC<CardProps> = ({className, ...args}) => {

  const styleableProps: PropertyBag = {
    [styles.isRaised]: !!args.raised,
    [styles.isStacked] : !!args.stacked
  }

  return (
    <div className={classNames(styles.card, className, styleableProps,)} {...args} >

    </div>
  )
}

