import { ReactWrapper } from 'enzyme'
import * as React from 'react'
import { shallowWithTheme } from '@looker/components-test-utils'

export const SimpleContent = (
  <div>
    simple content
    <button>Done</button>
  </div>
)
export const SimpleContentSFC = () => SimpleContent

export const assertModalState = (
  modal: ReactWrapper,
  content: React.ReactElement<any>,
  open: boolean = true
) => {
  expect(modal.contains(content)).toEqual(open)
}

export const assertOpen = (modal: ReactWrapper) =>
  assertModalState(modal, SimpleContent)

export const assertClosed = (modal: ReactWrapper) =>
  assertModalState(modal, SimpleContent, false)

export const returnTriggerAndModal = (
  Inst: React.ReactElement<any>,
  trigger = 'button'
) => {
  const modal = shallowWithTheme(Inst)
  return [modal, modal.find(trigger)]
}
