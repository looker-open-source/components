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

import {
  ComponentsProvider,
  FieldColor,
  Fieldset,
  SpaceVertical,
} from '@looker/components'
import React, { FC, FormEvent, useState } from 'react'

interface ThemeEditorProps {
  name: string
  keyColor?: string
  backgroundColor?: string
  textColor?: string
}

export const ThemeEditor: FC<ThemeEditorProps> = ({
  children,
  name,
  keyColor,
  backgroundColor,
  textColor,
}) => {
  const [background, setBackground] = useState<string | undefined>(
    backgroundColor
  )
  const [key, setKey] = useState<string | undefined>(keyColor)
  const [text, setText] = useState<string | undefined>(textColor)

  const handleKeyChange = (event: FormEvent<HTMLInputElement>) => {
    setKey(event.currentTarget.value)
  }

  const handleBackgroundChange = (event: FormEvent<HTMLInputElement>) => {
    setBackground(event.currentTarget.value)
  }

  const handleTextChange = (event: FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value)
  }

  // const coreColors = useState<CoreColors>(theme)

  return (
    <SpaceVertical>
      <Fieldset legend={name}>
        <FieldColor
          label="Key"
          placeholder="Key Color (default #6C43E0)"
          value={key}
          onChange={handleKeyChange}
        />
        <FieldColor
          label="Background"
          placeholder="Background Color (default: #FFFFF)"
          value={background}
          onChange={handleBackgroundChange}
        />
        <FieldColor
          label="Text"
          placeholder="Text Color (default #262D33)"
          value={text}
          onChange={handleTextChange}
        />
      </Fieldset>
      <ComponentsProvider
        globalStyle={false}
        coreColors={{ background, key, text }}
      >
        {children}
      </ComponentsProvider>
    </SpaceVertical>
  )
}
