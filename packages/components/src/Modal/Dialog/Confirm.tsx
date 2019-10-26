import React, { FC, ReactNode } from 'react'
import { useToggle } from '../../utils/useToggle'
import { ConfirmationDialog, ConfirmationProps } from './ConfirmationDialog'

export interface ConfirmProps extends ConfirmationProps {
  /**
   * Render prop is passed the confirmation opener
   */
  children: (open: () => void) => ReactNode
}

export function useConfirm(props: ConfirmationProps): [ReactNode, () => void] {
  const { value, setOn, setOff } = useToggle()

  const rendered = (
    <ConfirmationDialog {...props} isOpen={value} close={setOff} />
  )

  return [rendered, setOn]
}

export const Confirm: FC<ConfirmProps> = ({ children, ...props }) => {
  const [confirmation, confirm] = useConfirm(props)

  return (
    <>
      {children(confirm)}
      {confirmation}
    </>
  )
}
