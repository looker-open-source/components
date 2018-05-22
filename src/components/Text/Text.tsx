import * as React from 'react'
import classNames from 'classnames'
import * as styles from './Text.scss'

export interface TextProps {
  // Semantic mapping for a text elements
  element?: 'p' | 'span' | 'code'
  // Size is mapped from type ramp in https://www.figma.com/file/E7RbrrXwL1ZdL5Nyq4j8s2Oh/Typography?node-id=55%3A7
  size?:  'd1' | 'd2' | 'd3' | '1'| '2' | '3' | '4' | '5' | '6',
  mode?:  'secondary' | 'subdued' | 'positive' | 'critical'
  weight?: 'light' | 'normal' | 'semi-bold' | 'bold' | 'extra-bold'
  transform?: 'upper' | 'caps' | 'lower' | 'none'
  truncate?: boolean,
  className?: undefined
}

type PropertyBag = {
  [key: string]: any
}

/**
Text.
*/

export const Text: React.SFC<TextProps> = ({className, element, size, mode, weight, transform, truncate, ...args}) => {
  const Tag = element? element : 'p'

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

    [styles.fontWeightLight]:     weight == 'light',
    [styles.fontWeightNormal]:    weight == 'normal',
    [styles.fontWeightSemiBold]:  weight == 'semi-bold',
    [styles.fontWeightBold]:      weight == 'bold',
    [styles.fontWeightExtraBold]: weight == 'extra-bold',

    [styles.transformUpper]:  transform == 'upper',
    [styles.transformCaps]:   transform == 'caps',
    [styles.transformLower]:  transform == 'lower',
    [styles.transformNone]:   transform == 'none',

    [styles.isSecondary]:   mode == 'secondary',
    [styles.isSubdued]:     mode == 'subdued',
    [styles.isCritical]:    mode == 'critical',
    [styles.isPositive]:    mode == 'positive',

    [styles.isCode]: element == 'code',

    [styles.isTruncated]: !!truncate

  }

  return (
    <Tag className={classNames(styles.lensText, className, styleableProps)} {...args}>
      {args.children}
    </Tag>
  )
}
