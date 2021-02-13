/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { ComponentsProvider, SpaceVertical, Heading } from '@looker/components'
import {
  ThemeCustomizations,
  pickSpecifiableColors,
} from '@looker/design-tokens'
import { ThemeEditorForm } from '@looker/components-theme-editor'
import React, { FC, useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Examples } from './Examples'

export interface EditorProps {
  name?: string
  themeCustomizations?: ThemeCustomizations
}

export const Editor: FC<EditorProps> = ({ name, themeCustomizations }) => {
  const theme = useContext(ThemeContext)
  const colors = { ...theme.colors, ...themeCustomizations?.colors }
  const fonts = { ...theme.fonts, ...themeCustomizations?.fontFamilies }

  const [custom, setCustom] = useState<ThemeCustomizations>({
    colors: pickSpecifiableColors(colors),
    fontFamilies: { ...fonts },
  })

  return (
    <SpaceVertical>
      <Heading>{name}</Heading>
      <ThemeEditorForm onChange={setCustom} theme={custom} />
      <ComponentsProvider globalStyle={false} themeCustomizations={custom}>
        <Examples />
      </ComponentsProvider>
    </SpaceVertical>
  )
}
