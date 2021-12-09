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
import merge from 'lodash/merge'
import dateLocale from 'date-fns/locale/de'
import type { I18nStateWithDates } from '../../utils'
import { deDE as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Hinzufügen',
    Remove: 'Entfernen',
  },
  BeforeAfter: {
    absolute: '(absolut)',
    relative: '(relativ)',
  },
  Between: {
    AND: 'AND',
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
  OperatorLabel: {
    AND: 'AND',
    OR: 'OR',
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
