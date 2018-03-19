import * as React from 'react'
import * as classNames from 'classnames'
import * as styles from './buttons.scss'
import { SFC } from 'react'

interface ButtonProps {
  className?: string
  danger?: boolean
  onClick?: (...args: any[]) => void
}

export const Button: SFC<ButtonProps> = ({children, className, danger, onClick}) => {
  const btnClass = classNames(styles.lensBtn, className, {[styles.lensBtnDanger]: danger})
  return (
    <button className={btnClass} onClick={onClick}>{children}</button>
  )
}

export const LinkButton: SFC<ButtonProps> = ({children, className, danger, onClick}) => {
  const cName = classNames(styles.lensBtn, className, {[styles.lensBtnDanger]: danger})
  return (
    <a className={cName} onClick={onClick}>{children}</a>
  )
}

