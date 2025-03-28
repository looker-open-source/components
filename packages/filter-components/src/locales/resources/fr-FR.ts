import dateLocale from 'date-fns/locale/fr'
    import {frFR as componentsLocale} from '@looker/components'
import {frFR as filterexpressionsLocale} from '@looker/filter-expressions'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AddRemoveButtons": {
    "Add": "Ajouter",
    "Remove": "Supprimer"
  },
  "before_after_units": {
    "days ago": "jours auparavant",
    "days from now": "jours à compter de maintenant",
    "fiscal quarter from now": "trimestre fiscal à partir de maintenant",
    "fiscal quarters ago": "trimestres fiscaux auparavant",
    "fiscal years ago": "années fiscales auparavant",
    "fiscal years from now": "années fiscales à compter de maintenant",
    "hours ago": "heures auparavant",
    "hours from now": "heures à compter de maintenant",
    "minutes ago": "minutes auparavant",
    "minutes from now": "minutes à compter de maintenant",
    "months ago": "mois auparavant",
    "months from now": "mois à compter de maintenant",
    "now": "maintenant",
    "quarters ago": "trimestres auparavant",
    "quarters from now": "trimestres à compter de maintenant",
    "seconds ago": "secondes auparavant",
    "seconds from now": "secondes à compter de maintenant",
    "weeks ago": "semaines auparavant",
    "weeks from now": "semaines à compter de maintenant",
    "years ago": "années auparavant",
    "years from now": "années à compter de maintenant"
  },
  "BeforeAfter": {
    "absolute": "(absolu)",
    "relative": "(relatif)"
  },
  "Between": {
    "AND": "AND"
  },
  "date_units": {
    "day": "jour",
    "days": "jours",
    "fiscal quarter": "trimestre fiscal",
    "fiscal quarters": "trimestres fiscaux",
    "fiscal year": "année fiscale",
    "fiscal years": "années fiscales",
    "hour": "heure",
    "hours": "heures",
    "minute": "minute",
    "minutes": "minutes",
    "month": "mois",
    "months": "mois",
    "quarter": "trimestre",
    "quarters": "trimestres",
    "second": "seconde",
    "seconds": "secondes",
    "week": "semaine",
    "weeks": "semaines",
    "year": "an",
    "years": "années"
  },
  "DateRange": {
    "until (before)": "jusqu'au (avant)"
  },
  "get_date_filter_options": {
    "is": "est",
    "is any time": "a lieu à une date indifférente",
    "is before": "est antérieur à",
    "is in range": "est compris dans la plage",
    "is in the last": "est dans le dernier intervalle de",
    "is in the month": "est dans le mois",
    "is in the year": "a lieu dans l'année",
    "is next": "est dans le prochain intervalle de",
    "is not null": "n'est pas nul",
    "is null": "est nul",
    "is on or after": "date du ou est ultérieur à",
    "is on the day": "a lieu à cette date",
    "is previous": "est dans l'intervalle précédent de",
    "is this": "est dans cet intervalle de"
  },
  "get_filter_options": {
    "matches advanced": "correspond à (avancé)"
  },
  "get_location_filter_options": {
    "Box": "Box",
    "Circle": "Cercle",
    "Location": "Emplacement",
    "feet": "pieds",
    "is anywhere": "est n'importe où",
    "is not null": "n'est pas nul",
    "is null": "est nul",
    "kilometers": "kilomètres",
    "meters": "mètres",
    "miles": "miles"
  },
  "get_number_filter_options": {
    "exclusive": "]exclus[",
    "inclusive": "[inclus]",
    "is": "est",
    "is between": "est compris entre",
    "is greater": "est >",
    "is greater equal": "est >=",
    "is less": "est <",
    "is less equal": "est <=",
    "is not": "n'est pas",
    "is not between": "n'est pas compris entre",
    "is not null": "n'est pas nul",
    "is null": "est nul",
    "left exclusive": "]exclus à gauche]",
    "right exclusive": "[exclus à droite["
  },
  "get_relative_timeframe_presets": {
    "Last 14 Days": "14 derniers jours",
    "Last 180 Days": "180 derniers jours",
    "Last 28 Days": "28 derniers jours",
    "Last 30 Days": "30 derniers jours",
    "Last 365 Days": "365 derniers jours",
    "Last 7 Days": "7 derniers jours",
    "Last 90 Days": "90 derniers jours",
    "Previous Month": "Mois précédent",
    "Previous Quarter": "Trimestre précédent",
    "Previous Week": "Semaine précédente",
    "Previous Year": "Année précédente",
    "This Month": "Ce mois",
    "This Quarter": "Ce trimestre",
    "This Week": "Cette semaine",
    "This Year": "Cette année",
    "Today": "Aujourd'hui",
    "Year To Date": "Depuis le début de l'année",
    "Yesterday": "Hier"
  },
  "get_string_filter_options": {
    "contains": "contient",
    "doesnt contain": "ne contient pas",
    "doesnt end with": "ne se termine pas par",
    "doesnt start with": "ne commence pas par",
    "ends with": "se termine par",
    "is": "est",
    "is blank": "est vide",
    "is not": "n'est pas",
    "is not blank": "n'est pas vide",
    "is not null": "n'est pas nul",
    "is null": "est nul",
    "starts with": "commence par"
  },
  "get_tier_filter_options": {
    "is": "est",
    "is any value": "possède une valeur indifférente",
    "is not": "n'est pas"
  },
  "get_user_attribute_option": {
    "matches a user attribute": "correspond à un attribut utilisateur"
  },
  "NoMatchingFields": {
    "No Matching Fields": "Aucun champ correspondant",
    "Try Something Else": "Essayez un autre terme de recherche, ou recommencez et développez toutes les explorations pour consulter les champs disponibles."
  },
  "NumberFilter": {
    "any value": "toute valeur"
  },
  "OperatorLabel": {
    "AND": "AND",
    "OR": "OR"
  },
  "past_units": {
    "complete days": "jours complets",
    "complete fiscal quarters": "trimestres fiscaux complets",
    "complete fiscal years": "années fiscales complètes",
    "complete hours": "heures complètes",
    "complete minutes": "minutes complètes",
    "complete months": "mois complets",
    "complete quarters": "trimestres complets",
    "complete seconds": "secondes complètes",
    "complete weeks": "semaines complètes",
    "complete years": "années complètes"
  },
  "RadioGroup": {
    "any value": "toute valeur"
  },
  "ReactSelectCustomIcons": {
    "Clear all": "Tout effacer",
    "Remove": "Supprimer",
    "Toggle": "Activer/Désactiver"
  },
  "Relative": {
    "ago": "auparavant",
    "from now": "à partir de maintenant"
  },
  "RelativeTimeframe": {
    "Choose a Timeframe": "Choisir une période"
  },
  "RelativeTimeframePopoverContent": {
    "Custom": "Personnalisé",
    "Presets": "Préréglages"
  },
  "RelativeTimeframePresets": {
    "More": "Plus"
  },
  "use_filters_errors": {
    "Invalid value": "Valeur incorrecte",
    "No value is set for your user attribute": "Aucune valeur n'est définie pour l'attribut utilisateur",
    "Selection required": "Veuillez sélectionner une option"
  },
  "use_option_filtering": {
    "No values": "Aucune valeur",
    "No values match": "Aucune valeur ne correspond"
  },
  "use_placeholder": {
    "any value": "toute valeur"
  },
  "use_suggestable": {
    "Error loading suggestions": "Erreur lors du chargement des suggestions"
  },
  "use_validation_message": {
    "Value required": "Veuillez saisir une valeur"
  },
  "UserAttributes": {
    "placeholder": "Sélectionnez…"
  }
}

    export const frFR = mergeLocaleObjects(
      [
        componentsLocale,
filterexpressionsLocale,
      ],
      'fr-FR',
      resources,
      dateLocale,
    )