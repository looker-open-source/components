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
import dateLocale from 'date-fns/locale/fr'
import type { I18nStateWithDates } from '../../utils'
import { frFR as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Ajouter',
    Remove: 'Retirer',
  },
  BeforeAfter: {
    absolute: '(absolu)',
    relative: '(relatif)',
  },
  Between: {
    AND: 'ET',
  },
  get_date_filter_options: {
    is: 'est',
    'is any time': 'est à tout moment',
    'is before': 'est situé avant',
    'is in range': 'est dans la portée',
    'is in the last': 'est au cours du dernier',
    'is in the month': 'est dans le mois',
    'is in the year': 'est dans l’année',
    'is next': 'est le prochain',
    'is not null': 'n’est pas nul',
    'is null': 'est nul',
    'is on or after': 'est situé le jour même ou après',
    'is on the day': 'est le jour même',
    'is previous': 'est avant',
    'is this': 'est ce',
  },
  get_filter_options: {
    'matches advanced': 'correspond (avancé)',
  },
  get_location_filter_options: {
    Box: 'Boîte',
    Circle: 'Cercle',
    Location: 'Emplacement',
    feet: 'pied',
    'is anywhere': 'est n’importe où',
    'is not null': 'n’est pas nul',
    'is null': 'est nul',
    kilometers: 'kilomètres',
    meters: 'mètres',
    miles: 'miles',
  },
  get_number_filter_options: {
    exclusive: '(exclusif)',
    inclusive: '[inclusif]',
    is: 'est',
    'is between': 'est situé entre',
    'is greater': 'est >',
    'is greater equal': 'est >=',
    'is less': 'est <',
    'is less equal': 'est <=',
    'is not': 'n’est pas',
    'is not between': 'n’est pas situé entre',
    'is not null': 'n’est pas nul',
    'is null': 'est nul',
    'left exclusive': '(exclusif-gauche)',
    'right exclusive': '[exclusif-droite)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': '14 derniers jours',
    'Last 180 Days': '180 derniers jours',
    'Last 28 Days': '28 derniers jours',
    'Last 30 Days': '30 derniers jours',
    'Last 365 Days': '365 derniers jours',
    'Last 7 Days': '7 derniers jours',
    'Last 90 Days': '90 derniers jours',
    'Previous Month': 'Mois précédent',
    'Previous Quarter': 'Trimestre précédent',
    'Previous Week': 'Semaine précédente',
    'Previous Year': 'Année précédente',
    'This Month': 'Ce mois-ci',
    'This Quarter': 'Ce trimestre',
    'This Week': 'Cette semaine',
    'This Year': 'Cette année',
    Today: 'Aujourd’hui',
    'Year To Date': 'Depuis le début de l’année',
    Yesterday: 'Hier',
  },
  get_string_filter_options: {
    contains: 'contient',
    'doesnt contain': 'ne contient pas',
    'doesnt end with': 'ne se termine pas avec',
    'doesnt start with': 'ne commence pas avec',
    'ends with': 'termine avec',
    is: 'est',
    'is blank': 'est vide',
    'is not': 'n’est pas',
    'is not blank': 'n’est pas vide',
    'is not null': 'n’est pas nul',
    'is null': 'est nul',
    'starts with': 'commence avec',
  },
  get_tier_filter_options: {
    is: 'est',
    'is any value': 'est toute valeur',
    'is not': 'n’est pas',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'correspond à un attribut utilisateur',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'n’importe quelle valeur',
  },
  OperatorLabel: {
    AND: 'ET',
    OR: 'OU',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Effacer tout',
    Remove: 'Retirer',
    Toggle: 'Basculer',
  },
  Relative: {
    ago: 'auparavant',
    'from now': 'à partir de maintenant',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Veuillez choisir une plage de temps',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personnalisation',
    Presets: 'Prérégler',
  },
  RelativeTimeframePresets: {
    More: 'Plus',
  },
  use_option_filtering: {
    'No values': 'Aucune valeur',
    'No values match': 'Aucune valeur correspondante',
  },
  use_placeholder: {
    'any value': 'n’importe quelle valeur',
  },
  use_suggestable: {
    'Error loading suggestions': 'Erreur lors du chargement des suggestions',
  },
  use_validation_message: {
    'Value required': 'Valeur requise',
  },
}

export const frFR: I18nStateWithDates = {
  dateLocale,
  locale: 'fr-FR',
  resources: { 'fr-FR': merge(resources, expressionLocale.resources['fr-FR']) },
}
