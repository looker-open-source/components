import { ReactWrapper } from 'enzyme'
import * as React from 'react'

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
