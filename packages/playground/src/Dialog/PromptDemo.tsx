import React, { FC } from 'react'
import { Button, Prompt, usePrompt } from '@looker/components'

export const PromptDemo: FC = () => {
  return (
    <Prompt
      buttonColor="primary"
      cancelColor="neutral"
      cancelLabel={'Not into cheese'}
      title={'Choose a cheese!'}
      inputLabel={'Name of Cheese'}
      saveLabel={'Save'}
      onSave={(value: string) => alert(`You chose ${value}`)}
      secondary={
        <Button onClick={() => alert('Secondary clicked')}>
          Secondary Cheese
        </Button>
      }
    >
      {(open) => (
        <Button color="secondary" onClick={open}>
          Prompt
        </Button>
      )}
    </Prompt>
  )
}

export const usePromptDemo = () => {
  const [modal, openModal] = usePrompt({
    inputLabel: 'Name of Cheese',
    onSave: (value: string) => alert(`You chose ${value}`),
    saveLabel: 'Save',
    title: 'Choose a cheese!',
  })

  return (
    <>
      {modal}
      <Button onClick={openModal}>usePrompt</Button>
    </>
  )
}
