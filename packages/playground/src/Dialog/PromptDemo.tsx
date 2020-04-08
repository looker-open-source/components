import React, { FC } from 'react'
import { Button, Prompt } from '@looker/components'

export const PromptDemo: FC = () => {
  return (
    <Prompt
      buttonText={'Save'}
      title={'Choose a cheese!'}
      label={'Name of Cheese'}
      onSave={(value: string) => alert(`You chose ${value}`)}
    >
      {(open) => <Button onClick={open}>Cheese it</Button>}
    </Prompt>
  )
}
