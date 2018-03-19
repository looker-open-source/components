import * as React from 'react'
import * as classNames from 'classnames'
import * as styles from './buttons.scss'
import { SFC } from "react";

interface ButtonProps {
  className?: string
  danger?: boolean
  onClick?: (...args: any[]) => void
}

export const Button: SFC<ButtonProps> = ({children, className, danger, onClick}) => {
  const btnClass = classNames(styles.btn, className, {[styles.btnDanger]: danger})
  return (
    <button className={btnClass} onClick={onClick}>{children}</button>
  )
}

export const LinkButton: SFC<ButtonProps> = ({children, className, danger, onClick}) => {
  const cName = classNames(styles.btn, className, {[styles.btnDanger]: danger})
  return (
    <a className={cName} onClick={onClick}>{children}</a>
  )
}

