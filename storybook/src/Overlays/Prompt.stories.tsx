/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import React, { FC } from 'react'
import { Button, Prompt, Space, usePrompt } from '@looker/components'

export const All = () => (
  <Space>
    <Basic />
    <Hook />
  </Space>
)

export default {
  component: All,
  title: 'Overlays/Prompt',
}

export const Basic: FC = () => {
  return (
    <Prompt
      cancelColor="neutral"
      cancelLabel={'Not into cheese'}
      title={'Choose a cheese!'}
      inputLabel={'Name of Cheese'}
      saveLabel={'Save'}
      onCancel={(close) => {
        alert('Prompt closed')
        close()
      }}
      onSave={(value: string, close: () => void) => {
        alert(`You chose ${value}`)
        close()
      }}
      secondary={
        <Button onClick={() => alert('Secondary clicked')}>
          Secondary Cheese
        </Button>
      }
    >
      {(open) => <Button onClick={open}>Prompt</Button>}
    </Prompt>
  )
}

export const Hook = () => {
  const [prompt, open] = usePrompt({
    inputLabel: 'Name of Cheese',
    onSave: (value: string) => alert(`You chose ${value}`),
    saveLabel: 'Save',
    title: 'Choose a cheese!',
  })

  return (
    <>
      {prompt}
      <Button onClick={open}>usePrompt</Button>
    </>
  )
}
