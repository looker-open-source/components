import * as React from 'react'
import classNames from 'classnames'
import * as styles from './BlockLayout.scss'

export interface BlockLayoutProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  align?: 'center' | 'start' | 'end' | 'baseline'
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'
  wrap?: 'yes' | 'no' | 'reverse'
  className?: undefined
}

type PropertyBag = {
  [key: string]: any
}

/**
Block Layout.
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
    [styles.justifySpaceBetween]: justify == 'space-between',
    [styles.justifySpaceAround]: justify == 'space-around',
    [styles.justifySpaceEvenly]: justify == 'space-evenly',
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
