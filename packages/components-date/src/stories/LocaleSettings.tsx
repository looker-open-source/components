/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import type { Locale } from 'date-fns'
import ar from 'date-fns/locale/ar-SA'
import de from 'date-fns/locale/de'
import en from 'date-fns/locale/en-US'
import es from 'date-fns/locale/es'
import fr from 'date-fns/locale/fr'
import it from 'date-fns/locale/it'
import ja from 'date-fns/locale/ja'
import ko from 'date-fns/locale/ko'
import nl from 'date-fns/locale/nl'
import pl from 'date-fns/locale/pl'
import pt from 'date-fns/locale/pt'
import ptBr from 'date-fns/locale/pt-BR'
import ru from 'date-fns/locale/ru'
import sv from 'date-fns/locale/sv'
import tr from 'date-fns/locale/tr'
import zhCn from 'date-fns/locale/zh-CN'
import zhTw from 'date-fns/locale/zh-TW'
import type { SyntheticEvent } from 'react'
import React, { useState } from 'react'
import { FieldSelect, FieldSlider } from '@looker/components'

export const dateFnLocaleMap = {
  ar: ar,
  de: de,
  en: en,
  es: es,
  fr: fr,
  it: it,
  ja: ja,
  ko: ko,
  nl: nl,
  pl: pl,
  pt: pt,
  'pt-br': ptBr,
  ru: ru,
  sv: sv,
  tr: tr,
  'zh-cn': zhCn,
  'zh-tw': zhTw,
}

export type DayOfWeekNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type LocaleSettingsProps = {
  firstDayOfWeek: number
  setLocale: (locale: Locale) => void
  setFirstDayOfWeek: (num: DayOfWeekNumbers) => void
  clearDate: () => void
}

export const LocaleSettings = ({
  setLocale,
  firstDayOfWeek,
  setFirstDayOfWeek,
  clearDate,
}: LocaleSettingsProps) => {
  const [localeCode, setLocaleCode] = useState('it')
  const handleFirstDayOfWeekChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setFirstDayOfWeek(parseInt(e.currentTarget.value, 10) as DayOfWeekNumbers)
  }

  const handleLocaleChange = (val: string) => {
    setLocaleCode(val)
    const locale = dateFnLocaleMap[val as keyof typeof dateFnLocaleMap]
    setLocale(locale)
    clearDate()
    if (locale.options?.weekStartsOn) {
      setFirstDayOfWeek(locale.options?.weekStartsOn)
    }
  }

  return (
    <>
      <FieldSelect
        label="Date String Format"
        options={[
          { label: 'Arabic (ar)', value: 'ar' },
          { label: 'German (de)', value: 'de' },
          { label: 'English (en)', value: 'en' },
          { label: 'Spanish (es)', value: 'es' },
          { label: 'French (fr)', value: 'fr' },
          { label: 'Italian (it)', value: 'it' },
          { label: 'Japanese (ja)', value: 'ja' },
          { label: 'Korean (ko)', value: 'ko' },
          { label: 'Dutch (nl)', value: 'nl' },
          { label: 'Polish (pl)', value: 'pl' },
          { label: 'Portuguese (pt)', value: 'pt' },
          { label: 'Portuguese - Brazil (pt-br)', value: 'pt-br' },
          { label: 'Russian (ru)', value: 'ru' },
          { label: 'Swedish (sv)', value: 'sv' },
          { label: 'Turkish (tr)', value: 'tr' },
          { label: 'Chinese - China (zh-cn)', value: 'zh-cn' },
          { label: 'Chinese - Taiwan (zh-tw)', value: 'zh-tw' },
        ]}
        value={localeCode}
        onChange={handleLocaleChange}
        width="auto"
      />
      <FieldSlider
        label="First Day Of Week"
        min={0}
        max={6}
        value={firstDayOfWeek}
        onChange={handleFirstDayOfWeekChange}
      />
    </>
  )
}
