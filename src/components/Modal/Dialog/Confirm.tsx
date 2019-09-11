import * as React from 'react'
import { useToggle } from '../../../hooks'
import { ConfirmationDialog, ConfirmationProps } from './ConfirmationDialog'

export interface ConfirmProps extends ConfirmationProps {
  /**
   * Render prop is passed the confirmation opener
   */
  children: (open: () => void) => React.ReactNode
}

export function useConfirm(
  props: ConfirmationProps
): [React.ReactNode, () => void] {
  const { value, setOn, setOff } = useToggle()

  const rendered = (
    <ConfirmationDialog {...props} isOpen={value} close={setOff} />
  )

  return [rendered, setOn]
}

export const Confirm: React.FC<ConfirmProps> = ({ children, ...props }) => {
  const [confirmation, confirm] = useConfirm(props)

  return (
    <>
      {children(confirm)}
      {confirmation}
    </>
  )
}
