import dateLocale from 'date-fns/locale/sv'
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AdvancedInputControls": {
    "Clear Field": "Rensa fält"
  },
  "AvatarButton": {
    "Profile Picture": "Profilbild"
  },
  "AvatarUser": {
    "Avatar": "Avatar"
  },
  "BulkActions": {
    "AllPageCountDisplayedSelected": "Alla {{pageCount}} objekt som visas har valts",
    "AllTotalCountSelected": "Alla {{totalCount}} objekt har valts",
    "Bulk Actions": "Massåtgärder",
    "Clear Selection": "Rensa markering",
    "SelectAllCountResults": "Visa alla {{totalCount}} resultat",
    "SelectedCountOfTotalDisplayed": "{{selectedItemCount}} av {{pageCount}} visade objekt har valts"
  },
  "CalendarNav": {
    "next month": "nästa månad",
    "previous month": "föregående månad"
  },
  "CheckMarkMixed": {
    "Check Mark Mixed": "Blandad bockmarkering"
  },
  "Chip": {
    "Delete": "Radera"
  },
  "ColumnSelector": {
    "Apply": "Tillämpa",
    "Cancel": "Avbryt",
    "Select All": "Markera allt",
    "Select None": "Markera inget",
    "Select columns to display": "Välj kolumner att visa"
  },
  "ConfirmationDialog": {
    "Cancel": "Avbryt",
    "Confirm": "Bekräfta"
  },
  "CopyToClipboard": {
    "Copied": "Kopierat",
    "Copy to Clipboard": "Kopiera till urklipp"
  },
  "DataTable": {
    "No Results": "Inga resultat"
  },
  "DataTableItem": {
    "Options": "Alternativ"
  },
  "FieldTimeSelect": {
    "Please use format HHMM": "Använd formatet HH:MM"
  },
  "GetIntentLabel": {
    "Error": "Fel",
    "Inform": "Information",
    "Success": "Klart",
    "Warning": "Varning"
  },
  "InputDate": {
    "Open calendar": "Öppna kalender"
  },
  "InputDateRange": {
    "End date": "Slutdatum",
    "Start date": "Startdatum"
  },
  "InputFilters": {
    "Clear Filters": "Rensa filter",
    "Filter List": "Filterlista",
    "bottom-start": "bottom-start"
  },
  "InputTimeSelect": {
    "Select time": "Välj tid"
  },
  "MessageBar": {
    "DismissIntent": "Avfärda {{intent}}"
  },
  "ModalHeaderCloseButton": {
    "Close": "Stäng"
  },
  "MonthPickerNav": {
    "close": "stäng",
    "next year": "nästa år",
    "previous year": "föregående år"
  },
  "PageSize": {
    "Display": "Visa",
    "of": "av"
  },
  "Pagination": {
    "First page of results": "Första sidan med resultat",
    "Last page of results": "Sista sidan med resultat",
    "Next page of results": "Nästa sida med resultat",
    "Previous page of results": "Föregående sida med resultat",
    "of": "av"
  },
  "PanelHeader": {
    "CloseTitle": "Stäng {{title}}"
  },
  "PopoverFooter": {
    "Done": "Klar"
  },
  "PromptDialog": {
    "Cancel": "Avbryt",
    "Save": "Spara"
  },
  "RangeSlider": {
    "Maximum Name": "Max {{name}}",
    "Maximum Value": "Maxvärde",
    "Minimum Name": "Minimum {{name}}",
    "Minimum Value": "Minimivärde"
  },
  "RequiredStar": {
    "required": "krävs"
  },
  "SelectOptions": {
    "Loading": "Läser in",
    "No options": "Inga alternativ"
  },
  "TabList": {
    "Tabs": "Flikar"
  }
}

    export const svSE = mergeLocaleObjects(
      [
        
      ],
      'sv-SE',
      resources,
      dateLocale,
    )