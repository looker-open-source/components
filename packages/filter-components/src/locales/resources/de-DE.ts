import dateLocale from 'date-fns/locale/de'
    import {deDE as componentsLocale} from '@looker/components'
import {deDE as filterexpressionsLocale} from '@looker/filter-expressions'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AddRemoveButtons": {
    "Add": "Hinzufügen",
    "Remove": "Entfernen"
  },
  "before_after_units": {
    "days ago": "Tage zuvor",
    "days from now": "Tage ab jetzt",
    "fiscal quarter from now": "Geschäftsquartal ab jetzt",
    "fiscal quarters ago": "Geschäftsquartale zuvor",
    "fiscal years ago": "Geschäftsjahre zuvor",
    "fiscal years from now": "Geschäftsjahre ab jetzt",
    "hours ago": "Stunden zuvor",
    "hours from now": "Stunden ab jetzt",
    "minutes ago": "Minuten zuvor",
    "minutes from now": "Minuten ab jetzt",
    "months ago": "Monate zuvor",
    "months from now": "Monate ab jetzt",
    "now": "jetzt",
    "quarters ago": "Quartale zuvor",
    "quarters from now": "Quartale ab jetzt",
    "seconds ago": "Sekunden zuvor",
    "seconds from now": "Sekunden ab jetzt",
    "weeks ago": "Wochen zuvor",
    "weeks from now": "Wochen ab jetzt",
    "years ago": "Jahre zuvor",
    "years from now": "Jahre ab jetzt"
  },
  "BeforeAfter": {
    "absolute": "(absolut)",
    "relative": "(relativ)"
  },
  "Between": {
    "AND": "UND"
  },
  "date_units": {
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
  "DateRange": {
    "until (before)": "bis (vor)"
  },
  "get_date_filter_options": {
    "is": "ist",
    "is any time": "ist jederzeit",
    "is before": "ist vor",
    "is in range": "ist im Bereich",
    "is in the last": "ist in der/im letzten",
    "is in the month": "ist im Monat",
    "is in the year": "ist im Jahr",
    "is next": "ist nächste(s/n)",
    "is not null": "ist nicht null",
    "is null": "ist null",
    "is on or after": "ist am oder nach",
    "is on the day": "ist am Tag",
    "is previous": "ist vorherige(s/n)",
    "is this": "ist diese(s/n)"
  },
  "get_filter_options": {
    "matches advanced": "stimmt überein (erweitert)"
  },
  "get_location_filter_options": {
    "Box": "Box",
    "Circle": "Kreis",
    "Location": "Standort",
    "feet": "Fuß",
    "is anywhere": "ist überall",
    "is not null": "ist nicht null",
    "is null": "ist null",
    "kilometers": "Kilometer",
    "meters": "Meter",
    "miles": "Meilen"
  },
  "get_number_filter_options": {
    "exclusive": "(ausschließlich)",
    "inclusive": "[einschließlich]",
    "is": "ist",
    "is between": "liegt zwischen",
    "is greater": "ist >",
    "is greater equal": "ist >=",
    "is less": "ist <",
    "is less equal": "ist <=",
    "is not": "ist nicht",
    "is not between": "liegt nicht zwischen",
    "is not null": "ist nicht null",
    "is null": "ist null",
    "left exclusive": "(links ausschließlich]",
    "right exclusive": "[rechts ausschließlich)"
  },
  "get_relative_timeframe_presets": {
    "Last 14 Days": "Letzte 14 Tage",
    "Last 180 Days": "Letzte 180 Tage",
    "Last 28 Days": "Letzte 28 Tage",
    "Last 30 Days": "Letzte 30 Tage",
    "Last 365 Days": "Letzte 365 Tage",
    "Last 7 Days": "Letzte 7 Tage",
    "Last 90 Days": "Letzte 90 Tage",
    "Previous Month": "Vorheriger Monat",
    "Previous Quarter": "Vorheriges Quartal",
    "Previous Week": "Vorherige Woche",
    "Previous Year": "Vorheriges Jahr",
    "This Month": "Dieser Monat",
    "This Quarter": "Dieses Quartal",
    "This Week": "Diese Woche",
    "This Year": "Dieses Jahr",
    "Today": "Heute",
    "Year To Date": "Seit Jahresbeginn",
    "Yesterday": "Gestern"
  },
  "get_string_filter_options": {
    "contains": "enthält",
    "doesnt contain": "enthält nicht",
    "doesnt end with": "endet nicht mit",
    "doesnt start with": "beginnt nicht mit",
    "ends with": "endet mit",
    "is": "ist",
    "is blank": "ist leer",
    "is not": "ist nicht",
    "is not blank": "ist nicht leer",
    "is not null": "ist nicht null",
    "is null": "ist null",
    "starts with": "beginnt mit"
  },
  "get_tier_filter_options": {
    "is": "ist",
    "is any value": "ist beliebiger Wert",
    "is not": "ist nicht"
  },
  "get_user_attribute_option": {
    "matches a user attribute": "stimmt mit einem Nutzerattribut überein"
  },
  "NoMatchingFields": {
    "No Matching Fields": "Keine übereinstimmenden Felder",
    "Try Something Else": "Versuchen Sie es mit einem anderen Suchbegriff oder beginnen Sie von vorn und maximieren Sie jeden Explore, um in verfügbaren Feldern zu suchen."
  },
  "NumberFilter": {
    "any value": "beliebiger Wert"
  },
  "OperatorLabel": {
    "AND": "UND",
    "OR": "ODER"
  },
  "past_units": {
    "complete days": "ganze Tage",
    "complete fiscal quarters": "ganze Geschäftsquartale",
    "complete fiscal years": "ganze Geschäftsjahre",
    "complete hours": "ganze Stunden",
    "complete minutes": "ganze Minuten",
    "complete months": "ganze Monate",
    "complete quarters": "ganze Quartale",
    "complete seconds": "ganze Sekunden",
    "complete weeks": "ganze Wochen",
    "complete years": "ganze Jahre"
  },
  "RadioGroup": {
    "any value": "beliebiger Wert"
  },
  "ReactSelectCustomIcons": {
    "Clear all": "Alle löschen",
    "Remove": "Entfernen",
    "Toggle": "Ein-/Ausschalten"
  },
  "Relative": {
    "ago": "vor",
    "from now": "ab jetzt"
  },
  "RelativeTimeframe": {
    "Choose a Timeframe": "Zeitraum auswählen"
  },
  "RelativeTimeframePopoverContent": {
    "Custom": "Benutzerdefiniert",
    "Presets": "Voreinstellungen"
  },
  "RelativeTimeframePresets": {
    "More": "Mehr"
  },
  "use_filters_errors": {
    "Invalid value": "Ungültiger Wert",
    "No value is set for your user attribute": "Für Ihr Nutzerattribut ist kein Wert festgelegt",
    "Selection required": "Auswahl erforderlich"
  },
  "use_option_filtering": {
    "No values": "Keine Werte",
    "No values match": "Keine übereinstimmenden Werte"
  },
  "use_placeholder": {
    "any value": "beliebiger Wert"
  },
  "use_suggestable": {
    "Error loading suggestions": "Fehler beim Laden von Vorschlägen"
  },
  "use_validation_message": {
    "Value required": "Wert erforderlich"
  },
  "UserAttributes": {
    "placeholder": "Auswählen…"
  }
}

    export const deDE = mergeLocaleObjects(
      [
        componentsLocale,
filterexpressionsLocale,
      ],
      'de-DE',
      resources,
      dateLocale,
    )