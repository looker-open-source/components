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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import { Reducer, useReducer, useState } from 'react'
import { defaultData } from './ComboboxContext'
import { ComboboxOptionObject } from './ComboboxOption'

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

  // User is navigating w/ the keyboard
  NAVIGATE = 'NAVIGATE',

  // User can be navigating with keyboard and then click instead, we want the
  // value from the click, not the current nav item
  SELECT_WITH_KEYBOARD = 'SELECT_WITH_KEYBOARD',
  SELECT_WITH_CLICK = 'SELECT_WITH_CLICK',

  // Pretty self-explanatory, user can hit escape or blur to close the popover
  ESCAPE = 'ESCAPE',
  BLUR = 'BLUR',

  // The user left the input to interact with arbitrary elements inside the popup
  INTERACT = 'INTERACT',

  FOCUS = 'FOCUS',

  CLOSE_WITH_BUTTON = 'CLOSE_WITH_BUTTON',
}

export interface ComboboxData {
  option?: ComboboxOptionObject
  navigationOption?: ComboboxOptionObject
  lastActionType?: ComboboxActionType
}

export interface ComboboxAction {
  type: ComboboxActionType
  state: ComboboxState
}

export interface ComboboxActionPayload {
  option?: ComboboxOptionObject
  persistComboboxion?: boolean
}

export type ComboboxActionWithPayload = ComboboxAction & ComboboxActionPayload

export interface StateChart {
  initial: ComboboxState
  states: {
    [key in ComboboxState]: {
      on: { [key in ComboboxActionType]?: ComboboxState }
    }
  }
}

export type ComboboxTransition = (
  action: ComboboxActionType,
  payload?: ComboboxActionPayload
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
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
      },
    },
    [ComboboxState.SUGGESTING]: {
      on: {
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.CLEAR]: ComboboxState.IDLE,
        [ComboboxActionType.ESCAPE]: ComboboxState.IDLE,
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.SELECT_WITH_CLICK]: ComboboxState.IDLE,
        [ComboboxActionType.INTERACT]: ComboboxState.INTERACTING,
        [ComboboxActionType.CLOSE_WITH_BUTTON]: ComboboxState.IDLE,
      },
    },
    [ComboboxState.NAVIGATING]: {
      on: {
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CLEAR]: ComboboxState.IDLE,
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.ESCAPE]: ComboboxState.IDLE,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.SELECT_WITH_KEYBOARD]: ComboboxState.IDLE,
        [ComboboxActionType.CLOSE_WITH_BUTTON]: ComboboxState.IDLE,
        [ComboboxActionType.INTERACT]: ComboboxState.INTERACTING,
      },
    },
    [ComboboxState.INTERACTING]: {
      on: {
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.ESCAPE]: ComboboxState.IDLE,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.CLOSE_WITH_BUTTON]: ComboboxState.IDLE,
        [ComboboxActionType.SELECT_WITH_CLICK]: ComboboxState.IDLE,
      },
    },
  },
}

// When we open a list, set the navigation option to the option in the input, if
// it's in the list, then it'll automatically be highlighted.
const findNavigationValue = (
  state: ComboboxData,
  action: ComboboxActionPayload
) => {
  if (action.option) {
    return action.option
  } else if (action.persistComboboxion) {
    return state.option
  } else {
    return undefined
  }
}

const reducer: Reducer<ComboboxData, ComboboxActionWithPayload> = (
  data: ComboboxData,
  action: ComboboxActionWithPayload
) => {
  const nextState = { ...data, lastActionType: action.type }
  switch (action.type) {
    case ComboboxActionType.CHANGE:
    case ComboboxActionType.CHANGE_SILENT:
      return {
        ...nextState,
        navigationOption: undefined,
        option: action.option,
      }
    case ComboboxActionType.NAVIGATE:
      return {
        ...nextState,
        navigationOption: findNavigationValue(nextState, action),
      }
    case ComboboxActionType.CLEAR:
      return {
        ...nextState,
        navigationOption: undefined,
        option: { value: '' },
      }
    case ComboboxActionType.BLUR:
    case ComboboxActionType.ESCAPE:
      return {
        ...nextState,
        navigationOption: undefined,
      }
    case ComboboxActionType.SELECT_WITH_CLICK:
      return {
        ...nextState,
        navigationOption: undefined,
        option: action.option,
      }
    case ComboboxActionType.SELECT_WITH_KEYBOARD:
      return {
        ...nextState,
        navigationOption: undefined,
        option: data.navigationOption,
      }
    case ComboboxActionType.CLOSE_WITH_BUTTON:
      return {
        ...nextState,
        navigationOption: undefined,
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
export function useReducerMachine(): [
  ComboboxState,
  ComboboxData,
  ComboboxTransition
] {
  const [state, setState] = useState(stateChart.initial)
  const [data, dispatch] = useReducer(reducer, defaultData)

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
