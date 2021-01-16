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

import React, { FC, createContext } from 'react'
import { useDelayedState, UseDelayedStateReturn } from '../utils'

const submenuContext: UseDelayedStateReturn<string> = {
  change: () => undefined,
  delayChange: () => undefined,
  value: '',
  waitChange: () => undefined,
}

export const SubmenuContext = createContext(submenuContext)

// Stores the id for the current submenu to prevent them
// from competing with each other (e.g. from hover vs arrow key)
export const SubmenuProvider: FC = ({ children }) => {
  const submenuProps = useDelayedState<string>('')
  return (
    <SubmenuContext.Provider value={submenuProps}>
      {children}
    </SubmenuContext.Provider>
  )
}
