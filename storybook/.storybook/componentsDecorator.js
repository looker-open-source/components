import React from 'react'
import { Box, ComponentsProvider } from '@looker/components'

const ComponentsDecorator = (storyFn) => (
  <ComponentsProvider>
    <Box m="xxlarge">{storyFn()}</Box>
  </ComponentsProvider>
)

export default ComponentsDecorator
