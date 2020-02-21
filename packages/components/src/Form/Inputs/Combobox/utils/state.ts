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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import { Reducer, useReducer, useState } from 'react'
import { ComboboxOptionObject } from '../ComboboxOption'
import { getComboboxText } from './getComboboxText'

export enum ComboboxState {
  // Nothing going on, waiting for the user to type or use the arrow keys
  IDLE = 'IDLE',

  // The component is suggesting options as the user types
  SUGGESTING = 'SUGGESTING',

  // The user is using the keyboard to navigate the list, not typing
  NAVIGATING = 'NAVIGATING',

  // The user is interacting with arbitrary elements inside the popup that
  // are not ComboboxInputs
  INTERACTING = 'INTERACTING',
}

export enum ComboboxActionType {
  // User cleared the value w/ backspace, but input still has focus
  CLEAR = 'CLEAR',

  // User is typing
  CHANGE = 'CHANGE',

  // Used for the setting the initial value
  CHANGE_SILENT = 'CHANGE_SILENT',

  // Used for ComboboxMultiInput when the InputChips registered entered values (comma, enter)
  CHANGE_VALUES = 'CHANGE_VALUES',

  // User is navigating w/ the keyboard
  NAVIGATE = 'NAVIGATE',

  // User can be navigating with keyboard and then click instead, we want the
  // value from the click, not the current nav item
  SELECT_WITH_KEYBOARD = 'SELECT_WITH_KEYBOARD',
  SELECT_WITH_CLICK = 'SELECT_WITH_CLICK',

  // Used for the setting the initial option
  SELECT_SILENT = 'SELECT_SILENT',

  // Pretty self-explanatory, user can hit escape or blur to close the popover
  ESCAPE = 'ESCAPE',
  BLUR = 'BLUR',

  // The user left the input to interact with arbitrary elements inside the popup
  INTERACT = 'INTERACT',

  FOCUS = 'FOCUS',
}

export interface ComboboxData {
  inputValue?: string
  option?: ComboboxOptionObject
  navigationOption?: ComboboxOptionObject
  lastActionType?: ComboboxActionType
}

export interface ComboboxMultiData extends Omit<ComboboxData, 'option'> {
  /**
   * Multi uses both inputValue (typed) and inputValues  (entered chips)
   */
  inputValues: string[]
  options: ComboboxOptionObject[]
}

export interface ComboboxAction {
  type: ComboboxActionType
  state: ComboboxState
}

export interface ComboboxActionPayload {
  option?: ComboboxOptionObject
  persistSelection?: boolean
  inputValue?: string
}

export interface ComboboxMultiActionPayload extends ComboboxActionPayload {
  inputValues?: string[]
  // only for SELECT_SILENT
  options?: ComboboxOptionObject[]
}

export type ComboboxActionWithPayload = ComboboxAction & ComboboxActionPayload
export type ComboboxMultiActionWithPayload = ComboboxAction &
  ComboboxMultiActionPayload

export interface StateChart {
  initial: ComboboxState
  states: {
    [key in ComboboxState]: {
      on: { [key in ComboboxActionType]?: ComboboxState }
    }
  }
}

export type ComboboxTransition<TPayload = ComboboxActionPayload> = (
  action: ComboboxActionType,
  payload?: TPayload
) => void

export const stateChart: StateChart = {
  initial: ComboboxState.IDLE,
  states: {
    [ComboboxState.IDLE]: {
      on: {
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.CLEAR]: ComboboxState.IDLE,
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_SILENT]: ComboboxState.IDLE,
        [ComboboxActionType.CHANGE_VALUES]: ComboboxState.IDLE,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.SELECT_SILENT]: ComboboxState.IDLE,
      },
    },
    [ComboboxState.SUGGESTING]: {
      on: {
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_SILENT]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_VALUES]: ComboboxState.IDLE,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.CLEAR]: ComboboxState.IDLE,
        [ComboboxActionType.ESCAPE]: ComboboxState.IDLE,
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.SELECT_WITH_CLICK]: ComboboxState.IDLE,
        [ComboboxActionType.SELECT_SILENT]: ComboboxState.IDLE,
        [ComboboxActionType.INTERACT]: ComboboxState.INTERACTING,
      },
    },
    [ComboboxState.NAVIGATING]: {
      on: {
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_SILENT]: ComboboxState.NAVIGATING,
        [ComboboxActionType.CHANGE_VALUES]: ComboboxState.IDLE,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CLEAR]: ComboboxState.IDLE,
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.ESCAPE]: ComboboxState.IDLE,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.SELECT_WITH_CLICK]: ComboboxState.IDLE,
        [ComboboxActionType.SELECT_WITH_KEYBOARD]: ComboboxState.IDLE,
        [ComboboxActionType.SELECT_SILENT]: ComboboxState.IDLE,
        [ComboboxActionType.INTERACT]: ComboboxState.INTERACTING,
      },
    },
    [ComboboxState.INTERACTING]: {
      on: {
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_SILENT]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_VALUES]: ComboboxState.IDLE,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.ESCAPE]: ComboboxState.IDLE,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.SELECT_WITH_CLICK]: ComboboxState.IDLE,
        [ComboboxActionType.SELECT_SILENT]: ComboboxState.IDLE,
      },
    },
  },
}

// When we open a list, set the navigation option to the option in the input, if
// it's in the list, then it'll automatically be highlighted.
const findNavigationValue = (
  state: ComboboxData | ComboboxMultiData,
  action: ComboboxActionPayload
) => {
  if (action.option) {
    return action.option
  } else if (action.persistSelection) {
    const singularState = state as ComboboxData
    return singularState.option
      ? singularState.option
      : (state as ComboboxMultiData).options[0]
  } else {
    return undefined
  }
}

