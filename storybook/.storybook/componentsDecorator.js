import React from 'react'
import { Box, ComponentsProvider } from '@looker/components'

const ComponentsDecorator = (storyFn) => (
  <ComponentsProvider loadGoogleFonts>{storyFn()}</ComponentsProvider>
)

export default ComponentsDecorator
