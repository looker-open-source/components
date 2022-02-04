/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import merge from 'lodash/merge'
import dateLocale from 'date-fns/locale/de'
import type { I18nStateWithDates } from '../../utils'
import { deDE as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Hinzufügen',
    Remove: 'Entfernen',
  },
  before_after_units: {
    'days ago': 'Tage zuvor',
    'days from now': 'Tage ab jetzt',
    'fiscal quarter from now': 'Geschäftsquartal ab jetzt',
    'fiscal quarters ago': 'Geschäftsquartale zuvor',
    'fiscal years ago': 'Geschäftsjahre zuvor',
    'fiscal years from now': 'Geschäftsjahre ab jetzt',
    'hours ago': 'Stunden zuvor',
    'hours from now': 'Stunden ab jetzt',
    'minutes ago': 'Minuten zuvor',
    'minutes from now': 'Minuten ab jetzt',
    'months ago': 'Monate zuvor',
    'months from now': 'Monate ab jetzt',
    now: 'jetzt',
    'quarters ago': 'Quartale zuvor',
    'quarters from now': 'Quartale ab jetzt',
    'seconds ago': 'Sekunden zuvor',
    'seconds from now': 'Sekunden ab jetzt',
    'weeks ago': 'Wochen zuvor',
    'weeks from now': 'Wochen ab jetzt',
    'years ago': 'Jahre zuvor',
    'years from now': 'Jahre ab jetzt',
  },
  BeforeAfter: {
    absolute: '(absolut)',
    relative: '(relativ)',
  },
  Between: {
    AND: 'AND',
  },
  date_units: {
    day: 'Tag',
    days: 'Tage',
    'fiscal quarter': 'Geschäftsquartal',
    'fiscal quarters': 'Geschäftsquartale',
    'fiscal year': 'Geschäftsjahr',
    'fiscal years': 'Geschäftsjahre',
    hour: 'Stunde',
    hours: 'Stunden',
    minute: 'Minute',
    minutes: 'Minuten',
    month: 'Monat',
    months: 'Monate',
    quarter: 'Quartal',
    quarters: 'Quartale',
    second: 'Sekunde',
    seconds: 'Sekunden',
    week: 'Woche',
    weeks: 'Wochen',
    year: 'Jahr',
    years: 'Jahre',
  },
  get_date_filter_options: {
    is: 'ist',
    'is any time': 'ist jederzeit',
    'is before': 'ist vor dem',
    'is in range': 'befindet sich im Bereich',
    'is in the last': 'ist in den letzten',
    'is in the month': 'ist im Monat',
    'is in the year': 'befindet sich im Jahr',
    'is next': 'ist nächste/r/s',
    'is not null': 'ist nicht null',
    'is null': 'ist null',
    'is on or after': 'ist am oder nach dem',
    'is on the day': 'ist am Tag',
    'is previous': 'ist vorherige/r/s',
    'is this': 'ist diese/r/s',
  },
  get_filter_options: {
    'matches advanced': 'Übereinstimmung (für Fortgeschrittene)',
  },
  get_location_filter_options: {
    Box: 'Feld',
    Circle: 'Kreis',
    Location: 'Standort',
    feet: 'Fuß',
    'is anywhere': 'ist überall',
    'is not null': 'ist nicht null',
    'is null': 'ist null',
    kilometers: 'Kilometer',
    meters: 'Meter',
    miles: 'Meilen',
  },
  get_number_filter_options: {
    exclusive: '(ausschließlich)',
    inclusive: '[einschließlich]',
    is: 'ist',
    'is between': 'liegt zwischen',
    'is greater': 'ist >',
    'is greater equal': 'ist >=',
    'is less': 'ist <',
    'is less equal': 'ist <=',
    'is not': 'ist nicht',
    'is not between': 'liegt nicht zwischen',
    'is not null': 'ist nicht null',
    'is null': 'ist null',
    'left exclusive': '(ausschließlich links]',
    'right exclusive': '[ausschließlich rechts]',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Letzte 14 Tage',
    'Last 180 Days': 'Letzte 180 Tage',
    'Last 28 Days': 'Letzte 28 Tage',
    'Last 30 Days': 'Letzte 30 Tage',
    'Last 365 Days': 'Letzte 365 Tage',
    'Last 7 Days': 'Letzte 7 Tage',
    'Last 90 Days': 'Letzte 90 Tage',
    'Previous Month': 'Vorheriger Monat',
    'Previous Quarter': 'Vorheriges Quartal',
    'Previous Week': 'Vorherige Woche',
    'Previous Year': 'Vorheriges Jahr',
    'This Month': 'Dieser Monat',
    'This Quarter': 'Dieses Quartal',
    'This Week': 'Diese Woche',
    'This Year': 'Dieses Jahr',
    Today: 'Heute',
    'Year To Date': 'Dieses Jahr bis heute',
    Yesterday: 'Gestern',
  },
  get_string_filter_options: {
    contains: 'enthält',
    'doesnt contain': 'enthält nicht',
    'doesnt end with': 'endet nicht mit',
    'doesnt start with': 'beginnt nicht mit',
    'ends with': 'endet mit',
    is: 'ist',
    'is blank': 'ist leer',
    'is not': 'ist nicht',
    'is not blank': 'ist nicht leer',
    'is not null': 'ist nicht null',
    'is null': 'ist null',
    'starts with': 'beginnt mit',
  },
  get_tier_filter_options: {
    is: 'ist',
    'is any value': 'ist ein beliebiger Wert',
    'is not': 'ist nicht',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'Übereinstimmung mit Benutzerattribut',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'beliebiger Wert',
  },
  OperatorLabel: {
    AND: 'AND',
    OR: 'OR',
  },
  past_units: {
    'complete days': 'vollständige Tage',
    'complete fiscal quarters': 'vollständige Geschäftsquartale',
    'complete fiscal years': 'vollständige Geschäftsjahre',
    'complete hours': 'vollständige Stunden',
    'complete minutes': 'vollständige Minuten',
    'complete months': 'vollständige Monate',
    'complete quarters': 'vollständige Quartale',
    'complete seconds': 'vollständige Sekunden',
    'complete weeks': 'vollständige Wochen',
    'complete years': 'vollständige Jahre',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Alle leeren',
    Remove: 'Entfernen',
    Toggle: 'Umschalten',
  },
  Relative: {
    ago: 'her',
    'from now': 'ab jetzt',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Zeitrahmen wählen',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Benutzerdefiniert',
    Presets: 'Voreinstellungen',
  },
  RelativeTimeframePresets: {
    More: 'Mehr',
  },
  use_filters_errors: {
    'Selection required': 'Auswahl erforderlich',
    'Invalid value': 'Ungültiger Wert',
    'No value is set for your user attribute':
      'Für dieses Benutzerattribut ist kein Wert festgelegt',
  },
  use_option_filtering: {
    'No values': 'Keine Werte',
    'No values match': 'Keine übereinstimmenden Werte',
  },
  use_placeholder: {
    'any value': 'beliebiger Wert',
  },
  use_suggestable: {
    'Error loading suggestions': 'Fehler beim Laden von Vorschlägen',
  },
  use_validation_message: {
    'Value required': 'Wert erforderlich',
  },
}

export const deDE: I18nStateWithDates = {
  dateLocale,
  locale: 'de-DE',
  resources: { 'de-DE': merge(resources, expressionLocale.resources['de-DE']) },
}
