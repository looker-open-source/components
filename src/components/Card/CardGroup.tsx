import * as React from 'react'
import classNames from 'classnames'
import * as styles from './CardGroup.scss'


export interface CardGroupProps {
  direction?: boolean,
  className?: undefined
}


type PropertyBag = {
  [key: string]: any
}

export const CardGroup: React.SFC<CardGroupProps> = ({className, ...args}) => {

  const styleableProps: PropertyBag = {

  }

  return (
    <div className={classNames(styles.cardGroup, className, styleableProps,)} {...args} >

    </div>
  )
}

