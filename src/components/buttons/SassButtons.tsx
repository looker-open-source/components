import * as React from 'react'
import * as classNames from 'classnames'
import './buttons.scss'

interface ButtonProps {
  className?: string
  danger?: boolean
  onClick?: (...args: any[]) => void
}

const Button: React.StatelessComponent<ButtonProps> = ({children, className, danger, onClick}) => {
  const btnClass = classNames('btn', className, {
    'btn-danger': danger
  })
  return <button className={btnClass} onClick={onClick ? onClick : () => {}}>{children}</button>
}

export default Button
