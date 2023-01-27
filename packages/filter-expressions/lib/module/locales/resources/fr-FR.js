

import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  describe_date: {
    ' complete': ' terminé',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'auparavant',
    'from now': 'à partir de maintenant',
    'is any time': 'est à tout moment',
    'is before': 'est situé avant',
    'is day': 'est {{day}}',
    'is from dateTimeStart until dateTimeEnd': 'est de {{dateTimeStart}} à {{dateTimeEnd}}',
    'is in month year': 'est en {{month}} {{year}}',
    'is in the last': 'est dans le dernier {{describeInterval}}',
    'is in the year year': "est dans l'année {{year}}",
    'is interval ago': 'est il y a {{interval}}',
    'is intervalStart intervalType for intervalEnd': 'est {{intervalStart}} {{intervalType}} pour {{intervalEnd}}',
    'is not null': "n'est pas nul",
    'is on dateTime': 'est le {{dateTime}}',
    'is on or after': 'est situé le jour même ou après',
    'is previous unitLabel': 'est avant {{unitLabel}}',
    'is type unitLabel': 'est {{type}} {{unitLabel}}',
    next: 'suivant',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} maintenant',
    this: 'ce',
    'this startInterval to endInterval': 'ce {{startInterval}} à {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': "n'importe quelle valeur"
  },
  describe_is_item: {
    'is not value': "n'est pas {{value}}",
    'is value': 'est {{value}}'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} vers {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} de {{lat}}, {{lon}}',
    'is anywhere': "est n'importe où",
    'is not null': "n'est pas nul",
    'is null': 'est nul',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°O'
  },
  describe_number: {
    'is in range range': 'est à portée {{range}}',
    'is not in range range': "n'est pas à portée {{range}}"
  },
  describe_string: {
    blank: 'vide',
    'contains value': 'contient {{value}}',
    'does not contain value': 'ne contient pas {{value}}',
    'does not end with value': 'ne se termine pas par {{value}}',
    'does not start with value': 'ne commence pas par {{value}}',
    'ends with value': 'se termine par {{value}}',
    'starts with value': 'commence par {{value}}'
  },
  get_distance_unit_labels: {
    feet: 'pied',
    kilometers: 'kilomètres',
    meters: 'mètres',
    miles: 'miles'
  },
  get_months: {
    April: 'Avril',
    August: 'Août',
    December: 'Décembre',
    February: 'Février',
    January: 'Janvier',
    July: 'Juillet',
    June: 'Juin',
    March: 'Mars',
    May: 'Mai',
    November: 'Novembre',
    October: 'Octobre',
    September: 'Septembre'
  },
  get_unit_label: {
    'complete day': 'jour complet',
    'complete days': 'jours complets',
    'complete fiscal quarter': 'trimestre fiscal complet',
    'complete fiscal quarters': 'trimestres fiscaux complets',
    'complete fiscal year': 'année fiscale complète',
    'complete fiscal years': 'années fiscales complètes',
    'complete hour': 'heure complète',
    'complete hours': 'heures complètes',
    'complete minute': 'minute complète',
    'complete minutes': 'minutes complètes',
    'complete month': 'mois complet',
    'complete months': 'mois complets',
    'complete quarter': 'trimestre complet',
    'complete quarters': 'trimestres complets',
    'complete second': 'seconde complète',
    'complete seconds': 'secondes complètes',
    'complete week': 'semaine complète',
    'complete weeks': 'semaines complètes',
    'complete year': 'année complète',
    'complete years': 'années complètes',
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
  join_or: {
    'a or b': '{{a}} ou {{b}}'
  },
  summary: {
    'Value required': 'Valeur requise'
  }
};
export const frFR = mergeLocaleObjects([], 'fr-FR', resources);
//# sourceMappingURL=fr-FR.js.map