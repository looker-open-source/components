import React from 'react'
import { ComponentsProvider } from '@looker/components'

const ComponentsDecorator = (storyFn) => (
  <ComponentsProvider loadGoogleFonts>{storyFn()}</ComponentsProvider>
)

export default ComponentsDecorator
