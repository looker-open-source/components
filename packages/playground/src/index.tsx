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

import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Confirm, ComponentsProvider } from '@looker/components'

const App: React.FC = () => {
  return (
    <ComponentsProvider>
      <Confirm
        title="The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."
        message="The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."
        onConfirm={(close) => {
          alert('You did something')
          close()
        }}
      >
        {(open) => <Button onClick={open}>Do Something</Button>}
      </Confirm>
      <Confirm
        confirmLabel="Delete"
        buttonColor="danger"
        title="The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."
        message="The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."
        onConfirm={(close) => {
          alert('You deleted something')
          close()
        }}
      >
        {(open) => (
          <Button color="danger" onClick={open}>
            Delete
          </Button>
        )}
      </Confirm>
    </ComponentsProvider>
  )
}

/*
  This is the binding site for the playground. If you want to edit the
  primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
