/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import React from 'react'
import ReactDOM from 'react-dom'
import { AvatarIcon, AvatarUser, GlobalStyle } from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const goodData = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  avatar_url:
    'https://gravatar.lookercdn.com/avatar/e8ebbdf1a644117215036eac62995731?s=156&d=blank',
  // eslint-disable-next-line @typescript-eslint/camelcase
  first_name: 'Luke',
  id: 61,
  // eslint-disable-next-line @typescript-eslint/camelcase
  last_name: 'Bowerman',
}

const bedData = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  avatar_url:
    'https://gravatar.lookercdn.com/avatar/e8ebbdf1a64411721503995731?s=156&d=blank',
  // eslint-disable-next-line @typescript-eslint/camelcase
  first_name: 'Luke',
  id: 61,
  // eslint-disable-next-line @typescript-eslint/camelcase
  last_name: 'Bowerman',
}

const nullData = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  avatar_url: null,
  // eslint-disable-next-line @typescript-eslint/camelcase
  first_name: 'Luke',
  id: 61,
  // eslint-disable-next-line @typescript-eslint/camelcase
  last_name: 'Bowerman',
}

// want to add < m="medium" > to AvatarUser
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <AvatarUser size="small" m="medium" user={goodData} />
        <AvatarUser size="medium" m="medium" user={goodData} />
        <AvatarUser m="medium" user={goodData} />

        <AvatarUser size="small" m="medium" user={bedData} />
        <AvatarUser size="medium" m="medium" user={nullData} />
        <AvatarUser m="small" user={bedData} />

        <AvatarIcon size="small" m="medium" />
        <AvatarIcon size="medium" m="medium" />
        <AvatarIcon m="medium" />

        <AvatarIcon size="small" icon="Trash" m="medium" />
        <AvatarIcon size="medium" icon="Block" m="medium" />
        <AvatarIcon icon="ChartPie" m="medium" />
      </>
    </ThemeProvider>
  )
}
/**
 * This is the binding site for the playground. If you want to edit the
 * primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
