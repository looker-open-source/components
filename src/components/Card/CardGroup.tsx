import * as React from 'react'
const classNames = require('classnames')
import * as styles from './CardGroup.scss'

export interface CardGroupProps {
  gap?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl'
  className?: string
}

interface PropertyBag {
  [key: string]: any
}

/** Utility component that lays `Cards` out on a grid */
export const CardGroup: React.SFC<CardGroupProps> = ({ className, gap, ...args }) => {
  const gapSize = gap ? gap : 'l'

  const styleableProps: PropertyBag = {
    [styles.gapXs]: gapSize === 'xs',
    [styles.gapS]: gapSize === 's',
    [styles.gapM]: gapSize === 'm',
    [styles.gapL]: gapSize === 'l',
    [styles.gapXl]: gapSize === 'xl',
    [styles.gap2xl]: gapSize === '2xl',
    [styles.gap3xl]: gapSize === '3xl',
    [styles.gap4xl]: gapSize === '4xl'
  }

  return (
    <div className={classNames(styles.cardGroup, className, styleableProps)}{...args} >
      {args.children}
    </div>
  )
}
