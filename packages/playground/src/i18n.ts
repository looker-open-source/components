import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      Search: 'Search',
    },
  },
  es: {
    translation: {
      Search: 'Buscar',
    },
  },
  pr: {
    translation: {
      Search: 'Pesquisar',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    keySeparator: false, // we do not use keys in form messages.welcome
    lng: 'en',
    resources,
  })

export default i18n
