

import dateLocale from 'date-fns/locale/fr-CA';
import { frCA as componentsLocale } from '@looker/components';
import { frCA as filterexpressionsLocale } from '@looker/filter-expressions';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  use_validation_message: {
    'Value required': 'Valeur requise'
  },
  use_suggestable: {
    'Error loading suggestions': 'Erreur lors du chargement des suggestions'
  },
  use_placeholder: {
    'any value': 'n’importe quelle valeur'
  },
  use_option_filtering: {
    'No values': 'Aucune valeur',
    'No values match': 'Aucune valeur correspondante'
  },
  use_filters_errors: {
    'Invalid value': 'Valeur non valide',
    'No value is set for your user attribute': 'Aucune valeur n’est définie pour cet attribut d’utilisateur',
    'Selection required': 'Sélection requise'
  },
  past_units: {
    'complete days': 'jours complets',
    'complete fiscal quarters': 'trimestres fiscaux complets',
    'complete fiscal years': 'années fiscales complètes',
    'complete hours': 'heures complètes',
    'complete minutes': 'minutes complètes',
    'complete months': 'mois complets',
    'complete quarters': 'trimestres complets',
    'complete seconds': 'secondes complètes',
    'complete weeks': 'semaines complètes',
    'complete years': 'années complètes'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'correspond à un attribut utilisateur'
  },
  get_tier_filter_options: {
    is: 'est',
    'is any value': 'est toute valeur',
    'is not': 'n’est pas'
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
    'starts with': 'commence avec'
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
    Yesterday: 'Hier'
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
    'right exclusive': '[exclusif-droite)'
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
    miles: 'miles'
  },
  get_filter_options: {
    'matches advanced': 'correspond (avancé)'
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
    'is this': 'est ce'
  },
  date_units: {
    day: 'jour',
    days: 'jours',
    'fiscal quarter': 'trimestre fiscal',
    'fiscal quarters': 'trimestres fiscaux',
    'fiscal year': 'année fiscale',
    'fiscal years': 'années fiscales',
    hour: 'heure',
    hours: 'heures',
    minute: 'minute',
    minutes: 'minutes',
    month: 'mois',
    months: 'mois',
    quarter: 'trimestre',
    quarters: 'trimestres',
    second: 'seconde',
    seconds: 'secondes',
    week: 'semaine',
    weeks: 'semaines',
    year: 'année',
    years: 'années'
  },
  before_after_units: {
    'days ago': 'jours auparavant',
    'days from now': 'journées à partir de maintenant',
    'fiscal quarter from now': 'trimestre fiscal à partir de maintenant',
    'fiscal quarters ago': 'trimestres fiscaux auparavant',
    'fiscal years ago': 'années fiscales auparavant',
    'fiscal years from now': 'années fiscales à partir de maintenant',
    'hours ago': 'heures auparavant',
    'hours from now': 'heures à partir de maintenant',
    'minutes ago': 'minutes auparavant',
    'minutes from now': 'minutes à partir de maintenant',
    'months ago': 'mois auparavant',
    'months from now': 'mois à partir de maintenant',
    now: 'présentement',
    'quarters ago': 'trimestres auparavant',
    'quarters from now': 'trimestres à partir de maintenant',
    'seconds ago': 'secondes auparavant',
    'seconds from now': 'secondes à partir de maintenant',
    'weeks ago': 'semaines auparavant',
    'weeks from now': 'semaines à partir de maintenant',
    'years ago': 'années auparavant',
    'years from now': 'années à partir de maintenant'
  },
  RelativeTimeframePresets: {
    More: 'Plus'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personnalisation',
    Presets: 'Prérégler'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Veuillez choisir une plage de temps'
  },
  Relative: {
    ago: 'auparavant',
    'from now': 'à partir de maintenant'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Effacer tout',
    Remove: 'Retirer',
    Toggle: 'Basculer'
  },
  RadioGroup: {
    'any value': 'n’importe quelle valeur'
  },
  OperatorLabel: {
    AND: 'ET',
    OR: 'OU'
  },
  NumberFilter: {
    'any value': 'n’importe quelle valeur'
  },
  NoMatchingFields: {
    'No Matching Fields': 'Aucun champ correspondant',
    'Try Something Else': 'Essayez un autre terme de recherche ou recommencez et développez une exploration pour parcourir les champs disponibles.'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  DateRange: {
    'until (before)': 'jusqu’à (avant)'
  },
  Between: {
    AND: 'ET'
  },
  BeforeAfter: {
    absolute: '(absolu)',
    relative: '(relatif)'
  },
  AddRemoveButtons: {
    Add: 'Ajouter',
    Remove: 'Retirer'
  }
};
export const frCA = mergeLocaleObjects([componentsLocale, filterexpressionsLocale], 'fr-CA', resources, dateLocale);
//# sourceMappingURL=fr-CA.js.map