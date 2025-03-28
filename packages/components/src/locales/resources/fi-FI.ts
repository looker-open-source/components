import dateLocale from 'date-fns/locale/fi'
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AdvancedInputControls": {
    "Clear Field": "Tyhjennä kenttä"
  },
  "AvatarButton": {
    "Profile Picture": "Profiilikuva"
  },
  "AvatarUser": {
    "Avatar": "Avatar"
  },
  "BulkActions": {
    "AllPageCountDisplayedSelected": "Kaikki {{pageCount}} näytettyä kohdetta valittu",
    "AllTotalCountSelected": "Kaikki {{totalCount}} kohdetta valittu",
    "Bulk Actions": "Joukkotoiminnot",
    "Clear Selection": "Tyhjennä valinta",
    "SelectAllCountResults": "Valitse kaikki {{totalCount}} tulosta",
    "SelectedCountOfTotalDisplayed": "{{selectedItemCount}}/{{pageCount}} näytettyä kohdetta valittu"
  },
  "CalendarNav": {
    "next month": "seuraava kuukausi",
    "previous month": "edellinen kuukausi"
  },
  "CheckMarkMixed": {
    "Check Mark Mixed": "Valintamerkki sekoitettu"
  },
  "Chip": {
    "Delete": "Poista"
  },
  "ColumnSelector": {
    "Apply": "Käytä",
    "Cancel": "Peruuta",
    "Select All": "Valitse kaikki",
    "Select None": "Älä valitse mitään",
    "Select columns to display": "Valitse näytettävät sarakkeet"
  },
  "ConfirmationDialog": {
    "Cancel": "Peruuta",
    "Confirm": "Vahvista"
  },
  "CopyToClipboard": {
    "Copied": "Kopioitu",
    "Copy to Clipboard": "Kopioi leikepöydälle"
  },
  "DataTable": {
    "No Results": "Ei tuloksia"
  },
  "DataTableItem": {
    "Options": "Asetukset"
  },
  "FieldTimeSelect": {
    "Please use format HHMM": "Käytä muotoa HH:MM"
  },
  "GetIntentLabel": {
    "Error": "Virhe",
    "Inform": "Tiedota",
    "Success": "Onnistui",
    "Warning": "Varoitus"
  },
  "InputDate": {
    "Open calendar": "Avaa kalenteri"
  },
  "InputDateRange": {
    "End date": "Päättymispäivämäärä",
    "Start date": "Aloituspäivämäärä"
  },
  "InputFilters": {
    "Clear Filters": "Tyhjennä suodattimet",
    "Filter List": "Suodatinluettelo",
    "bottom-start": "aloitus pohjalta"
  },
  "InputTimeSelect": {
    "Select time": "Valitse aika"
  },
  "MessageBar": {
    "DismissIntent": "Ohita {{intent}}"
  },
  "ModalHeaderCloseButton": {
    "Close": "Sulje"
  },
  "MonthPickerNav": {
    "close": "sulje",
    "next year": "seuraava vuosi",
    "previous year": "edellinen vuosi"
  },
  "PageSize": {
    "Display": "Näytä",
    "of": "/"
  },
  "Pagination": {
    "First page of results": "Ensimmäinen tulossivu",
    "Last page of results": "Viimeinen tulossivu",
    "Next page of results": "Seuraava tulossivu",
    "Previous page of results": "Edellinen tulossivu",
    "of": "/"
  },
  "PanelHeader": {
    "CloseTitle": "Sulje {{title}}"
  },
  "PopoverFooter": {
    "Done": "Valmis"
  },
  "PromptDialog": {
    "Cancel": "Peruuta",
    "Save": "Tallenna"
  },
  "RangeSlider": {
    "Maximum Name": "Enintään {{name}}",
    "Maximum Value": "Enimmäisarvo",
    "Minimum Name": "Vähintään {{name}}",
    "Minimum Value": "Vähimmäisarvo"
  },
  "RequiredStar": {
    "required": "tarvitaan"
  },
  "SelectOptions": {
    "Loading": "Ladataan",
    "No options": "Ei asetuksia"
  },
  "TabList": {
    "Tabs": "Välilehdet"
  }
}

    export const fiFI = mergeLocaleObjects(
      [
        
      ],
      'fi-FI',
      resources,
      dateLocale,
    )