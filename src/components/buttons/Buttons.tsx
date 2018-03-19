import * as React from 'react'
import * as classNames from 'classnames'
import * as styles from './buttons.scss'

interface ButtonProps {
  className?: string
  danger?: boolean
  onClick?: (...args: any[]) => void
}

export const Button: React.StatelessComponent<ButtonProps> = ({children, className, danger, onClick}) => {
  const btnClass = classNames(
    styles.btn,
    className,
    {
      [styles.btnDanger]: danger
    })

  return <button className={btnClass} onClick={onClick ? onClick : () => {}}>{children}</button>
}

