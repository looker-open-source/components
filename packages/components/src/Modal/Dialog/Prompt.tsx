import React, { FC, ReactNode } from 'react'
import { useToggle } from '../../utils'
import { PromptDialog, PromptDialogProps } from './PromptDialog'
import { Dialog, DialogManager } from '.'

export interface PromptProps extends PromptDialogProps {
  children: (onClick: () => void) => ReactNode
}

export function usePrompt(props: PromptDialogProps): [ReactNode, () => void] {
  // Needs to return two things
  // 1. The actual modal
  // 2. A way to open the modal (closing the modal can be taken care of within PromptDialog)
  const { value, setOn, setOff } = useToggle()

  const rendered = (
    <Dialog width="30rem" isOpen={value} onClose={setOff}>
      <PromptDialog {...props} />
    </Dialog>
  )

  return [rendered, setOn]
}

export const Prompt: FC<PromptProps> = ({ children, ...props }) => (
  <DialogManager width="30rem" content={<PromptDialog {...props} />}>
    {children}
  </DialogManager>
)
