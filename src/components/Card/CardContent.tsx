import * as React from 'react'
import classNames from 'classnames'
import * as styles from './CardContent.scss'

export interface CardContentProps {
  className?: undefined
}


type PropertyBag = {
  [key: string]: any
}

export const CardContent: React.SFC<CardContentProps> = ({className,  ...args}) => {

  const styleableProps: PropertyBag = {

  }


  return (
    <div className={classNames(styles.cardContent, className, styleableProps,)} {...args} > {args.children} </div>
  )
}

