import * as React from 'react'
import classNames from 'classnames'
import * as styles from './buttons.scss'
import { insertCss } from 'insert-css'

export interface LookerButtonHTMLAttributes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any
  mode?: 'light' | 'ghost' | 'scary' | undefined
  size?: 'xsmall' | 'small' | 'large' | undefined
  state?: 'active' | 'hover' | undefined,
  disabled?: boolean
}

type PropertyBag = {
  [key: string]: any
}

insertCss(styles.code)

/**
 * Buttons communicate what action will occur on a page when the user interacts with them. All buttons use sentence-casing (only capitalize the first letter of the first word). Copy used within a button should be unambiguous and concise, making it clear to the user what action will occur once the button is clicked.
 */
export const Button = ({className, size, mode, state, disabled, ...args}: LookerButtonHTMLAttributes) => {
  const styleableProps: PropertyBag = {
    [styles.classNames.active]: state == 'active',
    [styles.classNames.hover]: state == 'hover',
    [styles.classNames.modeScary]: mode == 'scary',
    [styles.classNames.modeGhost]: mode == 'ghost',
    [styles.classNames.modeLight]: mode == 'light',
    [styles.classNames.sizeExtraSmall]: size == 'xsmall',
    [styles.classNames.sizeSmall]: size == 'small',
    [styles.classNames.sizeLarge]: size == 'large',
    [styles.classNames.modeDisabled]: !!disabled
  }

  return (
    <button className={classNames(styles.classNames.button, className, styleableProps)} {...args}>{args.children}</button>
  )
}
