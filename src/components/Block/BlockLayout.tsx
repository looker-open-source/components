import * as React from 'react'
const classNames = require('classnames')
import * as styles from './BlockLayout.scss'

export interface BlockLayoutProps {
  /** Direction to layout the children */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  /** How to align the content inside the parent */
  align?: 'center' | 'start' | 'end' | 'baseline'
  /** How to justify the content insidne the parent */
  justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly' | 'stretch'
  /** Should the columns wrap and what direction to wrap them */
  wrap?: 'yes' | 'no' | 'reverse'
  className?: string
}

type PropertyBag = {
  [key: string]: any
}

/**
Flexbox wrapper for creating layouts using the `<Block />` component .
*/

export const BlockLayout: React.SFC<BlockLayoutProps> = ({className, direction, align, justify, wrap, ...args}) => {


  const styleableProps: PropertyBag = {
    [styles.directionRow]: direction == 'row',
    [styles.directionColumn]: direction == 'column',
    [styles.directionRowReverse]: direction == 'row-reverse',
    [styles.directionColumnReverse]: direction == 'column-reverse',

    [styles.alignCenter]: align == 'center',
    [styles.alignFlexStart]: align == 'start',
    [styles.alignFlexEnd]: align == 'end',
    [styles.alignBaseline]: align == 'baseline',

    [styles.justifyCenter]: justify == 'center',
    [styles.justifyFlexStart]: justify == 'start',
    [styles.justifyFlexEnd]: justify == 'end',
    [styles.justifySpaceBetween]: justify == 'between',
    [styles.justifySpaceAround]: justify == 'around',
    [styles.justifySpaceEvenly]: justify == 'evenly',
    [styles.justifyStretch]: justify == 'stretch',

    [styles.wrap]: wrap == 'yes',
    [styles.nowrap]: wrap == 'no',
    [styles.wrapReverse]: wrap == 'reverse'

  }

  return (
    <div className={classNames(styles.blockLayout, className, styleableProps)} {...args}>
      {args.children}
    </div>
  )
}
