import * as React from 'react'
import * as classNames from 'classnames'
import * as styles from './buttons.scss'
import { SFC } from 'react'
import { capitalize } from '../../utils/strings'

export interface LookerButtonHTMLAttributes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any
  mode?: string | undefined
  size?: string | undefined
  danger?: boolean
}

export {
  styles as buttonStyles
}

type PropertyBag = {
  [key: string]: any
}

export const Button: SFC<LookerButtonHTMLAttributes> = ({className, size, mode, ...args}) => {
  const styleableProps: PropertyBag = {}
  if (size) styleableProps[(styles as PropertyBag)[`size${capitalize(size)}`]] = true
  if (mode) styleableProps[(styles as PropertyBag)[`mode${capitalize(mode)}`]] = true
  if (args.disabled) styleableProps['modeDisabled'] = true

  return (
    <button className={classNames(styles.button, className, styleableProps)} {...args}>{args.children}</button>
  )
}
