import * as React from 'react'
import classNames from 'classnames'
import * as styles from './Icon.scss'
import {
  external,
  favorite,
  gear,
} from '../../icons/IconList'

export const ICON_BUNDLE = {
  external,
  favorite,
  gear
}


export type IconSource = keyof typeof ICON_BUNDLE

export interface IconProps {
  name: IconSource,
  accessibilityLabel?: string | undefined
  color?: string | undefined
  className?: string | undefined
}


type PropertyBag = {
  [key: string]: any
}

/**

*/

export const Icon: React.SFC<IconProps> = ({className, name,accessibilityLabel,...args}) => {
  const styleableProps: PropertyBag = {

  }

  let icon = ICON_BUNDLE[name]

  return (
    <span className={classNames(styles.lensIcon, className, styleableProps)} {...args} dangerouslySetInnerHTML={{__html: icon}} aria-label={accessibilityLabel}></span>
  )
}
