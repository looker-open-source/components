
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "describe_date": {
    " complete": " abgeschlossen",
    "absolute prefix dateTime": "{{prefix}} {{dateTime}}",
    "ago": "vor",
    "from now": "ab jetzt",
    "is any time": "ist jederzeit",
    "is before": "ist vor",
    "is day": "ist {{day}}",
    "is from dateTimeStart until dateTimeEnd": "ist von {{dateTimeStart}} bis {{dateTimeEnd}}",
    "is in month year": "ist im {{month}} {{year}}",
    "is in the last": "ist im letzten {{describeInterval}}",
    "is in the year year": "ist im Jahr {{year}}",
    "is interval ago": "ist vor {{interval}}",
    "is intervalStart intervalType for intervalEnd": "ist {{intervalStart}} {{intervalType}} bis {{intervalEnd}}",
    "is not null": "ist nicht null",
    "is on dateTime": "ist am {{dateTime}}",
    "is on or after": "ist am oder nach",
    "is previous unitLabel": "ist vorherige(s/r) {{unitLabel}}",
    "is type unitLabel": "ist {{type}} {{unitLabel}}",
    "next": "nächste(s/r)",
    "prefix interval timePassed": "{{prefix}} {{interval}} {{timePassed}}",
    "prefix now": "{{prefix}} jetzt",
    "this": "diese/dieses/dieser",
    "this startInterval to endInterval": "{{startInterval}} bis {{endInterval}}",
    "value complete unitLabel": "{{value}}{{complete}} {{unitLabel}}"
  },
  "describe_is_any_value": {
    "any value": "beliebiger Wert"
  },
  "describe_is_item": {
    "is not value": "ist nicht {{value}}",
    "is value": "ist {{value}}"
  },
  "describe_location": {
    "coords1 to coords2": "{{coords1}} bis {{coords2}}",
    "distance unit from lat, lon": "{{distance}} {{unit}} von {{lat}}, {{lon}}",
    "is anywhere": "ist überall",
    "is not null": "ist nicht null",
    "is null": "ist null",
    "lat degrees north": "{{lat}}°N",
    "lat degrees south": "{{lat}}°S",
    "lon degrees east": "{{lon}}°O",
    "lon degrees west": "{{lon}}°W"
  },
  "describe_number": {
    "is in range range": "ist im Bereich {{range}}",
    "is not in range range": "ist nicht im Bereich {{range}}"
  },
  "describe_string": {
    "blank": "leer",
    "contains value": "enthält {{value}}",
    "does not contain value": "enthält nicht {{value}}",
    "does not end with value": "endet nicht mit {{value}}",
    "does not start with value": "beginnt nicht mit {{value}}",
    "ends with value": "endet mit {{value}}",
    "starts with value": "beginnt mit {{value}}"
  },
  "get_distance_unit_labels": {
    "feet": "Fuß",
    "kilometers": "Kilometer",
    "meters": "Meter",
    "miles": "Meilen"
  },
  "get_months": {
    "April": "April",
    "August": "August",
    "December": "Dezember",
    "February": "Februar",
    "January": "Januar",
    "July": "Juli",
    "June": "Juni",
    "March": "März",
    "May": "Mai",
    "November": "November",
    "October": "Oktober",
    "September": "September"
  },
  "get_unit_label": {
    "complete day": "ganzer Tag",
    "complete days": "ganze Tage",
    "complete fiscal quarter": "ganzes Geschäftsquartal",
    "complete fiscal quarters": "ganze Geschäftsquartale",
    "complete fiscal year": "ganzes Geschäftsjahr",
    "complete fiscal years": "ganze Geschäftsjahre",
    "complete hour": "ganze Stunde",
    "complete hours": "ganze Stunden",
    "complete minute": "ganze Minute",
    "complete minutes": "ganze Minuten",
    "complete month": "ganzer Monat",
    "complete months": "ganze Monate",
    "complete quarter": "ganzes Quartal",
    "complete quarters": "ganze Quartale",
    "complete second": "ganze Sekunde",
    "complete seconds": "ganze Sekunden",
    "complete week": "ganze Woche",
    "complete weeks": "ganze Wochen",
    "complete year": "ganzes Jahr",
    "complete years": "ganze Jahre",
    "day": "Tag",
    "days": "Tage",
    "fiscal quarter": "Geschäftsquartal",
    "fiscal quarters": "Geschäftsquartale",
    "fiscal year": "Geschäftsjahr",
    "fiscal years": "Geschäftsjahre",
    "hour": "Stunde",
    "hours": "Stunden",
    "minute": "Minute",
    "minutes": "Minuten",
    "month": "Monat",
    "months": "Monate",
    "quarter": "Quartal",
    "quarters": "Quartale",
    "second": "Sekunde",
    "seconds": "Sekunden",
    "week": "Woche",
    "weeks": "Wochen",
    "year": "Jahr",
    "years": "Jahre"
  },
  "join_or": {
    "a or b": "{{a}} oder {{b}}"
  },
  "summary": {
    "Value required": "Wert erforderlich"
  }
}

    export const deDE = mergeLocaleObjects(
      [
        
      ],
      'de-DE',
      resources,
      
    )