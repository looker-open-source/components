import dateLocale from 'date-fns/locale/fr'
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AdvancedInputControls": {
    "Clear Field": "Effacer le contenu du champ"
  },
  "AvatarButton": {
    "Profile Picture": "Photo de profil"
  },
  "AvatarUser": {
    "Avatar": "Avatar"
  },
  "BulkActions": {
    "AllPageCountDisplayedSelected": "Tous les éléments affichés sélectionnés ({{pageCount}})",
    "AllTotalCountSelected": "Tous les éléments sélectionnés ({{totalCount}})",
    "Bulk Actions": "Actions groupées",
    "Clear Selection": "Annuler la sélection",
    "SelectAllCountResults": "Sélectionner tous les résultats ({{totalCount}})",
    "SelectedCountOfTotalDisplayed": "{{selectedItemCount}} éléments sélectionnés sur {{pageCount}} éléments affichés"
  },
  "CalendarNav": {
    "next month": "mois prochain",
    "previous month": "mois précédent"
  },
  "CheckMarkMixed": {
    "Check Mark Mixed": "Coche mixte"
  },
  "Chip": {
    "Delete": "Supprimer"
  },
  "ColumnSelector": {
    "Apply": "Appliquer",
    "Cancel": "Annuler",
    "Select All": "Tout sélectionner",
    "Select None": "Ne rien sélectionner",
    "Select columns to display": "Sélectionner les colonnes à afficher"
  },
  "ConfirmationDialog": {
    "Cancel": "Annuler",
    "Confirm": "Confirmer"
  },
  "CopyToClipboard": {
    "Copied": "Copié",
    "Copy to Clipboard": "Copier dans le presse-papiers"
  },
  "DataTable": {
    "No Results": "Aucun résultat"
  },
  "DataTableItem": {
    "Options": "Options"
  },
  "FieldTimeSelect": {
    "Please use format HHMM": "Veuillez utiliser le format HH:MM"
  },
  "GetIntentLabel": {
    "Error": "Erreur",
    "Inform": "Informer",
    "Success": "Réussite",
    "Warning": "Avertissement"
  },
  "InputDate": {
    "Open calendar": "Ouvrir l'agenda"
  },
  "InputDateRange": {
    "End date": "Date de fin",
    "Start date": "Date de début"
  },
  "InputFilters": {
    "Clear Filters": "Effacer les filtres",
    "Filter List": "Liste des filtres"
  },
  "InputTimeSelect": {
    "Select time": "Sélectionner une heure"
  },
  "MessageBar": {
    "DismissIntent": "Fermer {{intent}}"
  },
  "ModalHeaderCloseButton": {
    "Close": "Fermer"
  },
  "MonthPickerNav": {
    "close": "fermer",
    "next year": "année prochaine",
    "previous year": "année précédente"
  },
  "PageSize": {
    "Display": "Afficher",
    "of": "sur"
  },
  "Pagination": {
    "First page of results": "Première page de résultats",
    "Last page of results": "Dernière page de résultats",
    "Next page of results": "Page de résultats suivante",
    "Previous page of results": "Page de résultats précédente",
    "of": "sur"
  },
  "PanelHeader": {
    "CloseTitle": "Fermer {{title}}"
  },
  "PopoverFooter": {
    "Done": "OK"
  },
  "ProgressDuet": {
    "Processing request": "Traitement de la demande…"
  },
  "PromptDialog": {
    "Cancel": "Annuler",
    "Save": "Enregistrer"
  },
  "RangeSlider": {
    "Maximum Name": "Maximum {{name}}",
    "Maximum Value": "Valeur maximale",
    "Minimum Name": "Minimum {{name}}",
    "Minimum Value": "Valeur minimale"
  },
  "RequiredStar": {
    "required": "obligatoire"
  },
  "SelectOptions": {
    "Loading": "Chargement",
    "No options": "Aucune option"
  },
  "TabList": {
    "Tabs": "Onglets"
  }
}

    export const frFR = mergeLocaleObjects(
      [
        
      ],
      'fr-FR',
      resources,
      dateLocale,
    )