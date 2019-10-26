import { mount } from 'enzyme'
import React, { RefObject } from 'react'
import { act } from 'react-dom/test-utils'
import { useElementVisibility } from './MenuGroup.hooks'

interface TestProps {
  callback: (...args: any[]) => void
  testRef: RefObject<any>
}

const TestHook = ({ callback, testRef }: TestProps) => {
  callback(testRef)
  return null
}

describe('MenuGroup Hooks', () => {
  let isVisible: boolean

  const testRef = {
    current: <div />,
  }

  /* eslint-disable react-hooks/rules-of-hooks */
  const cb = (ref: RefObject<any>) => {
    isVisible = useElementVisibility(ref)
  }
  /* eslint-enable react-hooks/rules-of-hooks */

  it('it returns false as the default visibility state', () => {
    act(() => {
      mount(<TestHook callback={cb} testRef={testRef} />)
    })
    expect(isVisible).toEqual(false)
  })
})
