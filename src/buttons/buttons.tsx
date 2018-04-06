import * as React from 'react'
import * as classNames from 'classnames'
import * as styles from './buttons.scss'
import { SFC } from 'react'

export type ButtonModes = undefined | 'modeLight' | 'modeGhost' | 'modeScary' | 'modeDisabled'
export type ButtonSizes = undefined | 'sizeExtraSmall' | 'sizeSmall' | 'sizeLarge'

export interface ButtonProps {
  mode?: ButtonModes
  size?: ButtonSizes
  className?: string
  danger?: boolean
  onClick?: (...args: any[]) => void
}

export {
  styles as buttonStyles
}

export const Button: SFC<ButtonProps> = ({children, className, onClick, size, mode}) => {
  const btnClass = classNames(styles.button, className, {
    [styles.sizeExtraSmall]: size == 'sizeExtraSmall',
    [styles.sizeSmall]: size == 'sizeSmall',
    [styles.sizeLarge]: size == 'sizeLarge',
    [styles.modeScary]: mode == 'modeScary',
    [styles.modeLight]: mode == 'modeLight',
    [styles.modeGhost]: mode == 'modeGhost',
    [styles.modeDisabled]: mode == 'modeDisabled'
  })
  return (
    <button className={btnClass} onClick={onClick} disabled={mode == 'modeDisabled'}>{children}</button>
  )
}
