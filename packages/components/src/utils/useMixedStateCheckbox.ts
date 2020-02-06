import { useEffect, Dispatch, SetStateAction } from 'react'
import some from 'lodash/some'
import every from 'lodash/every'

export type MixedBoolean = true | false | 'mixed'

export interface CheckboxMetaState {
  state: MixedBoolean
  setState: Dispatch<SetStateAction<MixedBoolean>>
}

export interface CheckboxTree {
  parent: CheckboxMetaState
  children: CheckboxMetaState[]
}

export function useMixedStateCheckbox({ parent, children }: CheckboxTree) {
  useEffect(() => {
    if (every(children, ['state', true])) {
      parent.setState(true)
    } else if (some(children, ['state', true])) {
      parent.setState('mixed')
    } else {
      parent.setState(false)
    }
  }, [children, parent])

  const handleParentChange = () => {
    const newState = parent.state !== true
    parent.setState(newState)
    children.map(child => child.setState(newState))
  }

  return handleParentChange
}
