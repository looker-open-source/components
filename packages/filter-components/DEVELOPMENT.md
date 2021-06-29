# Development

## i18n

Any text that is user-facing, whether visually or via screen-reader, should be localized with the `useTranslation` hook:

```jsx
import { useTranslation } from 'react-i18next'

export const NewButton = () => {
  const { t } = useTranslation('NewButton')
  return <button>{t('New')}</button>
}
```

After implementing the hook and the `t` function, run the following command to extract the text into the locale file, then commit the resulting change.

```shell
yarn build-locales
```
