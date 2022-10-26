"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itIT = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _it = _interopRequireDefault(require("date-fns/locale/it"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: 'Aggiungi',
    Remove: 'Rimuovi'
  },
  before_after_units: {
    'days ago': 'giorni fa',
    'days from now': 'giorni da ora',
    'fiscal quarter from now': 'trimestre fiscale da ora',
    'fiscal quarters ago': 'trimestri fiscali fa',
    'fiscal years ago': 'anni fiscali fa',
    'fiscal years from now': 'anni fiscali da ora',
    'hours ago': 'ore fa',
    'hours from now': 'ore da ora',
    'minutes ago': 'minuti fa',
    'minutes from now': 'minuti da ora',
    'months ago': 'mesi fa',
    'months from now': 'mesi da ora',
    now: 'ora',
    'quarters ago': 'trimestri fa',
    'quarters from now': 'trimestri da ora',
    'seconds ago': 'secondi fa',
    'seconds from now': 'secondi da ora',
    'weeks ago': 'settimane fa',
    'weeks from now': 'settimane da ora',
    'years ago': 'anni fa',
    'years from now': 'anni da ora'
  },
  BeforeAfter: {
    absolute: '(assoluto)',
    relative: '(relativo)'
  },
  Between: {
    AND: 'E'
  },
  date_units: {
    day: 'giorno',
    days: 'giorni',
    'fiscal quarter': 'trimestre fiscale',
    'fiscal quarters': 'trimestri fiscali',
    'fiscal year': 'anno fiscale',
    'fiscal years': 'anni fiscali',
    hour: 'ora',
    hours: 'ore',
    minute: 'minuto',
    minutes: 'minuti',
    month: 'mese',
    months: 'mesi',
    quarter: 'trimestre',
    quarters: 'trimestri',
    second: 'secondo',
    seconds: 'secondi',
    week: 'settimana',
    weeks: 'settimane',
    year: 'anno',
    years: 'anni'
  },
  DateRange: {
    'until (before)': 'fino a (non compreso)'
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
    'is this': 'è questo'
  },
  get_filter_options: {
    'matches advanced': 'corrisponde a (avanzato)'
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
    miles: 'miglia'
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
    'right exclusive': '[escluso a destra]'
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
    Yesterday: 'Ieri'
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
    'starts with': 'inizia con'
  },
  get_tier_filter_options: {
    is: 'è',
    'is any value': 'è qualsiasi valore',
    'is not': 'non è'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'corrisponde a un attributo utente'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'qualsiasi valore'
  },
  OperatorLabel: {
    AND: 'E',
    OR: 'OPPURE'
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
    'complete years': 'anni completi'
  },
  RadioGroup: {
    'any value': 'qualsiasi valore'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Cancella tutto',
    Remove: 'Rimuovi',
    Toggle: 'Attiva/disattiva'
  },
  Relative: {
    ago: 'fa',
    'from now': 'da ora'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Scegli un valore temporale'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personalizzato',
    Presets: 'Preimpostazioni'
  },
  RelativeTimeframePresets: {
    More: 'Altro'
  },
  use_filters_errors: {
    'Invalid value': 'Valore non valido',
    'No value is set for your user attribute': 'Nessun valore è impostato per l’attributo utente',
    'Selection required': 'Selezione obbligatoria'
  },
  use_option_filtering: {
    'No values': 'Nessun valore',
    'No values match': 'Nessun valore corrispondente'
  },
  use_placeholder: {
    'any value': 'qualsiasi valore'
  },
  use_suggestable: {
    'Error loading suggestions': 'Errore in fase di caricamento dei suggerimenti'
  },
  use_validation_message: {
    'Value required': 'Valore obbligatorio'
  }
};
var itIT = {
  dateLocale: _it["default"],
  locale: 'it-IT',
  resources: {
    'it-IT': (0, _merge["default"])({}, resources, _filterExpressions.itIT.resources['it-IT'], _components.itIT.resources['it-IT'])
  }
};
exports.itIT = itIT;
//# sourceMappingURL=it-IT.js.map