import { ReactWrapper } from 'enzyme'
import * as React from 'react'
import { mountWithTheme } from '../../../test/utils/create_with_theme'
import { Button } from '../Button'
import { Overlay } from './Overlay'

export const SimpleContent = <div>simple content</div>
export const SimpleContentSFC = () => SimpleContent

export const mouseEventSimulator = {
  currentTarget: {},
  relatedTarget: document.body,
}

export const assertOverlayState = (
  overlay: ReactWrapper,
  content: React.ReactElement<any>,
  open: boolean = true
) => {
  expect(overlay.contains(content)).toEqual(open)
}

export const assertOpen = (overlay: ReactWrapper) =>
  assertOverlayState(overlay, SimpleContent)

export const assertClosed = (overlay: ReactWrapper) =>
  assertOverlayState(overlay, SimpleContent, false)

export const returnTriggerAndOverlay = (
  Inst: React.ReactElement<any>,
  trigger = Button
) => {
  const manager = mountWithTheme(Inst)
  return [manager, manager.find(Overlay), manager.find(trigger)]
}
