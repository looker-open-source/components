import { ReactWrapper } from 'enzyme'
import * as React from 'react'
import { mountWithTheme } from '../../../test/utils/create_with_theme'

export const SimpleContent = <div>simple content</div>
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
  const modal = mountWithTheme(Inst)
  return [modal, modal.find(trigger)]
}
