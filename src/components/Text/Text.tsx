import * as React from 'react'
import classNames from 'classnames'
import * as styles from './Text.scss'

export interface TextProps {
  // Semantic mapping for a text elements
  element?: 'p' | 'span' | 'code' | undefined,
  // Size is mapped from type ramp in https://www.figma.com/file/E7RbrrXwL1ZdL5Nyq4j8s2Oh/Typography?node-id=55%3A7
  size?:  'd1' | 'd2' | 'd3' | '1'| '2' | '3' | '4' | '5' | '6' | undefined,
  /*
  * @ignore
  */
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined,
  mode?:  'secondary' | 'subdued' | 'positive' | 'critical' | undefined,
  weight?: 'light' | 'normal' | 'semi-bold' | 'bold' | 'extra-bold' | undefined,
  transform?: 'upper' | 'caps' | 'lower' | 'none' | undefined,
  truncate?: boolean,
  className?: undefined
}

type PropertyBag = {
  [key: string]: any
}

/**
Text.
*/

export const Text: React.SFC<TextProps> = ({className, ...args}) => {
  const Tag = args.element? args.element : 'p'

  const styleableProps: PropertyBag = {
    [styles.isDisplay1]: args.size == 'd1',
    [styles.isDisplay2]: args.size == 'd2',
    [styles.isDisplay3]: args.size == 'd3',
    [styles.isHeading1]: args.size == '1',
    [styles.isHeading2]: args.size == '2',
    [styles.isHeading3]: args.size == '3',
    [styles.isHeading4]: args.size == '4',
    [styles.isHeading5]: args.size == '5',
    [styles.isHeading6]: args.size == '6',

    [styles.fontWeightLight]:     args.weight == 'light',
    [styles.fontWeightNormal]:    args.weight == 'normal',
    [styles.fontWeightSemiBold]:  args.weight == 'semi-bold',
    [styles.fontWeightBold]:      args.weight == 'bold',
    [styles.fontWeightExtraBold]: args.weight == 'extra-bold',

    [styles.transformUpper]:  args.transform == 'upper',
    [styles.transformCaps]:   args.transform == 'caps',
    [styles.transformLower]:  args.transform == 'lower',
    [styles.transformNone]:   args.transform == 'none',

    [styles.isSecondary]:   args.mode == 'secondary',
    [styles.isSubdued]:     args.mode == 'subdued',
    [styles.isCritical]:    args.mode == 'critical',
    [styles.isPositive]:    args.mode == 'positive',

    [styles.isCode]: args.element == 'code',

    [styles.isTruncated]: !!args.truncate

  }

  return (
    <Tag className={classNames(styles.lensText, className, styleableProps)} {...args}>
      {args.children}
    </Tag>
  )
}
