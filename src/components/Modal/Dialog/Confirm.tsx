import * as React from 'react'
import { useToggle } from '../../../hooks'
import { ConfirmationDialog, ConfirmationProps } from './ConfirmationDialog'

export interface ConfirmProps extends ConfirmationProps {
  /**
   * Render prop is passed the confirmation opener
   */
  children: (open: () => void) => React.ReactNode
}

export const Confirm: React.FC<ConfirmProps> = ({ children, ...props }) => {
  const { value, setOn, setOff } = useToggle()

  return (
    <>
      {children(setOn)}
      <ConfirmationDialog isOpen={value} close={setOff} {...props} />
    </>
  )
}