const reducer: Reducer<ComboboxData, ComboboxActionWithPayload> = (
  data,
  action
) => {
  const nextState = { ...data, lastActionType: action.type }
  switch (action.type) {
    case ComboboxActionType.CHANGE:
    case ComboboxActionType.CHANGE_SILENT:
      return {
        ...nextState,
        inputValue: action.inputValue,
        navigationOption: undefined,
      }
    case ComboboxActionType.NAVIGATE:
      return {
        ...nextState,
        navigationOption: findNavigationValue(nextState, action),
      }
    case ComboboxActionType.CLEAR:
      return {
        ...nextState,
        inputValue: '',
        navigationOption: undefined,
        option: undefined,
      }
    case ComboboxActionType.BLUR:
    case ComboboxActionType.ESCAPE:
      return {
        ...nextState,
        inputValue: getComboboxText(data.option),
        navigationOption: undefined,
      }
    case ComboboxActionType.SELECT_WITH_CLICK:
    case ComboboxActionType.SELECT_SILENT:
      return {
        ...nextState,
        inputValue: getComboboxText(action.option),
        navigationOption: undefined,
        option: action.option,
      }
    case ComboboxActionType.SELECT_WITH_KEYBOARD:
      return {
        ...nextState,
        inputValue: getComboboxText(data.navigationOption),
        navigationOption: undefined,
        option: data.navigationOption,
      }
    case ComboboxActionType.INTERACT:
      return nextState
    case ComboboxActionType.FOCUS:
      return {
        ...nextState,
        navigationOption: findNavigationValue(nextState, action),
      }

    default:
      throw new Error(`Unknown action ${action.type}`)
  }
}

const reducerMulti: Reducer<
  ComboboxMultiData,
  ComboboxMultiActionWithPayload
> = (data, action) => {
  const nextState = { ...data, lastActionType: action.type }
  switch (action.type) {
    case ComboboxActionType.CHANGE:
    case ComboboxActionType.CHANGE_SILENT:
      return {
        ...nextState,
        inputValue: action.inputValue,
        inputValues: nextState.inputValues,
        navigationOption: undefined,
      }
    case ComboboxActionType.CHANGE_VALUES:
      return {
        ...nextState,
        inputValues: action.inputValues || [],
        navigationOption: undefined,
        options: nextState.options.filter(
          option =>
            action.inputValues &&
            action.inputValues.indexOf(getComboboxText(option)) > -1
        ),
      }
    case ComboboxActionType.NAVIGATE:
      return {
        ...nextState,
        navigationOption: findNavigationValue(nextState, action),
      }
    case ComboboxActionType.CLEAR:
      return {
        ...nextState,
        inputValue: '',
        inputValues: [],
        navigationOption: undefined,
        options: [],
      }
    case ComboboxActionType.BLUR:
    case ComboboxActionType.ESCAPE:
      return {
        ...nextState,
        inputValue: '',
        navigationOption: undefined,
      }
    case ComboboxActionType.SELECT_WITH_CLICK:
      return {
        ...nextState,
        inputValue: '',
        inputValues: [...nextState.inputValues, getComboboxText(action.option)],
        navigationOption: undefined,
        options: [
          ...nextState.options,
          ...(action.option ? [action.option] : []),
        ],
      }
    case ComboboxActionType.SELECT_SILENT:
      return {
        ...nextState,
        inputValue: '',
        inputValues: action.options
          ? action.options.map(option => getComboboxText(option))
          : [],
        navigationOption: undefined,
        options: action.options || [],
      }
    case ComboboxActionType.SELECT_WITH_KEYBOARD:
      return {
        ...nextState,
        inputValue: '',
        inputValues: [
          ...nextState.inputValues,
          getComboboxText(data.navigationOption),
        ],
        navigationOption: undefined,
        options: [
          ...nextState.options,
          ...(data.navigationOption ? [data.navigationOption] : []),
        ],
      }
    case ComboboxActionType.INTERACT:
      return nextState
    case ComboboxActionType.FOCUS:
      return {
        ...nextState,
        navigationOption: findNavigationValue(nextState, action),
      }

    default:
      throw new Error(`Unknown action ${action.type}`)
  }
}

// This manages transitions between states with a built in reducer to manage
// the data that goes with those transitions.
export function useReducerMachine(
  initialData: ComboboxData
): [ComboboxState, ComboboxData, ComboboxTransition] {
  const [state, setState] = useState(stateChart.initial)
  const [data, dispatch] = useReducer(reducer, initialData)

  function transition(
    action: ComboboxActionType,
    payload: ComboboxActionPayload = {}
  ) {
    const currentState = stateChart.states[state]
    const nextState = currentState.on[action]
    if (!nextState) {
      // eslint-disable-next-line no-console
      console.warn(`Unknown action "${action}" for state "${state}"`)
      return
    }
    dispatch({ state, type: action, ...payload })
    setState(nextState)
  }

  return [state, data, transition]
}
export function useReducerMultiMachine(
  initialData: ComboboxMultiData
): [
  ComboboxState,
  ComboboxMultiData,
  ComboboxTransition<ComboboxMultiActionPayload>
] {
  const [state, setState] = useState(stateChart.initial)
  const [data, dispatch] = useReducer(reducerMulti, initialData)

  function transition(
    action: ComboboxActionType,
    payload: ComboboxMultiActionPayload = { inputValues: [], options: [] }
  ) {
    const currentState = stateChart.states[state]
    const nextState = currentState.on[action]
    if (!nextState) {
      // eslint-disable-next-line no-console
      console.warn(`Unknown action "${action}" for state "${state}"`)
      return
    }
    dispatch({ state, type: action, ...payload })
    setState(nextState)
  }

  return [state, data, transition]
}
