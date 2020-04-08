import React, { FC, ReactNode } from 'react'
import { useToggle } from '../../utils'
import { PromptDialog, PromptBaseProps } from './PromptDialog'

export interface PromptProps extends PromptBaseProps {
  children: (onClick: () => void) => ReactNode
}

export function usePrompt(props: PromptBaseProps): [ReactNode, () => void] {
  const { value, setOn, setOff } = useToggle()

  const rendered = <PromptDialog {...props} isOpen={value} close={setOff} />

  return [rendered, setOn]
}

export const Prompt: FC<PromptProps> = ({ children, ...props }) => {
  const [promptModal, prompt] = usePrompt(props)

  return (
    <>
      {children(prompt)}
      {promptModal}
    </>
  )
}
