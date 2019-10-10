import { Playground } from 'docz'
import React from 'react'
import { PlaygroundWrapper } from './DefaultPlaygroundWrapper.styles'

const DefaultPlaygroundWrapper = (props: any) => {
  return (
    <PlaygroundWrapper>
      <Playground {...props} />
    </PlaygroundWrapper>
  )
}

export default DefaultPlaygroundWrapper
