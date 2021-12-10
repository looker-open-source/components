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
    'is any time': "est n'importe quelle date",
    'is before': 'est antérieur à',
    'is in range': 'se situe dans la plage',
    'is in the last': 'se situe au cours des',
    'is in the month': 'se situe dans le mois',
    'is in the year': "se situe dans l'année",
    'is next': 'est après',
    'is not null': "n'est pas nul",
    'is null': 'est nul',
    'is on or after': 'tombe le ou après',
    'is on the day': 'tombe le jour',
    'is previous': 'est avant',
    'is this': 'est ce',
  },
  get_filter_options: {
    'matches advanced': 'correspondances (avancées)',
  },
  get_location_filter_options: {
    Box: 'Boîte de dialogue',
    Circle: 'Cercle',
    Location: 'Localisation',
    feet: 'pieds',
    'is anywhere': "est n'importe où",
    'is not null': "n'est pas nul",
    'is null': 'est nul',
    kilometers: 'kilomètres',
    meters: 'mètres',
    miles: 'miles',
  },
  get_number_filter_options: {
    exclusive: '(exclusif)',
    inclusive: '[inclusif]',
    is: 'est',
    'is between': 'est compris entre',
    'is greater': 'est >',
    'is greater equal': 'est >=',
    'is less': 'est <',
    'is less equal': 'est <=',
    'is not': "n'est pas",
    'is not between': "n'est pas compris entre",
    'is not null': "n'est pas nul",
    'is null': 'est nul',
    'left exclusive': '(ouvert à gauche]',
    'right exclusive': '[ouvert à droite)',
  },
  get_string_filter_options: {
    contains: 'contient',
    'doesnt contain': 'ne contient pas',
    'doesnt end with': 'ne finit pas par',
    'doesnt start with': 'ne commence pas par',
    'ends with': 'finit par',
    is: 'est',
    'is blank': 'est vierge',
    'is not': "n'est pas",
    'is not blank': "n'est pas vierge",
    'is not null': "n'est pas nul",
    'is null': 'est nul',
    'starts with': 'commence par',
  },
  get_tier_filter_options: {
    is: 'est',
    'is any value': "est n'importe quelle valeur",
    'is not': "n'est pas",
  },
  get_user_attribute_option: {
    'matches a user attribute': 'correspond à un attribut utilisateur',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  OperatorLabel: {
    AND: 'ET',
    OR: 'OU',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Effacer tout',
    Remove: 'Retirer',
    Toggle: 'Activer/Désactiver',
  },
  Relative: {
    ago: ' ',
    'from now': 'à partir de maintenant',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Choisir une période',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personnaliser',
    Presets: 'Préréglages',
  },
  RelativeTimeframePresets: {
    More: 'Plus',
  },
  use_option_filtering: {
    'No values': 'Aucune valeur',
    'No values match': 'Aucune valeur ne correspond',
  },
  use_placeholder: {
    'any value': "n'importe quelle valeur",
  },
  use_suggestable: {
    'Error loading suggestions': 'Erreur pendant le chargement des suggestions',
  },
  use_validation_message: {
    'Value required': 'Valeur obligatoire',
  },
}

export const frFR: I18nStateWithDates = {
  dateLocale,
  locale: 'fr-FR',
  resources: { 'fr-FR': merge(resources, expressionLocale.resources['fr-FR']) },
}
