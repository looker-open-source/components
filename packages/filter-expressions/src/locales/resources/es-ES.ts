
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "describe_date": {
    " complete": " completa",
    "absolute prefix dateTime": "{{prefix}} {{dateTime}}",
    "ago": "atrás",
    "from now": "a partir de ahora",
    "is any time": "es cualquier momento",
    "is before": "antes de esta fecha y hora",
    "is day": "es {{day}}",
    "is from dateTimeStart until dateTimeEnd": "es desde el {{dateTimeStart}} hasta el {{dateTimeEnd}}",
    "is in month year": "es en {{month}} de {{year}}",
    "is in the last": "es en el/la último/a {{describeInterval}}",
    "is in the year year": "es en el año {{year}}",
    "is interval ago": "hace {{interval}}",
    "is intervalStart intervalType for intervalEnd": "es {{intervalStart}} {{intervalType}} para {{intervalEnd}}",
    "is not null": "no es nulo",
    "is on dateTime": "es el {{dateTime}}",
    "is on or after": "es el o posterior al",
    "is previous unitLabel": "es el/la {{unitLabel}} anterior",
    "is type unitLabel": "es {{unitLabel}} {{type}}",
    "next": "siguiente",
    "prefix interval timePassed": "{{prefix}} {{interval}} {{timePassed}}",
    "prefix now": "{{prefix}} ahora",
    "this": "esto",
    "this startInterval to endInterval": "desde {{startInterval}} hasta {{endInterval}}",
    "value complete unitLabel": "{{value}}{{complete}} {{unitLabel}}"
  },
  "describe_is_any_value": {
    "any value": "cualquier valor"
  },
  "describe_is_item": {
    "is not value": "no es {{value}}",
    "is value": "es {{value}}"
  },
  "describe_location": {
    "coords1 to coords2": "De {{coords1}} a {{coords2}}",
    "distance unit from lat, lon": "{{distance}} {{unit}} desde {{lat}}, {{lon}}",
    "is anywhere": "está en cualquier lugar",
    "is not null": "no es nulo",
    "is null": "es nulo",
    "lat degrees north": "{{lat}}° N",
    "lat degrees south": "{{lat}}° S",
    "lon degrees east": "{{lon}}° E",
    "lon degrees west": "{{lon}}° O"
  },
  "describe_number": {
    "is in range range": "está dentro del rango {{range}}",
    "is not in range range": "no está dentro del rango {{range}}"
  },
  "describe_string": {
    "blank": "en blanco",
    "contains value": "contiene {{value}}",
    "does not contain value": "no contiene {{value}}",
    "does not end with value": "no termina con {{value}}",
    "does not start with value": "no comienza con {{value}}",
    "ends with value": "termina con {{value}}",
    "starts with value": "comienza con {{value}}"
  },
  "get_distance_unit_labels": {
    "feet": "pies",
    "kilometers": "kilómetros",
    "meters": "metros",
    "miles": "millas"
  },
  "get_months": {
    "April": "Abril",
    "August": "Agosto",
    "December": "Diciembre",
    "February": "Febrero",
    "January": "Enero",
    "July": "Julio",
    "June": "Junio",
    "March": "Marzo",
    "May": "Mayo",
    "November": "Noviembre",
    "October": "Octubre",
    "September": "Septiembre"
  },
  "get_unit_label": {
    "complete day": "día completo",
    "complete days": "días completos",
    "complete fiscal quarter": "trimestre fiscal completo",
    "complete fiscal quarters": "trimestres fiscales completos",
    "complete fiscal year": "año fiscal completo",
    "complete fiscal years": "años fiscales completos",
    "complete hour": "hora completa",
    "complete hours": "horas completas",
    "complete minute": "minuto completo",
    "complete minutes": "minutos completos",
    "complete month": "mes completo",
    "complete months": "meses completos",
    "complete quarter": "trimestre completo",
    "complete quarters": "trimestres completos",
    "complete second": "segundo completo",
    "complete seconds": "segundos completos",
    "complete week": "semana completa",
    "complete weeks": "semanas completas",
    "complete year": "año completo",
    "complete years": "años completos",
    "day": "día",
    "days": "días",
    "fiscal quarter": "trimestre fiscal",
    "fiscal quarters": "trimestres fiscales",
    "fiscal year": "año fiscal",
    "fiscal years": "años fiscales",
    "hour": "hora",
    "hours": "horas",
    "minute": "minuto",
    "minutes": "minutos",
    "month": "mes",
    "months": "meses",
    "quarter": "trimestre",
    "quarters": "trimestres",
    "second": "segundo",
    "seconds": "segundos",
    "week": "semana",
    "weeks": "semanas",
    "year": "año",
    "years": "años"
  },
  "join_or": {
    "a or b": "{{a}} o {{b}}"
  },
  "summary": {
    "Value required": "Valor obligatorio"
  }
}

    export const esES = mergeLocaleObjects(
      [
        
      ],
      'es-ES',
      resources,
      
    )