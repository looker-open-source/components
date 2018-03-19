import { addDecorator, configure } from '@storybook/react'
import { setIntlConfig, withIntl } from 'storybook-addon-intl'
import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import deLocaleData from 'react-intl/locale-data/de'

addLocaleData(enLocaleData)
addLocaleData(deLocaleData)

const messages = {
  'en': { 'button.label': 'Click me!' },
  'de': { 'button.label': 'Klick mich!' }
}

const getMessages = (locale) => messages[locale]

setIntlConfig({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  getMessages
})

addDecorator(withIntl)

const req = require.context('../stories', true, /\.story\.tsx$/)

function loadStories() {
  req.keys().forEach(fname => req(fname))
}

configure(loadStories, module)
