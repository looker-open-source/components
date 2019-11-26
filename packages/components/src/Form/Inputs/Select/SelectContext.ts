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
import { createContext, Ref, RefObject, MutableRefObject } from 'react'
import { SelectData, SelectTransition } from './state'

export interface SelectContextProps {
  data: SelectData
  inputRef?: RefObject<HTMLInputElement>
  popoverRef?: Ref<HTMLElement>
  buttonRef?: Ref<HTMLButtonElement>
  onSelect?: (value: string) => void
  optionsRef?: MutableRefObject<string[]>
  state?: string
  transition?: SelectTransition
  listboxId?: string
  autocompletePropRef?: MutableRefObject<boolean>
  persistSelectionRef?: MutableRefObject<boolean>
  isVisible?: boolean
  openOnFocus?: boolean
}

export const defaultData = {
  // the value the user has navigated to with the keyboard
  navigationValue: undefined,
  // the value the user has typed, we derived this also when the developer is
  // controlling the value of SelectInput
  value: '',
}

export const SelectContext = createContext<SelectContextProps>({
  data: defaultData,
})

// Allows us to put the option's value on context so that SelectOptionText
// can work it's highlight text magic no matter what else is rendered around
// it.
export const OptionContext = createContext<string | undefined>(undefined)
