import { addDecorator } from '@storybook/react'
import componentsDecorator from './componentsDecorator'

export const parameters = {
  layout: 'fullscreen',
}

addDecorator(componentsDecorator)
