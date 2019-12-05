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

import { Reducer, useReducer, useState, useCallback } from 'react'
import { defaultData } from './SelectContext'
import { SelectOptionObject } from './SelectOption'

export enum SelectState {
  // Nothing going on, waiting for the user to type or use the arrow keys
  IDLE = 'IDLE',

  // The component is suggesting options as the user types
  SUGGESTING = 'SUGGESTING',

  // The user is using the keyboard to navigate the list, not typing
  NAVIGATING = 'NAVIGATING',

  // The user is interacting with arbitrary elements inside the popup that
  // are not SelectInputs
  INTERACTING = 'INTERACTING',
}

export enum SelectActionType {
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

  OPEN_WITH_BUTTON = 'OPEN_WITH_BUTTON',

  CLOSE_WITH_BUTTON = 'CLOSE_WITH_BUTTON',
}

export interface SelectData {
  option?: SelectOptionObject
  navigationOption?: SelectOptionObject
  lastActionType?: SelectActionType
}

export interface SelectAction {
  type: SelectActionType
  state: SelectState
  nextState: SelectState
}

export interface SelectActionPayload {
  option?: SelectOptionObject
  persistSelection?: boolean
}

export type SelectActionWithPayload = SelectAction & SelectActionPayload

export interface StateChart {
  initial: SelectState
  states: {
    [key in SelectState]: { on: { [key in SelectActionType]?: SelectState } }
  }
}

export type SelectTransition = (
  action: SelectActionType,
  payload?: SelectActionPayload
) => void

export const stateChart: StateChart = {
  initial: SelectState.IDLE,
  states: {
    [SelectState.IDLE]: {
      on: {
        [SelectActionType.BLUR]: SelectState.IDLE,
        [SelectActionType.CLEAR]: SelectState.IDLE,
        [SelectActionType.CHANGE]: SelectState.SUGGESTING,
        [SelectActionType.CHANGE_SILENT]: SelectState.IDLE,
        [SelectActionType.FOCUS]: SelectState.SUGGESTING,
        [SelectActionType.NAVIGATE]: SelectState.NAVIGATING,
        [SelectActionType.OPEN_WITH_BUTTON]: SelectState.SUGGESTING,
      },
    },
    [SelectState.SUGGESTING]: {
      on: {
        [SelectActionType.CHANGE]: SelectState.SUGGESTING,
        [SelectActionType.FOCUS]: SelectState.SUGGESTING,
        [SelectActionType.NAVIGATE]: SelectState.NAVIGATING,
        [SelectActionType.CLEAR]: SelectState.IDLE,
        [SelectActionType.ESCAPE]: SelectState.IDLE,
        [SelectActionType.BLUR]: SelectState.IDLE,
        [SelectActionType.SELECT_WITH_CLICK]: SelectState.IDLE,
        [SelectActionType.INTERACT]: SelectState.INTERACTING,
        [SelectActionType.CLOSE_WITH_BUTTON]: SelectState.IDLE,
      },
    },
    [SelectState.NAVIGATING]: {
      on: {
        [SelectActionType.CHANGE]: SelectState.SUGGESTING,
        [SelectActionType.FOCUS]: SelectState.SUGGESTING,
        [SelectActionType.CLEAR]: SelectState.IDLE,
        [SelectActionType.BLUR]: SelectState.IDLE,
        [SelectActionType.ESCAPE]: SelectState.IDLE,
        [SelectActionType.NAVIGATE]: SelectState.NAVIGATING,
        [SelectActionType.SELECT_WITH_KEYBOARD]: SelectState.IDLE,
        [SelectActionType.CLOSE_WITH_BUTTON]: SelectState.IDLE,
        [SelectActionType.INTERACT]: SelectState.INTERACTING,
      },
    },
    [SelectState.INTERACTING]: {
      on: {
        [SelectActionType.CHANGE]: SelectState.SUGGESTING,
        [SelectActionType.FOCUS]: SelectState.SUGGESTING,
        [SelectActionType.BLUR]: SelectState.IDLE,
        [SelectActionType.ESCAPE]: SelectState.IDLE,
        [SelectActionType.NAVIGATE]: SelectState.NAVIGATING,
        [SelectActionType.CLOSE_WITH_BUTTON]: SelectState.IDLE,
        [SelectActionType.SELECT_WITH_CLICK]: SelectState.IDLE,
      },
    },
  },
}

// When we open a list, set the navigation option to the option in the input, if
// it's in the list, then it'll automatically be highlighted.
const findNavigationValue = (
  state: SelectData,
  action: SelectActionPayload
) => {
  if (action.option) {
    return action.option
  } else if (action.persistSelection) {
    return state.option
  } else {
    return undefined
  }
}

const reducer: Reducer<SelectData, SelectActionWithPayload> = (
  data: SelectData,
  action: SelectActionWithPayload
) => {
  const nextState = { ...data, lastActionType: action.type }
  switch (action.type) {
    case SelectActionType.CHANGE:
    case SelectActionType.CHANGE_SILENT:
      return {
        ...nextState,
        navigationOption: undefined,
        option: action.option,
      }
    case SelectActionType.NAVIGATE:
    case SelectActionType.OPEN_WITH_BUTTON:
      return {
        ...nextState,
        navigationOption: findNavigationValue(nextState, action),
      }
    case SelectActionType.CLEAR:
      return {
        ...nextState,
        navigationOption: undefined,
        option: { value: '' },
      }
    case SelectActionType.BLUR:
    case SelectActionType.ESCAPE:
      return {
        ...nextState,
        navigationOption: undefined,
      }
    case SelectActionType.SELECT_WITH_CLICK:
      return {
        ...nextState,
        navigationOption: undefined,
        option: action.option,
      }
    case SelectActionType.SELECT_WITH_KEYBOARD:
      return {
        ...nextState,
        navigationOption: undefined,
        option: data.navigationOption,
      }
    case SelectActionType.CLOSE_WITH_BUTTON:
      return {
        ...nextState,
        navigationOption: undefined,
      }
    case SelectActionType.INTERACT:
      return nextState
    case SelectActionType.FOCUS:
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
  SelectState,
  SelectData,
  SelectTransition
] {
  const [state, setState] = useState(stateChart.initial)
  const [data, dispatch] = useReducer(reducer, defaultData)

  const transition = useCallback(
    (action: SelectActionType, payload: SelectActionPayload = {}) => {
      const currentState = stateChart.states[state]
      const nextState = currentState.on[action]
      if (!nextState) {
        throw new Error(`Unknown action "${action}" for state "${state}"`)
      }
      dispatch({ nextState: state, state, type: action, ...payload })
      setState(nextState)
    },
    [state]
  )

  return [state, data, transition]
}
