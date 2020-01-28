import React, { useState } from 'react'
import toPairs from 'lodash/toPairs'
import { InputDate, Select, LocaleCodes, Locales } from '@looker/components'

export const InputDateLocales = () => {
  const [locale, setLocale] = useState('en')

  const handleLocaleChange = (val: string) => {
    setLocale(val)
  }

  return (
    <>
      <div>
        <Select
          options={toPairs(Locales).map(locale => ({
            label: `${locale[0]} (${locale[1]})`,
            value: locale[1],
          }))}
          value={locale}
          onChange={handleLocaleChange}
        />
      </div>
      <InputDate locale={locale as LocaleCodes} />
    </>
  )
}
