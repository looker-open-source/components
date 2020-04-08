import React, { FC, ReactNode } from 'react'
import { PromptDialog, PromptDialogProps } from './PromptDialog'
import { DialogManager } from '.'

export interface PromptProps extends PromptDialogProps {
  children: (onClick: () => void) => ReactNode
}

export const Prompt: FC<PromptProps> = ({ children, ...props }) => (
  <DialogManager width="30rem" content={<PromptDialog {...props} />}>
    {children}
  </DialogManager>
)
