import * as React from 'react'
import * as styles from './Button.scss'
const classNames = require('classnames')

export interface LookerButtonHTMLAttributes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'light' | 'ghost' | 'scary' | undefined
  size?: 'xsmall' | 'small' | 'large' | undefined
  state?: 'active' | 'hover' | undefined
  disabled?: boolean
}

type PropertyBag = {
  [key: string]: any
}

/**
 * Buttons communicate what action will occur on a page when the user interacts with them. All buttons use sentence-casing (only capitalize the first letter of the first word). Copy used within a button should be unambiguous and concise, making it clear to the user what action will occur once the button is clicked.
 */
export const Button = ({className, size, mode, state, disabled, ...args}: LookerButtonHTMLAttributes) => {
  const styleableProps: PropertyBag = {
    [styles.modeScary]: mode == 'scary',
    [styles.modeGhost]: mode == 'ghost',
    [styles.modeLight]: mode == 'light',

    [styles.active]: state == 'active',
    [styles.hover]: state == 'hover',

    [styles.sizeExtraSmall]: size == 'xsmall',
    [styles.sizeSmall]: size == 'small',
    [styles.sizeLarge]: size == 'large',
    [styles.modeDisabled]: !!disabled
  }

  return (
    <button className={classNames(styles.button, className, styleableProps)} {...args}>{args.children}</button>
  )
}
