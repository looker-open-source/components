import dateLocale from 'date-fns/locale/lt'
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AdvancedInputControls": {
    "Clear Field": "Išvalyti lauką"
  },
  "AvatarButton": {
    "Profile Picture": "Profilio paveikslėlis"
  },
  "AvatarUser": {
    "Avatar": "Pseudoportretas"
  },
  "BulkActions": {
    "AllPageCountDisplayedSelected": "Pasirinkti visi rodomi elementai: {{pageCount}}",
    "AllTotalCountSelected": "Pasirinkti visi elementai: {{totalCount}}",
    "Bulk Actions": "Masiniai veiksmai",
    "Clear Selection": "Išvalyti, kas pažymėta",
    "SelectAllCountResults": "Pasirinkti visus rezultatus: {{totalCount}}",
    "SelectedCountOfTotalDisplayed": "Pasirinkta rodomų elementų: {{selectedItemCount}} iš {{pageCount}}"
  },
  "CalendarNav": {
    "next month": "kitas mėnuo",
    "previous month": "ankstesnis mėnuo"
  },
  "CheckMarkMixed": {
    "Check Mark Mixed": "Varnelė maišyta"
  },
  "Chip": {
    "Delete": "Ištrinti"
  },
  "ColumnSelector": {
    "Apply": "Taikyti",
    "Cancel": "Atšaukti",
    "Select All": "Pasirinkti: viską",
    "Select None": "Pasirinkti: nieko",
    "Select columns to display": "Pasirinkti norimus rodyti stulpelius"
  },
  "ConfirmationDialog": {
    "Cancel": "Atšaukti",
    "Confirm": "Patvirtinti"
  },
  "CopyToClipboard": {
    "Copied": "Nukopijuota",
    "Copy to Clipboard": "Kopijuoti į iškarpinę"
  },
  "DataTable": {
    "No Results": "Rezultatų nėra"
  },
  "DataTableItem": {
    "Options": "Parinktys"
  },
  "FieldTimeSelect": {
    "Please use format HHMM": "Naudokite formatą HH:MM"
  },
  "GetIntentLabel": {
    "Error": "Klaida",
    "Inform": "Informuoti",
    "Success": "Pavyko",
    "Warning": "Įspėjimas"
  },
  "InputDate": {
    "Open calendar": "Atidaryti kalendorių"
  },
  "InputDateRange": {
    "End date": "Pabaigos data",
    "Start date": "Pradžios data"
  },
  "InputFilters": {
    "Clear Filters": "Išvalyti filtrus",
    "Filter List": "Filtrų sąrašas",
    "bottom-start": "iš apačios į viršų"
  },
  "InputTimeSelect": {
    "Select time": "Pasirinkti laiką"
  },
  "MessageBar": {
    "DismissIntent": "Atmesti {{intent}}"
  },
  "ModalHeaderCloseButton": {
    "Close": "Uždaryti"
  },
  "MonthPickerNav": {
    "close": "uždaryti",
    "next year": "kiti metai",
    "previous year": "ankstesni metai"
  },
  "PageSize": {
    "Display": "Rodyti",
    "of": "iš"
  },
  "Pagination": {
    "First page of results": "Pirmas rezultatų puslapis",
    "Last page of results": "Paskutinis rezultatų puslapis",
    "Next page of results": "Kitas rezultatų puslapis",
    "Previous page of results": "Ankstesnis rezultatų puslapis",
    "of": "iš"
  },
  "PanelHeader": {
    "CloseTitle": "Uždaryti {{title}}"
  },
  "PopoverFooter": {
    "Done": "Atlikta"
  },
  "PromptDialog": {
    "Cancel": "Atšaukti",
    "Save": "Išsaugoti"
  },
  "RangeSlider": {
    "Maximum Name": "Daugiausiai {{name}}",
    "Maximum Value": "Didžiausia vertė",
    "Minimum Name": "Mažiausiai {{name}}",
    "Minimum Value": "Mažiausia vertė"
  },
  "RequiredStar": {
    "required": "reikalinga"
  },
  "SelectOptions": {
    "Loading": "Įkeliama",
    "No options": "Parinkčių nėra"
  },
  "TabList": {
    "Tabs": "Skirtukai"
  }
}

    export const ltLT = mergeLocaleObjects(
      [
        
      ],
      'lt-LT',
      resources,
      dateLocale,
    )