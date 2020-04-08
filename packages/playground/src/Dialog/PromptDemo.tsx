import React, { FC } from 'react'
import { Button, Prompt, usePrompt } from '@looker/components'

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

export const usePromptDemo = () => {
  const [modal, openModal] = usePrompt({
    buttonText: 'Save',
    label: 'Name of Cheese',
    onSave: (value: string) => alert(`You chose ${value}`),
    title: 'Choose a cheese!',
  })

  return (
    <>
      {modal}
      <Button onClick={openModal}>Say Cheese!</Button>
    </>
  )
}
