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

import { Grid } from '@looker/components'
import React from 'react'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import type { EditorProps } from './Editor'
import { Editor } from './Editor'

export const ThemeEditor = (props: EditorProps) => <Editor {...props} />

ThemeEditor.parameters = {
  storyshots: { disable: true },
}

export const CompareThemes = () => (
  <Grid m="xlarge" gap="u5" columns={4}>
    <Editor name="Default" />
    <Editor
      name="Generated"
      themeCustomizations={{
        colors: { key: '#6C43E0' },
      }}
    />
    <Editor
      name="Customer Blue"
      themeCustomizations={{
        colors: { key: '#116DFF' },
      }}
    />
    <Editor
      name="THUNDER Salmon"
      themeCustomizations={{
        colors: { background: '#000000', key: '#ff3ca0', text: '#FFFFFF' },
      }}
    />
  </Grid>
)

CompareThemes.parameters = {
  storyshots: { disable: true },
}

export default {
  argTypes,
  title: 'Theme Editor / Theme',
}
