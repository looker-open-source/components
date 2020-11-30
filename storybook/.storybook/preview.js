import { useCallbackRef, useMeasuredElement } from '@looker/components'
import { addDecorator } from '@storybook/react'
import React, { useEffect } from 'react'
import {
  ArgsTable,
  Primary,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'
import { componentsDecorator } from '../../packages/storybook-config/src/componentsDecorator'

const postHeightMessage = (height) => {
  const isDev = process.env.NODE_ENV === 'development'
  // first parameter is the message to be passed
  // second paramter is the domain of the parent
  // in this case "*" has been used for demo sake (denoting no preference)
  // in production always pass the target domain for which the message is intended
  const { protocol, hostname } = window.location
  const targetOrigin = `${protocol}//${hostname}${isDev ? ':8000' : ''}`
  window.top.postMessage({ key: 'height', height }, targetOrigin)
}

export const parameters = {
  layout: 'fullscreen',
  docs: {
    page: () => {
      const [element, ref] = useCallbackRef()
      // height will update anytime the outer div is resized
      // but we need to use body.scrollHeight to get the accurate measure
      const { height } = useMeasuredElement(element)
      useEffect(() => {
        postHeightMessage(document.body.scrollHeight)
      }, [height])
      return (
        <div ref={ref}>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </div>
      )
    },
  },
}

addDecorator(componentsDecorator)
