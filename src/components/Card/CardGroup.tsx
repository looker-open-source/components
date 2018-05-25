import * as React from 'react'
import classNames from 'classnames'
import * as styles from './CardGroup.scss'


export interface CardGroupProps {
  columns?: '1' | '2' | '3' | '4' | '5'
  gap?: 's' | 'm' | 'l' | 'xl'
  className?: string | undefined
}


type PropertyBag = {
  [key: string]: any
}

export const CardGroup: React.SFC<CardGroupProps> = ({className, columns, gap, ...args}) => {

  const columnCount = columns? columns : '3'
  const gapSize = gap? gap : 'l'

  const styleableProps: PropertyBag = {
    [styles.gapS]: gapSize == 's',
    [styles.gapM]: gapSize == 'm',
    [styles.gapL]: gapSize == 'l',
    [styles.gapXl]: gapSize == 'xl',
  }

  return (
    <div className={classNames(styles.cardGroup, className, styleableProps,)} style={{gridTemplateColumns: `repeat(${columnCount}, 1fr)`}}{...args} >

    </div>
  )
}

