import * as React from 'react'
import classNames from 'classnames'
import * as styles from './Heading.scss'

export interface HeadingProps {
  // Semantic mapping for h1-h6
  level?: '1' | '2' | '3' | '4' | '5' | '6' | undefined,
  // Size is mapped from type ramp in https://www.figma.com/file/E7RbrrXwL1ZdL5Nyq4j8s2Oh/Typography?node-id=55%3A7
  size?:  'd1' | 'd2' | 'd3' | '1'| '2' | '3' | '4' | '5' | '6' | undefined,
  weight?: 'light' | 'normal' | 'semi-bold' | 'bold' | 'extra-bold' | undefined,
  transform?: 'upper' | 'caps' | 'lower' | 'none' | undefined,
  className: undefined
}

type PropertyBag = {
  [key: string]: any
}

/**
Headings are used as the titles of each major section of a page in the interface.
*/

export const Heading: React.SFC<HeadingProps> = ({className, level, size, weight, transform, ...args}) => {
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
  }

  return (
    <Tag className={classNames(styles.lensHeading, className, styleableProps)}>
      {args.children}
    </Tag>
  )
}

