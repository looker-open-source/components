
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "describe_date": {
    " complete": " completato",
    "absolute prefix dateTime": "{{prefix}} {{dateTime}}",
    "ago": "fa",
    "from now": "da adesso",
    "is any time": "è in qualsiasi momento",
    "is before": "è precedente a",
    "is day": "è {{day}}",
    "is from dateTimeStart until dateTimeEnd": "è dal giorno {{dateTimeStart}} fino al giorno {{dateTimeEnd}}",
    "is in month year": "è in {{month}} {{year}}",
    "is in the last": "è nell'ultimo {{describeInterval}}",
    "is in the year year": "è nell'anno {{year}}",
    "is interval ago": "è {{interval}} fa",
    "is intervalStart intervalType for intervalEnd": "è {{intervalStart}} {{intervalType}} per {{intervalEnd}}",
    "is not null": "non è null",
    "is on dateTime": "è il giorno {{dateTime}}",
    "is on or after": "è in questa data o dopo",
    "is previous unitLabel": "è {{unitLabel}} precedente",
    "is type unitLabel": "è {{type}} {{unitLabel}}",
    "next": "successivo",
    "prefix interval timePassed": "{{prefix}} {{interval}} {{timePassed}}",
    "prefix now": "{{prefix}} adesso",
    "this": "questo",
    "this startInterval to endInterval": "da {{startInterval}} a {{endInterval}}",
    "value complete unitLabel": "{{value}}{{complete}} {{unitLabel}}"
  },
  "describe_is_any_value": {
    "any value": "qualsiasi valore"
  },
  "describe_is_item": {
    "is not value": "non è {{value}}",
    "is value": "è {{value}}"
  },
  "describe_location": {
    "coords1 to coords2": "Da {{coords1}} a {{coords2}}",
    "distance unit from lat, lon": "{{distance}} {{unit}} da {{lat}}, {{lon}}",
    "is anywhere": "è ovunque",
    "is not null": "non è null",
    "is null": "è null",
    "lat degrees north": "{{lat}}°N",
    "lat degrees south": "{{lat}}°S",
    "lon degrees east": "{{lon}}°E",
    "lon degrees west": "{{lon}}°W"
  },
  "describe_number": {
    "is in range range": "è compreso nell'intervallo {{range}}",
    "is not in range range": "non è compreso nell'intervallo {{range}}"
  },
  "describe_string": {
    "blank": "vuoto",
    "contains value": "contiene {{value}}",
    "does not contain value": "non contiene {{value}}",
    "does not end with value": "non termina con {{value}}",
    "does not start with value": "non inizia con {{value}}",
    "ends with value": "termina con {{value}}",
    "starts with value": "inizia con {{value}}"
  },
  "get_distance_unit_labels": {
    "feet": "piedi",
    "kilometers": "chilometri",
    "meters": "metri",
    "miles": "miglia"
  },
  "get_months": {
    "April": "aprile",
    "August": "agosto",
    "December": "dicembre",
    "February": "febbraio",
    "January": "gennaio",
    "July": "luglio",
    "June": "giugno",
    "March": "marzo",
    "May": "mag",
    "November": "novembre",
    "October": "ottobre",
    "September": "settembre"
  },
  "get_unit_label": {
    "complete day": "giorno intero",
    "complete days": "giorni completi",
    "complete fiscal quarter": "trimestre fiscale completo",
    "complete fiscal quarters": "trimestri fiscali completi",
    "complete fiscal year": "anno fiscale completo",
    "complete fiscal years": "anni fiscali completi",
    "complete hour": "ora completa",
    "complete hours": "ore complete",
    "complete minute": "minuto completo",
    "complete minutes": "minuti completi",
    "complete month": "mese completo",
    "complete months": "mesi completi",
    "complete quarter": "trimestre completo",
    "complete quarters": "trimestri completi",
    "complete second": "secondo completo",
    "complete seconds": "secondi completi",
    "complete week": "settimana completa",
    "complete weeks": "settimane complete",
    "complete year": "anno completo",
    "complete years": "anni completi",
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
  "join_or": {
    "a or b": "{{a}} o {{b}}"
  },
  "summary": {
    "Value required": "Valore obbligatorio"
  }
}

    export const itIT = mergeLocaleObjects(
      [
        
      ],
      'it-IT',
      resources,
      
    )