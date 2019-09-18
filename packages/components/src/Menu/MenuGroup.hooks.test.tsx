import { mount } from 'enzyme'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { useElementVisibility } from './MenuGroup.hooks'

interface TestProps {
  callback: (...args: any[]) => void
  testRef: React.RefObject<any>
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

  const cb = (ref: React.RefObject<any>) => {
    isVisible = useElementVisibility(ref)
  }

  it('it returns false as the default visibility state', () => {
    act(() => {
      mount(<TestHook callback={cb} testRef={testRef} />)
    })
    expect(isVisible).toEqual(false)
  })
})
