import * as React from 'react'
import classNames from 'classnames'
import * as styles from './Heading.scss'

export interface HeadingProps {
  /** Headling tag level mapping for h1-h6 */
  level?: '1' | '2' | '3' | '4' | '5' | '6',
  /** Size mapping from type ramp */
  size?:  'd1' | 'd2' | 'd3' | '1'| '2' | '3' | '4' | '5' | '6',
  /** Font weight */
  weight?: 'light' | 'normal' | 'semi-bold' | 'bold' | 'extra-bold',
  /** Text tranform  */
  transform?: 'upper' | 'caps' | 'lower' | 'none',
  className?: string
  /** Truncate text on overflow */
  truncate?: boolean

}

type PropertyBag = {
  [key: string]: any
}

/**
Headings are used to help users understand  what a marjor section of an interface is about, for example the labeling of a page or a title of a card component.
*/

export const Heading: React.SFC<HeadingProps> = ({className, level, size, weight, transform, truncate, ...args}) => {
  const Tag = level? `h${level}` : 'h3'

  const styleableProps: PropertyBag = {
    [styles.isDisplay1]: size == 'd1',
    [styles.isDisplay2]: size == 'd2',
    [styles.isDisplay3]: size == 'd3',
    [styles.isHeading1]: size == '1',
    [styles.isHeading2]: size == '2',
    [styles.isHeading3]: size == '3',
    [styles.isHeading4]: size == '4',
    [styles.isHeading5]: size == '5',
    [styles.isHeading6]: size == '6',

    [styles.fontWeightLight]: weight == 'light',
    [styles.fontWeightNormal]: weight == 'normal',
    [styles.fontWeightSemiBold]: weight == 'semi-bold',
    [styles.fontWeightBold]: weight == 'bold',
    [styles.fontWeightExtraBold]: weight == 'extra-bold',

    [styles.transformUpper]: transform == 'upper',
    [styles.transformCaps]: transform == 'caps',
    [styles.transformLower]: transform == 'lower',
    [styles.transformNone]: transform == 'none',

    [styles.isTruncated]: !!truncate


  }

  return (
    <Tag className={classNames(styles.lensHeading, className, styleableProps)} {...args}>
      {args.children}
    </Tag>
  )
}
