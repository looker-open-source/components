import { addDecorator } from '@storybook/react'
import React from 'react'
import {
  ArgsTable,
  Primary,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'
import { componentsDecorator } from '../config/componentsDecorator'

export const parameters = {
  layout: 'fullscreen',
  docs: {
    page: () => (
      <>
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    ),
  },
}

addDecorator(componentsDecorator)
