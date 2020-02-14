import format from 'date-fns/format'
import isValid from 'date-fns/isValid'
import parse from 'date-fns/parse'

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

export enum Locales {
  Arabic = 'ar',
  German = 'de',
  English = 'en',
  Spanish = 'es',
  French = 'fr',
  Italian = 'it',
  Japanese = 'ja',
  Korean = 'ko',
  Dutch = 'nl',
  Polish = 'pl',
  Portuguese = 'pt',
  PortugueseBrazil = 'pt-br',
  Russian = 'ru',
  Swedish = 'sv',
  Turkish = 'tr',
  Chinese = 'zh-cn',
  ChineseTaiwan = 'zh-tw',
}

export type LocaleCodes =
  | Locales.Arabic
  | Locales.German
  | Locales.English
  | Locales.Spanish
  | Locales.French
  | Locales.Italian
  | Locales.Japanese
  | Locales.Korean
  | Locales.Dutch
  | Locales.Polish
  | Locales.Portuguese
  | Locales.PortugueseBrazil
  | Locales.Russian
  | Locales.Swedish
  | Locales.Turkish
  | Locales.Chinese
  | Locales.ChineseTaiwan

export const dateFnLocaleMap = {
  [Locales.Arabic]: ar,
  [Locales.German]: de,
  [Locales.English]: en,
  [Locales.Spanish]: es,
  [Locales.French]: fr,
  [Locales.Italian]: it,
  [Locales.Japanese]: ja,
  [Locales.Korean]: ko,
  [Locales.Dutch]: nl,
  [Locales.Polish]: pl,
  [Locales.Portuguese]: pt,
  [Locales.PortugueseBrazil]: ptBr,
  [Locales.Russian]: ru,
  [Locales.Turkish]: tr,
  [Locales.Swedish]: sv,
  [Locales.Chinese]: zhCn,
  [Locales.ChineseTaiwan]: zhTw,
}

export const formatDateString = (
  date?: Date,
  locale: LocaleCodes = Locales.English
): string | '' => {
  if (!date) {
    return ''
  }

  return format(date, 'P', {
    locale: dateFnLocaleMap[locale],
  })
}

export const formatYear = (date: Date): number => {
  const year = date.getFullYear()
  if (year < 100) {
    // convert 2-digit year (2/2/20) to 4-digit year (2/2/2020)
    return year + 2000
  } else if (year < 1000) {
    // convert 3-digit partial-year (2/2/201) to 4-digit year (2/2/2010)
    return parseInt(`${year}0`)
  }
  return year
}

export const parseDateFromString = (
  value: string,
  locale: Locales
): Date | false => {
  // Date format 'P' represents localized dates in date-fns
  const parsedValue = parse(value, 'P', new Date(), {
    locale: dateFnLocaleMap[locale],
  })

  parsedValue.setFullYear(formatYear(parsedValue))

  return isValid(parsedValue) && parsedValue
}
