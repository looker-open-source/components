import * as React from 'react'
import * as classNames from 'classnames'
import * as styles from './buttons.scss'
import { Button as SButton } from 'semantic-ui-react'

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

  return <SButton className={btnClass} onClick={onClick ? onClick : () => {}}>{children}</SButton>
}

