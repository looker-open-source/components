import dateLocale from 'date-fns/locale/it'
    import {itIT as componentsLocale} from '@looker/components'
import {itIT as filterexpressionsLocale} from '@looker/filter-expressions'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AddRemoveButtons": {
    "Add": "Aggiungi",
    "Remove": "Rimuovi"
  },
  "before_after_units": {
    "days ago": "giorni fa",
    "days from now": "giorni da adesso",
    "fiscal quarter from now": "trimestre fiscale da adesso",
    "fiscal quarters ago": "trimestri fiscali fa",
    "fiscal years ago": "anni fiscali fa",
    "fiscal years from now": "anni fiscali da adesso",
    "hours ago": "ore fa",
    "hours from now": "ore da adesso",
    "minutes ago": "minuti fa",
    "minutes from now": "minuti da adesso",
    "months ago": "mesi fa",
    "months from now": "mesi da adesso",
    "now": "adesso",
    "quarters ago": "trimestri fa",
    "quarters from now": "trimestri da adesso",
    "seconds ago": "secondi fa",
    "seconds from now": "secondi da adesso",
    "weeks ago": "settimane fa",
    "weeks from now": "settimane da adesso",
    "years ago": "anni fa",
    "years from now": "anni da adesso"
  },
  "BeforeAfter": {
    "absolute": "(assoluto)",
    "relative": "(relativo)"
  },
  "Between": {
    "AND": "AND"
  },
  "date_units": {
    "day": "giorno",
    "days": "giorni",
    "fiscal quarter": "trimestre fiscale",
    "fiscal quarters": "trimestri fiscali",
    "fiscal year": "anno fiscale",
    "fiscal years": "anni fiscali",
    "hour": "ora",
    "hours": "ore",
    "minute": "minuto",
    "minutes": "minuti",
    "month": "mese",
    "months": "mesi",
    "quarter": "trimestre",
    "quarters": "trimestri",
    "second": "secondo",
    "seconds": "secondi",
    "week": "settimana",
    "weeks": "settimane",
    "year": "anno",
    "years": "anni"
  },
  "DateRange": {
    "until (before)": "fino al giorno (prima)"
  },
  "get_date_filter_options": {
    "is": "è",
    "is any time": "è in qualsiasi momento",
    "is before": "è precedente a",
    "is in range": "è compreso nell'intervallo",
    "is in the last": "è nell'ultimo/negli ultimi",
    "is in the month": "è nel mese di",
    "is in the year": "è nell'anno",
    "is next": "è successivo",
    "is not null": "non è null",
    "is null": "è null",
    "is on or after": "è in questa data o dopo",
    "is on the day": "è il giorno",
    "is previous": "è precedente",
    "is this": "è questo"
  },
  "get_filter_options": {
    "matches advanced": "corrispondente (impostazione avanzata)"
  },
  "get_location_filter_options": {
    "Box": "Box",
    "Circle": "Cerchio",
    "Location": "Località",
    "feet": "piedi",
    "is anywhere": "è ovunque",
    "is not null": "non è null",
    "is null": "è null",
    "kilometers": "chilometri",
    "meters": "metri",
    "miles": "miglia"
  },
  "get_number_filter_options": {
    "exclusive": "(esclusivo)",
    "inclusive": "[inclusivo]",
    "is": "è",
    "is between": "è compreso tra",
    "is greater": "è >",
    "is greater equal": "è >=",
    "is less": "è <",
    "is less equal": "è <=",
    "is not": "non è",
    "is not between": "non è compreso tra",
    "is not null": "non è null",
    "is null": "è null",
    "left exclusive": "(esclusivo a sinistra]",
    "right exclusive": "[esclusivo a destra)"
  },
  "get_relative_timeframe_presets": {
    "Last 14 Days": "Ultimi 14 giorni",
    "Last 180 Days": "Ultimi 180 giorni",
    "Last 28 Days": "Ultimi 28 giorni",
    "Last 30 Days": "Ultimi 30 giorni",
    "Last 365 Days": "Ultimi 365 giorni",
    "Last 7 Days": "Ultimi 7 giorni",
    "Last 90 Days": "Ultimi 90 giorni",
    "Previous Month": "Mese precedente",
    "Previous Quarter": "Trimestre precedente",
    "Previous Week": "Settimana precedente",
    "Previous Year": "Anno precedente",
    "This Month": "Questo mese",
    "This Quarter": "Questo trimestre",
    "This Week": "Questa settimana",
    "This Year": "Quest'anno",
    "Today": "Oggi",
    "Year To Date": "Da inizio anno a oggi",
    "Yesterday": "Ieri"
  },
  "get_string_filter_options": {
    "contains": "contiene",
    "doesnt contain": "non contiene",
    "doesnt end with": "non termina con",
    "doesnt start with": "non inizia con",
    "ends with": "termina con",
    "is": "è",
    "is blank": "è vuoto",
    "is not": "non è",
    "is not blank": "non è vuoto",
    "is not null": "non è null",
    "is null": "è null",
    "starts with": "inizia con"
  },
  "get_tier_filter_options": {
    "is": "è",
    "is any value": "è qualsiasi valore",
    "is not": "non è"
  },
  "get_user_attribute_option": {
    "matches a user attribute": "corrisponde a un attributo utente"
  },
  "NoMatchingFields": {
    "No Matching Fields": "Nessun campo corrispondente",
    "Try Something Else": "Prova con un altro termine di ricerca o ricomincia da capo ed espandi le esplorazioni per sfogliare i campi disponibili."
  },
  "NumberFilter": {
    "any value": "qualsiasi valore"
  },
  "OperatorLabel": {
    "AND": "AND",
    "OR": "OR"
  },
  "past_units": {
    "complete days": "giorni completi",
    "complete fiscal quarters": "trimestri fiscali completi",
    "complete fiscal years": "anni fiscali completi",
    "complete hours": "ore complete",
    "complete minutes": "minuti completi",
    "complete months": "mesi completi",
    "complete quarters": "trimestri completi",
    "complete seconds": "secondi completi",
    "complete weeks": "settimane complete",
    "complete years": "anni completi"
  },
  "RadioGroup": {
    "any value": "qualsiasi valore"
  },
  "ReactSelectCustomIcons": {
    "Clear all": "Cancella tutto",
    "Remove": "Rimuovi",
    "Toggle": "Attiva/disattiva"
  },
  "Relative": {
    "ago": "fa",
    "from now": "da adesso"
  },
  "RelativeTimeframe": {
    "Choose a Timeframe": "Scegli un periodo di tempo"
  },
  "RelativeTimeframePopoverContent": {
    "Custom": "Personalizzato",
    "Presets": "Preset"
  },
  "RelativeTimeframePresets": {
    "More": "Altro"
  },
  "use_filters_errors": {
    "Invalid value": "Valore non valido",
    "No value is set for your user attribute": "Nessun valore impostato per il tuo attributo utente",
    "Selection required": "Selezione obbligatoria"
  },
  "use_option_filtering": {
    "No values": "Nessun valore",
    "No values match": "Nessun valore corrispondente"
  },
  "use_placeholder": {
    "any value": "qualsiasi valore"
  },
  "use_suggestable": {
    "Error loading suggestions": "Errore durante il caricamento dei suggerimenti"
  },
  "use_validation_message": {
    "Value required": "Valore obbligatorio"
  },
  "UserAttributes": {
    "placeholder": "Seleziona…"
  }
}

    export const itIT = mergeLocaleObjects(
      [
        componentsLocale,
filterexpressionsLocale,
      ],
      'it-IT',
      resources,
      dateLocale,
    )