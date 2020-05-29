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

import omit from 'lodash/omit'
import {
  createContext,
  RefObject,
  Ref,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from 'react'
import { ComboboxOptionIndicatorProps } from './ComboboxOptionIndicator'
import {
  ComboboxData,
  ComboboxMultiData,
  ComboboxTransition,
  ComboboxState,
  ComboboxMultiActionPayload,
} from './utils/state'
import {
  ComboboxCallback,
  ComboboxMultiCallback,
  ComboboxOptionObject,
} from './types'

export interface ComboboxContextProps<
  TData = ComboboxData,
  TChange = ComboboxCallback,
  TTransition = ComboboxTransition
> {
  data: TData
  inputCallbackRef?: Ref<HTMLInputElement>
  inputElement?: HTMLInputElement | null
  wrapperElement?: HTMLDivElement | null
  listRef?: RefObject<HTMLUListElement>
  onChange?: TChange
  optionsRef?: MutableRefObject<ComboboxOptionObject[]>
  state?: ComboboxState
  transition?: TTransition
  id?: string
  autoCompletePropRef?: MutableRefObject<boolean>
  persistSelectionPropRef?: MutableRefObject<boolean>
  closeOnSelectPropRef?: MutableRefObject<boolean>
  readOnlyPropRef?: MutableRefObject<boolean>
  windowedOptionsPropRef?: MutableRefObject<boolean>
  isAutoScrollingRef?: MutableRefObject<boolean>
  indicatorPropRef?: MutableRefObject<ComboboxOptionIndicatorProps['indicator']>
  isVisible?: boolean
  openOnFocus?: boolean
  listScrollPosition?: number
  setListScrollPosition?: Dispatch<SetStateAction<number>>
  listClientRect?: DOMRect
  setListClientRect?: Dispatch<SetStateAction<DOMRect | undefined>>
}

export type ComboboxMultiContextProps = ComboboxContextProps<
  ComboboxMultiData,
  ComboboxMultiCallback,
  ComboboxTransition<ComboboxMultiActionPayload>
>

export const defaultData: ComboboxData = {
  // the value the user has typed, we derived this also when the developer is
  // controlling the value of ComboboxInput
  inputValue: undefined,
  // the value the user has navigated to with the keyboard
  navigationOption: undefined,
  // the value the user has typed, we derived this also when the developer is
  // controlling the value of Combobox
  option: undefined,
}

export const defaultMultiData: ComboboxMultiData = {
  ...omit(defaultData, 'option'),
  options: [],
}

export const ComboboxContext = createContext<ComboboxContextProps>({
  data: defaultData,
})

export const ComboboxMultiContext = createContext<ComboboxMultiContextProps>({
  data: defaultMultiData,
})

// Allows us to put the option's value on context so that ComboboxOptionText
// can work it's highlight text magic no matter what else is rendered around
// it.
export const OptionContext = createContext<ComboboxOptionObject | undefined>(
  undefined
)
