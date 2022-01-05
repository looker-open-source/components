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
import dateLocale from 'date-fns/locale/it'
import type { I18nStateWithDates } from '../../utils'
import { itIT as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Aggiungi',
    Remove: 'Rimuovi',
  },
  BeforeAfter: {
    absolute: '(assoluto)',
    relative: '(relativo)',
  },
  Between: {
    AND: 'E',
  },
  date_units: {
    days: 'giorni',
    'fiscal quarters': 'trimestri fiscali',
    'fiscal years': 'anni fiscali',
    hours: 'ore',
    minutes: 'minuti',
    months: 'mesi',
    quarters: 'trimestri',
    seconds: 'secondi',
    weeks: 'settimane',
    years: 'anni',
  },
  get_date_filter_options: {
    is: 'è',
    'is any time': 'è in qualsiasi momento',
    'is before': 'è prima di',
    'is in range': "è compreso nell'intervallo",
    'is in the last': 'è nell’ultimo',
    'is in the month': 'è nel mese',
    'is in the year': "è nell'anno",
    'is next': 'è il prossimo',
    'is not null': 'non è zero',
    'is null': 'è zero',
    'is on or after': 'è il o dopo il',
    'is on the day': 'è nel giorno',
    'is previous': 'è il precedente',
    'is this': 'è questo',
  },
  get_filter_options: {
    'matches advanced': 'corrisponde a (avanzato)',
  },
  get_location_filter_options: {
    Box: 'Riquadro',
    Circle: 'Cerchio',
    Location: 'Posizione',
    feet: 'piedi',
    'is anywhere': 'è ovunque',
    'is not null': 'non è zero',
    'is null': 'è zero',
    kilometers: 'chilometri',
    meters: 'metri',
    miles: 'miglia',
  },
  get_number_filter_options: {
    exclusive: '(escluso)',
    inclusive: '[incluso]',
    is: 'è',
    'is between': 'è compreso tra',
    'is greater': 'è >',
    'is greater equal': 'è >=',
    'is less': 'è <',
    'is less equal': 'è <=',
    'is not': 'non è',
    'is not between': 'non è compreso tra',
    'is not null': 'non è zero',
    'is null': 'è zero',
    'left exclusive': '(escluso a sinistra)',
    'right exclusive': '[escluso a destra]',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Ultimi 14 giorni',
    'Last 180 Days': 'Ultimi 180 giorni',
    'Last 28 Days': 'Ultimi 28 giorni',
    'Last 30 Days': 'Ultimi 30 giorni',
    'Last 365 Days': 'Ultimi 365 giorni',
    'Last 7 Days': 'Ultimi 7 giorni',
    'Last 90 Days': 'Ultimi 90 giorni',
    'Previous Month': 'Mese precedente',
    'Previous Quarter': 'Trimestre precedente',
    'Previous Week': 'Settimana precedente',
    'Previous Year': 'Anno precedente',
    'This Month': 'Mese corrente',
    'This Quarter': 'Trimestre corrente',
    'This Week': 'Settimana corrente',
    'This Year': 'Anno corrente',
    Today: 'Oggi',
    'Year To Date': 'Da inizio anno',
    Yesterday: 'Ieri',
  },
  get_string_filter_options: {
    contains: 'contiene',
    'doesnt contain': 'non contiene',
    'doesnt end with': 'non termina con',
    'doesnt start with': 'non inizia con',
    'ends with': 'termina con',
    is: 'è',
    'is blank': 'è vuoto',
    'is not': 'non è',
    'is not blank': 'non è vuoto',
    'is not null': 'non è zero',
    'is null': 'è zero',
    'starts with': 'inizia con',
  },
  get_tier_filter_options: {
    is: 'è',
    'is any value': 'è qualsiasi valore',
    'is not': 'non è',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'corrisponde a un attributo utente',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'qualsiasi valore',
  },
  OperatorLabel: {
    AND: 'E',
    OR: 'OPPURE',
  },
  past_units: {
    'complete days': 'giorni completi',
    'complete fiscal quarters': 'trimestri fiscali completi',
    'complete fiscal years': 'anni fiscali completi',
    'complete hours': 'ore complete',
    'complete minutes': 'minuti completi',
    'complete months': 'mesi completi',
    'complete quarters': 'trimestri completi',
    'complete seconds': 'secondi completi',
    'complete weeks': 'settimane complete',
    'complete years': 'anni completi',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Cancella tutto',
    Remove: 'Rimuovi',
    Toggle: 'Attiva/disattiva',
  },
  Relative: {
    ago: 'fa',
    'from now': 'da ora',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Scegli un valore temporale',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personalizzato',
    Presets: 'Preimpostazioni',
  },
  RelativeTimeframePresets: {
    More: 'Altro',
  },
  use_option_filtering: {
    'No values': 'Nessun valore',
    'No values match': 'Nessun valore corrispondente',
  },
  use_placeholder: {
    'any value': 'qualsiasi valore',
  },
  use_suggestable: {
    'Error loading suggestions':
      'Errore in fase di caricamento dei suggerimenti',
  },
  use_validation_message: {
    'Value required': 'Valore obbligatorio',
  },
}

export const itIT: I18nStateWithDates = {
  dateLocale,
  locale: 'it-IT',
  resources: { 'it-IT': merge(resources, expressionLocale.resources['it-IT']) },
}
