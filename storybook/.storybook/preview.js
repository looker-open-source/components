import { useCallbackRef, useResize } from '@looker/components'
import { addDecorator } from '@storybook/react'
import React from 'react'
import {
  ArgsTable,
  Description,
  Primary,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'
import { componentsDecorator } from './componentsDecorator'

// Supports parent page (in Gatsby) resizing the iframe dynamically
// to avoid scrolling
// Note: resizing to a smaller height currently does not work due to a
// min-height: 100vh on one of the wrapper divs
const postHeightMessage = () => {
  const isDev = process.env.NODE_ENV === 'development'
  const { protocol, hostname, search } = window.location
  const urlParams = new URLSearchParams(search)
  const isGatsby = urlParams.get('parent') === 'gatsby'
  if (isGatsby) {
    const targetOrigin = `${protocol}//${hostname}${isDev ? ':8000' : ''}`
    window.top.postMessage(
      { key: 'height', height: document.body.scrollHeight },
      targetOrigin
    )
  }
}

export const parameters = {
  layout: 'fullscreen',
  argTypes: {
    as: {
      table: { disable: true },
    },
    forwardedAs: {
      table: { disable: true },
    },
    ref: {
      table: { disable: true },
    },
    theme: {
      table: { disable: true },
    },
  },
  controls: { expanded: true },
  docs: {
    page: () => {
      const [element, ref] = useCallbackRef()
      useResize(element, postHeightMessage)

      return (
        <div ref={ref}>
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </div>
      )
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

addDecorator(componentsDecorator)
